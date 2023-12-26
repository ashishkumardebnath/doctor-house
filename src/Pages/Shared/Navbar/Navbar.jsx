import { Link } from "react-router-dom";
import logo from "../../../assets/Group 2.png";
import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="hover:bg-gray-500" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-500" to="/ourservices ">
          Our Services
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-500" to="/ourdoctor">
          Our Doctors
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-500" to="/appointment">
          Appointment
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-500" to="/contact">
          Contact Us
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut}> LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="hover:bg-gray-500" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar fixed z-10 top-0 max-w-screen-xl bg-opacity-30 bg-gray-700 md:px-24  flex justify-between">
      <div className="navbar-start">
        {/* --------------------------- */}
        <div className="dropdown">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
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
            {menuItems}
          </ul>
        </div>
        {/* --------------------------- */}

        <Link to="/" className="btn btn-ghost ">
          <img className="w-44" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">{menuItems}</ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
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
          tabIndex={1}
          className="menu menu-compact  dropdown-content mt-3 p-2 shadow  bg-opacity-70 bg-gray-900 text-white rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>
    </div>

    // <div className="navbar fixed z-10 top-0 max-w-screen-xl bg-opacity-30 bg-gray-700  ">
    //   <div className="flex-1">
    //     <a className="btn btn-ghost ">
    //       <img className="w-44" src={logo} alt="" />
    //     </a>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal px-1 text-white  font-semibold">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/ourservices">Our Services</Link>
    //       </li>
    //       <li>
    //         <Link to="/ourdoctor">Our Doctors</Link>
    //       </li>
    //       <li>
    //         <Link to="/appointment">Appointment</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact Us</Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
