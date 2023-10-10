import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useAccount, useContractWrite } from "wagmi";
import { recruitmentABI, recruitmentAddress } from "../src/generated";
import { toast } from "react-toastify";
import usePolybase from "../hooks/usePolybase";
import * as eth from "@polybase/eth";

const CompanyRegister = () => {
  const { address } = useAccount();
  const { db, registerCompany } = usePolybase();
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companySite, setCompanySite] = useState("");

  const handleCompanyNameChange = (event: any) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyDescriptionChange = (event: any) => {
    setCompanyDescription(event.target.value);
  };

  const handleCompanySiteChange = (event: any) => {
    setCompanySite(event.target.value);
  };

  db.signer(async (data: string) => {
    const sig = await eth.sign(data, address);
    return { h: "eth-personal-sign", sig };
  });

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: "registerCompany",
  });

  const registerCompanySc = async () => {
    try {
      const companyData = [
        address,
        companyName,
        companyDescription,
        companySite,
      ];
      await writeAsync();
      if (!isSuccess) {
        toast.error("Company Register failed");
      }
      if (isSuccess && !isLoading) {
        const company = await registerCompany(companyData);
        if (company.id) {
          toast.success("Company Register Successful");
        }
      }
    } catch (e) {
      toast.error("Company Register failed");
    }
  };

  return (
    <>
      <div
        id="form"
        className="bg-blue-50 w-[300px] md:w-[30vw]  h-[50vh] p-2  flex flex-col items-center justify-center gap-4 shadow-2xl mt-[2%]">
        <div className="flex flex-col gap-2">
          <span className="w-1/2 bg-blue-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white-900">
            Company Name
          </span>
          <input
            type="text"
            value={companyName}
            onChange={handleCompanyNameChange}
            className="border border-slate-500 rounded-lg h-[40px] w-[200px] md:w-[20vw]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="w-1/3 bg-blue-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white-900">
            Description
          </span>
          <textarea
            value={companyDescription}
            onChange={handleCompanyDescriptionChange}
            className="border border-slate-500 rounded-lg textarea h-[80px] w-[200px] md:w-[20vw]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="w-2/4 bg-blue-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white-900">
            Company Website
          </span>
          <input
            type="text"
            value={companySite}
            onChange={handleCompanySiteChange}
            className="border border-slate-500 rounded-lg h-[40px] w-[200px] md:w-[20vw]"
          />
        </div>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[200px] md:w-[20vw]"
          onClick={registerCompanySc}
          disabled={isLoading}>
          Register
        </button>
      </div>
    </>
  );
};

export default CompanyRegister;
