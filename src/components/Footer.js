import React from "react";
import "../Styles/Footer.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <span>Copyright &#169; 2022</span>
      <img src={logo} alt="" />
    </div>
  );
}

export default Footer;
