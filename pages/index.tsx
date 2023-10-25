import React, { useEffect, useState } from 'react';
import { Layout } from '../components/layout';
import JobCard from '@/components/JobComponents/JobCard';
import Stats from '@/components/ui/stats';
import usePolybase from '../hooks/usePolybase';
import { NextPage } from 'next';

const stats = [
  { name: 'New Jobs', value: 200 },
  { name: 'Users', value: 4200 },
  { name: 'Total Bounty Value', value: 31000 },
];

const Home: NextPage = () => {
  const { readAllJobListings } = usePolybase();
  const [jobArr, setJobArr] = useState<any>([]);
  const [titleInput, setTitleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<any>([]);
  const [searchError, setSearchError] = useState<string>('');

  useEffect(() => {
    readAllJobListings()
      .then((jobListings) => {
        setJobArr(jobListings);
        setFilteredJobs(jobListings); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTitleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitleInput(e.currentTarget.value);
  };

  const handleLocationInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLocationInput(e.currentTarget.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleInput && !locationInput) {
      setSearchError('Please provide a job title and/or location');
      return;
    } else {
      setSearchError(''); 
    }

    const filteredJobs = jobArr.filter(
      (job: { roleTitle: string; location: string }) =>
        job.roleTitle.toLowerCase().includes(titleInput.toLowerCase()) &&
        job.location.toLowerCase().includes(locationInput.toLowerCase())
    );

    setFilteredJobs(filteredJobs);
  };

  return (
    <Layout title='Home'>
      <h1 className='mx-auto mb-6 flex max-w-[80%] justify-center text-center text-2xl font-bold md:mb-8 md:max-w-[300px] md:max-w-[600px] md:pt-24 md:text-4xl'>
        The #1 platform for building transparent futures
      </h1>
      <div className='mb-12 flex flex-row items-center justify-center sm:mx-auto sm:px-6 md:mb-16'>
        <Stats stats={stats} />
      </div>

      <div className='mx-auto w-3/4'>
        <form
          className='flex items-center justify-between rounded bg-white p-2 shadow'
          onSubmit={handleSearch}
        >
          <input
            type='text'
            placeholder='Job Title'
            className='text-white-100 mr-2 w-3/4 flex-1 px-4 py-2 outline-none focus:outline-none'
            value={titleInput}
            onChange={handleTitleInputChange}
          />
          <input
            type='text'
            placeholder='Location'
            className='text-white-900 w-2/3 flex-1 px-4 py-2 outline-none focus:outline-none'
            value={locationInput}
            onChange={handleLocationInputChange}
          />
          <button
            className='ml-2 rounded bg-purple-900 px-4 py-2 text-white'
            type='submit'
          >
            Search
          </button>
        </form>
        {searchError && <p className="text-red-500">{searchError}</p>}
      </div>

      <div className='container'>
        <div className='text-2xl font-semibold'>
          {filteredJobs.length === 0 ? 'No results found' : `Showing ${filteredJobs.length} Job(s)`}
        </div>
        <div className='mt-[2%] flex flex-wrap justify-center gap-5 md:justify-start md:gap-7'>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job: any) => (
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
            ))
          ) : (
            <p className='text-gray-500'>No job listings match your criteria.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
