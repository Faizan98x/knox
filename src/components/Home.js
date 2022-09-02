import React from "react";
import "../Styles/Home.css";
import inverterasw from "../images/inverterasw.png";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import logo from "../images/logo.png";

function Home() {

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Home Section One Starts From Here */}

      <div className="Homefront">
        <div className="home-display-text">
          <img width="100%" src={logo} alt="" />
        </div>
      </div>

      {/* Home Section One Ends Here */}

      {/* Home Section Four Starts From Here */}

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

      {/* Home Section Four Ends Here */}

      {/* Home Section Two Starts From Here */}

      <div className="home-sec2">
        {/* <p data-aos="fade-up">
          We make easy-to-install, reliable and user-friendly products for all
          types of photovoltaic systems
        </p> */}

        <h3>Our Products</h3>

        <ul className="home-sec2-part2" data-aos="fade-down">
          <li>
            <p>Single phase on grid inverters</p>
            <img src={inverterasw} alt="" width={"150px"} />
            <HashLink to="/products#test1">
              <button className="btn">View Product</button>
            </HashLink>
          </li>
          <li>
            <p>Three phase on grid inverters</p>
            <img src={inverterasw} alt="" width={"150px"} />
            <HashLink to="/products#test2">
              <button className="btn">View Product</button>
            </HashLink>
          </li>
          <li>
            <p>Single phase Hybrid inverters</p>
            <img src={inverterasw} alt="" width={"150px"} />
            <HashLink to="/products#test3" smooth>
              <button className="btn">View Product</button>
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
            <label style={{fontSize: "1.7rem"}} className="tab-label" for="chck1">
              Item 1
            </label>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque recusandae incidunt unde minus, architecto ipsa. Labore error nisi reprehenderit omnis voluptate voluptatum, iste architecto, laboriosam modi veritatis, aliquam ipsum praesentium.</p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck2" />
            <label style={{fontSize: "1.7rem"}} className="tab-label" for="chck2">
              Item 1
            </label>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque recusandae incidunt unde minus, architecto ipsa. Labore error nisi reprehenderit omnis voluptate voluptatum, iste architecto, laboriosam modi veritatis, aliquam ipsum praesentium.</p>
            </div>
          </div>


          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck3" />
            <label style={{fontSize: "1.7rem"}} className="tab-label" for="chck3">
              Item 1
            </label>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque recusandae incidunt unde minus, architecto ipsa. Labore error nisi reprehenderit omnis voluptate voluptatum, iste architecto, laboriosam modi veritatis, aliquam ipsum praesentium.</p>
            </div>
          </div>

          <div className="tab">
            <input className="qstninput" type="checkbox" id="chck4" />
            <label style={{fontSize: "1.7rem"}} className="tab-label" for="chck4">
              Item 1
            </label>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque recusandae incidunt unde minus, architecto ipsa. Labore error nisi reprehenderit omnis voluptate voluptatum, iste architecto, laboriosam modi veritatis, aliquam ipsum praesentium.</p>
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
