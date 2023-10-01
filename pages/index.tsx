import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Layout } from "../components/layout";
import usePolybase from "../hooks/usePolybase";
import Banner from "../components/Banner";
import Job from "../components/JobComponents/Job";

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
    <Layout title="Jobs">
      <Banner
        title="Find Best jobs"
        subtitle="Looking for jobs? Browse our latesting job openings to view"
      />
      <div className="flex flex-wrap items-center justify-center gap-8 mt-[2%]">
        {jobArr.map((job: any) => (
          <Job
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
    </Layout>
  );
};

export default Home;
