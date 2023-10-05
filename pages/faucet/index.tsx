import React from "react";
import { Layout } from "../../components/layout";
import type { NextPage } from "next";
import Banner from "../../components/Banner";

type Props = {};

const faucet: NextPage = (props: Props) => {
  return (
    <>
      <Layout title="Faucet">
        <Banner
          title="Front Door Faucet"
          subtitle="Request tokens for testing the site"
        />
        <div className="flex flex-col items-center justify-center h-full mt-[2%] gap-2">
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-[#3F007F] text-white shadow-md">
              Wallet Address
            </span>
            <input
              type="text"
              className="input input-bordered h-10 p-3 rounded-md border border-slate-800 w-[200px] md:w-[20vw]"
              // value={formData.name}
              // onChange={handleChange}
            />
            <button
              className="btn btn-primary
            ">
              Send me tokens
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default faucet;
