import React from "react";
import Banner from "./Banner/Banner";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import Cards from "./Cards/Cards";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Intro />
      <Cards />
    </>
  );
};

export default Home;
