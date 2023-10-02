import { NextPage } from "next";
import React from "react";
import Banner from "../../components/Banner";
import AddJob from "../../components/JobComponents/AddJob";
import { Layout } from "../../components/layout";

const Profile: NextPage = () => {
  return (
    <Layout title="Profile">
      <Banner title="Profile" />
      <div className="flex items-center justify-center mt-[2%]">
        <AddJob />
      </div>
    </Layout>
  );
};

export default Profile;
