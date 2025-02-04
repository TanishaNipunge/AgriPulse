import React from "react";
import AboutSection from "../../Component/Aboutus/Aboutus";
import Predict from "../../Component/Predict/Predict";
import HeroSection from "../../Component/Herosection/Herosection";
const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Predict/>
    </div>
  );
};

export default LandingPage;
