"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Service", label: "Service" },
    { id: "Project", label: "Projects" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center justify-center p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full w-14 h-14 text-white text-2xl font-bold shadow-lg">
            EP
          </div>
          <p className="mt-3 text-gray-400 max-w-xs">
            Innovating the future, one project at a time. Full-Stack MERN Developer & Mentor.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative group px-1 py-1 hover:text-white transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/esakkipandi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/Esakkipandi0214"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gradient-to-r from-gray-500 to-gray-700 text-white transition-transform transform hover:scale-110"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4 text-gray-500">
        © {new Date().getFullYear()} EsakkiPandi (EP). All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
