import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Stats from '@/components/ui/stats';
import StatusBadge from '@/components/ui/status-badge';
import Profile from '@/components/ui/table/profile';
import Table, { type TableConfig } from '@/components/ui/table/table';
import {
  ArrowTopRightOnSquareIcon,
  HandThumbUpIcon,
  NoSymbolIcon,
} from '@heroicons/react/24/solid';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Layout } from '../../components/layout';
import {
  JobApplication,
  Status,
} from '../api/companies/[companyId]/applications';

type Data = {
  id: string;
  address: string;
  name: string;
  lastName: string;
  firstName: string;
  email: string;
  status: string;
  score: number;
  date: string;
  site: string;
};

const stats = [
  { name: 'New Candidates', value: 200 },
  { name: 'Active Candidates', value: 200 },
  { name: 'Total Candidates', value: 200 },
];

const CandidateManagement: NextPage = () => {
  const { address } = useAccount();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [candidates, setCandidates] = useState<JobApplication[]>([]);

  const tableConfig: TableConfig<Data> = {
    extraOptions: {
      items: [
        {
          label: 'Contact',
          action: () => alert('This feature is coming soon'),
        },
        {
          label: 'Wallet Address',
          action: (rowId) =>
            alert(
              'Wallet Address: ' +
                candidates.find(
                  (candidate) => candidate.application.applicationId === rowId
                )?.application.walletAddress
            ),
        },
      ],
    },
    columns: [
      {
        headerName: 'Candidate',
        selector: (data) => ({
          fullName:
            data.firstName && data.lastName
              ? data.firstName + ' ' + data.lastName
              : data.name || '...',
          email: data.email || '...',
          firstName: data.firstName,
          lastName: data.lastName,
        }),
        child: (data: any) => (
          <Profile
            fullName={data.fullName}
            email={data.email}
            avatarUrl={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${
              data.fullName && data.fullName !== '...'
                ? data.fullName
                : (data.firstName ?? 'F') + (data.lastName ?? 'D')
            }`}
          />
        ),
      },
      {
        headerName: 'Status',
        selector: (data) => data.status,
        child: (data: Status) => <StatusBadge status={data} />,
      },
      { headerName: 'Date', selector: (data) => data.date ?? '...' },
      { headerName: "Referrer's Score", selector: (data) => data.score },
      {
        headerName: 'Profile',
        selector: (data) => data,
        child: (data: Data) => (
          <Dialog>
            <DialogTrigger>View</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Candidate Profile</DialogTitle>
                <div>
                  <div className='flex gap-2'>
                    <span className='font-semibold'>Name: </span>
                    {data.firstName && data.lastName
                      ? data.firstName + ' ' + data.lastName
                      : data.name || '...'}
                  </div>
                  <div className='flex gap-2'>
                    <span className='font-semibold'>Email:</span>
                    {data.email || '...'}
                  </div>
                  <div>
                    <span className='font-semibold'>Address:</span>{' '}
                    {data.address}
                  </div>
                  <div className='flex gap-2'>
                    <span className='font-semibold'>Website:</span>
                    {data.site ? (
                      <div className='flex gap-2'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={data.site}
                        >
                          {data.site}
                        </a>
                        <ArrowTopRightOnSquareIcon className='h-5 w-5' />
                      </div>
                    ) : (
                      '...'
                    )}
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        headerName: 'Actions',
        selector: (data) => data.status,
        child: (data: Status) => (
          <div className='flex gap-2'>
            <Button
              className='min-w-[115px] gap-2'
              variant={'destructive'}
              disabled={data !== 'pending'}
              onClick={() => alert('This feature is coming soon')}
            >
              <NoSymbolIcon className=' h-4 w-4' />
              Reject
            </Button>
            <Button
              className='min-w-[115px] gap-2'
              disabled={data !== 'pending'}
              onClick={() => alert('This feature is coming soon')}
            >
              <HandThumbUpIcon className=' h-4 w-4 text-green-600' /> Hire
            </Button>
          </div>
        ),
      },
    ],
    rows: [
      ...candidates.map(
        (candidate) =>
          ({
            id: candidate.application.applicationId,
            lastName: candidate.candidate.lastName,
            firstName: candidate.candidate.firstName,
            name: candidate.candidate.name,
            email: candidate.candidate.email,
            status: candidate.application.status,
            score: candidate.referrer.score,
            address: candidate.application.walletAddress,
            date: candidate.application.date,
            site: candidate.candidate.site,
          }) as Data
      ),
    ],
  };

  const listCompanyCandidates = async () => {
    const res = await fetch('../api/companies/' + address + '/applications');
    if (res.ok) {
      return (await res.json()).items as JobApplication[];
    } else {
      throw new Error('bad response');
    }
  };

  useEffect(() => {
    if (address) {
      listCompanyCandidates()
        .then((candidateList) => setCandidates(candidateList))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  }, [address]);

  return (
    <Layout title='Candidate Management'>
      <h1 className='mx-auto mb-6 flex max-w-[80%] justify-center pt-8 text-center text-2xl font-bold md:mb-8 md:max-w-[300px] md:max-w-[600px] md:pt-24 md:text-4xl'>
        Candidate Management
      </h1>
      <section className='mb-12'>
        <Stats stats={stats} />
      </section>
      <div className='container'>
        <Table config={tableConfig} loading={isLoading} />
      </div>
    </Layout>
  );
};

export default CandidateManagement;
