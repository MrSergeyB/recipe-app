import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-warning">
      <div className="container">
        <h3 className="text-light ">
          <i className="fas fa-hamburger mr-1" />
          Recipy App
        </h3>

        <ul className="navbar-nav text-dark">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
