import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Keep the correct routing imports
import Home from './Pages/Landing/Landing';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Capture from './Pages/Capturepage/Capturepage';
import CaptureImagePage from './Pages/capture-image-page/capture-image-page';
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/capture" element={<Capture />} /> {/* Add this route for Capture */}
          <Route path="/CaptureImagePage" element={<CaptureImagePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
