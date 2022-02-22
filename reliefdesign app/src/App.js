import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";


const app = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agence" element={<Agence />} />
        <Route exact path="/projets" element={<Projets />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default app;

/* 
ctrl end/home
crtl+shift arrow


*/
