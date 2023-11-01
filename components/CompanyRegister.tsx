import { CreateCompanyItem } from '@/db/entities/company';
import useCompany from '@/hooks/useCompanyRegistration';
import { isSuccessResponse } from '@/pages/api/companies';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import { useRecruitmentRegisterCompany } from '../src/generated';
import { Badge } from './ui/badge';

const CompanyRegister = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { isValidating, isRegistered } = useCompany(address);
  const { isLoading, isSuccess, writeAsync } = useRecruitmentRegisterCompany();

  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companySite, setCompanySite] = useState('');

  const registerCompanySc = async () => {
    if (isRegistered) {
      toast.error('Wallet address is already registered');
      return;
    }
    try {
      await writeAsync();
    } catch (e) {
      toast.error('Company registration failed. Please contact support');
    }
  };

  const registerCompanyDb = async () => {
    const companyData: CreateCompanyItem = {
      companyId: address as string,
      name: companyName,
      email: companyEmail,
      site: companySite,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    };

    try {
      const response = await fetch('api/companies', options);
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

  const handleCompanyNameChange = (event: any) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyEmailChange = (event: any) => {
    setCompanyEmail(event.target.value);
  };

  const handleCompanySiteChange = (event: any) => {
    setCompanySite(event.target.value);
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
        className='relative mt-[2%] flex h-[50vh]  w-[300px] flex-col  items-center justify-center gap-4 bg-blue-50 p-2 shadow-2xl md:w-[30vw]'
      >
        <div className='flex flex-col gap-2'>
          <Badge className='w-[30%] bg-[#3F3F5F]'>Company Name</Badge>
          <input
            type='text'
            value={companyName}
            onChange={handleCompanyNameChange}
            className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Badge className='w-[30%] bg-[#3F3F5F]'>Email</Badge>
          <input
            type='text'
            value={companyEmail}
            onChange={handleCompanyEmailChange}
            className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Badge className='w-[30%] bg-[#3F3F5F]'>Website</Badge>
          <input
            type='text'
            value={companySite}
            onChange={handleCompanySiteChange}
            className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>

        <button
          type='button'
          className='btn btn-primary w-[70%]'
          onClick={registerCompanySc}
          disabled={isLoading || isValidating}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default CompanyRegister;
