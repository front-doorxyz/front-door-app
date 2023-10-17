import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';
import usePolybase from '../../hooks/usePolybase';
import * as eth from '@polybase/eth';
import { recruitmentABI, recruitmentAddress } from '../../src/generated';
import { keccak256, toBytes } from 'viem';
import emailjs from 'emailjs-com';

const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;

type Props = {
  jobId: string;
  refId?: string;
};

const ReferJob = ({ jobId, refId }: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { checkReferrerRegistration, checkCandidateRegistration } = usePolybase(
    async (data: string) => {
      const sig = await eth.sign(data, address);
      return { h: 'eth-personal-sign', sig };
    }
  );
  const [refereeMail, setRefereeMail] = useState<string>('');
  const [hashEmail, setHashEmail] = useState<`0x${string}`>('0x');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHashEmail(keccak256(toBytes(event.target.value)));
    setRefereeMail(event.target.value);
  };

  const {
    data,
    isLoading,
    isSuccess,
    writeAsync: registerReferral,
  } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerReferral',
  });

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

  const registerReferralSC = async () => {
    let referrerExists: boolean;
    try {
      referrerExists = await checkReferrerRegistration(address);
    } catch (e) {
      referrerExists = false;
    }
    if (!referrerExists) {
      toast.warning('Register as a referrer');
      router.push(
        {
          pathname: `/register`,
          query: { tab: 2 },
        },
        `/register`
      );
      return;
    } else {
      if (hashEmail) {
        const refId = await registerReferral({
          args: [BigInt(jobId), hashEmail],
        });
        console.log(variables);
        // console.log(refId);
        const emailArgs = {
          to: refereeMail,
          refId: refId,
          jobId: Number(jobId),
        };
        try {
          emailjs
            .send(
              'service_gb5wvzu',
              'template_mc7f9wm',
              emailArgs,
              'vmYs4tBmmwGXZk563'
            )
            .then(
              (result: { text: string }) => {
                toast.success('Referral sent successfully');
              },
              (error: { text: string }) => {
                toast.error('Referral failed');
              }
            );
        } catch (e) {
          toast.error('Referral failed');
        }
      }
    }
  };

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
    <div className='flex w-full flex-col p-2'>
      <div className='flex w-full flex-col gap-2 pt-2'>
        {!refId ? (
          <>
            <div className='uppercase text-black'>Refer suitable candidate</div>
            <input
              type='text'
              placeholder='Candidate email'
              name='name'
              className='input input-bordered h-10 rounded-md border border-slate-800 p-3'
              onChange={handleEmailChange}
            />
            <div className='flex w-full justify-end'>
              <button
                className='md:text-md rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
                disabled={isLoading}
                onClick={registerReferralSC}
              >
                Refer
              </button>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center gap-2'>
            <div className='uppercase text-black'>
              Congrats! You have been referred
            </div>
            <div className='text-black'>Complete Application</div>
            <button
              className='md:text-md rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
              disabled={confirmLoading}
              onClick={confirmReferralSC}
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferJob;
