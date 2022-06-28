import React from "react";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="bg-home">
        <div className="bg-darken"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
