import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import MyButton from "../UI/button/MyButton";
import { AuthContext } from "../../context";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const exit = (e) => {
    setIsAuth(false);
    router("/login");
    localStorage.setItem("auth", "false");
  };

  return (
    <div className="navbar">
      {isAuth ? (
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

          <MyButton onClick={exit}>Exit</MyButton>
        </div>
      ) : (
        <div className="navbar__links">
          <Link to="/login" className="navbar__link">
            Login
          </Link>{" "}
        </div>
      )}
    </div>
  );
};

export default NavBar;
