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
  const { checkCandidateRegistration, applyforJob } = usePolybase(
    async (data: string) => {
      const sig = await eth.sign(data, address);
      return { h: 'eth-personal-sign', sig };
    }
  );

  const {
    data: confirmData,
    isLoading: confirmLoading,
    isSuccess: confirmSuccess,
    writeAsync: confirmReferral,
  } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'confirmReferral',
  });

  const confirmReferralSC = async () => {
    let candidateExists: boolean;
    try {
      candidateExists = await checkCandidateRegistration(address);
    } catch (e) {
      candidateExists = false;
    }
    if (!candidateExists) {
      toast.warning('Register as a candidate!');
      router.push(
        {
          pathname: `/register`,
          query: { tab: 3 },
        },
        `/register`
      );
      return;
    } else {
      if (referalId) {
        try {
          await confirmReferral({
            args: [BigInt(referalId), BigInt(jobId)],
          });
          await applyforJob(String(jobId), address);
          if (confirmSuccess) {
            toast.success('Candidate Application Completed');
          }
        } catch (e) {
          toast.error('Candidate Application Failed');
        }
      }
    }
  };

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
        <input
          type='text'
          placeholder='CV Link'
          className='input input-bordered w-full'
          name='roleTitle'
          // value={jobInfo.roleTitle}
          // onChange={handleChange}
          required
        />{' '}
        <input
          type='text'
          placeholder='Location / VISA'
          className='input input-bordered w-full'
          name='roleTitle'
          // value={jobInfo.roleTitle}
          // onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='Notice Period'
          className='input input-bordered w-full'
          name='roleTitle'
          // value={jobInfo.roleTitle}
          // onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='Preferred Salary'
          className='input input-bordered w-full'
          name='roleTitle'
          // value={jobInfo.roleTitle}
          // onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='What makes you the best candidate for the role?'
          className='input input-bordered w-full'
          name='roleTitle'
          // value={jobInfo.roleTitle}
          // onChange={handleChange}
          required
        />
        <Button
          className='md:text-md w-full rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
          disabled={confirmLoading}
          onClick={confirmReferralSC}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default InlineApply;
