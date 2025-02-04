import React, { useRef, useState, useEffect } from "react";

const CaptureImagePage = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCaptured, setIsCaptured] = useState(false);
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => {
                console.error("Error accessing camera:", err);
                alert("Unable to access camera. Please grant permission.");
            });
    }, []);

    const captureImage = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            const ctx = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            setIsCaptured(true);
            setImageData(canvas.toDataURL("image/png"));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-2xl font-bold text-green-700 mb-4">Crop Disease Detection</h1>
            <div className="relative w-full max-w-md">
                {!isCaptured ? (
                    <video ref={videoRef} autoPlay className="w-full rounded-lg border-2 border-green-500"></video>
                ) : (
                    <canvas ref={canvasRef} className="w-full rounded-lg border-2 border-green-500"></canvas>
                )}
            </div>
            <div className="mt-4">
                {!isCaptured ? (
                    <button onClick={captureImage} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        Capture Image
                    </button>
                ) : (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Analyze Image
                    </button>
                )}
            </div>
        </div>
    );
};

export default CaptureImagePage;
