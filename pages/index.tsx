import React, { useState } from "react";
import type { NextPage } from "next";
import authImg from "../assets/frontdoor.jpg";
import howitworks from "../assets/howitworks.png";
import Image from "next/image";
import { Layout } from "../components/layout";
import register2 from "../assets/register2.jpg";
import register from "../assets/register.jpg";
import CompanyRegister from "../components/CompanyRegister";
import ReferrerRegister from "../components/ReferrerRegister";

const Home: NextPage = () => {
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
    <Layout title="Home">
      <h1 className="dark:text-white font-extrabold lg:text-4xl text-white-900 mx-auto text-center my-5">
        Front Door Protocol
      </h1>
      <div className="flex mt-10">
        <div className="md:w-1/2 lg:w-1/2 dark:text-white mr-2 text-lg mt-5">
          <p className="mb-10">
            Front Door unlocks collaboration in the fragmented $420 billion
            recruitment ecosystem.
          </p>
          <p className="mb-10">
            The ecosystem is highly fragmented, participants have conflicting
            incentives, and collaboration is fraught with friction. Reputation
            is built on personal brand instead of performance, and transparency
            is limited.
          </p>
          <p className="mb-10">
            Front Door improves collaboration, deepening the talent pools that
            hiring managers can access, enables recruitment firms to reduce
            wasted effort and increases client satisfaction, enabling
            individuals and community leads to refer-to-earn from their
            professional networks.
          </p>
          <p className="mb-10">
            Front Door uses Web3 tools and technology to solve a Web2 human
            coordination problem with a huge size of prize for you, the members
            of the recruitment ecosystem.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/2">
          <Image
            src={authImg}
            alt="Front Door"
            style={{
              width: "100%",
              height: "85%",
            }}
            priority
          />
        </div>
      </div>
      <h1 className="dark:text-blue font-extrabold lg:text-4xl text-blue-900 mx-auto text-center my-5">
        How does it work?
      </h1>
      <div className="flex mt-10">
        <div className="md:w-1/2 lg:w-1/2 dark:text-black mr-2 text-lg mt-5">
          <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-blue-900 md:text-5xl lg:text-3xl dark:text-blue">
            Approach
          </h1>
          <ol className="mb-10 list-decimal list-inside dark:text-blue text-blue-900">
            <li>
              Clients sign up to a Dapp and post job requirements, accepting
              terms and conditions as part of the smart contract transaction.
            </li>
            <li>
              Role is promoted to Front Door's network for referral
              monetization.
            </li>
            <li>
              Client receives suggested shortlist of candidates from platform
              representatives and controls the interview process.
            </li>
            <li>
              Client sets the fee for the role and funds are only released when
              refund timings have been passed, minimizing credit risk.
            </li>
            <li>
              Candidate receives the recruitment fee once the client makes full
              payment, which is controlled by the Front Door finance team.
            </li>
            <li>
              A 3-month refund period exists for clients, with a refund
              percentage decreasing each month. Failure to make full payment
              leads to platform ban and bad debt collection policies.
            </li>
          </ol>
        </div>
        <div className="md:w-1/2 lg:w-1/2">
          <Image
            src={howitworks}
            alt="Front Door"
            style={{
              width: "150%",
              height: "100%",
            }}
            priority
          />
        </div>
      </div>
      <h1 className="dark:text-blue font-extrabold lg:text-4xl text-blue-900 mx-auto text-center my-5 py-10 mt-10">
        Register
      </h1>
      <div className="flex mt-10 ">
        <div className="pt-[1%] w-[50%]">
          <div className="tabs tabs-boxed flex justify-center  gap-2">
            <a
              id="1"
              className={`inline-block px-4 py-3 text-white bg-blue-600 rounded-lg  ${active ? "tab-active" : ""}`}
              onClick={activeTab}
            >
              Company Register
            </a>
            <a
              id="2"
              className={`inline-block px-4 py-3 text-white bg-green-600 rounded-lg ${!active ? "tab-active" : ""}`}
              onClick={activeTab}
            >
              Referrer Register
            </a>
          </div>
          <div className="flex justify-center">
            {active ? <CompanyRegister /> : <ReferrerRegister />}
          </div>
        </div>
        <div className="absolute right-0 hidden mt-[0.2%]   md:block lg:w-[47vw]">
          <div
            className="absolute flex h-[94vh] w-4/5  bg-secondary bg-contain bg-no-repeat bg-start "
            style={{
              backgroundImage: active
                ? `url(${register.src})`
                : `url(${register2.src})`,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
