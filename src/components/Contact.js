import React from "react";
import contactus from "../images/contactus.svg";
import "../Styles/Contact.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFillClockFill,
  BsTwitter,
} from "react-icons/bs";
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";

function Contact() {
  return (
    <div className="contact">
      {/* ******************** Section One Starts from Here ******************** */}

      <div className="section1">
        <h1>CONTACT US</h1>
        <img src={contactus} alt="" />
      </div>

      {/* ******************** Section Two Starts from Here ******************** */}

      <div className="section2">
        <h1 className="title">Contact Info</h1>

        <div className="section2-subsection">
          <div className="subsection-left-side">
            <ul>
              <li>
                <MdLocationOn size="1.5rem" color="#F0A500" />{" "}
                <span>
                  Knox Pv Energy co., Ltd. Add: 168 Taiping south Road, <br />{" "}
                  Nanjing, Jiangsu, China
                </span>
              </li>

              <li>
                <MdEmail size="1.5rem" color="#F0A500" />
                <span>info@knoxpv.com</span>{" "}
              </li>

              <li>
                <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                <span>+92 304 111 Knox (5669)</span>
              </li>
            </ul>
          </div>

          <div className="subsection-right-side">
            <ul>
              <li>
                <RiInstagramFill size="1.5rem" color="#F0A500" />{" "}
                <span>@instagram.com</span>
              </li>

              <li>
                <RiFacebookCircleFill size="1.5rem" color="#F0A500" />
                <span>@facebook.com</span>{" "}
              </li>

              <li>
                <BsTwitter size="1.5rem" color="#F0A500" />
                <span>@twiter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="timing">
          <BsFillClockFill size="1.5rem" color="#F0A500" />
          <span>Monday to Friday : 9am to 6pm</span>
        </h1>
      </div>

      {/* ******************** Section Three Starts from Here ******************** */}

      <div className="section3">
        <h1 className="offices-title">OFFICES</h1>
        <div className="section3-sub">
          <h2 className="title-china">CHINA</h2>

          <div className="section3-sub-overlay">
            <ul className="section3-sub-text">
              <li className="section3-sub-li">
                <h1>CHINA</h1>
              </li>

              <li className="section3-sub-li">
                <MdLocationOn size="1.5rem" color="#F0A500" />{" "}
                <span>
                  Knox Pv Energy co, Ltd. Add: 168 Taiping south Road, <br />{" "}
                  Nanjing, Jiangsu, China
                </span>{" "}
              </li>

              <li className="section3-sub-li">
                <BsFillTelephoneFill size="1.5rem" color="#F0A500" />{" "}
                <span>+8618321904184</span>{" "}
              </li>

              <li className="section3-sub-li">
                <MdEmail size="1.5rem" color="#F0A500" />{" "}
                <span>info@knoxpv.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ******************** Section Four Starts from Here ******************** */}

      <div className="section4">
        <h2 className="title-pakistan">PAKISTAN</h2>

        <div className="card-container">
          {/* ****Card One**** */}

          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <h2 className="card-title">ISLAMABAD</h2>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <ul>
                  <li>
                    <MdLocationOn size="1.5rem" color="#F0A500" />
                    <span>
                      Plot no 21, street no 4 <br /> steel fabrication Market,{" "}
                      <br /> I-10 Islamabad
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Two**** */}

          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <h2 className="card-title">LAHORE</h2>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <ul>
                  <li>
                    <MdLocationOn size="1.5rem" color="#F0A500" />
                    <span>293-D Faisal town, Lahore</span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Three**** */}

          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <h2 className="card-title">FAISALABAD</h2>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <ul>
                  <li>
                    <MdLocationOn size="1.5rem" color="#F0A500" />
                    <span>
                      P-43 Kareem Super market <br /> near Eden Garden,
                      Faisalabad
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Four**** */}

          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <h2 className="card-title">
                    FAISALABAD <br /> 2
                  </h2>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <ul>
                  <li>
                    <MdLocationOn size="1.5rem" color="#F0A500" />
                    <span>
                      Beside Over Head Bridge, <br /> Near sitara Engineers,
                      Nishatabad
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Five**** */}

          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <h2 className="card-title">SAHIWAL</h2>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <ul>
                  <li>
                    <MdLocationOn size="1.5rem" color="#F0A500" />
                    <span>
                      Office no 18 Super market <br /> Church Road, Sahiwal
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                    <span>+92 304 111 Knox (5669)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ****Card Six**** */}

          <div className="card">
            <div className="slide slide1">
              <div className="content">
                <div className="icon">
                  <h2 className="card-title">KARACHI</h2>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content">
                <ul>
                  <li>
                    <MdLocationOn size="1.5rem" color="#F0A500" />
                    <span>
                      2ND Floor, Plot 6-U, <br /> Block 6, PECHS, Karachi
                    </span>
                  </li>
                  <li>
                    <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
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
                  <MdLocationOn size="1.5rem" color="#F0A500" />
                  <span>
                    Plot no 97 H Block Commercial Market near Eden Executive
                  </span>
                </li>
                <li>
                  <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="1.5rem" color="#F0A500" />
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
                  <MdLocationOn size="1.5rem" color="#F0A500" />
                  <span>293-D Faisal town, Lahore</span>
                </li>
                <li>
                  <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="1.5rem" color="#F0A500" />
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
                  <MdLocationOn size="1.5rem" color="#F0A500" />
                  <span>2ND Floor, Plot 6-U, Block 6, PECHS, Karachi</span>
                </li>
                <li>
                  <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="1.5rem" color="#F0A500" />
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
                  <MdLocationOn size="1.5rem" color="#F0A500" />
                  <span>
                    Plot no 21, street no 4 steel fabrication Market, I-10
                    Islamabad
                  </span>
                </li>
                <li>
                  <BsFillTelephoneFill size="1.5rem" color="#F0A500" />
                  <span>+92 304 111 Knox (5669)</span>
                </li>
                <li>
                  <MdEmail size="1.5rem" color="#F0A500" />
                  <span>info@knoxpv.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;