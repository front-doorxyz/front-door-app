import React, { useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import logo from "../assets/logo.svg";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md uppercase" : ""
      } hover:bg-secondary hover:shadow-md focus:bg-secondary py-1.5 px-3 text-sm rounded-full gap-2 uppercase`}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { address } = useAccount();
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const navLinks = (
    <>
      <li className="dark:text-white">
        <NavLink href="/">Home</NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink href="/faucet">Faucet</NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink href="/all-jobs">All Jobs</NavLink>
      </li>
      {address ? (
        <>
          <li>
            <NavLink href="/client">Client</NavLink>
          </li>
          {/* <li>
                <NavLink href="/profile">Profile</NavLink>
              </li> */}
        </>
      ) : (
        <li className="dark:text-white">
          <NavLink href="/register">Register</NavLink>
        </li>
      )}

      <li className="dark:text-white">
        <NavLink href="/contactus">Contact us</NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 navbar bg-base-100 min-h-0  items-center flex-shrink-0 justify-between z-20 shadow-md shadow-secondary dark:bg-slate-500 flex m-auto py-2 mb-3">
      <div className="navbar-start w-auto ">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <button
            className={`ml-1 bg-white w-8 ${
              isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"
            }`}
            onClick={() => {
              setIsDrawerOpen((prevIsOpenState) => !prevIsOpenState);
            }}>
            <Bars3Icon className="h-1/2" />
          </button>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}>
              {navLinks}
            </ul>
          )}
        </div>
        <div className="flex items-center">
          <Link
            href="/"
            passHref
            className="hidden lg:flex items-center gap-2 ml-4 mr-6 dark:text-white">
            <div className="flex relative w-10 h-10">
              <Image
                alt="frontdoor logo"
                className="cursor-pointer"
                fill
                src={logo}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold leading-tight">Front-Door</span>
              <span className="text-xs flex">Open Referrals Network</span>
            </div>
          </Link>
          <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-end mr-2">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Header;
