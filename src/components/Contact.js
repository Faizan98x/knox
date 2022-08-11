import React from "react";
import "../Styles/Contact.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFillClockFill,
  BsTwitter,
} from "react-icons/bs";
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ******************** Section One Starts from Here ******************** */}

      {/* <div className="section1">
        <h1>CONTACT US</h1>
      </div> */}

      {/* ******************** Section Two Starts from Here ******************** */}

      <div className="section2">
        <h3 className="title">CONTACT INFO</h3>

        <div className="section2-subsection">
          <div className="subsection-left-side">
            <ul>
              <li>
                <MdLocationOn size="2.5rem" color="#F0A500" />{" "}
                <span>
                  Knox Pv Energy co., Ltd. Add: 168 Taiping south Road, <br />{" "}
                  Nanjing, Jiangsu, China
                </span>
              </li>

              <li>
                <MdEmail size="2.5rem" color="#F0A500" />
                <span>info@knoxpv.com</span>{" "}
              </li>

              <li>
                <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                <span>+92 304 111 Knox (5669)</span>
              </li>
            </ul>
          </div>

          <div className="subsection-right-side">
            <ul>
              <li>
                <RiInstagramFill size="2.5rem" color="#F0A500" />{" "}
                <span>@instagram.com</span>
              </li>

              <li>
                <RiFacebookCircleFill size="2.5rem" color="#F0A500" />
                <span>
                  <a
                    style={{ color: "#f0a500", fontSize: "1.6rem" }}
                    target="_blank"
                    href="https://www.facebook.com/KnoxStringInverter/"
                  >
                    @KnoxStringInverter
                  </a>
                </span>{" "}
              </li>

              <li>
                <BsTwitter size="2.5rem" color="#F0A500" />
                <span>@twiter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="timing">
          <BsFillClockFill size="4rem" color="#F0A500" />
          <span>Monday to Friday : 9am to 6pm</span>
        </h3>
      </div>

      {/* ******************** Section Three Starts from Here ******************** */}

      <div className="section3">
        <h1 className="offices-title">OFFICES</h1>
        <div className="section3-sub">
          <h2 className="title-china">CHINA</h2>

          <div className="section3-sub-overlay">
            <ul className="section3-sub-text">
              <li className="section3-sub-li">
                <h4>CHINA</h4>
              </li>

              <li className="section3-sub-li">
                <MdLocationOn size="2.5rem" color="#F0A500" />{" "}
                <span>
                  Knox Pv Energy co, Ltd. Add: 168 Taiping south Road, <br />{" "}
                  Nanjing, Jiangsu, China
                </span>{" "}
              </li>

              <li className="section3-sub-li">
                <BsFillTelephoneFill size="2.5rem" color="#F0A500" />{" "}
                <span>+8618321904184</span>{" "}
              </li>

              <li className="section3-sub-li">
                <MdEmail size="2.5rem" color="#F0A500" />{" "}
                <span>info@knoxpv.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ******************** Section Four Starts from Here ******************** */}

      <div className="section4">
        <h2 className="title-pakistan">PAKISTAN</h2>

        <div className="contact-sec4-cards">
          {/* ****Card One**** */}

          <div className="contact-sec4-card">
            <div className="contact-sec4-slide contact-sec4-slide1">
              <div className="contact-sec4-content contact-sec4-content1">
                <h3 className="contact-sec4-card-title">ISLAMABAD</h3>
              </div>
            </div>
            <div className="contact-sec4-slide contact-sec4-slide2">
              <div className="contact-sec4-content">
                <ul>
                  <li>
                    <MdLocationOn size="2.5rem" color="#F0A500" />
                    <span>
                      Plot no 21, street no 4 <br /> steel fabrication Market,{" "}
                      <br /> I-10 Islamabad
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Two**** */}

          <div className="contact-sec4-card">
            <div className="contact-sec4-slide contact-sec4-slide1">
              <div className="contact-sec4-content contact-sec4-content1">
                <h3 className="contact-sec4-card-title">LAHORE</h3>
              </div>
            </div>
            <div className="contact-sec4-slide contact-sec4-slide2">
              <div className="contact-sec4-content">
                <ul>
                  <li>
                    <MdLocationOn size="2.5rem" color="#F0A500" />
                    <span>293-D Faisal town, Lahore</span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Three**** */}

          <div className="contact-sec4-card">
            <div className="contact-sec4-slide contact-sec4-slide1">
              <div className="contact-sec4-content contact-sec4-content1">
                <h3 className="contact-sec4-card-title">FAISALABAD</h3>
              </div>
            </div>
            <div className="contact-sec4-slide contact-sec4-slide2">
              <div className="contact-sec4-content">
                <ul>
                  <li>
                    <MdLocationOn size="2.5rem" color="#F0A500" />
                    <span>
                      P-43 Kareem Super <br /> market near Eden Garden
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Four**** */}

          <div className="contact-sec4-card">
            <div className="contact-sec4-slide contact-sec4-slide1">
              <div className="contact-sec4-content contact-sec4-content1">
                <h3 className="contact-sec4-card-title">FAISALABAD-2</h3>
              </div>
            </div>
            <div className="contact-sec4-slide contact-sec4-slide2">
              <div className="contact-sec4-content">
                <ul>
                  <li>
                    <MdLocationOn size="2.5rem" color="#F0A500" />
                    <span>
                      Beside Over Head Bridge <br /> Near sitara Engineers,
                      <br /> Nishatabad
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Five**** */}

          <div className="contact-sec4-card">
            <div className="contact-sec4-slide contact-sec4-slide1">
              <div className="contact-sec4-content contact-sec4-content1">
                <h3 className="contact-sec4-card-title">SAHIWAL</h3>
              </div>
            </div>
            <div className="contact-sec4-slide contact-sec4-slide2">
              <div className="contact-sec4-content">
                <ul>
                  <li>
                    <MdLocationOn size="2.5rem" color="#F0A500" />
                    <span>
                      Office no 18 Super market <br /> Church Road, Sahiwal
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Six**** */}

          <div className="contact-sec4-card">
            <div className="contact-sec4-slide contact-sec4-slide1">
              <div className="contact-sec4-content contact-sec4-content1">
                <h3 className="contact-sec4-card-title">KARACHI</h3>
              </div>
            </div>
            <div className="contact-sec4-slide contact-sec4-slide2">
              <div className="contact-sec4-content">
                <ul>
                  <li>
                    <MdLocationOn size="2.5rem" color="#F0A500" />
                    <span>
                      2ND Floor, Plot 6-U, <br /> Block 6, PECHS, Karachi
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ******************** Section Five Starts from Here ******************** */}

      <div className="section5">
        <h2 className="section5-title">AFTER SALES & REPAIR CENTER</h2>
        <div className="box-container">
          <div className="box">
            <div className="box-hover box-hover1">
              <h1 className="box-title">
                FAISALABAD <br /> (National repair & warranty claim Centre)
              </h1>
              <ul>
                <li>
                  <MdLocationOn size="2.5rem" color="#F0A500" />
                  <span>
                    Plot no 97 H Block Commercial Market near Eden Executive
                  </span>
                </li>
                <li>
                  <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="2.5rem" color="#F0A500" />
                  <span>info@knoxpv.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box-hover box-hover2">
              <h1 className="box-title">
                LAHORE <br /> (service centre)
              </h1>
              <ul>
                <li>
                  <MdLocationOn size="2.5rem" color="#F0A500" />
                  <span>293-D Faisal town, Lahore</span>
                </li>
                <li>
                  <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="2.5rem" color="#F0A500" />
                  <span>info@knoxpv.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box-hover box-hover3">
              <h1 className="box-title">
                KARACHI <br /> (service centre)
              </h1>
              <ul>
                <li>
                  <MdLocationOn size="2.5rem" color="#F0A500" />
                  <span>2ND Floor, Plot 6-U, Block 6, PECHS, Karachi</span>
                </li>
                <li>
                  <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="2.5rem" color="#F0A500" />
                  <span>info@knoxpv.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box-hover box-hover4">
              <h1 className="box-title">
                ISLAMABAD <br /> (National repair & warranty claim Centre)
              </h1>
              <ul>
                <li>
                  <MdLocationOn size="2.5rem" color="#F0A500" />
                  <span>
                    Plot no 21, street no 4 steel fabrication Market, I-10
                    Islamabad
                  </span>
                </li>
                <li>
                  <BsFillTelephoneFill size="2.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="2.5rem" color="#F0A500" />
                  <span>info@knoxpv.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
