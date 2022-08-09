import React from "react";
import "../Styles/InstallerArea.css";
import { motion } from "framer-motion";
import VideoSlider from "./VideoSlider";
import { VideoData } from "../Data/VideoData";

function InstallerArea() {
  return (
    <motion.div
      className="InstallerArea"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5>Knox Makes Things Easy</h5>
      {/* video area */}

      <div className="installer-video-area">
        <h4>Video Center</h4>

        <VideoSlider videos={VideoData} />
      </div>

      {/* Warranty area */}

      <div className="installerarea-warranty">
        <h4>warranty</h4>

        {/* grid section */}

        <div className="warranty-div">
          {/* Grid Coloumn One */}
          <div className="warranty-info-div">
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
          <div className="warranty-status-div">
            <h6>Warranty status</h6>
            <p className="lighterP">
              Do you want to check the warranty status of your product? We give
              you access to the warranty database of Solplanet’s owner company
              AISWEI so that you can easily check the warranty status.
            </p>
            <button className="btn">Check warranty status</button>
          </div>
          {/* Grid Coloumn Three */}
          <div className="warranty-extension-div">
            <h6>Warranty extension</h6>
            <p className="lighterP">
              Do you want to extend your warranty? Sign in or create an account
              with Solplanet’s owner company AISWEI and buy a warranty extension
              for as little as 30€ for 5 additional years or more. In Australia,
              we provide 10 years warranty.
            </p>
            <button className="btn hover">Get warranty extension</button>
          </div>
        </div>

        {/* Grid Ends */}
      </div>

      {/* Download Area */}

      <div className="InstallerArea-download">
        <h4>Download center</h4>
        {/* freefrontend navbars */}

        {/* <Tabs /> */}

        {/* freefrontend navbars */}
      </div>
    </motion.div>
  );
}

export default InstallerArea;
