import React, { useState } from "react";
import { toast } from "react-toastify";
import { gweiUnits, parseEther } from "viem";
import { Address, useAccount, useContractWrite } from "wagmi";
import usePolybase from "../../hooks/usePolybase";
import { recruitmentABI, recruitmentAddress } from "../../src/generated";
import TextEditor from "../TextEditor";

type Props = {};

const AddJob = (props: Props) => {
  const { readCompanyById } = usePolybase();
  const [jobInfo, setJobInfo] = useState<any>({
    companyName: "",
    description: "",
    location: "",
    roleTitle: "",
    bounty: "1",
    maxSalary: 0,
    minSalary: 0,
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let parsedValue = value;
    

    setJobInfo({
      ...jobInfo,
      [name]: parsedValue,
    });
  };

  const handleDescriptionChange = (value: string) => {
    setJobInfo({
      ...jobInfo,
      description: value,
    });
  };

  const getCompanyData = async (address: Address) => {
    const data = await readCompanyById(address);
    setJobInfo({
      ...jobInfo,
      companyName: data.companyName,
    });
  };

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: "registerJob",
    args: [parseEther("10","gwei")],
  });

  const registerJob = async () => {
    try {
      const jobId = await writeAsync();

      if (isSuccess) {
        toast.success("Job Registered Successfully");
      }
    } catch (e) {
      toast.error("Job Registration failed");
    }
  };

  return (
    <div className="shadow-2xl flex flex-col justify-center gap-4 p-4">
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Location</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="location"
          value={jobInfo.location}
          onChange={handleChange}
        />
      </label>
      <label className="join flex flex-col gap-2 mb-[-2%]">
        <span className="indicator-item badge badge-primary">
          Job Description
        </span>
      </label>
      <TextEditor
        readOnly={false}
        initialValue={jobInfo.description}
        handleInput={handleDescriptionChange}
      />
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Role Title</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="roleTitle"
          value={jobInfo.roleTitle}
          onChange={handleChange}
        />
      </label>

      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary"> Bounty</span>
        <input
          type="number"
          step="any"
          min="0"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="bounty"
          value={jobInfo.bounty}
          onChange={handleChange}
        />
      </label>

      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Max Salary</span>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="maxSalary"
          value={jobInfo.maxSalary}
          onChange={handleChange}
        />
      </label>
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Min Salary</span>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="minSalary"
          value={jobInfo.minSalary}
          onChange={handleChange}
        />
      </label>
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Type of job</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="type"
          value={jobInfo.type}
          onChange={handleChange}
        />
      </label>
      <button className={`btn btn-primary`} onClick={registerJob}>
        Add Job
      </button>
    </div>
  );
};

export default AddJob;
