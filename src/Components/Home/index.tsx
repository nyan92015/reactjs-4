import React from "react";
import "./Home.scss";
import Introduce from "../Introduce";
import Products from "../Products";
import Skills from "../Skills";

const Home = () => {
  return (
    <div className="home">
      <Introduce />
      <Products />
      <Skills />
      <h2>THANK YOU FOR READING!</h2>
    </div>
  );
};

export default Home;
