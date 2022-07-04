import React from "react";
import { useState } from "react";
import arrowLeft from "../assets/img/arrow-left.png";
import arrowRight from "../assets/img/arrow-right.png";

const Carrousel = ({ pictures }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="carrousel">
      <div
        className="carrousel-inner"
        style={{ backgroundImage: `url(${pictures[currentImg]})` }}
      >
        <img
          className="arrow-left"
          onClick={() => {
            currentImg
              ? setCurrentImg(currentImg - 1)
              : setCurrentImg(pictures.length - 1);
          }}
          src={arrowLeft}
          alt="prev icon"
        />
        <span className="current-page">
          {currentImg + 1}/{pictures.length}
        </span>
        <img
          className="arrow-right"
          onClick={() => {
            currentImg + 1 < pictures.length
              ? setCurrentImg(currentImg + 1)
              : setCurrentImg(0);
          }}
          src={arrowRight}
          alt="next icon"
        />
      </div>
    </div>
  );
};

export default Carrousel;
