import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isClickedContent, setIsClickedContent] = useState("Home");
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
      const resumeUrl = "/Resume/EsakkiPandi.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Esakkipandi_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Set Home after 2 seconds
      setTimeout(() => {
        setIsClickedContent("Home");
      }, 2000);
    }
  };

  return (
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
  );
};

export default Header;
