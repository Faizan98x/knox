import React from "react";
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
    <section class="footer" id="footer">
      <div class="footer-box-container">
        <div class="footer-box">
          <h3>quick links</h3>
          <i>
            <FaArrowRight />
          </i>
          home
          <i>
            <FaArrowRight />
          </i>
          about
          <i>
            <FaArrowRight />
          </i>
          services
          <i>
            <FaArrowRight />
          </i>
          projects
          <i>
            <FaArrowRight />
          </i>
          contact
        </div>

        <div class="footer-box">
          <h3>contact info</h3>
          <i>
            <FaPhone />
          </i>
          +92-345-1245554
          <i>
            <FaPhone />
          </i>
          +92-345-1245554
          <i>
            <FaEnvelope />
          </i>
          muhammadfaizan98x@gmail.com
          <i>
            <FaMapMarkerAlt />
          </i>
          Islamabad, Pakistan
        </div>

        <div class="footer-box">
          <h3>contact info</h3>
          <i>
            <FaFacebook />
          </i>
          facebook
          <i>
            <FaTwitter />
          </i>
          twitter
          <i>
            <FaInstagram />
          </i>
          instagram
          <i>
            <FaLinkedin />
          </i>
          linkedin
        </div>
      </div>

      <div class="credit">
        all rights reserved <br /> KNOX
      </div>
    </section>
  );
}

export default Footer;
