import React from "react";
import "./Nav.css";
import Logo from "../Datas/images/logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="nav_bar">
      <div className="nav_logo">
        <img alt="Logo" src={Logo} height="100vh" />
      </div>
      <div className="nav_input">
        <input type="text" placeholder="Search a job" />
      </div>
      <div className="nav_buttons">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}
