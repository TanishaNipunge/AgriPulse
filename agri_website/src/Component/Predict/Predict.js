import { useNavigate } from "react-router-dom";
import myImage from '../../assets/frame.png';


const Predict = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] p-8 mt-[40px]">
      <div className="lg:w-1/2 flex justify-center lg:ml-auto mt-8 lg:mt-0 relative">
  <div className="relative w-full max-w-[320px] lg:max-w-[350px] h-[700px]"> {/* Adjusted height */}
    {/* Mobile Frame with Image */}
    <div className="absolute inset-0 w-full h-full flex justify-center items-center">
      {/* Mobile Frame */}
      <img
        src={myImage}
        alt="Mobile Frame"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
    </div>
  </div>
</div>

      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-8xl font-bold text-gray-900">
          <span style={{ color: "rgba(123,187,125,0.9)" }}>Wellness</span> should be everyone’s passion
        </h1>
        <p className="mt-4 text-3xl text-gray-700 font-bold">
          Protecting Crops, Preserving Yields 🍃.
        </p>
        <p className="mt-4 text-2xl text-gray-700">
          Identify crop diseases early with our advanced prediction system. <br />
          Capture images, analyze, and get instant insights to protect your yield.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          onClick={() => navigate("/capture")}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Predict;
