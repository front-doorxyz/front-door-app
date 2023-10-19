import usePolybase from '@/hooks/usePolybase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const data = [
  {
    id: 1,
    walletAddress: '0x56f…ad49',
    feedbackScore: 5,
  },
  {
    id: 2,
    walletAddress: '0x39j…ke43',
    feedbackScore: 5,
  },
  {
    id: 3,
    walletAddress: '0x83m…jd82',
    feedbackScore: 4,
  },
  {
    id: 4,
    walletAddress: '0x49x…jd28',
    feedbackScore: 4,
  },
  {
    id: 5,
    walletAddress: '0x82z…le92',
    feedbackScore: 3,
  },
  {
    id: 6,
    walletAddress: '0x01p…hq71',
    feedbackScore: 3,
  },
  {
    id: 7,
    walletAddress: '0x45b…hz79',
    feedbackScore: 3,
  },
  {
    id: 8,
    walletAddress: '0x82x…nk18',
    feedbackScore: 5,
  },
  {
    id: 9,
    walletAddress: '0x71m…hi54',
    feedbackScore: 2,
  },
  {
    id: 10,
    walletAddress: '0x90z…ji87',
    feedbackScore: 1,
  },
  {
    id: 11,
    walletAddress: '0x77n…lo17',
    feedbackScore: 5,
  },
];

const CandidateData = () => {
  const { readJobListingById, readCandidateById } = usePolybase();
  const [jobId, setJobId] = useState('');
  const [jobInfo, setJobInfo] = useState<any>({});
  const [candidates, setCandidates] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    const { id }: any = router.query;
    setJobId(String(id));

    readJobListingById(id)
      .then((jobListing: any) => {
        setJobInfo(jobListing);
      })
      .catch((error: any) => {
        // Handle the error appropriately
      });
  }, [router]);

  useEffect(() => {
    if (jobInfo?.candidates && jobInfo?.candidates.length > 0) {
      getCandidatesInfo();
    }
  }, [jobInfo]);

  const getCandidatesInfo = async () => {
    const candidateDataPromises = jobInfo.candidates.map(async (id: string) => {
      const data = await readCandidateById(id);
      console.log(data);
      return {
        id,
        name: data?.name,
        email: data?.email,
        site: data?.site,
      };
    });

    const candidatesData: any = await Promise.all(candidateDataPromises);
    setCandidates(candidatesData);
  };

  return (
    <tbody>
      {candidates?.map((item: any, index: any) => (
        <tr
          key={item.id}
          className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}
        >
          <td className='border border-blue-500 p-2 text-black'>{item.id}</td>
          <td className='border border-blue-500 p-2'>{item.feedbackScore}</td>
          <td className='border border-blue-500 p-2'>
            <a href='#' className='text-blue-500 hover:underline'>
              View Profile
            </a>
          </td>
          <td className='border border-blue-500 p-2'>
            <button
              className='rounded bg-blue-500 px-2 py-1 text-white'
              onClick={() => {
                const portfolioLink = item?.site;
                window.open(portfolioLink, '_blank');
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
    </tbody>
  );
};

export default CandidateData;
