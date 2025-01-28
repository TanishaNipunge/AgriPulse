import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Logo and Description */}
          <div className="md:w-1/3 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wide">
             Agripulse
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Empowering farmers with AI-powered disease detection and prevention. Safeguard your crops with CropGuard, your trusted partner in agriculture.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Home",
                  "Disease Detection",
                  "Resources",
                  "About Us",
                  "Contact Us",
                ].map((link) => (
                  <li
                    key={link}
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Crop Disease Prediction",
                  "Treatment Recommendations",
                  "Weather Monitoring",
                  "Real-time Alerts",
                  "Data Analytics",
                ].map((link) => (
                  <li
                    key={link}
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Support</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Help Center",
                  "FAQ",
                  "Guides & Tutorials",
                  "Contact Support",
                  "Privacy Policy",
                ].map((link) => (
                  <li
                    key={link}
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CropGuard. All Rights Reserved.
          </p>
          <ul className="flex space-x-8 text-gray-400 text-sm">
            {["Privacy Policy", "Terms of Service", "Manage Cookies"].map(
              (link) => (
                <li
                  key={link}
                  className="hover:text-white transition duration-300 cursor-pointer"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20 md:h-80"></div>

      {/* Large Background Text */}
      <div className="absolute w-full bottom-0 flex justify-center items-center pointer-events-none">
        <p
          className="text-white text-[60px] sm:text-[80px] md:text-[140px] lg:text-[200px] xl:text-[260px] font-extrabold uppercase tracking-wider opacity-10 sm:opacity-15 lg:opacity-20"
          style={{
            wordSpacing: "0.15em", // Enhances readability of large text
          }}
        >
          AgriPulse
        </p>
      </div>
    </footer>
  );
};

export default Footer;
