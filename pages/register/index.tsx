import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layout';
import CompanyRegister from '@/components/CompanyRegister';
import ReferrerRegister from '@/components/ReferrerRegister';
import CandidateRegister from '@/components/CandidateRegister';
import { useRouter } from 'next/router';

type Props = {
  tab: number;
};

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    if (router.query?.tab) {
      const tab = router.query.tab;
      setActive(Number(tab));
    }
  }, [router]);

  const activeTab = (id: number) => {
    setActive(id);
  };
  return (
    <Layout title='Register'>
      <div className='flex w-full flex-col items-center justify-center pt-[3%]'>
        <div className='tabs-boxed tabs flex justify-center gap-2'>
          <a
            id='1'
            className={`tab tab-lifted tab-lg ${
              active === 1 ? 'tab-active' : ''
            }`}
            onClick={() => activeTab(1)}
          >
            Company Register
          </a>
          <a
            id='2'
            className={`tab tab-lifted tab-lg ${
              active === 2 ? 'tab-active' : ''
            }`}
            onClick={() => activeTab(2)}
          >
            Referrer Register
          </a>
          <a
            id='3'
            className={`tab tab-lifted tab-lg ${
              active === 3 ? 'tab-active' : ''
            }`}
            onClick={() => activeTab(3)}
          >
            Candidate Register
          </a>
        </div>
        <div className='flex justify-center'>
          {active === 1 && <CompanyRegister />}
          {active === 2 && <ReferrerRegister />}
          {active === 3 && <CandidateRegister />}
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
