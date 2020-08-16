import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/MyContext";

const NavbarRight = () => {
  const [auth] = useContext(AuthContext);
  if (auth === true) {
    return (
      <ul className="navbar-nav flex-row justify-content-between">
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            className="nav-link material-icons"
            activeClassName="active"
          >
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/direct-message"
            className="nav-link material-icons p-0 pt-1 px-1"
            activeClassName="active"
            style={{
              transform: "rotate(-30deg)",
            }}
          >
            send
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/explore"
            className="nav-link material-icons"
            activeClassName="active"
          >
            explore
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/favorite"
            className="nav-link material-icons"
            activeClassName="active"
          >
            favorite_border
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/profile"
            className="nav-link material-icons"
            activeClassName="active"
          >
            account_circle
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            exact
            to="/login"
            className="nav-link"
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/register"
            className="nav-link"
            activeClassName="active"
          >
            Register
          </NavLink>
        </li>
      </ul>
    );
  }
};

export default NavbarRight;
