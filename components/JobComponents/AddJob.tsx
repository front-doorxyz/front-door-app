import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as eth from '@polybase/eth';
import { Address, useAccount, useContractWrite } from 'wagmi';
import { getDate } from '../../helpers';
import usePolybase from '../../hooks/usePolybase';
import { recruitmentABI, recruitmentAddress } from '../../src/generated';
import TextEditor from '../TextEditor';

type Props = {};

const AddJob = (props: Props) => {
  const { address }: any = useAccount();
  const { readCompanyById, createJobListing } = usePolybase(
    async (data: string) => {
      const sig = await eth.sign(data, address);
      return { h: 'eth-personal-sign', sig };
    }
  );
  const [jobInfo, setJobInfo] = useState<any>({
    companyName: '',
    description: '',
    location: '',
    roleTitle: '',
    bounty: '1',
    maxSalary: 0,
    minSalary: 0,
    type: '',
    experience: '',
    skills: '',
    langaugeSpoken: '',
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
    functionName: 'registerJob',
    args: [BigInt(jobInfo.bounty)],
  });

  const registerJob = async () => {
    try {
      const jobId = await writeAsync();
      if (jobId) {
        const date = getDate();
        const jobData = [
          String(jobId),
          jobInfo.roleTitle,
          jobInfo.description,
          jobInfo.location,
          Number(jobInfo.maxSalary),
          Number(jobInfo.minSalary),
          jobInfo.bounty,
          jobInfo.companyName,
          address,
          jobInfo.type,
          date,
        ];
        const data = await createJobListing(jobData);
        if (data.id && isSuccess) {
          toast.success('Job Registered Successfully');
        }
      }
    } catch (e) {
      toast.error('Job Registration failed');
    }
  };

  return (
    <div className='flex flex-col justify-center gap-4 p-4 shadow-2xl'>
      <label className='join flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'>Location</span>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-[50vw]'
          name='location'
          value={jobInfo.location}
          onChange={handleChange}
        />
      </label>
      <label className='join mb-[-2%] flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'>
          Job Description
        </span>
      </label>
      <TextEditor
        readOnly={false}
        initialValue={jobInfo.description}
        handleInput={handleDescriptionChange}
      />
      <label className='join flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'>Role Title</span>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-[50vw]'
          name='roleTitle'
          value={jobInfo.roleTitle}
          onChange={handleChange}
        />
      </label>

      <label className='join flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'> Bounty</span>
        <input
          type='number'
          step='any'
          min='0'
          placeholder='Type here'
          className='input input-bordered w-[50vw]'
          name='bounty'
          value={jobInfo.bounty}
          onChange={handleChange}
        />
      </label>

      <label className='join flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'>Max Salary</span>
        <input
          type='number'
          placeholder='Type here'
          className='input input-bordered w-[50vw]'
          name='maxSalary'
          value={jobInfo.maxSalary}
          onChange={handleChange}
        />
      </label>
      <label className='join flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'>Min Salary</span>
        <input
          type='number'
          placeholder='Type here'
          className='input input-bordered w-[50vw]'
          name='minSalary'
          value={jobInfo.minSalary}
          onChange={handleChange}
        />
      </label>
      <label className='join flex flex-col gap-2'>
        <span className='badge indicator-item badge-primary'>Type of job</span>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-[50vw]'
          name='type'
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
