import React from "react";
import "../Styles/Footer.css";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <p>
        {" "}
        all rights reserved <br /> <br /> <img src={logo} alt="" /> Powering
        Generations{" "}
      </p>
    </div>
  );
}

export default Footer;
