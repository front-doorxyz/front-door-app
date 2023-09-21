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
      <h1 className="dark:text-white font-extrabold lg:text-4xl text-white-900 mx-auto text-center my-5">
        How does it work?
      </h1>
      <div className="flex mt-10">
        <div className="md:w-1/2 lg:w-1/2 dark:text-black mr-2 text-lg mt-5">
          <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-3xl dark:text-white">
            Approach
          </h1>
          <ol className="mb-10 list-decimal list-inside dark:text-white text-white-900">
            <li>
              You sign up, post your role requirements, and set your fee level
              in 2 easy steps.
            </li>
            <li>
              Front Door promotes the role to a broad network of trusted
              referrers and recruiters.
            </li>
            <li>
              You’ll receive a shortlist, prioritised based on the the quality
              of referrers track record of success. From that you can vet and
              interview candidates as you wish.
            </li>
            <li>
              If you hire a candidate, the referral fee that you set at the
              beginning is released as they pass through the stages of
              probation.
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

      <h1 className="dark:text-white font-extrabold lg:text-4xl text-white-900 mx-auto text-center my-5 mt-40">
        Subscribe to our mailing list
      </h1>
      <div className="flex flex-col justify-center items-center">
        <p className="dark:text-white font-bold text-white-900 mx-auto text-center my-5">Stay up to date with Frontdoor Developments</p>
        <div className="w-1/2">
          <form>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <p className="dark:text-white font-bold text-white-900 mx-auto text-center my-5">By subscribing you accept our <span className="text-blue-700 dark:text-blue">Privacy Notice</span></p>
      </div>
    </Layout>
  );
};

export default Home;
