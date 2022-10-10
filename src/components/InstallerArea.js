import { React } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import VideoSlider from "./VideoSlider";
import { VideoData } from "../Data/VideoData";
import Downloadcenter from "./Downloadcenter";

// installer area style file link
import "../Styles/InstallerArea.css";

// installer area images links
import knoxlogo from "../images/knoxwhite.png";




// Warranty pdf files

import AusWarranty from "../pdf-files-Knox/Aiswei-Factory-Quality-Warranty-Terms-for-Australia-v1.3.pdf";
import IntWarranty from "../pdf-files-Knox/Aiswei-Factory-Quality-Warranty-Terms-for-Overseas-Territory_V1.4.pdf";
import PakWarranty from "../pdf-files-Knox/IMPOTAMT NOTICE KNOX.pdf";

// ****************   usestates for download section  ******************

function InstallerArea() {
  

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
            <img
              src={knoxlogo}
              width={180}
              style={{ marginRight: "2rem" }}
              alt=""
            />
          </span>
          Makes Things Easy
        </h2>
      </div>

      {/* Download Area */}

      <Downloadcenter />

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
                <a
                  href={IntWarranty}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  International warranty
                </a>
              </button>
              <button style={{ marginRight: "1rem" }} className="btn">
                <a
                  href={AusWarranty}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  Australian warranty
                </a>
              </button>
              <button className="btn">
                <a
                  href={PakWarranty}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  Pakistan warranty Notice
                </a>
              </button>
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
