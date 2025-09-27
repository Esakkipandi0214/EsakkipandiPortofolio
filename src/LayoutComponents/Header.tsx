"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const HeaderContents = ["Home", "About", "Service", "Resume", "Project", "Contact"];

  const handleNavigate = (to: string) => {
    setActive(to);

    if (["Service", "About", "Project", "Contact"].includes(to)) {
      const section = document.getElementById(to);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    if (to === "Resume") {
      setMenuOpen(false);
      const resumeUrl = "/files/EsakkiPandi.pdf";

      if (window.innerWidth <= 768) {
        window.open(resumeUrl, "_blank");
      } else {
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "EsakkiPandi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setTimeout(() => setActive("Home"), 2000);
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }}
        className="hidden sm:flex justify-center items-center p-3"
      >
        <div className="bg-black/50 lg:w-[60%] rounded-full px-2 flex justify-between items-center h-[60px] shadow-lg backdrop-blur-md">
          {HeaderContents.slice(0, 3).map((item, idx) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate(item)}
              className={`rounded-full py-2 px-6 transition-transform font-medium ${
                active === item
                  ? "bg-purple-700 text-white"
                  : "hover:bg-purple-600 text-white"
              }`}
              key={idx}
            >
              {item}
            </motion.button>
          ))}

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-purple-700 px-3 py-1 rounded-full shadow-md"
          >
            <h1 className="text-white text-2xl font-semibold">EP</h1>
          </motion.button>

          {HeaderContents.slice(3).map((item, idx) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate(item)}
              className={`rounded-full py-2 px-6 transition-transform font-medium ${
                active === item
                  ? "bg-purple-700 text-white"
                  : "hover:bg-purple-600 text-white"
              }`}
              key={idx}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50">
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden">
          {menuOpen ? (
            <FaTimes size={24} className="text-white" />
          ) : (
            <FaBars size={24} className="text-white" />
          )}
        </button>

        {/* Mobile Logo */}
        <div className="bg-purple-700 px-3 py-1 rounded-full shadow-md sm:hidden">
          <h1 className="text-white text-2xl font-semibold">EP</h1>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50 shadow-xl backdrop-blur-md`}
        >
          <div className="absolute w-full px-6 top-4 flex justify-between items-center">
            <div className="bg-purple-700 px-3 py-1 rounded-full shadow-md">
              <h1 className="text-white text-2xl font-semibold">EP</h1>
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes size={28} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col w-full items-center space-y-6 mt-20">
            {HeaderContents.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleNavigate(item);
                  setMenuOpen(false);
                }}
                className={`text-2xl py-2 px-6 w-3/4 text-center rounded-xl transition ${
                  active === item
                    ? "bg-purple-700 text-white"
                    : "hover:bg-purple-600 text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
