import React from "react";
import { useEffect } from "react";

const Dropdown = (props) => {
  useEffect(() => {
    const arrowDownIcon = document.querySelector(".arrow-down");
    const arrowUpIcon = document.querySelector(".arrow-up");

    const dropdownContent = document.querySelector(".dropdown-content");

    arrowDownIcon.addEventListener("click", () => {
      dropdownContent.classList.remove("hidden");
      arrowUpIcon.classList.remove("hidden");
      arrowDownIcon.classList.add("hidden");
    });

    arrowUpIcon.addEventListener("click", () => {
      dropdownContent.classList.add("hidden");
      arrowUpIcon.classList.add("hidden");
      arrowDownIcon.classList.remove("hidden");
    });
  }, []);

  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <h3>{props.title}</h3>
        <img
          className="arrow-down"
          src="./assets/img/arrow-down.svg"
          alt="arrow-down"
        />
        <img
          className="arrow-up hidden"
          src="./assets/img/arrow-up.svg"
          alt="arrow-up"
        />
      </div>
      <div className="dropdown-content hidden">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Dropdown;
