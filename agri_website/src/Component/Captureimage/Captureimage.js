import React, { useState, useEffect } from "react";
import plantbg from 'C:/Users/tanis/OneDrive/Desktop/Agri/agri_website/src/assets/plantbg.png';

const CropDiseasePrediction = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setCapturedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitImage = async () => {
    if (!capturedImage) {
      alert("Please upload an image.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: capturedImage }),
      });

      const data = await response.json();
      setPredictionResult(data.disease || "Unable to predict disease.");
    } catch (error) {
      setPredictionResult("Error in prediction.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="flex justify-between w-full h-full items-center p-6 border rounded-lg relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/living-room-product-backdrop-interior-background_53876-147964.jpg?ga=GA1.1.296527869.1721499954&semt=ais_hybrid_sidr')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="relative z-10 flex-1 pr-6 text-gray-800">
        <h2 className="text-8xl font-bold left-full ">
          Crop Disease <span className="text-green-800">Prediction</span>
        </h2>

        <p className="mt-10 text-3xl">
          Use this tool to upload an image of your crop to predict any potential diseases. This page allows you to:
        </p>

        {/* Cards for steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-500">Upload Image</h3>
            <p className="mt-2 text-xl">Select an image file from your device for prediction.</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-500">Capture with Camera</h3>
            <p className="mt-2 text-xl">Use your camera to capture a fresh image of the crop.</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-500">Submit Image</h3>
            <p className="mt-2 text-xl">Submit the image for disease prediction and view the results.</p>
          </div>
        </div>

        <input
          type="file"
          id="file-input"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Button to capture image (Linked to a different page for capturing) */}
        <a
          href="/capture-image-page" // Link to the image capture page
          className="mr-4 mt-4 px-4 py-2 text-2xl bg-green-500 text-white rounded-md cursor-pointer"
        >
          Use Camera to Capture Image
        </a>

        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="Crop Preview" width="200" className="border rounded-lg" />
          </div>
        )}

        <button
          onClick={submitImage}
          disabled={isSubmitting || !capturedImage}
          className={`mt-4 px-4 py-2 text-2xl rounded-md ${
            isSubmitting || !capturedImage
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 cursor-pointer"
          } text-white`}
        >
          {isSubmitting ? "Submitting..." : "Submit for Prediction"}
        </button>

        {predictionResult && (
          <div className="mt-6 p-4 border bg-green-100 text-black">
            <h3 className="font-semibold">Prediction Result:</h3>
            <p>{predictionResult}</p>
          </div>
        )}
      </div>

      {/* Image on the right */}
      <div className="relative z-10 flex-1 mt-32">
        <img
          src={plantbg}
          alt="Plant"
          className="w-full max-w-6xl mx-auto rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default CropDiseasePrediction;
