import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as eth from '@polybase/eth';
import { Address, useAccount, useContractWrite } from 'wagmi';
import { getDate } from '../../helpers';
import usePolybase from '../../hooks/usePolybase';
import { recruitmentABI, recruitmentAddress } from '../../src/generated';
import TextEditor from '../TextEditor';
import { Badge } from '../ui/badge';
import { useRouter } from 'next/router';
import JobModal from '../JobModal';

type Props = {};

const AddJob = (props: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { readCompanyById, createJobListing, checkCompanyRegistration } =
    usePolybase(async (data: string) => {
      const sig = await eth.sign(data, address);
      return { h: 'eth-personal-sign', sig };
    });
  const [jobModal, setJobModal] = useState<boolean>(false);
  const [jobInfo, setJobInfo] = useState<any>({
    companyName: '',
    description: '',
    location: '',
    roleTitle: '',
    bounty: '1',
    salary: 0,
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
    if (data) {
      setJobInfo({
        ...jobInfo,
        companyName: data.companyName,
      });
    }
  };

  useEffect(() => {
    if (address) {
      getCompanyData(address);
    }
  }, []);

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerJob',
    args: [BigInt(jobInfo.bounty)],
  });

  const addJob = async () => {
    try {
      const jobId = await writeAsync();
      if (jobId) {
        const date = getDate();
        const jobData = [
          String(jobId),
          jobInfo.companyName,
          jobInfo.roleTitle,
          jobInfo.description,
          jobInfo.location,
          jobInfo.skills,
          jobInfo.experience,
          Number(jobInfo.salary),
          jobInfo.bounty,
          jobInfo.langaugeSpoken,
          address,
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

  const registerJob = async () => {
    if (await checkCompanyRegistration(address)) {
      setJobModal(true);
    } else {
      toast.error('Please Register as a company');
      router.push(
        {
          pathname: `/register`,
          query: { tab: 1 },
        },
        `/register`
      );
    }
  };

  return (
    <div className='flex flex-col justify-center gap-4 p-4 shadow-2xl'>
      <Badge className='w-[15%] bg-[#3F3F5F]'>Role Title</Badge>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-[50vw]'
        name='roleTitle'
        value={jobInfo.roleTitle}
        onChange={handleChange}
        required
      />
      <div id='unique'>
        <Badge className='w-[15%] bg-[#3F3F5F]'>Description</Badge>
        <TextEditor
          readOnly={false}
          initialValue={jobInfo.description}
          handleInput={handleDescriptionChange}
        />
      </div>
      <Badge className='w-[15%] bg-[#3F3F5F]'>Location</Badge>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-[50vw]'
        name='location'
        value={jobInfo.location}
        onChange={handleChange}
      />

      <Badge className='w-[15%] bg-[#3F3F5F]'>Skills</Badge>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-[50vw]'
        name='skills'
        value={jobInfo.skills}
        onChange={handleChange}
      />

      <Badge className='w-[15%] bg-[#3F3F5F]'>Experience Required</Badge>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-[50vw]'
        name='experience'
        value={jobInfo.experience}
        onChange={handleChange}
      />

      <Badge className='w-[15%] bg-[#3F3F5F]'>Bounty</Badge>
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

      <Badge className='w-[15%] bg-[#3F3F5F]'>Salary</Badge>
      <input
        type='number'
        placeholder='Type here'
        className='input input-bordered w-[50vw]'
        name='salary'
        value={jobInfo.salary}
        onChange={handleChange}
      />
      <Badge className='w-[15%] bg-[#3F3F5F]'>Spoken Langauge</Badge>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-[50vw]'
        name='langaugeSpoken'
        value={jobInfo.langaugeSpoken}
        onChange={handleChange}
      />

      <button
        className='md:text-md rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  uppercase text-white'
        onClick={registerJob}
      >
        Register Job
      </button>
      {jobModal && (
        <JobModal
          setModal={() => setJobModal(false)}
          addJob={addJob}
          jobInfo={jobInfo}
        />
      )}
    </div>
  );
};

export default AddJob;
