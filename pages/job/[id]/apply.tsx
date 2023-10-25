import Banner from '@/components/Banner';
import * as eth from '@polybase/eth';
import { Layout } from '@/components/layout';
import usePolybase from '@/hooks/usePolybase';
import { recruitmentABI, recruitmentAddress } from '@/src/generated';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useContractWrite } from 'wagmi';
import { Button } from '@/components/ui/button';

const apply = () => {
  const router = useRouter();
  const [jobId, setJobId] = useState<string>('');
  const [refId, setRefId] = useState<string>();
  const { address }: any = useAccount();
  const { checkCandidateRegistration, applyforJob } = usePolybase(
    async (data: string) => {
      const sig = await eth.sign(data, address);
      return { h: 'eth-personal-sign', sig };
    }
  );

  useEffect(() => {
    const { id, refId }: any = router.query || {};

    if (!id) {
      const jobId = String(id);
      setJobId(jobId);

      if (refId) {
        setRefId(String(refId));
      }
    }
  }, [router]);

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
      if (refId) {
        try {
          await confirmReferral({
            args: [BigInt(refId), BigInt(jobId)],
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
    <Layout title='Profile'>
      <Banner title='Candidate Application' />
      <div className='mt-[2%] flex flex-col items-center justify-center'>
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
    </Layout>
  );
};

export default apply;
