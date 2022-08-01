import React from "react";
import logo from "../images/logo.png";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <img className="display-logo" src={logo} alt="" />
    </div>
  );
}

export default Home;
