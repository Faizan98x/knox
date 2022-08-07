import React from "react";
import man from "../images/man.jpg";
import worker from "../images/worker.jpg";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">

      {/* ******************** Section One Starts from Here ******************** */}

      <div className="about-section1">
        <h1>ABOUT US</h1>
      </div>

        {/* ******************** Section Two Starts from Here ******************** */}

      <div className="about-section2">
        <h1>
          You can depend on <span className="knox-logo">Knox</span>
        </h1>
        <p>
          Founded in 2011, Knox New Energy Co., Ltd. is located in Wuxi, the
          center of the Yangtze River Delta Plain. It faces the Yangtze River in
          the north and Taihu Lake in the south. With a total investment of 3
          million USD, the company is an enterprise specializing in the research
          and development, production, sales and after-sales service of solar
          grid-tied inverters, solar pump inverters, solar systems. <br />{" "}
          <br /> Knox has a 300m² R&D base and a factory of more than
          5500m²，which complies with ISO9001/90012015 regulations. Factory
          emploies more than 50 skilled workers, with a monthly production
          capacity of 1500-2000 units, totaling 15-20MW. Knox adheres to the
          attitude of being responsible for products and customers, and strictly
          controls every link of production from the begginning.
        </p>
      </div>

      {/* ******************** Section Three Starts from Here ******************** */}

      <div className="about-section3">
        <img data-aos="fade-right" src={worker} alt="" />
        <div data-aos="fade-left" className="about-section3-text-area">
          <h1>Knox makes things easy</h1>
          <p>
            Solplanet products are easy-to-install, reliable and user-friendly.
            We continue to make our products and applications quicker and easier
            to install, offering reliable long-lasting performance and making
            them user friendly for the best customer experience. At Solplanet we
            make things easy.
          </p>
        </div>
      </div>

      {/* ******************** Section Four Starts from Here ******************** */}

      <div className="about-section3">
        <div data-aos="fade-right" className="about-section3-text-area">
          <h1>
            The future is <br /> solar for everybody
          </h1>
          <p>
            Solar is a clean and sustainable energy source. Solar is for
            everybody and at Knox we are working hard to make that happen.
          </p>
        </div>
        <img data-aos="fade-left" src={man} alt="" />
      </div>


      
    </div>
  );
}

export default About;
