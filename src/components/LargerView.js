import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import { SliderData } from "../Data/SliderData";
import { Link } from "react-router-dom";

const mystyle = {
  background: "#313131",
  color: "#fff",
  borderRadius: "5rem",
  padding: "1rem",
};

function LargerView() {
  return (
    <motion.div
      style={{ padding: "5rem" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/product1" style={mystyle}>
        Click to go back
      </Link>
      <ImageSlider slides={SliderData} />
    </motion.div>
  );
}

export default LargerView;
