import { NextPage } from "next";
import React, { useState } from "react";
import Banner from "../../components/Banner";
import AddJob from "../../components/JobComponents/AddJob";
import ClientJobs from "../../components/JobComponents/ClientJobs";
import { Layout } from "../../components/layout";

const Profile: NextPage = () => {
  const [active, setActive] = useState<boolean>(true);

  const activeTab = (e: any) => {
    const id = e.target.id;
    if (id === "1") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Layout title="Profile">
      <Banner title="Hiring Company" />
      <div className="flex flex-col items-center justify-center mt-[2%]">
        <div className="tabs tabs-boxed flex justify-center gap-2">
          <a
            id="1"
            className={`tab tab-lg tab-lifted ${active ? "tab-active" : ""}`}
            onClick={activeTab}>
            Add a job
          </a>
          <a
            id="2"
            className={`tab tab-lg tab-lifted ${!active ? "tab-active" : ""}`}
            onClick={activeTab}>
            Few previous jobs
          </a>
        </div>
        {active ? <AddJob /> : <ClientJobs />}
      </div>
    </Layout>
  );
};

export default Profile;
