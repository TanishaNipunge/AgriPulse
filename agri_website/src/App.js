import React from "react";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/Herosection/Herosection";
import AboutSection from "./Component/Aboutus/Aboutus";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <Footer />
    </div>
  );
}

export default App;
