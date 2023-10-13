import { NextPage } from "next";
import React from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";
import candidateData from "./candidateData"; // Import the data

const CandidateManagement: NextPage = () => {
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
          <tbody>
            {candidateData.map((data) => (
              <tr key={data.id} className={data.id % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}>
                <td className="border border-blue-500 p-2">{data.id}</td>
                <td className="border border-blue-500 p-2">{data.walletAddress}</td>
                <td className="border border-blue-500 p-2">{data.feedbackScore}</td>
                <td className="border border-blue-500 p-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    View Profile
                  </a>
                </td>
                <td className="border border-blue-500 p-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Contact</button>
                </td>
                <td className="border border-blue-500 p-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Reject</button>
                </td>
                <td className="border border-blue-500 p-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Hire</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CandidateManagement;
