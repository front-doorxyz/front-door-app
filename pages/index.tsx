import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Layout } from "../components/layout";
import usePolybase from "../hooks/usePolybase";
import Banner from "../components/Banner";
import Job from "../components/JobComponents/Job";
import Image from "next/image";
import candidates from "../assets/candidates.jpeg";

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
        title="Refer to the best jobs"
        subtitle="Best bounties available for referrers bringing the best candidates"
      />

      <div
        style={{
          position: "relative",
          margin: "auto",
          padding: "100px",
        }}
      >
      <Image
        src={candidates}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100} // Add this to prevent image quality loss
      />
            <div
        style={{
          position: "relative",
          backgroundColor: "rgba(244, 244, 244, 0.7)",
          margin: "auto",
        }}> 
<p className="bg-purple-200 text-left font-bold text-gray-700 pl-10">Find the best job</p>
        <form
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1rem",
            // maxWidth: "800px",
            margin: "0 auto",
          }}
        >
<div style={{ flex: "1" }}>
            <input
              type="text"
              placeholder="Job Title"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #E5E7EB",
                borderRadius: "0.375rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ flex: "1" }}>
            <input
              type="text"
              placeholder="Location"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #E5E7EB",
                borderRadius: "0.375rem",
                outline: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
        </div>
      </div>

      <div
        className="pl-10 flex flex-wrap items-left justify-left gap-8 mt-[2%]"
        style={{ position: "relative" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "16px",
          }}
        >
          {jobArr.map((job: any) => (
            <div
              key={job.id}
              style={{
                flex: "0 0 calc(25% - 16px)",
                marginBottom: "16px",
              }}
            >
              <Job
                id={job.id}
                description={job.description}
                companyName={job.companyName}
                roleTitle={job.roleTitle}
                location={job.location}
                minSalary={job.minSalary}
                maxSalary={job.maxSalary}
                bounty={job.bounty}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
