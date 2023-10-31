import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import useCompany from '@/hooks/useCompanyRegistration';
import { useRecruitmentRegisterCompany } from '../src/generated';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { isSuccessResponse } from '@/pages/api/companies';
import { Badge } from './ui/badge';

const schema = yup.object().shape({
  companyName: yup.string().required('Company Name is required'),
  companyEmail: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  companySite: yup
    .string()
    .url('Invalid website URL')
    .required('Website is required'),
});

interface FormData {
  companyName: string;
  companyEmail: string;
  companySite: string;
}

const CompanyRegister = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { isRegistered } = useCompany(address);
  const { isLoading, isSuccess, writeAsync } = useRecruitmentRegisterCompany();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!isRegistered) {
      try {
        await writeAsync();
        registerCompanyDb(data); // Pass the data received from the form
      } catch (error) {
        console.error('Error:', error);
        toast.error('Registration Unsuccessful. Please contact support.');
      }
    } else {
      toast.error('Wallet address is already registered');
    }
  };

  const registerCompanyDb = async (data: FormData) => {
    const companyData = {
      companyId: address as string,
      name: data.companyName,
      email: data.companyEmail,
      site: data.companySite,
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
        } else {
          toast.error('Registration Unsuccessful. Please contact support.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Registration Unsuccessful. Please contact support.');
    }
  };


  useEffect(() => {
    if (isSuccess) {
      const formData = getValues();
      registerCompanyDb(formData);    }
  }, [isSuccess]);

  return (
    <>
      <div className='relative mt-[2%] flex h-[65vh] w-[300px] flex-col items-center justify-center gap-4 bg-blue-50 p-2 shadow-2xl md:w-[30vw]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <Badge className='w-[30%] bg-[#3F3F5F]'>Company Name</Badge>
            <input
              type='text'
              {...register('companyName')}
              className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
            />
            {errors.companyName && <span className="text-red-500">{errors.companyName.message}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <Badge className='w-[30%] bg-[#3F3F5F] mt-5'>Email</Badge>

            <input
              type='text'
              {...register('companyEmail')}
              className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
            />
            {errors.companyEmail && <span className="text-red-500">{errors.companyEmail.message}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <Badge className='w-[30%] bg-[#3F3F5F] mt-5'>Website</Badge>
            <input
              type='text'
              {...register('companySite')}
              className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
            />
            {errors.companySite && <span className="text-red-500">{errors.companySite.message}</span>}
          </div>
          <button type='submit' 
          className='btn btn-primary w-[100%] mt-5'
          disabled={isLoading}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default CompanyRegister;
