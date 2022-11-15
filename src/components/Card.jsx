import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <img src={logement.pictures[0]} alt="logement" />
      <div className="bg"></div>
      <h2>{logement.title}</h2>
    </li>
  );
};

export default Card;
