"use client";

import { useState } from "react";
import { IoMenu } from "@react-icons/all-files/io5/IoMenu";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar bg-base-200 font-semibold tracking-wide text-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
          </div>
          {menuOpen && (
            <ul
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          )}
        </div>
        <a className="text-lg md:text-xl flex items-center" href="/">
          <img
            src="/temple-logo.svg"
            alt="Logo"
            className="hidden md:block w-10 h-10 mr-2"
          />
          Temple Story
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/about-us">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <button className="text-md" href="/login">Sign in</button>
        <button className="btn btn-outline text-md rounded-3xl" href="/sign-up">Sign up</button>
      </div>
    </div>
  );
}
