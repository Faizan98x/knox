import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleclick = () => setClick(!click);

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="Knox Logo" />
      </Link>
      <div
        className={click ? "navlinks active" : "navlinks"}
        onClick={handleclick}
      >
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/products">PRODUCTS</NavLink>
        <NavLink to="/installerarea">INSTALLER AREA</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
      </div>
      <div className="menubars">
        {click ? (
          <FaTimes onClick={handleclick} size="2rem" color="#000" />
        ) : (
          <FaBars onClick={handleclick} size="2rem" color="#000" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
