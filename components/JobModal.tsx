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
      <div className='relative h-[50vh] w-[50vw] rounded-lg bg-white p-4'>
        <div className='text-xl font-bold'>Client Fees Page</div>
        <button
          className='absolute right-2 top-2'
          onClick={() => {
            setModal(false);
          }}
        >
          <XMarkIcon className='text-tertiary h-6 w-6' />
        </button>
        <div className='mt-[1%] flex h-full flex-col flex-wrap items-center p-8'>
          <div id='headers' className='flex flex-wrap items-center gap-2'>
            <div className='text-bold flex h-[50px] items-center justify-center border-2 border-accent p-2 md:w-[710px]'>
              Total fee structure excluding Taxes to pay for the sourcing of a
              Successful Candidate
            </div>
          </div>
          <div id='info' className='mt-[1%] flex flex-col  items-center gap-2'>
            <div className='flex flex-wrap gap-2'>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                Role -- {jobInfo.roleTitle}
              </div>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                Bounty -- {jobInfo.bounty}
              </div>
            </div>
            <div className='flex flex-wrap gap-2'>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                Referrer Share[65%]
              </div>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                $ {referrerShare}
              </div>
            </div>
            <div className='flex flex-wrap gap-2'>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                Candidate Share[10%]
              </div>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                $ {candidateShare}
              </div>
            </div>
            <div className='flex flex-wrap gap-2'>
              <div className='flex h-[40px] items-center justify-center border-2 border-accent md:w-[350px]'>
                Front Door Share[25%]
              </div>
              <div className='flex h-[40px] items-center justify-center  border-2 border-accent md:w-[350px]'>
                $ {frontDoorShare}
              </div>
            </div>
          </div>
          <div
            id='confirm'
            className='mt-[1%] flex flex-col items-center gap-2'
          >
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
    </div>
  );
};

export default JobModal;
