export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white">
            {/* Left Side - Text */}
            <div className="md:w-1/3 text-left">
                <h2 className="text-8xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are a passionate team dedicated to bringing innovation and creativity to life. Our journey is fueled by our love for technology, design, and problem-solving.
                </p>
            </div>

            {/* Right Side - Masonry Image Layout with Aligned Start Points */}
            <div className="md:w-1/2 grid grid-cols-2 gap-4 auto-rows-[min-content]">
                <img 
                    src="https://img.freepik.com/free-photo/hydroponics-system-planting-vegetables-herbs-without-using-soil-health_1150-8160.jpg"
                    alt="Image 1"
                    className="w-full object-cover rounded-lg shadow-lg place-self-start translate-y-4"
                />
                <img
                    src="https://img.freepik.com/premium-photo/farmer-hands-agriculture-with-soil-dirt-dust-plants-growth-farming-closeup-black-woman-land-farm-with-field-earth-nutrition-ground-sustainability-fertility-zoom_590464-112649.jpg"
                    alt="Image 2"
                    className="w-full object-cover rounded-lg shadow-lg place-self-start"
                />
                <img
                    src="https://img.freepik.com/free-photo/man-taking-care-his-farm-close-up_23-2148580028.jpg"
                    alt="Image 3"
                    className="w-full object-cover rounded-lg shadow-lg place-self-start -translate-y-64"
                />
                <img
                    src="https://img.freepik.com/free-photo/farmer-holds-rice-hand_1150-6063.jpg"
                    alt="Image 4"
                    className="w-full object-cover rounded-lg shadow-lg place-self-start"
                />
                <img
                    src="https://img.freepik.com/free-photo/female-gardener-spraying-insecticide-plant_23-2147918609.jpg"
                    alt="Image 5"
                    className="w-full object-cover rounded-lg shadow-lg place-self-start -translate-y-64"
                />
                
            </div>
        </section>
    );
}
