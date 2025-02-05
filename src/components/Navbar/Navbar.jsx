import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

export default function Navbar() {
  const { user, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => {
        console.log("Log out successful!");
      })
      .catch();
  };

  return (
    <div>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/user">User</NavLink>
              </li>
              <li>
                <NavLink to="/">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/private">Private</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Auth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/private">Private</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/">
              <button onClick={handleLogout} className="btn">
                Log out
              </button>
            </Link>
          ) : (
            <Link to="/" className="btn">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
