import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Logement from "./pages/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
