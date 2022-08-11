import React, { useState } from "react";
import { VideoData } from "../Data/VideoData";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "../Styles/VideoSlider.css";

const VideoSlider = ({ videos }) => {
  const [current, setCurrent] = useState(0);
  const length = videos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(videos) || videos.length <= 0) {
    return null;
  }

  return (
    <section className="videoslider">
      <RiArrowLeftSLine className="vleft-arrow" onClick={prevSlide} />
      <RiArrowRightSLine className="vright-arrow" onClick={nextSlide} />
      {VideoData.map((slide, index) => {
        return (
          <div
            className={index === current ? "vslide active" : "vslide"}
            key={index}
          >
            {index === current && (
              <video className="video" controls>
                <source src={slide.knoxvideo} type="video/mp4" />
                <source src={slide.knoxvideo} type="video/mp4" />
              </video>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default VideoSlider;
