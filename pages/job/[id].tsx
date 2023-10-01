import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";

const JobInfo: NextPage = () => {
  const router = useRouter();
  const [jobId, setJobId] = useState("");

  return (
    <Layout title="job-info">
      <Banner navigation title="Company name" subtitle="company role" />
    </Layout>
  );
};

export default JobInfo;
