import React from "react";
import { cars } from "../data";
import { suvModels, electricModels, sedanModels } from "../data";
import Navbar from "../components/homepage/navbar/Navbar";
import Hero from "../components/homepage/hero/Hero";
import UpcomingModels from "../components/homepage/models/upcomingModels/UpcomingModels";
import Warranty from "../components/homepage/warranty/Warranty";
import Features from "../components/homepage/features/Features";
import MovingForward from "../components/homepage/moving/MovingForward";
import Footer from "../components/homepage/footer/Footer";

const HomePage = () => {
  const electricModelLength = electricModels.length;
  const sedanModelLength = sedanModels.length;

  return (
    <>
      <Hero
        cars={cars}
        suvModel={suvModels}
        electricModelLength={electricModelLength}
        sedanModelLength={sedanModelLength}
      />
      <UpcomingModels />
      <Warranty />
      <Features />
      <MovingForward />
    </>
  );
};

export default HomePage;
