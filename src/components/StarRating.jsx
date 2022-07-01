import React from "react";
import StarFull from "../assets/img/star-full.png";
import StarEmpty from "../assets/img/star-empty.png";

const StarRating = (props) => {
  const parseIntRating = parseInt(props.rating);

  return (
    <div className="star-rating">
      {props.star <= parseIntRating ? (
        <img src={StarFull} alt="star full" />
      ) : (
        <img src={StarEmpty} alt="star empty" />
      )}
    </div>
  );
};

export default StarRating;
