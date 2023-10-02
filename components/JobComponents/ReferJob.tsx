import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};
const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;

const ReferJob = (props: Props) => {
  const router = useRouter();
  const [refereeMail, setRefereeMail] = useState("");
  const [loading, setLoading] = useState(false);

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRefereeMail(e.target.value)
          }
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
