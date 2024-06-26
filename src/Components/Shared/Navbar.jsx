import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/product"}>Product</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          ShowUp
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        {!user ? (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/registration" className="btn">
              Registration
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button
              onClick={logOut}
              className="btn rounded-full py-2 px-6 bg-red-700"
            >
              Logout
            </button>
            <span className="btn rounded-full bg-success text-black capitalize">
              {user.displayName}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
