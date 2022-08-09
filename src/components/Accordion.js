import React, { useState } from "react";
import { QstnAnsData } from "../Data/QstnAnsData";
import { FiPlus, FiMinus } from "react-icons/fi";
import "../Styles/Accordion.css";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <div data-aos="fade-top" data-aos-delay="300" className="accordionsection">
      {QstnAnsData.map((item, id) => {
        return (
          <>
            <div
              className="wrap"
              onClick={() => toggle(id)}
              key={id}
            >
              <h1>{item.question}</h1>
              <span>
                {clicked === id ? (
                  <FiMinus color="#00FFB9" size="25px" />
                ) : (
                  <FiPlus color="#00FFB9" size="25px" />
                )}
              </span>
            </div>
            {clicked === id ? (
              <div
                data-aos="fade-top"
                className="dropdown"
              >
                <p>{item.answer}</p>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
