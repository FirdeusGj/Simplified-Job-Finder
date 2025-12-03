import React, { useState } from "react";
import "./Nav.css";
import Logo from "../Datas/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search triggered:", search);
      navigate(`/search?q=${search}`);
    }
  };
  return (
    <nav className="nav_bar">
      <div className="nav_logo">
        <img alt="Logo" src={Logo} height="100vh" />
      </div>
      <div className="nav_input">
        <input
          type="text"
          placeholder="Search a job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="nav_buttons">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}
