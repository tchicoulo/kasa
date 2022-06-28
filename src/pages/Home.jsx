import React from "react";
import BackgroundCustom from "../components/BackgroundCustom";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <BackgroundCustom
        background="bg-home"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  );
};

export default Home;
