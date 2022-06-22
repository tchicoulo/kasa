import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="./kasa-logo.svg" alt="kasa logo" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
