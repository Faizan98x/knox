import React from "react";

// about images links
import man from "../images/2.About-page-images/man.jpg";
import worker from "../images/2.About-page-images/worker.jpg";

// about style file link

import "../Styles/About.css";


import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ******************** Section One Starts from Here ******************** */}

      <div className="scroll-section">
        <div className="about-section1">
          <h1>ABOUT US</h1>
        </div>
      </div>

      {/* ******************** Section Two Starts from Here ******************** */}

      <div className="scroll-section">
        <div className="about-section2">
          <h1>
            You can depend on <span className="KNOX-logo">KNOX</span>
          </h1>
          <p>
            Founded in 2011, KNOX New Energy Co., Ltd. is located in Wuxi, the
            center of the Yangtze River Delta Plain. It faces the Yangtze River
            in the north and Taihu Lake in the south. With a total investment of
            3 million USD, the company is an enterprise specializing in the
            research and development, production, sales and after-sales service
            of solar grid-tied inverters, solar pump inverters, solar systems.{" "}
            <br /> <br /> KNOX has a 300m² R&D base and a factory of more than
            5500m²，which complies with ISO9001/90012015 regulations. Factory
            emploies more than 50 skilled workers, with a monthly production
            capacity of 1500-2000 units, totaling 15-20MW. KNOX adheres to the
            attitude of being responsible for products and customers, and
            strictly controls every link of production from the begginning.
          </p>
        </div>
      </div>

      {/* ******************** Section Three Starts from Here ******************** */}

      <div className="scroll-section">
        <div className="about-section3">
          <img data-aos="fade-right" src={worker} alt="" />
          <div data-aos="fade-left" className="about-section3-text-area">
            <h1>KNOX makes things easy</h1>
            <p>
              KNOX products are easy-to-install, reliable and
              user-friendly. We continue to make our products and applications
              quicker and easier to install, offering reliable long-lasting
              performance and making them user friendly for the best customer
              experience. At KNOX we make things easy.
            </p>
          </div>
        </div>
      </div>

      {/* ******************** Section Four Starts from Here ******************** */}

      <div className="scroll-section">
        <div className="about-section3">
          <div data-aos="fade-right" className="about-section3-text-area">
            <h1>
              The future is <br /> solar for everybody
            </h1>
            <p>
              Solar is a clean and sustainable energy source. Solar is for
              everybody and at KNOX we are working hard to make that happen.
            </p>
          </div>
          <img data-aos="fade-left" src={man} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
