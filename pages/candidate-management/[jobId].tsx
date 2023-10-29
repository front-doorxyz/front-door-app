import { CandidateItem } from '@/db/entities/candidate';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Banner from '../../components/Banner';
import { Layout } from '../../components/layout';
import CandidateData from './candidateData';

const CandidateManagement: NextPage = () => {
  const router = useRouter();
  
  const [isLoading, setLoading] = useState<boolean>(true);
  const [candidates, setCandidates] = useState<CandidateItem[]>([]);

  const listAppliedCandidates = async (jobId: string) => {
    const res = await fetch('../api/jobs/' + jobId + '/candidates');
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('bad response');
    }
  };

  useEffect(() => {
    let { jobId } = router.query;
    jobId = Array.isArray(jobId) ? jobId[0] : jobId;
    if (jobId) {
      listAppliedCandidates(jobId)
        .then((jobCandidates) => {
          setCandidates(jobCandidates.items);
        })
        .catch((error: any) => {
          toast.error('Something went wrong fetching candidates data!');
          router.push('/');
        })
        .finally(() => setLoading(false));
    }
  }, [router]);

  return (
    <Layout title='Profile'>
      <Banner title='Candidate Management' />
      <div className='mt-[2%] flex flex-col items-center justify-center pl-3 pr-3'>
        <table className='w-full border-collapse border border-blue-500'>
          <thead>
            <tr className='bg-blue-500 text-white'>
              <th className='border border-blue-500 p-2'>
                Candidate Wallet Address
              </th>
              <th className='border border-blue-500 p-2'>
                Referrer Feedback Score
              </th>
              <th className='border border-blue-500 p-2'>
                Attached Profile Link
              </th>
              <th className='border border-blue-500 p-2'>Contact Candidate</th>
              <th className='border border-blue-500 p-2'>Reject Candidate</th>
              <th className='border border-blue-500 p-2'>Hire Candidate</th>
            </tr>
          </thead>
          <CandidateData candidates={candidates} loading={isLoading} />
        </table>
      </div>
    </Layout>
  );
};

export default CandidateManagement;
