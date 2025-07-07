import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-6 border-t border-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <h2 className="text-3xl font-extrabold text-blue-400 mb-4">
          Rising<span className="text-cyan-300">Motors</span>
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 max-w-md mx-auto mb-6 text-sm">
          Delivering the future of driving — innovation, power, and style in
          every ride.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <FaFacebookF className="hover:text-blue-500 transition duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 transition duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition duration-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-600 transition duration-300 cursor-pointer" />
        </div>

        {/* Bottom Note */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Rising Motors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
