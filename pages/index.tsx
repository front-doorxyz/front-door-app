import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Layout } from "../components/layout";
import usePolybase from "../hooks/usePolybase";
import Banner from "../components/Banner";
import Job from "../components/JobComponents/Job";
import * as eth from "@polybase/eth";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { address }:any = useAccount()
  const { readAllJobListings } = usePolybase(
    async (data: string) => {
       const sig = await eth.sign(data, address);
       return { h: "eth-personal-sign", sig };
     })
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
        title="Refer to the best jobs"
        subtitle="Best bounties available for referrers bringing best candidates"
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
