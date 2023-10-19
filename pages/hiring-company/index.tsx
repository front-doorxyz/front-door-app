import { NextPage } from 'next';
import AddJob from '../../components/JobComponents/AddJob';
import ClientJobs from '../../components/JobComponents/ClientJobs';
import { Layout } from '../../components/layout';
import router from 'next/router';
import { useState } from 'react';
import Banner from '../../components/Banner';

const Profile: NextPage = () => {
  const [active, setActive] = useState<boolean>(true);
  const activeTab = (e: any) => {
    const id = e.target.id;
    if (id === '1') {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <Layout title='Profile'>
      <Banner title='Hiring Company' />
      <div className='mr-[2%] flex h-[20%] items-center justify-end gap-4 pt-5'>
        <button
          className='md:text-md rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
          onClick={() => router.push(`/candidate-management`)}
        >
          Manage Candidates
        </button>
      </div>
      <div className='mt-[2%] flex flex-col items-center justify-center'>
        <div className='tabs-boxed tabs flex justify-center gap-2'>
          <a
            id='1'
            className={`tab tab-lifted tab-lg ${active ? 'tab-active' : ''}`}
            onClick={activeTab}
          >
            Register Job
          </a>
          <a
            id='2'
            className={`tab tab-lifted tab-lg ${!active ? 'tab-active' : ''}`}
            onClick={activeTab}
          >
            View previous jobs
          </a>
        </div>
        {active ? <AddJob /> : <ClientJobs />}
      </div>
    </Layout>
  );
};

export default Profile;
