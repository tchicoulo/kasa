import React from "react";

const BackgroundCustom = (props) => {
  return (
    <div className={props.background}>
      <div className="bg-darken"></div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default BackgroundCustom;
