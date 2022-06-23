import React from "react";

const Card = ({ logement }) => {
  console.log(logement.title);
  return (
    <li className="card">
      <h2>{logement.title}</h2>
    </li>
  );
};

export default Card;
