import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Banner from '../../components/Banner';
import { Layout } from '../../components/layout';
import { isValidURL } from '@/helpers';
import CandidateData from './candidateData';
import { CandidateItem } from '@/db/entities/candidate';
import { useAccount } from 'wagmi';

const CandidateManagement: NextPage = () => {
  const { address } = useAccount();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [candidates, setCandidates] = useState<CandidateItem[]>([]);

  const listCompanyCandidates = async () => {
    const res = await fetch('../api/companies/' + address + '/applications');
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('bad response');
    }
  };

  useEffect(() => {
    if (address) {
      listCompanyCandidates()
        .then((candidateList) => setCandidates(candidateList.items))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  }, [address]);

  return (
    <Layout title='Candidate Management'>
      <Banner title='Candidate Management Test' />
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
