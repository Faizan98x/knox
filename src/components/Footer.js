import React from "react";
import "../Styles/Footer.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <h1>
        {" "}
        all rights reserved <br /> <br /> <img src={logo} alt="" /> Powering
        Generations{" "}
      </h1>
    </div>
  );
}

export default Footer;
