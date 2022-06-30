import React from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import myData from "../data/logement.json";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";

const Logement = () => {
  const { id } = useParams();
  console.log({ myData });

  const logementDetails = myData.find((el) => el.id === id);
  console.log(logementDetails);

  return (
    <div>
      <Navigation />
      <Carrousel />
      <div className="detailsLogement">
        <h1>{logementDetails.title}</h1>
        <h2>{logementDetails.location}</h2>
        <div className="host">
          <h3>{logementDetails.host.name}</h3>
          <img
            src={logementDetails.host.picture}
            alt={logementDetails.host.name}
          />
        </div>
        <div className="tags">
          {logementDetails.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <div className="rating"></div>
      </div>
    </div>
  );
};

export default Logement;
