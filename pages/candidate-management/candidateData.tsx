import { CandidateItem } from '@/db/entities/candidate';
import { isValidURL } from '@/helpers';
import { useState } from 'react';
import { toast } from 'react-toastify';

type CandidateDataProps = { loading: boolean; candidates: CandidateItem[] };

const CandidateData = ({ candidates = [], loading }: CandidateDataProps) => {
  const [selectedCandidate, setSelectedCandidate] =
    useState<CandidateItem | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (candidate: CandidateItem) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
    setIsModalOpen(false);
  };

  return (
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={6}>Loading...</td>
        </tr>
      ) : (
        <>
          {candidates?.length > 0 ? (
            candidates?.map((candidate, index) => (
              <tr
                key={candidate.walletAddress}
                className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}
              >
                <td className='border border-blue-500 p-2 text-black'>
                  {candidate.walletAddress}
                </td>
                <td className='border border-blue-500 p-2'>{candidate.name}</td>
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
                      if (portfolioLink && isValidURL(portfolioLink)) {
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
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Candidates yet.</td>
            </tr>
          )}
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
                {selectedCandidate.walletAddress}
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
