import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import React from 'react';
import NavBar, { NavLink } from './ui/navbar';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ children, title = '' }: Props) => {
  const navLinks: NavLink[] = [
    {
      name: 'Hiring Company',
      href: '/hiring-company',
    },
    {
      name: 'Register',
      href: '/register',
    },
    {
      name: 'Feedback',
      href: '/feedback',
    },
    {
      name: 'Faucet',
      href: '/faucet',
    },
    {
      name: 'Referrer Dashboard',
      href: '/referrer-dashboard',
    },
  ];

  return (
    <>
      <Head>
        <title>{`Front-Door - ${title}`}</title>
        <meta
          content='Front-Door WEB 3 Recruiting Platform'
          name='description'
        />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <NavBar navLinks={navLinks}>
        <ConnectButton accountStatus={'avatar'} chainStatus={'icon'} />
      </NavBar>
      <main className='min-h-screen bg-slate-100 pb-12'>
        <div>{children}</div>
      </main>
    </>
  );
};
