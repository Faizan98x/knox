import React from "react";
import "../Styles/Products.css";
import inverter from "../images/inverterasw.png";
import { BiCloudSnow } from "react-icons/bi";
import { GiElectric, GiSolarPower } from "react-icons/gi";
import { FaWrench, FaMobileAlt } from "react-icons/fa";
import { RiShieldFlashLine } from "react-icons/ri";
import pdffile from "../images/knox.pdf";

function Products() {
  return (
    <div className="products">
      {/* ******************** Section One Starts from Here ******************** */}

      <div className="products-sec1">
        <h1>Quality Products to buy</h1>
      </div>

      {/* ******************** Section Two Starts from Here ******************** */}

      <div className="products-sec2">
        <h1 className="products-sec2-title">Single phase on grid inverters</h1>
        <p className="products-sec2-sub-title">
          Explore our range of hybrid single phase inverters – now available in
          selected markets. Select the one that suits you best and download all
          the product details from the product page
        </p>

        <div className="products-sec2-cards">
          {/* ******************** card One ******************** */}

          <div className="products-sec2-card">
            <h1 className="products-sec2-card-title">ASW S-G2 Series</h1>
            <p className="products-sec2-card-sub-title">
              ASW3000H-S2, ASW3680H-S2, ASW4000H-S2, ASW5000H-S2, ASW6000H-S2
            </p>
          </div>

          {/* ******************** Card Two ******************** */}

          <div className="products-sec2-card">
            <h1 className="products-sec2-card-title">ASW H-S2 Series</h1>
            <p className="products-sec2-card-sub-title">
              ASW3000H-S2, ASW3680H-S2, ASW4000H-S2, ASW5000H-S2, ASW6000H-S2
            </p>
          </div>
        </div>
      </div>

      {/* ******************** Section Three Starts from Here ******************** */}

      <div className="products-sec2">
        <h1 className="products-sec2-title">Single phase Hybrid inverters</h1>
        <p className="products-sec2-sub-title">
          Explore our range of hybrid single phase inverters – now available in
          selected markets. Select the one that suits you best and download all
          the product details from the product page
        </p>

        <div className="products-sec2-cards">
          {/* ******************** card One ******************** */}

          <div className="products-sec2-card">
            <h1 className="products-sec2-card-title">ASW S-G2 Series</h1>
            <p className="products-sec2-card-sub-title">
              ASW3000H-S2, ASW3680H-S2, ASW4000H-S2, ASW5000H-S2, ASW6000H-S2
            </p>
          </div>

          {/* ******************** Card Two ******************** */}

          <div className="products-sec2-card">
            <h1 className="products-sec2-card-title">ASW H-S2 Series</h1>
            <p className="products-sec2-card-sub-title">
              ASW3000H-S2, ASW3680H-S2, ASW4000H-S2, ASW5000H-S2, ASW6000H-S2
            </p>
          </div>
        </div>
      </div>

      {/* ******************** Section four Starts from Here ******************** */}

      <div className="products-sec4">
        <div class="products-sec4-card">
          <div class="products-sec4-image">
            <img src={inverter} alt="" />
          </div>
          <div class="products-sec4-details">
            <div class="products-sec4-center">
              <h1>ASW S-G2 series</h1>
              <p>
                ASW3000H-S2, ASW3680H-S2, ASW4000H-S2, ASW5000H-S2, ASW6000H-S2
              </p>
            </div>
          </div>
        </div>

        <div class="products-sec4-card2">
          <div class="products-sec4-image2">
            <img src={inverter} alt="" />
          </div>
          <div class="products-sec4-details2">
            <div class="products-sec4-center2">
              <h1>ASW S-G2 series</h1>
              <p>
                <BiCloudSnow /> IP66 rated Design <br />
                <GiElectric /> 13A input current <br />
                <GiSolarPower /> Wide MPP voltage range <br />
                <FaWrench />
                Easy to Install <br />
                <FaMobileAlt />
                Easy monitering app <br />
                <RiShieldFlashLine />
                built-in Type II surge protection device
              </p>
              <a href={pdffile}>DataSheet</a>
            </div>
          </div>
        </div>
      </div>

      {/* Ends here */}
    </div>
  );
}

export default Products;
