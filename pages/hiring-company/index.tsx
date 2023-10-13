import { NextPage } from "next";
import AddJob from "../../components/JobComponents/AddJob";
import ClientJobs from "../../components/JobComponents/ClientJobs";
import { Layout } from "../../components/layout";
import router from "next/router";
import { useState } from "react";
import Banner from "../../components/Banner";

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
      <div className="flex items-center justify-end h-[20%] gap-4 mr-[2%] pt-5">
          <button
            className="px-6 py-2 rounded-[5px] bg-[#3F007F] text-sm md:text-md  text-white"
            onClick={() => router.push(`/candidate-management`)}>
            Manage Candidates
          </button>
        </div>
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
