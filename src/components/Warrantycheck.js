import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import { Link } from "react-router-dom";

function Warrantycheck() {
  const [knox, setKnox] = useState([]);
  const [searchID, setSearchID] = useState([]);
  const [searchdata, setSearchdata] = useState([]);

  const handleSearch = () => {
    setSearchdata(knox.filter((id) => id.text2 === searchID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-Knoxdata")
      .then((res) => setKnox(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="warranty-check">
      <div className="warranty-container">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Check Warranty Status
        </h4>

        <input
          style={{ textAlign: "center", marginBottom: "2rem" }}
          type="search"
          placeholder="Enter Inverter Serial Number"
          value={searchID}
          onChange={(e) => setSearchID(e.target.value)}
        />
        <button
          style={{ textAlign: "center", marginBottom: "2rem" }}
          onClick={() => handleSearch()}
          className="add"
        >
          Search
        </button>
        <div className="list">
          {searchdata.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              text2={item.text2}
              text3={item.text3}
              text4={item.text4}
            />
          ))}
        </div>
        <button className="btn">
          <Link
            style={{ color: "#fff", marginTop: "3rem" }}
            to="/installerarea"
          >
            Return
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Warrantycheck;
