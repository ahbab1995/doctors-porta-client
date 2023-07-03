import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const [signOut] = useSignOut(auth);
  const logout = ()=>{
    signOut(auth)
  }
  const menuItems = (
    <>
      <li>
        <Link className="font-medium " to="/">Home</Link>
      </li>
      <li>
        <Link className="font-medium " to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link className="font-medium " to="/review">Review</Link>
      </li>
      <li>
        <Link className="font-medium " to="/contact">Contact</Link>
      </li>
      <li>
        <Link className="font-medium " to="/about">About</Link>
      </li>
      <li>
        {user? <button onClick={logout} className="btn btn-ghost">Sign Out</button> :<Link className="font-medium " to="/login">Login</Link>}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <h2 className="btn btn-ghost normal-case text-xl">Doctors Portal</h2>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
