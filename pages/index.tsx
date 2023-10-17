import JobCard from '@/components/JobComponents/JobCard';
import Stats from '@/components/ui/stats';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from '../components/layout';
import usePolybase from '../hooks/usePolybase';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { jobOnSkills, jobs, skills } from '@/lib/db/schemas/jobs';

const stats = [
  { name: 'New Jobs', value: 200 },
  { name: 'Users', value: 4200 },
  { name: 'Total Bounty Value', value: 31000 },
];

const Home: NextPage = () => {
  const { readAllJobListings } = usePolybase();
  const [jobArr, setJobArr] = useState<any>([]);

  const seed = async () => {
    const skill = await db
      .insert(skills)
      .values({ id: 1, name: 'JAVA' })
      .execute();
  };

  const handleAddJob = async () => {
    try {
      await db.insert(jobs).values({
        companyName: 'Sample Company 2 ',
        description: 'This is a sample job description. 2',
        location: 'Sample City 2',
        roleTitle: 'Software Developer',
        bounty: 5000,
        maxSalary: 80000,
        minSalary: 60000,
        type: 'Full-time',
        experience: '2-4 years',
        langaugeSpoken: 'English',
      });
      const response = await db
        .insert(jobOnSkills)
        .values({ jobId: 4, skillId: 1 })
        .execute();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    db.query.jobs
      .findMany({
        with: {
          postSkills: {
            with: {
              skill: {
                columns: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .then((result) => {
        console.log(result);
        setJobArr(result);
      });
    // readAllJobListings()
    //   .then((jobListings) => setJobArr(jobListings))
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <Layout title='Home'>
      <h1 className='mx-auto mb-6 flex max-w-[80%] justify-center pt-8 text-center text-2xl font-bold md:mb-8 md:max-w-[300px] md:max-w-[600px] md:pt-24 md:text-4xl'>
        The #1 platform for building transparent futures
      </h1>
      <Button onClick={seed}>Seed</Button>
      <Button onClick={handleAddJob}>Add Job</Button>
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
              minSalary={job.minSalary}
              maxSalary={job.maxSalary}
              bounty={job.bounty}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
