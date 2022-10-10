import React from "react";

// product style file link

import "../Styles/Products.css";

// product images links

import inverterSinglePhase1to3kw from "../images/3.Products-page-images/Single-Phase-Inverter/single-phase-1to3kw-SS.png"
import inverterSinglePhase3to5kw from "../images/3.Products-page-images/Single-Phase-Inverter/single-phase-3to5kw-S.png"
import inverterSinglePhase3to6kw from "../images/3.Products-page-images/Single-Phase-Inverter/single-phase-3to6kw-S-G2.png"
import inverterSinglePhase6to10kw from "../images/3.Products-page-images/Single-Phase-Inverter/single-phase-6to10kw-S.png"

import inverterHybridSinglePhase3to6kw from "../images/3.Products-page-images/Hybrid/hybrid-single-phase-3to6kw-H-S2.png"
import inverterHybridThreePhase8to12kw from "../images/3.Products-page-images/Hybrid/hybrid-three-phase-8to12kw-H-T1.png"

import inverter30to50watt from "../images/3.Products-page-images/Three-Phase-Inverters/30to50-watt-blue-color-side-view.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Products() {
  return (
    <motion.div
      className="products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Single phase Inverters */}

      <h5 id="test1">Single Phase Inverter</h5>

      <div className="product-box">
        {/* Single Phase Inverter First Product */}

        <div className="product-box-subbox">
          <p>
            ASW S-S Series <br /> 1 to 3 kW
          </p>
          <Link to="/SSeries1to3kW">
            <img src={inverterSinglePhase1to3kw} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Single Phase Inverter Second Product */}

        <div className="product-box-subbox">
          <p>
            ASW S Series <br /> 3 to 5 kW
          </p>
          <Link to="/SSeries3to5kW">
            <img src={inverterSinglePhase3to5kw} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Single Phase Inverter Third Product */}

        <div className="product-box-subbox">
          <p>
            ASW S G2 Series <br /> 3 to 6 kW
          </p>
          <Link to="/SG2Series3to6kW">
            <img src={inverterSinglePhase3to6kw} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Single Phase Inverter Fourth Product */}

        <div className="product-box-subbox">
          <p>
            ASW S Series <br /> 6 to 10 kW
          </p>
          <Link to="/SSeries6to10kW">
            <img src={inverterSinglePhase6to10kw} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>
      </div>

      {/* Three Phase Inverter */}

      <h5 id="test2">Three Phase Inverter</h5>

      <div className="product-box">
        {/* Three Phase Inverter First Product */}

        <div className="product-box-subbox">
          <p>
            G2 Series <br /> 3 to 5 kW
          </p>
          <Link to="/G2Series3to5kW">
            <img src={inverter30to50watt} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Three Phase Inverter Second Product */}

        <div className="product-box-subbox">
          <p>
            G2 Series <br /> 5 to 20 kW
          </p>
          <Link to="/G2Series5to20kW">
            <img src={inverter30to50watt} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Three Phase Inverter Third Product */}

        <div className="product-box-subbox">
          <p>
            G2 Series <br /> 30 to 50 kW
          </p>
          <Link to="/G2Series30to50kW">
            <img src={inverter30to50watt} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Three Phase Inverter Fourth Product */}

        <div className="product-box-subbox">
          <p>
            G2 Series <br /> 80 to 110 kW
          </p>
          <Link to="/G2Series80to110kW">
            <img src={inverter30to50watt} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Three Phase Inverter Fifth Product */}

        <div className="product-box-subbox">
          <p>
            G3 Series <br /> 10 to 40 kW
          </p>
          <Link to="/G3Series10to40kW">
            <img src={inverter30to50watt} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>
      </div>

      {/* Hybrid Inveters */}

      <h5 id="test3">Hybrid Inverter</h5>

      <div className="product-box">
        {/* Hybrid Single Phase Inverter */}

        <div className="product-box-subbox">
          <p>
            ASW H-S2 Series <br />
            SINGLE PHASE <br /> 3 to 6 kW
          </p>
          <Link to="/HybridSinglePhase">
            <img src={inverterHybridSinglePhase3to6kw} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>

        {/* Hybrid Three Phase Inverter */}

        <div className="product-box-subbox">
          <p>
            ASW H-T1 Series <br /> THREE PHASE <br /> 8 to 12 kW
          </p>
          <Link to="/HybridThreePhase">
            <img src={inverterHybridThreePhase8to12kw} alt="inverter" width={"230px"} />
            <button className="btn">View Product</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
