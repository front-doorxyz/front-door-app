import { CandidateItem } from '@/db/entities/candidate';
import useCandidate from '@/hooks/useCandidate';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const CandidateRegister = () => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { isValidating, isRegistered } = useCandidate(address);

  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');
  const [site, setSite] = useState('');

  const registerCandidate = async () => {
    if (isRegistered) {
      toast.success('Already Registered!');
      router.push('/');
      return;
    }

    const candidateData = { walletAddress: address, name, email, site };
    await registerCandidateDB(candidateData);
  };

  const registerCandidateDB = async (candidateData: CandidateItem) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidateData),
    };

    try {
      const response = await fetch('api/candidates', options);
      if (response.ok) {
        const responseData = (await response.json()) as { item: CandidateItem };
        console.log(responseData);
        if (responseData.item.name) {
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

  const handleSiteChange = (event: any) => {
    setSite(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
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
        <div className='flex flex-col gap-2'>
          <Badge className='w-[30%] bg-[#3F3F5F]'>Site/Portfolio</Badge>
          <input
            type='text'
            value={site}
            onChange={handleSiteChange}
            className='h-[50px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>

        <Button
          type='button'
          className='btn btn-primary w-[70%]'
          onClick={registerCandidate}
          disabled={isValidating}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default CandidateRegister;
