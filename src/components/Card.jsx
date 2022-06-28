import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <div className="bg"></div>
      <h2>{logement.title}</h2>
    </li>
  );
};

export default Card;
