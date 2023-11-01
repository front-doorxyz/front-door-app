import JobCard from '@/components/JobComponents/JobCard';
import Stats from '@/components/ui/stats';
import { JobItem } from '@/db/entities/job';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from '../components/layout';

const stats = [
  { name: 'New Jobs', value: 200 },
  { name: 'Users', value: 4200 },
  { name: 'Total Bounty Value', value: 31000 },
];

const Home: NextPage = () => {
  const [jobArr, setJobArr] = useState<JobItem[]>([]);

  const readAllJobListings = async () => {
    const response = await fetch('api/jobs');
    return await response.json();
  };

  useEffect(() => {
    readAllJobListings()
      .then((jobListings) => setJobArr(jobListings.items))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout title='Home'>
      <h1 className='mx-auto mb-6 flex max-w-[80%] justify-center pt-8 text-center text-2xl font-bold md:mb-8 md:max-w-[300px] md:max-w-[600px] md:pt-24 md:text-4xl'>
        The #1 platform for building transparent futures
      </h1>
      <div className=' mb-12 flex flex-row items-center justify-center sm:mx-auto sm:px-6 md:mb-16'>
        <Stats stats={stats} />
      </div>

      <div className='container'>
        <div className='text-2xl font-semibold'>
          Showing {jobArr.length} Jobs
        </div>
        <div className='mt-[2%] flex flex-wrap justify-center gap-5 md:justify-start md:gap-7'>
          {jobArr.map((job) => (
            <JobCard
              key={job.jobId}
              id={job.jobId}
              description={job.description}
              companyName={job.companyName}
              roleTitle={job.roleTitle}
              skills={job?.skills ?? '' !== '' ? job.skills.split(',') : []}
              bounty={job.bounty}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
