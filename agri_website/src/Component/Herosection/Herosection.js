import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/3195396/3195396-sd_640_360_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Adjusted padding to move text slightly down */}
      <div className="relative z-10 text-white py-96 px-3 text-left">
        <div className="container mx-auto">
          <h1 className="text-7xl md:text-6xl font-bold mb-6">Welcome to AgriPulse</h1>
          <p className="text-xl md:text-2xl mb-8">
            Protect your crops with AI-powered disease detection and prevention.
          </p>
          <button className="bg-white text-blue-500 text-xl font-semibold py-5 px-10 rounded-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
