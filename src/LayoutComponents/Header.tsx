import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
  const [isClickedContent, setIsClickedContent] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HeaderContents = ["Home", "About", "Service", "Resume", "Project", "Contact"];

 const handleNavigate = (to: string) => {
  setIsClickedContent(to);

  if (["Service", "About", "Project", "Contact"].includes(to)) {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

 if (to === "Resume") {
  setIsMenuOpen(false); // close sidebar if mobile

  const resumeUrl = "/files/EsakkiPandi.pdf";

  if (window.innerWidth <= 768) {
    // Mobile: open PDF in new tab
    window.open(resumeUrl, "_blank");
  } else {
    // Desktop: trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "EsakkiPandi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Optional: reset active menu
  setTimeout(() => setIsClickedContent("Home"), 2000);
}

};


  return (
    <>
    <motion.header
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }}
      className="bg-transparent hidden sm:flex justify-center items-center text-white p-3"
    >
      <div className="bg-gray-900 lg:w-[60%] rounded-full px-2 flex justify-between items-center h-[60px]">
        {HeaderContents.slice(0, 3).map((Content, index) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate(Content)}
            className={`rounded-full py-2 px-6 transition-transform ${
              isClickedContent === Content ? "bg-orange-500" : "hover:bg-orange-400"
            }`}
            key={index}
          >
            <h1 className="text-white">{Content}</h1>
          </motion.button>
        ))}

        {/* Middle EP Logo */}
        <motion.button whileHover={{ scale: 1.1 }} className="bg-orange-600 px-2 py-1 rounded-full">
          <h1 className="text-white text-2xl font-semibold">EP</h1>
        </motion.button>

        {HeaderContents.slice(3).map((Content, index) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate(Content)}
            className={`rounded-full py-2 px-6 transition-transform ${
              isClickedContent === Content ? "bg-orange-500" : "hover:bg-orange-400"
            }`}
            key={index}
          >
            <h1 className="text-white">{Content}</h1>
          </motion.button>
        ))}
      </div>
    </motion.header>

    {/* ============================== mobile responsive ======================= */}

        <header className="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center p-4 z-50">
        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-black" />
          ) : (
            <FaBars className="text-black" size={24} />
          )}
        </button>

         <div
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 text-white flex flex-col items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 shadow-lg`}
      >
        {/* Close Button */}
        <div className="absolute w-full px-6 top-4 flex justify-between items-center">
          <button className="bg-orange-600 px-2 py-1 rounded-full">
            <h1 className="text-white text-2xl font-semibold">EP</h1>
          </button>
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <FaTimes size={28} />
          </button>
        </div>

        {/* Centered Navigation Items */}
        <nav className="flex flex-col px-10 w-full items-center space-y-6">
          {HeaderContents.map((Content, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(Content)}
              className={`text-2xl py-2 px-4 w-full text-center rounded-xl transition ${
                isClickedContent === Content
                  ? "bg-orange-500"
                  : "hover:bg-orange-400"
              }`}
            >
              {Content}
            </button>
          ))}
        </nav>
      </div>
      </header>

    </>
  );
};

export default Header;
