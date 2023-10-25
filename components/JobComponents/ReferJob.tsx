import * as eth from '@polybase/eth';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { keccak256, toBytes, toHex } from 'viem';
import { useAccount, useContractWrite } from 'wagmi';
import { waitForTransaction } from 'wagmi/actions';
import usePolybase from '../../hooks/usePolybase';
import { recruitmentABI, recruitmentAddress, useRecruitmentRegisterReferral } from '../../src/generated';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { write } from 'fs';

const { v4: uuidv4 } = require('uuid');

const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;

type Props = {
  jobId: string;
};

const ReferJob = ({ jobId }: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { checkReferrerRegistration } = usePolybase(async (data: string) => {
    const sig = await eth.sign(data, address);
    return { h: 'eth-personal-sign', sig };
  });
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
        const referralId: string = uuidv4().replaceAll("-", "");
        const referralIdBytes : Uint8Array = toBytes(referralId);
        const referralHex = toHex(referralIdBytes);


        const { hash } = await registerReferral({
          args: [BigInt(jobId), hashEmail, referralHex],
        });
        const receipt = await waitForTransaction({ hash });
        const refId = Number(receipt?.logs[0].data);
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

  return (
    <div className=''>
      <h1 className='text-xl font-semibold md:mb-6'>
        Refer a suitable candidate
      </h1>

      <Input
        type='text'
        placeholder='Candidate email'
        name='name'
        className=' mb-4  p-3'
        onChange={handleEmailChange}
      />

      <Button
        className='md:text-md w-full rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
        onClick={registerReferralSC}
        disabled={isLoading}
      >
        Refer
      </Button>
    </div>
  );
};

export default ReferJob;
