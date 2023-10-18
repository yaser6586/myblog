"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b-2 border-slate-100 fixed z-50 ">
      <div className=""></div>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">home</a>
            </li>

            <li>
              <Link href="/blog">blog</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href="./">
          yaser blog
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">home</a>
          </li>

          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-8">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
