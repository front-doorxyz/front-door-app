import * as eth from '@polybase/eth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useAccount, useContractWrite } from 'wagmi';
import usePolybase from '../../hooks/usePolybase';
import { recruitmentABI, recruitmentAddress } from '../../src/generated';
import { Button } from '../ui/button';

const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;

type Props = {
  referalId: string;
  jobId: string;
};

const InlineApply = ({ referalId, jobId }: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();

  return (
    <div className='relative'>
      <div className='grid w-full grid-cols-2 text-5xl'>
        <div>🎉</div>
        <div className='content-x-mirror justify-self-end'>🎉</div>
      </div>
      <h1 className='text-center text-xl font-semibold md:mb-6'>
        You have been referred!
      </h1>
      <div className='flex flex-col gap-2'>
        <Button
          className='md:text-md w-full rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
          onClick={() => router.push(`${jobId}/apply`)}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default InlineApply;
