import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, type ReactNode } from 'react';
import logo from '../../assets/logo.svg';

type NavBarProps = {
  navLinks: NavLink[];
  children: ReactNode;
};

export type NavLink = {
  name: string;
  href: string;
};

const NavBar = ({ navLinks, children }: NavBarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className='relative flex items-center justify-between bg-white px-4 py-4'>
        <Link
          href='/'
          passHref
          className='hidden h-10 w-40 text-3xl font-bold leading-none lg:block'
        >
          <Image
            alt='frontdoor logo'
            className='h-10 cursor-pointer'
            src={logo}
          />
        </Link>
        <div className='lg:hidden'>
          <button
            onClick={() => {
              setIsDrawerOpen((prevIsOpenState) => !prevIsOpenState);
            }}
            className='navbar-burger flex items-center p-3 text-blue-600'
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='hidden lg:mx-auto lg:flex lg:flex lg:w-auto lg:items-center lg:space-x-6'>
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <li>
                <Link
                  href={link.href}
                  passHref
                  className={`text-sm ${
                    link.href === router.pathname
                      ? 'font-bold text-blue-600'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
              {index !== navLinks.length - 1 ? (
                <li className='text-gray-300' key={`${link.name}-spacer`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    stroke='currentColor'
                    className='current-fill h-4 w-4'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                    />
                  </svg>
                </li>
              ) : null}
            </React.Fragment>
          ))}
        </ul>
        {children}
      </nav>
      <div
        className={`navbar-menu relative z-50  ${
          !isDrawerOpen ? 'hidden' : ''
        }`}
      >
        <div
          onClick={() => {
            setIsDrawerOpen((prevIsOpenState) => !prevIsOpenState);
          }}
          className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'
        ></div>
        <nav className='fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6'>
          <div className='mb-8 flex items-center'>
            <Link
              href='/'
              passHref
              className='mr-auto text-3xl font-bold leading-none'
            >
              <Image
                alt='frontdoor logo'
                className='h-10 cursor-pointer'
                src={logo}
              />
            </Link>

            <button
              onClick={() => {
                setIsDrawerOpen((prevIsOpenState) => !prevIsOpenState);
              }}
              className='navbar-close'
            >
              <svg
                className='h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navLinks.map((link) => (
                <li key={`draw-${link.name}`} className='mb-1'>
                  <Link
                    href={link.href}
                    passHref
                    className={`block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 ${
                      link.href === router.pathname
                        ? 'font-bold text-blue-600'
                        : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto grid justify-items-center'>
            {children}
            <p className='my-4 text-center text-xs text-gray-400'>
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
