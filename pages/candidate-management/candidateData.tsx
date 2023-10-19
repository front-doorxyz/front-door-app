import { isValidURL } from '@/helpers';
import usePolybase from '@/hooks/usePolybase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Candidate = {
  id: string;
  score: number;
  email: string;
  name: string;
  site: string;
};

const CandidateData = () => {
  const { readCandidateDataForJob } = usePolybase();
  const [jobId, setJobId] = useState('');
  const [jobInfo, setJobInfo] = useState<any>({});
  const [candidates, setCandidates] = useState<any>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

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
    const { id }: any = router.query;
    setJobId(String(id));

    readCandidateDataForJob(id)
      .then((jobCandidates: any) => {
        console.log(jobCandidates);
        setCandidates(jobCandidates);
        setLoading(false); // Set loading to false when data is available
      })
      .catch((error: any) => {
        toast.error('Something went wrong fetching candidates data!');
        router.push('/');
      });
  }, [router]);

  return (
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={6}>Loading...</td>
        </tr>
      ) : (
        <>
          {candidates?.map((candidate: any, index: any) => (
            <tr
              key={candidate.id}
              className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}
            >
              <td className='border border-blue-500 p-2 text-black'>
                {candidate.id}
              </td>
              <td className='border border-blue-500 p-2'>
                {candidate.feedbackScore}
              </td>
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
                <button
                  className='rounded bg-blue-500 px-2 py-1 text-white'
                  onClick={() => toast.warning('coming soon!')}
                >
                  Reject
                </button>
              </td>
              <td className='border border-blue-500 p-2'>
                <button
                  className='rounded bg-blue-500 px-2 py-1 text-white'
                  onClick={() => toast.warning('coming soon!')}
                >
                  Hire
                </button>
              </td>
            </tr>
          ))}
        </>
      )}
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
    </tbody>
  );
};

export default CandidateData;
