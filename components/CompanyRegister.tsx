import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useAccount, useContractWrite } from 'wagmi';
import { recruitmentABI, recruitmentAddress } from '../src/generated';
import { toast } from 'react-toastify';
import usePolybase from '../hooks/usePolybase';
import * as eth from '@polybase/eth';

const CompanyRegister = () => {
  const { address }: any = useAccount();
  const { registerCompany } = usePolybase(async (data: string) => {
    const sig = await eth.sign(data, address);
    return { h: 'eth-personal-sign', sig };
  });
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companySite, setCompanySite] = useState('');

  const handleCompanyNameChange = (event: any) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyDescriptionChange = (event: any) => {
    setCompanyDescription(event.target.value);
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
    try {
      const companyData = [
        address,
        companyName,
        companyDescription,
        companySite,
      ];
      await writeAsync();
      if (!isSuccess) {
        toast.error('Company Registration failed');
      } else {
        if (isSuccess && !isLoading) {
          const company = await registerCompany(companyData);
          if (company.id) {
            toast.success(`${companyName} Registered Successfully`);
          }
        }
      }
    } catch (e) {
      toast.error('Company Registration failed');
    }
  };

  return (
    <>
      <div
        id='form'
        className='mt-[2%] flex h-[50vh]  w-[300px] flex-col  items-center justify-center gap-4 bg-blue-50 p-2 shadow-2xl md:w-[30vw]'
      >
        <div className='flex flex-col gap-2'>
          <span className='dark:text-white-900 mr-2 w-1/2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-white dark:bg-blue-900'>
            Company Name
          </span>
          <input
            type='text'
            value={companyName}
            onChange={handleCompanyNameChange}
            className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='dark:text-white-900 mr-2 w-1/3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-white dark:bg-blue-900'>
            Description
          </span>
          <textarea
            value={companyDescription}
            onChange={handleCompanyDescriptionChange}
            className='textarea h-[80px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='dark:text-white-900 mr-2 w-2/4 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-white dark:bg-blue-900'>
            Company Website
          </span>
          <input
            type='text'
            value={companySite}
            onChange={handleCompanySiteChange}
            className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
          />
        </div>

        <button
          type='button'
          className='mb-2 mr-2 w-[200px] rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-[20vw]'
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
