import React from "react";
import '../index.css';


const Navbar = () => {
  return (
    <>
      <nav className="nav-bar-container">
        <div className="logo-div">
          {/* <img
            src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg"
            alt="logo"
            className=" h-12 w-12 inline cursor-pointer"
          /> */}
          
          <div className="cursor-pointer text-3xl font-bold ">
            <span className="text-blue-400 ">I</span>
            <span className="text-pink-500">N</span>
            <span className="text-green-400">F</span>
            <span className="text-orange-400 pr-4">Y</span>
          </div>
          <div className="ml-2 md:hidden flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="ml-2 hidden border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <ul className="ul-list">
          <li>
            <span className="nav-link">
              TEMPLATES
            </span>
          </li>
          <li>
            <span className="nav-link">
              APPS
            </span>
          </li>
        </ul>

        <div className="search-div">
          <input
            type="text"
            placeholder="search..."
            className="search-input"
          />
        </div>

        <div className="login-div">
          <button className="login-btn">
            LOGIN
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
