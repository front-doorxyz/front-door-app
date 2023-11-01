import { CreateCompanyItem } from '@/db/entities/company';
import useCompany from '@/hooks/useCompanyRegistration';
import { isSuccessResponse } from '@/pages/api/companies';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import { z } from 'zod';
import { useRecruitmentRegisterCompany } from '../src/generated';
import { Badge } from './ui/badge';

const schema = z.object({
  companyName: z
    .string()
    .min(1, { message: 'Company Name is required' })
    .max(255),
  companyEmail: z.string().email({ message: 'Invalid email format' }),
  companySite: z.string().default(''),
});

type FormData = z.infer<typeof schema>;

const CompanyRegister = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { isValidating, isRegistered } = useCompany(address);
  const { isLoading, isSuccess, writeAsync } = useRecruitmentRegisterCompany();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (!isRegistered && isValid) {
      try {
        await writeAsync();
      } catch (error) {
        console.error('Error:', error);
        toast.error('Registration Unsuccessful. Please contact support.');
      }
    } else {
      toast.error('Wallet address is already registered');
    }
  };

  const registerCompanyDb = async (data: FormData) => {
    const companyData: CreateCompanyItem = {
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
      registerCompanyDb(formData);
    }
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
            {errors.companyName && typeof errors.companyName === 'string' && (
              <span className='text-red-500'>{errors.companyName}</span>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <Badge className='mt-5 w-[30%] bg-[#3F3F5F]'>Email</Badge>

            <input
              type='text'
              {...register('companyEmail')}
              className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
            />
            {errors.companyEmail && typeof errors.companyEmail === 'string' && (
              <span className='text-red-500'>{errors.companyEmail}</span>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <Badge className='mt-5 w-[30%] bg-[#3F3F5F]'>Website</Badge>
            <input
              type='text'
              {...register('companySite')}
              className='h-[40px] w-[200px] rounded-lg border border-slate-500 md:w-[20vw]'
            />
            {errors.companySite && typeof errors.companySite === 'string' && (
              <span className='text-red-500'>{errors.companySite}</span>
            )}
          </div>
          <button
            type='submit'
            className='btn btn-primary mt-5 w-[100%]'
            disabled={isLoading || isValidating}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default CompanyRegister;
