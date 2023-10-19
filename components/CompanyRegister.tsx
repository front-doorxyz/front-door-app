import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAccount, useContractWrite } from 'wagmi';
import { recruitmentABI, recruitmentAddress } from '../src/generated';
import { toast } from 'react-toastify';
import usePolybase from '../hooks/usePolybase';
import * as eth from '@polybase/eth';
import { Badge } from './ui/badge';

const CompanyRegister = () => {
  const { address }: any = useAccount();
  const { registerCompany, checkCompanyRegistration } = usePolybase(
    async (data: string) => {
      const sig = await eth.sign(data, address);
      return { h: 'eth-personal-sign', sig };
    }
  );
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companySite, setCompanySite] = useState('');

  const handleCompanyNameChange = (event: any) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyEmailChange = (event: any) => {
    setCompanyEmail(event.target.value);
  };

  const handleCompanySiteChange = (event: any) => {
    setCompanySite(event.target.value);
  };

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerCompany',
  });

  const registerCompanySc = async () => {
    let CompanyExists: boolean;
    try {
      CompanyExists = await checkCompanyRegistration(address);
    } catch (e) {
      CompanyExists = false;
    }
    if (CompanyExists) {
      toast.success('Already Registered!');
      router.push('/');
      return;
    }
    try {
      await writeAsync();
    } catch (e) {
      toast.error('Company Registration failed');
    }
  };

  const registerCompanyPolybase = async () => {
    const companyData = [address, companyName, companyEmail, companySite];
    const company = await registerCompany(companyData);
    if (company.id) {
      toast.success(`${companyName} Registered Successfully`);
      router.push('/');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      registerCompanyPolybase();
    }
  }, [isSuccess]);

  return (
    <>
      <div
        id='form'
        className='mt-[2%] flex h-[50vh]  w-[300px] flex-col  items-center justify-center gap-4 bg-blue-50 p-2 shadow-2xl md:w-[30vw]'
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
          disabled={isLoading}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default CompanyRegister;
