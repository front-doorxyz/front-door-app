import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import candidates from '../assets/candidates.jpeg';
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

  useEffect(() => {
    readAllJobListings()
      .then((jobListings) => setJobArr(jobListings))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTitleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTitleInput(e.target.value);
  };

  const handleLocationInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocationInput(e.target.value);
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const filteredJobs = jobArr.filter((job: { roleTitle: string; location: string; }) =>
      job.roleTitle.toLowerCase().includes(titleInput.toLowerCase()) &&
      job.location.toLowerCase().includes(locationInput.toLowerCase())
    );

    setFilteredJobs(filteredJobs);
  };

  return (
    <Layout title="Home">
      <div
        style={{
          position: 'relative',
          margin: 'auto',
          padding: '100px',
        }}
      >
        <Image
          src={candidates}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div
          style={{
            position: 'relative',
            backgroundColor: 'rgba(244, 244, 244, 0.7)',
            margin: 'auto',
          }}
        >
          <p className="bg-purple-200 pl-10 text-left font-bold text-gray-700">
            Find the best job
          </p>
          <form
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              padding: '1rem',
            }}
            onSubmit={handleSearch} 
          >
            <div style={{ flex: '1' }}>
              <input
                type="text"
                placeholder="Job Title"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  outline: 'none',
                }}
                value={titleInput}
                onChange={handleTitleInputChange}
              />
            </div>
            <div style={{ flex: '1' }}>
              <input
                type="text"
                placeholder="Location"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  outline: 'none',
                }}
                value={locationInput}
                onChange={handleLocationInputChange}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#3B82F6',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <h1 className="mx-auto mb-6 flex max-w-[80%] justify-center text-center text-2xl font-bold md:mb-8 md:max-w-[300px] md:max-w-[600px] md:pt-24 md:text-4xl">
        The #1 platform for building transparent futures
      </h1>
      <div className=" mb-12 flex flex-row items-center justify-center sm:mx-auto sm:px-6 md:mb-16">
        <Stats stats={stats} />
      </div>

      <div className="container">
        <div className="text-2xl font-semibold">
          Showing {filteredJobs.length || jobArr.length} Job(s)
        </div>
        <div className="mt-[2%] flex flex-wrap justify-center gap-5 md:justify-start md:gap-7">
          {(filteredJobs.length > 0 ? filteredJobs : jobArr).map((job: any) => (
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
