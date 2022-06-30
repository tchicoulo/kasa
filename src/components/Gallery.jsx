import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import myData from "../data/logement.json";

const Gallery = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("./data/logement.json")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="gallery">
      <ul>
        {myData.map((logement) => (
          <NavLink
            key={logement.id}
            to={`/logement/${logement.id}`}
            logement={logement}
          >
            <Card key={logement.id} logement={logement} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
