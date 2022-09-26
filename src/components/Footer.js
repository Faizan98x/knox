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
          <a>
            <i>
              <FaArrowRight />
            </i>
            home
          </a>
          <a>
            <i>
              <FaArrowRight />
            </i>
            about
          </a>
          <a>
            <i>
              <FaArrowRight />
            </i>
            services
          </a>
          <a>
            <i>
              <FaArrowRight />
            </i>
            projects
          </a>
          <a>
            <i>
              <FaArrowRight />
            </i>
            contact
          </a>
        </div>

        <div class="footer-box">
          <h3>contact info</h3>
          <a>
            <i>
              <FaPhone />
            </i>
            +92-345-1245554
          </a>
          <a>
            <i>
              <FaPhone />
            </i>
            +92-345-1245554
          </a>
          <a>
            <i>
              <FaEnvelope />
            </i>
            muhammadfaizan98x@gmail.com
          </a>
          <a>
            <i>
              <FaMapMarkerAlt />
            </i>
            Islamabad, Pakistan
          </a>
        </div>

        <div class="footer-box">
          <h3>contact info</h3>
          <a>
            <i>
              <FaFacebook />
            </i>
            facebook
          </a>
          <a>
            <i>
              <FaTwitter />
            </i>
            twitter
          </a>
          <a>
            <i>
              <FaInstagram />
            </i>
            instagram
          </a>
          <a>
            <i>
              <FaLinkedin />
            </i>
            linkedin
          </a>
        </div>
      </div>

      <div class="credit">
        all rights reserved <br /> KNOX
      </div>
    </section>
  );
}

export default Footer;
