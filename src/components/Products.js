import React from "react";
import "../Styles/Products.css";
import product1img from "../images/inverterasw.png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <h6>Single Phase Inverter</h6>
      {/* first one */}
      <div id="#single" className="product-box product-single-phase">
        <div className="product-single-phase-1">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
        <div className="product-single-phase-2">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
      </div>
      {/* second one */}
      <h6>Three Phase Inverter</h6>
      <div className="product-box product-three-phase">
        {" "}
        <div className="product-single-phase-1">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
        <div className="product-single-phase-2">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
        <div className="product-single-phase-1">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
        <div className="product-single-phase-2">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
        <div className="product-single-phase-1">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <Link to="/product1">
            <button className="btn">View Product</button>
          </Link>
        </div>
      </div>
      {/* third one */}
      <h6>Hybrid Inverter</h6>
      <div className="product-box product-hybrid">
        {" "}
        <div className="product-single-phase-1">
          <p>
            ASW H-S2 Series <br /> 3 to 6 kW
          </p>
          <img src={product1img} alt="inverter" width={"230px"} />
          <button className="btn">Coming Soon</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
