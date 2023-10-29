import { CreateJobItem } from '@/db/entities/job';
import useCompany from '@/hooks/useCompanyRegistration';
import { isSuccessResponse } from '@/pages/api/jobs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { decodeEventLog, parseEther } from 'viem';
import { useAccount } from 'wagmi';
import { waitForTransaction } from 'wagmi/actions';
import { getDate } from '../../helpers';
import {
  recruitmentABI,
  recruitmentAddress,
  useFrontDoorTokenApprove,
  useRecruitmentRegisterJob,
} from '../../src/generated';
import JobModal from '../JobModal';
import TextEditor from '../TextEditor';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

type Props = {};

const AddJob = (props: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();
  const { isValidating, company } = useCompany(address);
  const { isSuccess: tokenApproved, writeAsync: approveToken } =
    useFrontDoorTokenApprove();
  const {
    isLoading,
    isSuccess: scRegisterSuccess,
    writeAsync: scRegisterJob,
  } = useRecruitmentRegisterJob();

  const [jobId, setJobId] = useState<string>();
  const [jobModal, setJobModal] = useState<boolean>(false);
  const [jobInfo, setJobInfo] = useState<any>({
    description: '',
    location: '',
    roleTitle: '',
    bounty: '1',
    salary: 0,
    experience: '',
    skills: '',
    langaugeSpoken: '',
  });

  const showConfirmationModal = async () => {
    setJobModal(true);
  };

  const approveTokenUsage = async () => {
    try {
      await approveToken({
        args: [recruitmentAddress, parseEther(jobInfo.bounty)],
      });
    } catch (approvalError: any) {
      toast.error('Approval Error: ' + approvalError.message);
      return;
    }
  };

  const addJobToSC = async () => {
    try {
      const { hash } = await scRegisterJob({
        args: [parseEther(jobInfo.bounty)],
      });
      const receipt = await waitForTransaction({ hash });
      const topics = decodeEventLog({
        abi: recruitmentABI,
        eventName: 'JobCreated',
        data: receipt?.logs[4].data,
        topics: receipt?.logs[4].topics,
      });
      setJobId(String(topics.args.jobId));
    } catch (writeError: any) {
      toast.error('Write Error: ' + writeError.message);
      return;
    }
  };

  const createJobListingDb = async (jobData: CreateJobItem) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    };

    try {
      const response = await fetch('api/jobs', options);
      if (response.ok) {
        const responseData = await response.json();
        if (isSuccessResponse(responseData)) {
          return responseData.items.at(0);
        }
      } else {
        throw new Error('error');
      }
    } catch (error: any) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (tokenApproved) {
      addJobToSC();
    }
  }, [tokenApproved]);

  useEffect(() => {
    if (scRegisterSuccess && jobId) {
      const date = getDate();
      const jobData: CreateJobItem = {
        ...jobInfo,
        jobId,
        companyId: company?.companyId,
        companyName: company?.name,
        salary: Number(jobInfo.salary),
        date,
      };

      createJobListingDb(jobData)
        .then((res) => {
          if (res?.jobId) {
            toast.success('Job Registered Successfully');
            router.push('/');
          }
        })
        .catch();
    }
  }, [scRegisterSuccess, jobId]);

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

      <Button
        className='md:text-md rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  uppercase text-white'
        onClick={showConfirmationModal}
        disabled={isLoading || isValidating || !company}
      >
        Register Job
      </Button>

      {jobModal && (
        <JobModal
          setModal={() => setJobModal(false)}
          approveJob={approveTokenUsage}
          jobInfo={jobInfo}
          loading={isLoading}
        />
      )}
    </div>
  );
};

export default AddJob;
