import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/posts" className="navbar__link">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
