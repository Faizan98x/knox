import React from "react";
import "../Styles/Home.css";
import ProductThreeGray from "../images/plugin.jpg";
import ProductfourGray from "../images/Screenshot 121.jpg";
import inverterasw from "../images/inverterasw.png";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

function Home() {
  return (
    <div className="home">
      {/* Home Section One Starts From Here */}

      <div className="Homefront">
        <div className="home-display-text">
          <h1>Knox</h1>
          <p>Powering Generations</p>
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
            <Link to="/products">
              <button className="btn">View Product</button>
            </Link>
          </li>
          <li>
            <p>Three phase on grid inverters</p>
            <img src={inverterasw} alt="" width={"150px"} />
            <Link to="/products">
              <button className="btn">View Product</button>
            </Link>
          </li>
          <li>
            <p>Single phase Hybrid inverters</p>
            <img src={inverterasw} alt="" width={"150px"} />
            <Link to="/products">
              <button className="btn">View Product</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Home Section Two Ends Here */}

      {/* Home Section Three Starts From Here */}

      <div className="home-sec3">
        <img data-aos="fade-right" src={ProductThreeGray} alt="" />
        <div data-aos="fade-left" className="home-sec3-text">
          <h3>Installation takes minutes</h3>
          <p>
            Installing a Solplanet inverter is really easy. All you need is a
            set of standard tools. <br /> <br />
            Glen Morris, of Smart Energy Lab Australia, loves a good challenge.
            He installed our Solplanet inverter blindfolded.
          </p>
        </div>
      </div>

      {/* Home Section Three Ends Here */}

      {/* Home Section Five Starts From Here */}

      <div className="home-sec5">
        <div data-aos="fade-right" className="home-sec5-text">
          <h3>Our most popular inverter</h3>
          <p>
            Our engineers refer to the ASW S-S series as ‘the residential’.{" "}
            <br />
            It’s also a big hit among our customers. <br /> <br />
            Solplanet has shipped many thousands of inverters from this series.
            Is this series also right for your customers? Discover more on our
            product page.
          </p>
        </div>
        <img data-aos="fade-left" src={ProductfourGray} alt="" />
      </div>

      {/* Home Section Five Ends Here */}

      {/* Home Section Six Starts From Here*/}

      <div className="home-sec6">
        <h5>Frequently asked questions?</h5>
        <Accordion />
      </div>

      {/* Home Section Six Ends Here */}
    </div>
  );
}

export default Home;
