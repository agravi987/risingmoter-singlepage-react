import { FaBolt, FaShieldAlt, FaLeaf } from "react-icons/fa"; // Optional icons

export default function About() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          Why Choose Rising Motors?
        </h2>
        <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg">
          At Rising Motors, we don't just build cars – we engineer experiences.
          Explore what sets us apart.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto mt-8 text-center">
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-blue-600/30 transition duration-300">
          <FaBolt className="text-3xl text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">High Performance</h3>
          <p className="text-gray-400 text-sm">
            Designed to deliver speed and thrill without compromising safety.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-blue-600/30 transition duration-300">
          <FaShieldAlt className="text-3xl text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Top Safety</h3>
          <p className="text-gray-400 text-sm">
            Advanced AI-powered safety systems protect what matters most.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-blue-600/30 transition duration-300">
          <FaLeaf className="text-3xl text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-gray-400 text-sm">
            Our electric fleet supports a cleaner, greener future.
          </p>
        </div>
      </div>
    </section>
  );
}
