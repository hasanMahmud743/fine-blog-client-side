import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "bg-indigo-500 rounded-full py-3 px-4  text-white";
  const navMenu = (
    <>
      <li className="mx-2">
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/history"
        >
          Reading History
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-indigo-100 rounded-lg mt-10">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {" "}
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Fine-Blog</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="  menu-horizontal px-1">{navMenu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
