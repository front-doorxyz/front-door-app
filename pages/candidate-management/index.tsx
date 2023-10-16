import { NextPage } from "next";
import React from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";
import CandidateData from "./candidateData";

const candidateManagement: NextPage = () => {
  return (
    <Layout title="Profile">
      <Banner title="Candidate Management" />
      <div className="flex flex-col items-center justify-center mt-[2%] pl-3 pr-3">
        <table className="w-full border-collapse border border-blue-500">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-blue-500 p-2">S/N</th>
              <th className="border border-blue-500 p-2">Candidate Wallet Address</th>
              <th className="border border-blue-500 p-2">Referrer Feedback Score</th>
              <th className="border border-blue-500 p-2">Attached Profile Link</th>
              <th className="border border-blue-500 p-2">Contact Candidate</th>
              <th className="border border-blue-500 p-2">Reject Candidate</th>
              <th className="border border-blue-500 p-2">Hire Candidate</th>
            </tr>
          </thead>
          <CandidateData />
        </table>
      </div>
    </Layout>
  );
};

export default candidateManagement;
