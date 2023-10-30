import { CreateReferrerItem } from '@/db/entities/referrer';
import useReferrer from '@/hooks/useReferrer';
import { isSuccessResponse } from '@/pages/api/referrers';
import { useRecruitmentRegisterReferrer } from '@/src/generated';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { keccak256, toBytes } from 'viem';
import { useAccount } from 'wagmi';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ReferrerRegister = () => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { isValidating, isRegistered } = useReferrer(address);
  const { isLoading, isSuccess, writeAsync } = useRecruitmentRegisterReferrer();

  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');

  const registerReferrerSc = async () => {
    if (isRegistered) {
      toast.success('Already Registered!');
      router.push('/');
      return;
    }
    try {
      if (email) {
        const hashEmail = keccak256(toBytes(email));
        await writeAsync({
          args: [hashEmail],
        });
      } else {
        toast.error('No email supplied');
        return;
      }
    } catch (e) {
      toast.error('Referrer Registration failed');
    }
  };

  const registerCompanyDb = async () => {
    const referrerData: CreateReferrerItem = {
      walletAddress: address,
      name,
      email,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(referrerData),
    };

    try {
      const response = await fetch('api/referrers', options);
      if (response.ok) {
        const responseData = await response.json();

        if (isSuccessResponse(responseData)) {
          toast.success(`${responseData.item.name} Registered Successfully`);
          router.push('/');
        }
      } else {
        toast.error(`Registration Unsuccessful. Please contact support.`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Registration Unsuccessful. Please contact support.`);
    }
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (isSuccess) {
      registerCompanyDb();
    }
  }, [isSuccess]);

  return (
    <>
      <div
        id='form'
        className='mt-[2%] flex h-[50vh]  w-[300px] flex-col  items-center justify-center gap-4 bg-blue-50 p-2 shadow-2xl md:w-[30vw]'
      >
        <div className='flex flex-col gap-2'>
          <Badge className='w-[30%] bg-[#3F3F5F]'>Name</Badge>

          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            className='h-[50px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Badge className='w-[30%] bg-[#3F3F5F]'>Email</Badge>
          <input
            type='text'
            value={email}
            onChange={handleEmailChange}
            className='h-[50px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>

        <Button
          type='button'
          className='btn btn-primary w-[70%]'
          onClick={registerReferrerSc}
          disabled={isLoading || isValidating}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default ReferrerRegister;
