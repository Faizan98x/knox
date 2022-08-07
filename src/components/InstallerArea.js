import React from "react";
import "../Styles/InstallerArea.css";
import { NavLink } from "react-router-dom";

function InstallerArea() {
  return (
    <div className="InstallerArea">
      <div className="InstallerArea-sec1">
        <h6>Download center</h6>
        <ul className="download-nav">
          <NavLink to="/">Datesheets</NavLink>
          <NavLink to="/about">Certificates</NavLink>
          <NavLink to="/products">Instructions</NavLink>
          <NavLink to="/installerarea">Brochures</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default InstallerArea;
