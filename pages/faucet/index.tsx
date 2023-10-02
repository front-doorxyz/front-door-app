import React from "react";
import { Layout } from "../../components/layout";
import type { NextPage } from "next";
import Banner from "../../components/Banner";

type Props = {};

const faucet: NextPage = (props: Props) => {
  return (
    <>
      <Layout title="Faucet">
        <Banner title="Request Tokens to use the platform" />
      </Layout>
    </>
  );
};

export default faucet;
