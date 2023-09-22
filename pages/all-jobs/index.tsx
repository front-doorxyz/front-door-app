import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Job from "../../components/JobComponents/Job";
import { Layout } from "../../components/layout";
import usePolybase from "../../hooks/usePolybase";

const AllJobs: NextPage = () => {
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
      <h1 className="dark:text-white font-extrabold lg:text-4xl text-white-900 mx-auto text-center my-5">
        All Jobs
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-[2%]">
        {jobArr.map((job: any) => (
          <Job
            id={job.id}
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

export default AllJobs;
