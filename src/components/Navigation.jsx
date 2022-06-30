import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/img/kasa-logo.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <img
          src={require("../assets/img/kasa-logo.svg").default}
          alt="kasa logo"
        />
      </NavLink>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
