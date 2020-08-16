import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const collapsing = () => {
    setCollapse(!collapse);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand d-block d-md-none" to="/">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Brand"
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={collapsing}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            collapse
              ? "collapse navbar-collapse justify-content-between"
              : "collapse navbar-collapse justify-content-between show"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item d-none d-md-block">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="Brand"
                />
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <input
                type="text"
                className="form-control form-control-sm bg-light"
                placeholder="Search"
              />
            </li>
          </ul>
          {/*  */}
          <NavbarRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
