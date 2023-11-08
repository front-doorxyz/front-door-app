import { CreateReferralItem } from '@/db/entities/referral';
import useReferrer from '@/hooks/useReferrer';
import { isSuccessResponse } from '@/pages/api/referrals';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { keccak256, stringToHex, toBytes } from 'viem';
import { useAccount } from 'wagmi';
import { waitForTransaction } from 'wagmi/actions';
import {
  recruitmentAddress,
  useRecruitmentRegisterReferral,
} from '../../src/generated';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
const { v4: uuidv4 } = require('uuid');

type Props = {
  jobId: string;
};

const ReferJob = ({ jobId }: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { isValidating, isRegistered } = useReferrer(address, '../');

  const [refereeMail, setRefereeMail] = useState<string>();
  const [hashEmail, setHashEmail] = useState<`0x${string}`>();

  const { isLoading, writeAsync: registerReferral } =
    useRecruitmentRegisterReferral({
      address: recruitmentAddress,
    });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHashEmail(keccak256(toBytes(event.target.value)));
    setRefereeMail(event.target.value);
  };

  const registerReferralSC = async () => {
    if (!isRegistered) {
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
        const refCode: `0x${string}` = stringToHex(
          uuidv4().replaceAll('-', '')
        );
        const { hash } = await registerReferral({
          args: [BigInt(jobId), hashEmail, refCode],
        });
        const receipt = await waitForTransaction({ hash });
        const refId = Number(receipt?.logs[0].data);
        try{
          await createReferralDb({
            email:refereeMail as string,
            refId,
            refererAddress: address,
            jobId:parseInt(jobId),
            refCode,
            status:"email"
          })
        }catch (e) {
          toast.error('Referral failed');
        }
        const emailArgs = {
          to: refereeMail,
          refId: refId,
          jobId: Number(jobId),
          refCode: refCode,
          origin: new URL(window.location.href).origin,
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
                setHashEmail(undefined);
                setRefereeMail(undefined);
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

  const createReferralDb = async (referralData:CreateReferralItem) =>{
 
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(referralData),
    };

    try {
      const response = await fetch('../api/referrals', options);
      if (response.ok) {
        const responseData = await response.json();
        if (isSuccessResponse(responseData)) {
          return responseData;
        }
      } else {
        throw new Error('error');
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div className=''>
      <h1 className='text-xl font-semibold md:mb-6'>
        Refer a suitable candidate
      </h1>

      <Input
        type='text'
        placeholder='Candidate email'
        name='name'
        className=' mb-4 p-3'
        onChange={handleEmailChange}
      />

      <Button
        className='md:text-md w-full rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
        onClick={registerReferralSC}
        disabled={isLoading || isValidating}
      >
        Refer
      </Button>
    </div>
  );
};

export default ReferJob;
