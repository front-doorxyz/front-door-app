import { JobProps } from '@/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

type Props = {
  setModal: (value: boolean) => void;
  approveJob: () => void;
  jobInfo: JobProps;
  loading: boolean;
};

const JobModal = ({ approveJob, jobInfo, setModal, loading }: Props) => {
  const [referrerShare, setRefferrerScore] = useState(0);
  const [candidateShare, setCandidateScore] = useState(0);
  const [frontDoorShare, setFrontDoorShare] = useState(0);

  useEffect(() => {
    let bountyNumber = Number(jobInfo.bounty);
    setRefferrerScore(() => (65 / 100) * bountyNumber);
    setCandidateScore(() => (10 / 100) * bountyNumber);
    setFrontDoorShare(() => (25 / 100) * bountyNumber);
  }, [jobInfo]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black'>
      <div className='relative mx-auto w-full max-w-screen-md rounded-lg bg-white p-4'>
        <div className='mb-4 text-center text-2xl font-semibold'>
          Client Fees Page
        </div>
        <button
          className='absolute right-2 top-2'
          onClick={() => {
            setModal(false);
          }}
        >
          <XMarkIcon className='text-tertiary h-6 w-6' />
        </button>
        <div className='my-4 flex flex-col gap-4'>
          <div id='headers' className='rounded-lg border-2 border-accent p-4'>
            Total fee structure excluding Taxes to pay for the sourcing of a
            Successful Candidate
          </div>
          <div id='info' className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='rounded-lg border-2 border-accent p-4'>
              Role -- {jobInfo.roleTitle}
            </div>
            <div className='rounded-lg border-2 border-accent p-4'>
              Bounty -- {jobInfo.bounty}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='rounded-lg border-2 border-accent p-4'>
              Referrer Share[65%]
            </div>
            <div className='rounded-lg border-2 border-accent p-4'>
              $ {referrerShare}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='rounded-lg border-2 border-accent p-4'>
              Candidate Share[10%]
            </div>
            <div className='rounded-lg border-2 border-accent p-4'>
              $ {candidateShare}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='rounded-lg border-2 border-accent p-4'>
              Front Door Share[25%]
            </div>
            <div className='rounded-lg border-2 border-accent p-4'>
              $ {frontDoorShare}
            </div>
          </div>
        </div>
        <div id='confirm' className='mt-4 text-center'>
          <button
            className={`btn btn-primary`}
            disabled={loading}
            onClick={approveJob}
          >
            {!loading ? 'Confirm Job' : 'Loading'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
