import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";


const ReferrerRegister = () => {
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };


  return (
    <>
      <div
        id="form"
        className="bg-blue-50 w-[300px] md:w-[30vw]  h-[50vh] p-2  flex flex-col items-center justify-center gap-4 shadow-2xl mt-[2%]"
      >
        <div className="flex flex-col gap-2">
          <span className="w-1/5 bg-blue-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white-900">Name</span>

          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="border border-slate-500 rounded-lg h-[50px] w-[200px] md:w-[20vw]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="w-1/5 bg-blue-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white-900">Email</span>

          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="border border-slate-500 rounded-lg h-[50px] w-[200px] md:w-[20vw]"
          />
        </div>

        <button 
            type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[210px] md:w-[20vw]">
            Register
        </button>
      </div>
    </>
  );
};

export default ReferrerRegister;