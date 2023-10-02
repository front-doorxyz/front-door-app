import { NextPage } from "next";
import React, { useState } from "react";
import CompanyRegister from "../../components/CompanyRegister";
import ReferrerRegister from "../../components/ReferrerRegister";
import { Layout } from "../../components/layout";
const RegisterPage: NextPage = () => {
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
    <Layout title="Register">
      <div className="pt-[1%] w-[50%]">
        <div className="tabs tabs-boxed flex justify-center gap-2">
          <a
            id="1"
            className={`tab tab-lg tab-lifted ${active ? "tab-active" : ""}`}
            onClick={activeTab}>
            Company Register
          </a>
          <a
            id="2"
            className={`tab tab-lg tab-lifted ${!active ? "tab-active" : ""}`}
            onClick={activeTab}>
            Referrer Register
          </a>
        </div>
        <div className="flex justify-center">
          {active ? <CompanyRegister /> : <ReferrerRegister />}
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
