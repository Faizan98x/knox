import React from "react";
import "../Styles/InstallerArea.css";
import { motion } from "framer-motion";
import VideoSlider from "./VideoSlider";
import { VideoData } from "../Data/VideoData";
import { useState } from "react";
import pdffile from "../pdf files/knox.pdf";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsDot, BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import knoxlogo from "../images/logo.png";

function InstallerArea() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [showhybrid, setShowhybrid] = useState(false);
  const [showsingle, setShowsingle] = useState(false);
  const [showthree, setShowthree] = useState(false);
  const [showbrochuresDownload, setShowbrochuresDownload] = useState(false);
  const [showhybridDownload, setShowhybridDownload] = useState(false);
  const [showsingleDownload, setShowsingleDownload] = useState(false);
  const [showthreeDownload, setShowthreeDownload] = useState(false);

  return (
    <motion.div
      className="InstallerArea"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="InstallerArea-section1">
        <h2 style={{ textAlign: "center" }}>
          <span>
            <img src={knoxlogo} width={350} alt="" />
          </span>
          Makes Things Easy
        </h2>
      </div>

      {/* Download Area */}

      <div className="InstallerArea-download">
        <h4>Download Center</h4>

        {/* main download headings */}
        <div className="download-block">
          <div className="download-block-1st">
            <button
              className={show ? "button" : "button2"}
              onClick={() => {
                setShow(true);
                setShow2(false);
                setShow3(false);
                setShow4(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowbrochuresDownload(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              <BsDot size={"3rem"} /> Datasheets
            </button>
            <br /> <br /> <br />
            <button
              className={show2 ? "button" : "button2"}
              onClick={() => {
                setShow(false);
                setShow2(true);
                setShow3(false);
                setShow4(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowbrochuresDownload(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              <BsDot size={"3rem"} /> Certificates
            </button>
            <br /> <br /> <br />
            <button
              className={show3 ? "button" : "button2"}
              onClick={() => {
                setShow(false);
                setShow2(false);
                setShow3(true);
                setShow4(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowbrochuresDownload(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              <BsDot size={"3rem"} /> Instructions
            </button>
            <br /> <br /> <br />
            <button
              className={show4 ? "button" : "button2"}
              onClick={() => {
                setShow4(true);
                setShow(false);
                setShow2(false);
                setShow3(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              <BsDot size={"3rem"} /> Brochures
            </button>
          </div>
          <div className="download-block-1st">
            {show || show2 || show3 ? (
              <motion.div
                initial={{ X: -100, opacity: 0 }}
                animate={{ X: 0, opacity: 1 }}
                exit={{ X: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="datasheets-area"
              >
                <button
                  className={showhybrid ? "button" : "button2"}
                  onClick={() => {
                    setShowhybrid(true);
                    setShowsingle(false);
                    setShowthree(false);
                  }}
                >
                  <BsDot size={"3rem"} /> Hybrid
                </button>
                <br /> <br /> <br />
                <button
                  className={showsingle ? "button" : "button2"}
                  onClick={() => {
                    setShowhybrid(false);
                    setShowsingle(true);
                    setShowthree(false);
                  }}
                >
                  <BsDot size={"3rem"} /> Single Phase
                </button>
                <br /> <br /> <br />
                <button
                  className={showthree ? "button" : "button2"}
                  onClick={() => {
                    setShowhybrid(false);
                    setShowsingle(false);
                    setShowthree(true);
                  }}
                >
                  <BsDot size={"3rem"} /> Three Phase
                </button>
              </motion.div>
            ) : (
              " "
            )}

            {show4 ? (
              <motion.div
                initial={{ X: -100, opacity: 0 }}
                animate={{ X: 0, opacity: 1 }}
                exit={{ X: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="datasheets-area"
              >
                <button
                  className={showbrochuresDownload ? "button" : "button2"}
                  onClick={() => {
                    setShowhybrid(false);
                    setShowsingle(false);
                    setShowthree(false);
                    setShowbrochuresDownload(true);
                  }}
                >
                  <BsDot size={"3rem"} /> Product Brochures
                </button>
              </motion.div>
            ) : (
              " "
            )}
          </div>
          <div className="download-block-1st">
            {/* hybrid inverter  */}

            {showhybrid ? (
              <motion.div
                initial={{ X: -100, opacity: 0 }}
                animate={{ X: 0, opacity: 1 }}
                exit={{ X: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="datasheets-area"
              >
                <button
                  className={showhybridDownload ? "button" : "button2"}
                  onClick={() => {
                    setShowhybridDownload(true);
                    setShowsingleDownload(false);
                    setShowthreeDownload(false);
                  }}
                >
                  <BsDot size={"3rem"} /> ASW 3 to 6kw
                </button>
              </motion.div>
            ) : (
              " "
            )}

            {/* single phase inverter */}

            {showsingle ? (
              <motion.div
                initial={{ X: -100, opacity: 0 }}
                animate={{ X: 0, opacity: 1 }}
                exit={{ X: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="datasheets-area"
              >
                <button
                  className={showsingleDownload ? "button" : "button2"}
                  onClick={() => {
                    setShowhybridDownload(false);
                    setShowsingleDownload(true);
                    setShowthreeDownload(false);
                  }}
                >
                  <BsDot size={"3rem"} /> ASW H2 3 to 6kw
                </button>
              </motion.div>
            ) : (
              " "
            )}

            {/* three phase inverter */}

            {showthree ? (
              <div className="datasheets-area">
                <button
                  className={showthreeDownload ? "button" : "button2"}
                  onClick={() => {
                    setShowhybridDownload(false);
                    setShowsingleDownload(false);
                    setShowthreeDownload(true);
                  }}
                >
                  <BsDot size={"3rem"} /> ASW S2 3 to 6kw
                </button>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>

        {/* datasheets, certificates, instructions, brochures download area  */}

        {showbrochuresDownload ||
        showhybridDownload ||
        showsingleDownload ||
        showthreeDownload ? (
          <motion.div
            initial={{ X: -100, opacity: 0 }}
            animate={{ X: 0, opacity: 1 }}
            exit={{ X: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#eee",
              padding: "4rem",
              borderTop: "0.5px solid darkgray",
            }}
            className="pdf-file-viewer"
          >
            <h6 style={{ textAlign: "center", marginBottom: "5rem" }}>
              Downloads
            </h6>
            {showbrochuresDownload ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={pdffile}
                >
                  <RiArrowRightSLine /> Product Brochures
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a style={{ fontSize: "1.8rem" }} href={pdffile} download>
                  <BsDownload />{" "}
                </a>
              </p>
            ) : (
              " "
            )}

            {showhybridDownload ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={pdffile}
                >
                  <RiArrowRightSLine /> Hybrid Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a style={{ fontSize: "1.8rem" }} href={pdffile} download>
                  <BsDownload />{" "}
                </a>
              </p>
            ) : (
              " "
            )}

            {showsingleDownload ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={pdffile}
                >
                  <RiArrowRightSLine /> Single Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a style={{ fontSize: "1.8rem" }} href={pdffile} download>
                  <BsDownload />{" "}
                </a>
              </p>
            ) : (
              " "
            )}

            {showthreeDownload ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={pdffile}
                >
                  <RiArrowRightSLine /> Three Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a style={{ fontSize: "1.8rem" }} href={pdffile} download>
                  <BsDownload />{" "}
                </a>
              </p>
            ) : (
              " "
            )}
          </motion.div>
        ) : (
          " "
        )}
      </div>

      {/* video area */}

      <div className="installer-video-area">
        <h4>Installation Videos</h4>

        <VideoSlider videos={VideoData} />
      </div>

      {/* Warranty area */}

      <div className="installerarea-warranty">
        <h4 data-aos="fade-down">warranty</h4>

        {/* grid section */}

        <div className="warranty-div">
          {/* Grid Coloumn One */}
          <div data-aos="fade-left" className="warranty-info-div">
            <h6>Warranty information</h6>
            <p className="lighterP">
              All Solpanet products are produced according to international
              quality standards. We offer a standard warranty of up to 6 years
              without affecting the legal warranty provided by any wholesaler or
              retailer.
            </p>
            <div className="warranty-buttons">
              <button style={{ marginRight: "1rem" }} className="btn">
                International warranty
              </button>
              <button className="btn">Australian warranty</button>
            </div>
          </div>
          {/* Grid Coloumn Two */}
          <div data-aos="fade-down" className="warranty-status-div">
            <h6>Warranty status</h6>
            <p className="lighterP">
              Do you want to check the warranty status of your product? We give
              you access to the warranty database of Solplanet’s owner company
              AISWEI so that you can easily check the warranty status.
            </p>
            <button className="btn">
              <Link style={{ color: "#fff" }} to="/warrantycheck">
                Check warranty status
              </Link>
            </button>
          </div>
        </div>

        {/* Grid Ends */}
      </div>
    </motion.div>
  );
}

export default InstallerArea;
