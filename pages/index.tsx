import JobCard from '@/components/JobComponents/JobCard';
import Stats from '@/components/ui/stats';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from '../components/layout';
import usePolybase from '../hooks/usePolybase';

const stats = [
  { name: 'New Jobs', value: 200 },
  { name: 'Users', value: 4200 },
  { name: 'Total Bounty Value', value: 31000 },
];

const Home: NextPage = () => {
  const { readAllJobListings } = usePolybase();
  const [jobArr, setJobArr] = useState<any>([]);

  useEffect(() => {
    readAllJobListings()
      .then((jobListings) => setJobArr(jobListings))
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
          {jobArr.map((job: any) => (
            <JobCard
              key={job.id}
              id={job.id}
              description={job.description}
              companyName={job.companyName}
              roleTitle={job.roleTitle}
              location={job.location}
              salary={job.salary}
              bounty={job.bounty}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
