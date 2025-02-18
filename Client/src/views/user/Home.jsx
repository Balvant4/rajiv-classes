import React from "react";
import HeroSection from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Banner from "../../components/Banner";
import FreeClass from "../../components/FreeClass";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <Banner />
      <FreeClass />
    </div>
  );
};

export default Home;
