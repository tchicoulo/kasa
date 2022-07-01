import React from "react";
import { useState } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <h3 style={props.Style}>{props.title}</h3>
        {open ? (
          ""
        ) : (
          <img
            onClick={() => setOpen(true)}
            className="arrow-down"
            src={require("../assets/img/arrow-down.svg").default}
            alt="arrow-down"
          />
        )}
        {open ? (
          <img
            onClick={() => setOpen(false)}
            className="arrow-up"
            src={require("../assets/img/arrow-up.svg").default}
            alt="arrow-up"
          />
        ) : (
          ""
        )}
      </div>
      {open ? (
        <div className="dropdown-content">
          <ul style={props.Style}>{props.description}</ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
