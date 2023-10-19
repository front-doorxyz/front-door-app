import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Banner from '../../components/Banner';
import { Layout } from '../../components/layout';
import usePolybase from '@/hooks/usePolybase';
import { isValidURL } from '@/helpers';

type Candidate = {
  id: string;
  score: number;
  email: string;
  name: string;
  site: string;
};

const CandidateData: React.FC<{
  candidateArr: Candidate[];
  openModal: (candidate: Candidate) => void;
}> = ({ candidateArr, openModal }) => {
  return (
    <tbody>
      {candidateArr.map((candidate, index) => (
        <tr
          key={candidate.id}
          className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}
        >
          <td className='border border-blue-500 p-2'>{candidate.id}</td>
          <td className='border border-blue-500 p-2'>{candidate.score}</td>
          <td className='border border-blue-500 p-2'>
            <button
              className='rounded bg-blue-500 px-2 py-1 text-white'
              onClick={() => openModal(candidate)}
            >
              View Profile
            </button>
          </td>
          <td className='border border-blue-500 p-2'>
            <button
              className='rounded bg-blue-500 px-2 py-1 text-white'
              onClick={() => {
                const portfolioLink = candidate?.site;
                if (isValidURL(portfolioLink)) {
                  window.open(portfolioLink, '_blank');
                }
              }}
            >
              Contact
            </button>
          </td>
          <td className='border border-blue-500 p-2'>
            <button className='rounded bg-blue-500 px-2 py-1 text-white'>
              Reject
            </button>
          </td>
          <td className='border border-blue-500 p-2'>
            <button className='rounded bg-blue-500 px-2 py-1 text-white'>
              Hire
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const CandidateManagement: NextPage = () => {
  const { readCandidateData } = usePolybase();
  const [candidateArr, setCandidateArr] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    readCandidateData()
      .then((candidateList: Candidate[]) => setCandidateArr(candidateList))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout title='Candidate Management'>
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
          <CandidateData candidateArr={candidateArr} openModal={openModal} />
        </table>
      </div>
      {selectedCandidate && (
        <div
          className={`${
            isModalOpen ? 'block' : 'hidden'
          } fixed inset-0 z-50 flex items-center justify-center`}
        >
          <div className='text-black-300 fixed w-1/2 rounded-lg bg-white p-4 shadow-lg'>
            <div className='modal-content'>
              <h2 className='mb-2 text-2xl font-bold'>Candidate Profile</h2>
              <p>
                <span className='font-bold'>Address:</span>{' '}
                {selectedCandidate.id}
              </p>
              <p>
                <span className='font-bold'>Email:</span>{' '}
                {selectedCandidate.email}
              </p>
              <p>
                <span className='font-bold'>Name:</span>{' '}
                {selectedCandidate.name}
              </p>
              <p>
                <span className='font-bold'>Website:</span>{' '}
                {selectedCandidate.site}
              </p>
            </div>
            <button
              className='bg-blue-500 px-2 py-1 text-white'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CandidateManagement;
