import React from "react";
import ImageSlider from "../../ImageSlider";
import { SSeries1to3kWData } from "../../../Data/SliderData";

import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

function SSeries1to3kW() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product1">
        <div className="product1-left-side">
          <ImageSlider Sliderdata={SSeries1to3kWData} slides={SSeries1to3kWData} />
        </div>
        <div className="product1-right-side">
          <h6>Single Phase Inverter</h6>
          <p>ASW 1-3 kW S Series</p>
          <ul>
            <h6>Benefits</h6>
            <li>
              <BsIcons.BsCloudRainHeavyFill size="2.5rem" color="#F0A500" />
              <span>IP66 rated design​ for indoor or outdoor use</span>
            </li>
            <li>
              <BsIcons.BsLightning size="2.5rem" color="#F0A500" />
              <span>
                150% oversizing of PV array with integrated DC switch
              </span>
            </li>
            <li>
              <BsIcons.BsSoundwave size="2.5rem" color="#F0A500" />
              <span>Silent and discreet operation</span>
            </li>
            <li>
              <BsIcons.BsWrench size="2.5rem" color="#F0A500" />
              <span>Quick & easy-to-install with standard tools</span>
            </li>
            <li>
              <FaIcons.FaLeaf size="2.5rem" color="#F0A500" />
              <span>Light & compact wall mounting</span>
            </li>
            <li>
              <FaIcons.FaMobileAlt size="2.5rem" color="#F0A500" />
              <span>Easy commissioning & monitoring with Aiswei apps</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="product1-details">
        <h6>Aesthetically pleasing, compact and powerful</h6>
        <br /> <br />
        <p>
          The ASW S Series single phase inverter is developed to be used in
          combination with a residential rooftop PV system. The inverter has a
          compact wall mounting and IP 66 rated design, which makes it
          applicable The ASW S series single phase inverter combines all
          aspects of our believes into a compact, award winning, IP66 rated
          design. With its discreet design and silent operation, the ASW S
          inverter blends seamlessly into the comforts of your family
          surroundings. ​
          <br />
          With dual MPPT trackers and the flexibility of up to 150 %
          <br />
          PV array oversizing your family will enjoy guaranteed energy savings
          for years to come.
        </p>
        <h6>Key Features</h6> <br /> <br />
        <h6>Reliable</h6> <br />
        <p>
          Designed in accordance with international quality and safety
          standards, the IP66 rated design can withstand a wide range of
          environmental conditions.​ <br /> DC reverse polarity protection and
          AC sensitive residual-current monitoring function ensures long-term
          operation with a strong focus on safety for installers and
          end-users.
        </p>
        <h6>Powerful</h6> <br />
        <p>
          Input (DC) of min 80V, max 580V and initial Dual independent MPP
          tracker and wide MPP voltage range ensure optimal energy generation
          for high yields.​ <br /> Up to 150% oversizing of the PV array,
          ensures optimal energy yields and high flexibility for residential
          rooftop PV system design.
        </p>
        <h6>Easy-to-install</h6> <br />
        <p>
          Equipped with Phoenix Contact DC connectors to ensure fast and easy
          installation with standard tools.​
          <br /> Plug and play Wi-Fi and 4G sticks which allows easy
          monitoring of up to five inverters.​ <br /> Quick setup and easy
          commissioning with Aiswei Apps.
        </p>
      </div>

      <div className="product1-downloads"></div>
    </motion.div>
  </>
  )
}

export default SSeries1to3kW