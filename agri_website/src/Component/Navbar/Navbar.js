import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        padding: "15px 30px",
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        transition: "background-color 0.3s ease",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>AgriPulse</h1>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "30px", fontSize: "24px" }}>
        <a href="#home" style={{ textDecoration: "none", color: "white" }}>Home</a>
        <a href="#detection" style={{ textDecoration: "none", color: "white" }}>Detection</a>
        <a href="#guidance" style={{ textDecoration: "none", color: "white" }}>Guidance</a>
        <a href="#about" style={{ textDecoration: "none", color: "white" }}>About</a>
      </div>

      {/* Icons aligned to the right */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Camera Icon - Redirects to Detection Page */}
        <a href="#detection">
          <i className="ri-camera-fill" style={{ fontSize: "32px", cursor: "pointer" }}></i>
        </a>

        {/* Profile Icon */}
        <a href="#profile">
          <i className="ri-user-fill" style={{ fontSize: "32px", cursor: "pointer" }}></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
