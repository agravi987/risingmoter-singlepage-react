import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-400">
          Rising<span className="text-cyan-300">Motors</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {["Home", "Cars", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer hover:text-blue-400 transition duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#1e293b] text-white text-center py-4 space-y-4">
          {["Home", "Cars", "About", "Contact"].map((item) => (
            <li key={item} className="hover:text-blue-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
