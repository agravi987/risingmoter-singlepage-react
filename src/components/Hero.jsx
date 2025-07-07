// src/components/Hero.jsx
import carVideo from "../assets/car-bg.mp4"; // Make sure this exists in your assets folder

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      >
        <source src={carVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Drive the <span className="text-blue-400">Future</span> Today
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl text-gray-200">
          Discover power, performance, and innovation with our luxury car
          lineup.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
          Explore Our Cars
        </button>
      </div>
    </section>
  );
}
