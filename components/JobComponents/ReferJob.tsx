import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useContractWrite } from "wagmi";
import usePolybase from "../../hooks/usePolybase";
import * as eth from "@polybase/eth";
import { recruitmentABI, recruitmentAddress } from "../../src/generated";
import { keccak256, toBytes } from "viem";


const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;


type Props = {
  jobId:string;
};

const ReferJob = ({jobId}: Props) => {
  const router = useRouter();
  const { address }:any = useAccount();
  const { checkReferrerRegistration } = usePolybase(
    async (data: string) => {
       const sig = await eth.sign(data, address);
       return { h: "eth-personal-sign", sig };
     })
   ;;
  const [refereeMail, setRefereeMail] = useState<string>("");
  const [hashEmail, setHashEmail] = useState<`0x${string}`>("0x");


  const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setHashEmail(keccak256(toBytes(event.target.value)));
   setRefereeMail(event.target.value);
  };

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: "registerReferral",
    args: [BigInt(jobId),hashEmail],
  });


  const registerReferralSC = async () => {
    let referrerExists;
    try {
      referrerExists = await checkReferrerRegistration(address);
    } catch (e) {
      referrerExists = false;
    }
    if (!referrerExists) {
      toast.warning("Register as a referrer");
      router.push("/register");
      return;
    }
  }
  return (
    <div className="flex flex-col p-2 w-full">
      <div className="border-b-2">
        <div>Job openings -- </div>
        <div>Job last date -- </div>
      </div>
      <div className="pt-2 gap-2 flex flex-col w-full">
        <div>Refer a suitable candidate</div>
        <input
          type="text"
          placeholder="Candidate email"
          name="name"
          className="input input-bordered h-10 p-3 rounded-md border border-slate-800"
          onChange={handleEmailChange}
        />
        <div className="flex justify-end w-full">
          <button className="px-6 py-2 rounded-[5px] bg-[#3F007F] text-sm md:text-md  text-white">
            Refer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferJob;
