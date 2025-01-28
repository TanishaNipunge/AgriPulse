import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change navbar style on scroll
      } else {
        setScrolled(false); // Reset navbar style when scroll position is at the top
      }
    };

    window.addEventListener("scroll", handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <nav
      style={{
        padding: "20px 30px", // Adjusted padding for better spacing
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent", // Transparent before scrolling
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        transition: "background-color 0.3s ease", // Smooth transition
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", // Aligns items in the center vertically
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>AgriPulse</h1> {/* AgriPulse title */}

      {/* Icons section */}
      <div className="flex items-center space-x-6"> {/* Added spacing between icons */}
        {/* Example Camera Icon */}
        <i className="fas fa-camera" style={{ color: "white", fontSize: "20px", cursor: "pointer" }}></i> {/* Replace with actual camera icon component */}
        
        {/* Profile Icon */}
        <i className="fas fa-user" style={{ color: "white", fontSize: "20px", cursor: "pointer" }}></i> {/* Replace with actual profile icon component */}
      </div>
    </nav>
  );
}

export default Navbar;
