import React from "react";

// home style file link

import "../Styles/Home.css";

// home images links

import singlephase from "../images/30_to_50_watt_blue_color.png";
import threephase from "../images/30_to_50_watt_white_color_2.png";
import hybrid from "../images/30_to_50_watt_blue_color2.png";
import logo from "../images/knoxwhite.png";


import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ********************Home Section One Starts******************* */}

      <div className="Homefront">
        <div className="home-display-text">
          <img width="50%" src={logo} alt="" />
        </div>
      </div>

      {/* *******************Home Section One Ends************* */}

      {/* ************************Home Section Four Starts************************ */}

      <div className="home-sec4">
        <div className="wrapper">
          <div className="static-txt">We offer</div>
          <ul className="dynamic-txts">
            <li>
              <span>Easy to Install</span>
            </li>
            <li>
              <span>Reliable</span>
            </li>
            <li>
              <span>User Friendly</span>
            </li>
            <li>
              <span>High Quality</span>
            </li>
          </ul>
        </div>
        <h6>inverters for photovoltaic systems</h6>
      </div>

      {/* ************************Home Section Four Ends***************** */}

      {/* ************************Home Section Two Starts************************ */}

      <div className="home-sec2">
        <h3>Our Products</h3>

        <ul className="home-sec2-part2" data-aos="fade-down">
          <li>
            <p>Single phase on grid inverters</p>
            <HashLink to="/products#test1">
              <img src={singlephase} alt="" width={"350px"} />
              <button className="btn">View Product</button>
            </HashLink>
          </li>
          <li>
            <p>Three phase on grid inverters</p>
            <HashLink to="/products#test2">
              <img src={threephase} alt="" width={"350px"} />
              <button className="btn">View Product</button>
            </HashLink>
          </li>
          <li>
            <p>
              Hybrid <br /> inverters
            </p>
            <HashLink to="/products#test3" smooth>
              <img src={hybrid} alt="" width={"350px"} /> <br />
              <button className="btn" style={{ textAlign: "center" }}>
                View Product
              </button>
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Home Section Two Ends Here */}

      {/* Home Section Three Starts From Here */}

      <div className="home-sec3">
        <div data-aos="fade-left" className="home-sec3-text">
          <h3>Installation takes minutes</h3>
          <p>
            Installing a Knox inverter is really easy. All you need is a set of
            standard tools. <br /> <br />
            Glen Morris, of Smart Energy Lab Australia, loves a good challenge.
            He installed our Knox inverter blindfolded.
          </p>
          <button style={{ marginTop: "5rem" }} className="btn">
            <HashLink style={{ color: "#fff" }} to="/installerarea" smooth>
              View Videos
            </HashLink>
          </button>
        </div>
      </div>

      {/* Home Section Three Ends Here */}

      {/* Home Section Six Starts From Here*/}

      <div className="home-sec6">
        <h5 data-aos="fade-down">Frequently asked questions?</h5>

        {/* accordion starts */}

        <div className="tabs">
          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck1" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck1"
            >
              Do you produce battery (storage) Inverters?
            </label>
            <div className="tab-content">
              <p>Will be available soon.</p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck2" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck2"
            >
              Do KNOX inverters have voltage protection (current protection)?
            </label>
            <div className="tab-content">
              <p>Yes.</p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck3" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck3"
            >
              What would an inverter do under High Ambient Tempreture?
            </label>
            <div className="tab-content">
              <p>
                The inverter will automatically decrease its output power to
                protect itself from overheating. You can find the inverters
                power reduction curve in the installation and operating
                instructions.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck4" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck4"
            >
              Does KNOX have a O-Expert Control Solution?
            </label>
            <div className="tab-content">
              <p>
                Yes. For all KNOX inverters, through our datalogger of AiCom and
                defined smart meter, you can get 0-export function by setting on
                datalogger’s webserver/APP/AiSWEI cloud. For KNOX residential
                inverters, you also can have export control solution through
                connecting the defined smart meter directly to the inverter via
                RS485 and enable this function on APP. For more details, please
                refer to the user manuals or contact our service for support.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck5" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck5"
            >
              Can I oversize the PV arry with respect to the Inverter Capacity?
            </label>
            <div className="tab-content">
              <p>
                Yes, the PV array DC capacity can exceed the inverter AC
                capacity. The value of the DC/AC ratio for each type of inverter
                is listed in this datasheet. A typical rule of thumb is that the
                PV array can be oversized by 50%. This is dependent on location
                and site irradiation levels. Excessive PV array oversizing will
                waste money and cause some impact on the inverter’s reliability.
                If you are in doubt of oversize designing, please refer to a
                sizing tool or contact your local Solplanet technical expert.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck6" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck6"
            >
              Can I use thin-film modules for KNOX inverters?
            </label>
            <div className="tab-content">
              <p>
                KNOX inverters cannot be used with thin film modules, which
                require a functional earth on either the positive or the
                negative DC conductor. In these cases we suggest using an
                isolated (transformer based) inverter. Our non-isolated
                (transformerless) inverters are normally designed for silicon
                solar modules. However, there are thin film solar panels that do
                not require a functional earth, and in these cases a KNOX
                inverter will operate correctly. Before designing your plant,
                please consult with your module supplier or contact our service
                for technical support.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck7" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck7"
            >
              Can KNOX inverters be used in off-grid systems that include a
              diesel generator?
            </label>
            <div className="tab-content">
              <p>
                KNOX inverters are on-grid inverters and as a result the AC side
                of the inverter should be connected to the utility grid. There
                are no settings that allow the inverter to operate in “off-grid”
                or “island” mode. KNOX cannot guarantee correct operation in
                off-grid applications and will not warrant any damage to the
                inverter or the PV plant that may be caused under “off-grid”
                conditions.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck8" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck8"
            >
              Are KNOX inverters isolated or non-isolated?
            </label>
            <div className="tab-content">
              <p>
                KNOX produces only non-isolated (transformerless) inverters. The
                transformerless inverter is the most common inverter in the
                residential and commercial market, and usually has a higher
                efficiency, lower cost, smaller size and lighter weight in
                comparison to isolated (transformer) inverters.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck9" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck9"
            >
              Are KNOX inverters equipped with a DC Switch?
            </label>
            <div className="tab-content">
              <p>
                All KNOX inverters are equipped with a DC Switch as default.
              </p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck10" />
            <label
              style={{ fontSize: "1.7rem" }}
              className="tab-label"
              for="chck10"
            >
              How do I select the right size inverter?
            </label>
            <div className="tab-content">
              <p>
                You can either use third party software or contact our technical
                support for help.
              </p>
            </div>
          </div>
        </div>

        {/* accordion ends */}
      </div>

      <div className="home-sec5">
        <div data-aos="fade-right" className="home-sec5-text">
          <h3>Our most popular inverter</h3>
          <p>
            Our engineers refer to the ASW S-S series as ‘the residential’.
            <br />
            It’s also a big hit among our customers. <br /> <br />
            Knox has shipped many thousands of inverters from this series. Is
            this series also right for your customers? Discover more on our
            product page.
          </p>
          <button style={{ marginTop: "5rem" }} className="btn">
            <HashLink style={{ color: "#fff" }} to="/installerarea" smooth>
              View Products
            </HashLink>
          </button>
        </div>
      </div>

      {/* Home Section Six Ends Here */}
    </motion.div>
  );
}

export default Home;
