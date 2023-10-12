import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";
import usePolybase from "../../hooks/usePolybase";
import { Address } from "wagmi";
import Description from "../../components/JobComponents/Description";
import ReferJob from "../../components/JobComponents/ReferJob";

const JobInfo: NextPage = () => {
  const router = useRouter();
  const { readCompanyById, readJobListingById } = usePolybase();
  const [jobId, setJobId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [jobInfo, setJobInfo] = useState<any>({});
  const [companyInfo, setCompanyInfo] = useState<any>({});

  useEffect(() => {
    if (jobInfo?.description && companyInfo?.companyName) {
      setLoading(false);
    }
  }, [jobInfo, companyInfo]);

  useEffect(() => {
    const { id } = router.query || " ";
    setJobId(String(id));

    readJobListingById(String(id))
      .then((jobListing) => {
        setJobInfo(jobListing);
        getCompanyData(jobListing.owner);
      })
      .catch((error) => {
        // Handle the error appropriately
      });
  }, [router]);

  const getCompanyData = async (address: Address) => {
    const data = await readCompanyById(address);
    setCompanyInfo(data);
  };

  return (
    <>
      {!loading ? (
        <Layout title="job-info">
          <Banner
            navigation
            title={companyInfo.companyName}
            subtitle={companyInfo.description}
          />
          <div className="w-full grid grid-cols-6 grid-rows-1 gap-8 min-h-[80vh]">
            <div></div>
            <div className=" bg-white shadow-lg col-span-3 p-3 mt-[-6%] rounded-md">
              <Description
                id={jobId}
                roleTitle={jobInfo.roleTitle}
                description={jobInfo.description}
                location={jobInfo.location}
                maxSalary={jobInfo.maxSalary}
                minSalary={jobInfo.minSalary}
                bounty={jobInfo.bounty}
              />
            </div>
            <div className="bg-white shadow-lg col-span-1 mt-[4%] h-[20vh] rounded-md">
              <ReferJob jobId={jobId} />
            </div>
          </div>
        </Layout>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default JobInfo;
