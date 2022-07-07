import React from "react";
import Navigation from "../components/Navigation";
import { Navigate, useParams } from "react-router-dom";
import myData from "../data/logement.json";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import StarRating from "../components/StarRating";
import Dropdown from "../components/Dropdown";

const Logement = () => {
  const { id } = useParams();
  const arrayOfRating = [1, 2, 3, 4, 5];
  const logementDetails = myData.find((el) => el.id === id);

  if (logementDetails === undefined) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div>
      <Navigation />
      <Carrousel pictures={logementDetails.pictures} />
      <div className="details-logement">
        <div className="title">
          <h1>{logementDetails.title}</h1>
          <h2>{logementDetails.location}</h2>
        </div>
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
        <div className="rating">
          {arrayOfRating.map((star, index) => (
            <StarRating
              key={index}
              star={star}
              rating={logementDetails.rating}
            />
          ))}
        </div>
      </div>
      <div className="drop-down-container">
        <div className="drop-down-box">
          <Dropdown
            title="Description"
            description={logementDetails.description}
            style={{ fontSize: "18px" }}
          />
        </div>
        <div className="drop-down-box">
          <Dropdown
            title="Équipements"
            style={{ fontSize: "18px" }}
            description={logementDetails.equipments.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Logement;
