import { MapPinIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import { truncateDescription } from '../../helpers';
import usePolybase from '../../hooks/usePolybase';
import { JobProps } from '../../types';
import { Badge } from '../ui/badge';

type ClientJobProps = {
  id: string;
  roleTitle?: string;
  location?: string;
  bounty?: string;
  salary?: number;
  description?: string;
  companyName?: string;
  status?: string;
  date?: string;
  experience?: string;
  langaugeSpoken?: string;
  skills?: string;
};

const ClientJob = (props: ClientJobProps) => {
  const {
    id,
    location,
    bounty,
    description = '',
    salary,
    roleTitle,
    status,
    date,
  } = props;
  const router = useRouter();
  const viewCandidates = () => {
    toast.warning('Coming Soon!');
    // router.push(`/jobCandidates/${id}`); //TODO: uncomment once pages built
  };

  const handleEditJob = () => {
    router.push(`/client/editJob/${id}`);
  };

  return (
    <div className='flex h-[190px] w-[50vw] flex-col justify-between rounded-lg p-4 text-black shadow-md'>
      <div className='mb-4 flex justify-between'>
        <div className='flex flex-col '>
          <div className='mb-[2%] font-semibold uppercase'>{roleTitle}</div>
          <div className='flex flex-wrap gap-2 '>
            <Badge className='self-start bg-[#5F9FFF]'>
              {'Bounty: ' + '$' + Math.floor(100 + Math.random() * 900)}
            </Badge>
            <Badge className='self-start bg-[#3F3F5F]'>Salary {salary}</Badge>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex justify-center gap-2'>
            <MapPinIcon className='h-5 w-5' />
            <div>{location}</div>
          </div>
          <div>{date}</div>
        </div>
      </div>
      <div className='flex items-center justify-between pb-4'>
        {truncateDescription(description, 20)}
      </div>
      <div className='flex items-center justify-end gap-2'>
        <button
          className='md:text-md rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
          onClick={viewCandidates}
        >
          View Candidates
        </button>
        {/* <button
          className="px-4 py-2 bg-slate-500 text-white text-sm md:text-sm rounded"
          onClick={handleEditJob}>
          Edit Job
        </button> */}
      </div>
    </div>
  );
};

const ClientJobs = () => {
  const { address }: any = useAccount();
  const { readAllJobListingsForClient } = usePolybase();
  const [jobArr, setJobArr] = useState<any>([]);

  useEffect(() => {
    if (address) {
      readAllJobListingsForClient(address).then((jobListing) =>
        setJobArr([...jobListing])
      );
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col  gap-2'>
        <div className='mt-[2%] flex flex-col flex-wrap items-center justify-center gap-8'>
          {jobArr.map((job: JobProps) => (
            <ClientJob
              key={job.id}
              id={job.id}
              location={job.location}
              status={job.status}
              salary={job.salary}
              roleTitle={job.roleTitle}
              bounty={job.bounty}
              description={job.description}
              date={job.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientJobs;
