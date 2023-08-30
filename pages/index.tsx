import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import authImg from '../assets/frontdoor.jpg';
import howitworks from "../assets/howitworks.png";
import Image from 'next/image'



const Home: NextPage = () => {

  return (
    <div className="text-3xl font-bold ">
      <Head>
        <title>Front-Door</title>
        <meta
          content="Front-Door WEB 3 Recruiting Platform"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="bg-slate-200 dark:bg-slate-800 h-screen relative">
        {/* <ConnectButton /> */}

        <div className='container mx-auto'>
          <div className='dark:text-white mx-auto text-center py-10'>Front Door Protocol</div>
          <div className="flex mt-10">
            <div className="md:w-1/2 lg:w-1/2 dark:text-white mr-2 text-lg mt-5">
              <p className='mb-10'>
                Front Door unlocks collaboration in the fragmented $420 billion recruitment ecosystem.
              </p>
              <p className='mb-10'>
                The ecosystem is highly fragmented, participants have conflicting incentives, and collaboration is fraught with friction. Reputation is built on personal brand instead of performance, and transparency is limited.
              </p>
              <p className='mb-10'>
                Front Door improves collaboration, deepening the talent pools that hiring managers can access, enables recruitment firms to reduce wasted effort and increases client satisfaction, enabling individuals and community leads to refer-to-earn from their professional networks.
              </p>
              <p className='mb-10'>
                Front Door uses Web3 tools and technology to solve a Web2 human coordination problem with a huge size of prize for you, the members of the recruitment ecosystem.
              </p>
            </div>
            <div className="md:w-1/2 lg:w-1/2">
              <Image
                src={authImg}
                alt="Front Door"
                style={{
                  width: '100%',
                  height: 'auto',
                }} priority />
            </div>
          </div>
          <div className='dark:text-white mx-auto text-center py-10 my-5'>How does it works?</div>
          <div className="mx-auto">
          <Image
                src={howitworks}
                alt="Front Door"
                style={{
                  width: '100%',
                  height: 'auto',
                }} priority />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
