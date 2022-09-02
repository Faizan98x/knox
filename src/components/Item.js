import React from "react";

export default function Item({ text, text2, text3, text4 }) {
  return (
    <div>
        <div className="item">
          <div className="htext">Customer Name:</div>
          <div className="text">{text}</div>
        </div>
        <div className="item">
          <div className="htext">Inverter Serial No:</div>
          <div className="text">{text2}</div>
        </div>
        <div className="item">
          <div className="htext">Arrival Date:</div>
          <div className="text">{text3}</div>
        </div>
        <div className="item">
          <div className="htext">Status:</div>
          <div className="text">{text4}</div>
        </div>
    </div>
  );
}
