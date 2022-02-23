import React from "react";

import {  About, Header } from "../containers/";
import { Navbar, Footer } from "../components/";

const Home = () => {
  return (
    <div className="App">
      <div className="headComp">
        <Navbar />
        <Header />
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
