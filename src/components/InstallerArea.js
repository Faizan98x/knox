import React from "react";
import "../Styles/InstallerArea.css";
import { motion } from "framer-motion";
import VideoSlider from "./VideoSlider";
import { VideoData } from "../Data/VideoData";
import { useState } from "react";
import pdffile from "../images/knox.pdf";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function InstallerArea() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showhybrid, setShowhybrid] = useState(false);
  const [showsingle, setShowsingle] = useState(false);
  const [showthree, setShowthree] = useState(false);
  const [showdowbrochures, setShowdowbrochures] = useState(false);
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
        <h2>Knox Makes Things Easy</h2>
      </div>
      {/* video area */}

      <div data-aos="fade-up" className="installer-video-area">
        <h4>Video Center</h4>

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
            <div>
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
            <button className="btn">Check warranty status</button>
          </div>
          {/* Grid Coloumn Three */}
          <div data-aos="fade-right" className="warranty-extension-div">
            <h6>Warranty extension</h6>
            <p className="lighterP">
              Do you want to extend your warranty? Sign in or create an account
              with Solplanet’s owner company AISWEI and buy a warranty extension
              for as little as 30€ for 5 additional years or more. In Australia,
              we provide 10 years warranty.
            </p>
            <button className="btn hover">
              {" "}
              <Link to="/warrantyform">Get warranty extension</Link>{" "}
            </button>
          </div>
        </div>

        {/* Grid Ends */}
      </div>

      {/* Download Area */}

      <div data-aos="zoom-out" className="InstallerArea-download">
        <h4>Download Center</h4>

        {/* main download headings */}
        <div className="download-block">
          <div className="download-block-1st">
            <button
              onClick={() => {
                setShow(true);
                setShow2(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowdowbrochures(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              Datasheets
            </button>
            <br /> <br /> <br />
            <button
              onClick={() => {
                setShow(true);
                setShow2(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowdowbrochures(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              Certificates
            </button>
            <br /> <br /> <br />
            <button
              onClick={() => {
                setShow(true);
                setShow2(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowdowbrochures(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              Instructions
            </button>
            <br /> <br /> <br />
            <button
              onClick={() => {
                setShow2(true);
                setShow(false);
                setShowhybrid(false);
                setShowsingle(false);
                setShowthree(false);
                setShowhybridDownload(false);
                setShowsingleDownload(false);
                setShowthreeDownload(false);
              }}
            >
              Brochures
            </button>
          </div>
          <div className="download-block-1st">
            {show ? (
              <motion.div
                initial={{ X: -100, opacity: 0 }}
                animate={{ X: 0, opacity: 1 }}
                exit={{ X: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="datasheets-area"
              >
                <button
                  onClick={() => {
                    setShowhybrid(true);
                    setShowsingle(false);
                    setShowthree(false);
                  }}
                >
                  Hybrid
                </button>
                <br /> <br /> <br />
                <button
                  onClick={() => {
                    setShowhybrid(false);
                    setShowsingle(true);
                    setShowthree(false);
                  }}
                >
                  Single Phase
                </button>
                <br /> <br /> <br />
                <button
                  onClick={() => {
                    setShowhybrid(false);
                    setShowsingle(false);
                    setShowthree(true);
                  }}
                >
                  Three Phase
                </button>
              </motion.div>
            ) : (
              " "
            )}

            {show2 ? (
              <motion.div
                initial={{ X: -100, opacity: 0 }}
                animate={{ X: 0, opacity: 1 }}
                exit={{ X: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="datasheets-area"
              >
                <button
                  onClick={() => {
                    setShowhybrid(false);
                    setShowsingle(false);
                    setShowthree(false);
                    setShowdowbrochures(true);
                  }}
                >
                  Product Brochures
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
                  onClick={() => {
                    setShowhybridDownload(true);
                    setShowsingleDownload(false);
                    setShowthreeDownload(false);
                  }}
                >
                  ASW 3 to 6kw
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
                  onClick={() => {
                    setShowhybridDownload(false);
                    setShowsingleDownload(true);
                    setShowthreeDownload(false);
                  }}
                >
                  ASW H2 3 to 6kw
                </button>
              </motion.div>
            ) : (
              " "
            )}

            {/* three phase inverter */}

            {showthree ? (
              <div className="datasheets-area">
                <button
                  onClick={() => {
                    setShowhybridDownload(false);
                    setShowsingleDownload(false);
                    setShowthreeDownload(true);
                  }}
                >
                  ASW S2 3 to 6kw
                </button>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>

        {/* datasheets, certificates, instructions, brochures download area  */}

        {showdowbrochures ||
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
              padding: "3rem",
              borderTop: "0.5px solid darkgray",
            }}
            className="pdf-file-viewer"
          >
            <h6 style={{ textAlign: "center", marginBottom: "5rem" }}>
              Downloads
            </h6>
            {showdowbrochures ? (
              <a
                style={{
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                }}
                target="_blank"
                href={pdffile}
              >
                <RiArrowRightSLine /> Product Brochures
              </a>
            ) : (
              " "
            )}

            {showhybridDownload ? (
              <a
                style={{
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                }}
                target="_blank"
                href={pdffile}
              >
                <RiArrowRightSLine /> Hybrid Inverter
              </a>
            ) : (
              " "
            )}

            {showsingleDownload ? (
              <a
                style={{
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                }}
                target="_blank"
                href={pdffile}
              >
                <RiArrowRightSLine /> Single Inverter
              </a>
            ) : (
              " "
            )}

            {showthreeDownload ? (
              <a
                style={{
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                }}
                target="_blank"
                href={pdffile}
              >
                Three Inverter
              </a>
            ) : (
              " "
            )}
          </motion.div>
        ) : (
          " "
        )}
      </div>
    </motion.div>
  );
}

export default InstallerArea;
