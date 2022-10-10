import React from "react";
import {Link} from "react-router-dom"
import "../Styles/Footer.css";
import {
  FaArrowRight,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-box-container">
        <div className="footer-box">
          <h3>quick links</h3>
          <Link to="/">
            <i>
              <FaArrowRight />
            </i>
            Home
          </Link>
          <Link to="/about">
            <i>
              <FaArrowRight />
            </i>
            About
          </Link>
          <Link to="/products">
            <i>
              <FaArrowRight />
            </i>
            Products
          </Link>
          <Link to="/installerarea">
            <i>
              <FaArrowRight />
            </i>
            Installer Area
          </Link>
          <Link to="/contact">
            <i>
              <FaArrowRight />
            </i>
            Contact Us
          </Link>
        </div>

        <div className="footer-box">
          <h3>contact info</h3>
          <Link to="/#">
            <i>
              <FaPhone />
            </i>
            +92-302-111-5669(KNOX)
          </Link>
          <Link to="/#">
            <i>
              <FaEnvelope />
            </i>
            info@knoxpv.com
          </Link>
          <Link to="/#">
            <i>
              <FaMapMarkerAlt />
            </i>
            Lb02126, Jebel Ali Free Zone Dubai, United Arab Emirates
          </Link>
          <Link to="/#">
            <i>
              <FaMapMarkerAlt />
            </i>
            Plot 21, Street 4, I-10/3, Islamabad, Pakistan
          </Link>
        </div>

        <div className="footer-box">
          <h3>contact info</h3>
          <Link to="/#">
            <i>
              <FaFacebook />
            </i>
            facebook
          </Link>
          <Link to="/#">
            <i>
              <FaTwitter />
            </i>
            twitter
          </Link>
          <Link to="/#">
            <i>
              <FaInstagram />
            </i>
            instagram
          </Link>
          <Link to="/#">
            <i>
              <FaLinkedin />
            </i>
            linkedin
          </Link>
        </div>
      </div>

      <div className="credit">
        all rights reserved <br /> KNOX
      </div>
    </section>
  );
}

export default Footer;
