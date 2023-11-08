import { NextPage } from "next";
import React from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";
import ReferrerData from "./referrerData";

const Referrer: NextPage = () => {
  return (
    <Layout title="Profile">
      <Banner title="Client Communication Log" />
      <div className="flex flex-col items-center justify-center mt-[2%] pl-3 pr-3">
        <table className="w-full border-collapse border border-blue-500">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-blue-500 p-2">S/N</th>
              <th className="border border-blue-500 p-2">Wallet address of candidates contacted by Clients</th>
              <th className="border border-blue-500 p-2">Role</th>
              <th className="border border-blue-500 p-2">Client</th>
              <th className="border border-blue-500 p-2">Contact Date</th>
              <th className="border border-blue-500 p-2">Candidate Start date</th>
              <th className="border border-blue-500 p-2">Probation End date</th>
              <th className="border border-blue-500 p-2">Rejection date</th>
              <th className="border border-blue-500 p-2">Funds received</th>
              <th className="border border-blue-500 p-2">Candidate Review Score</th>
            </tr>
          </thead>
          <ReferrerData />
        </table>
      </div>
    </Layout>
  );
};

export default Referrer;
