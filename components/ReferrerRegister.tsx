import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAccount, useContractWrite } from 'wagmi';
import * as eth from '@polybase/eth';
import usePolybase from '../hooks/usePolybase';
import { recruitmentABI, recruitmentAddress } from '../src/generated';
import { toast } from 'react-toastify';
import { toBytes, keccak256 } from 'viem';
import { Badge } from './ui/badge';

const ReferrerRegister = () => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { registerReferrer } = usePolybase(async (data: string) => {
    const sig = await eth.sign(data, address);
    return { h: 'eth-personal-sign', sig };
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');
  const [hashEmail, setHashEmail] = useState<`0x${string}`>('0x');

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setHashEmail(keccak256(toBytes(event.target.value)));
    setEmail(event.target.value);
  };

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerReferrer',
  });

  const registerReferrerSc = async () => {
    try {
      const referrerData = [address, name, email];
      if (hashEmail) {
        await writeAsync({
          args: [hashEmail],
        });
      } else {
        toast.error('No email supplied');
        return;
      }
      if (!isSuccess) {
        toast.error('Referrer already registered');
      } else {
        const referrer = await registerReferrer(referrerData);
        if (isSuccess && referrer.id) {
          toast.success(`${name} registered as Referrer!`);
          router.push('/');
        }
      }
    } catch (e) {
      toast.error('Referrer Registration failed');
    }
  };

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

        <button
          type='button'
          className='btn btn-primary w-[70%]'
          onClick={registerReferrerSc}
          disabled={isLoading}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default ReferrerRegister;
