import React from "react";
import { Link ,useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  let locationObj = useLocation();
  let currPath = locationObj.pathname;
  // console.log(locationObj.pathname);
  
  return (
    <nav data-bs-theme="dark" className="navbar navbar-expand-lg bg-black ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          NoteCloud
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${ (currPath === "/about" ? "active" : "") }`} aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${ (currPath === "/home" ? "active" : "") }`} to="/home">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
