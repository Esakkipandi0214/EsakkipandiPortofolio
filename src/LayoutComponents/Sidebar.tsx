import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isClickedContent, setIsClickedContent] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const HeaderContents = ["Home", "About", "Service", "Resume", "Project", "Contact"];

  const handleNavigate = (to: string) => {
    setIsClickedContent(to);
    setIsMenuOpen(false); // Close menu

    if (["Service", "About", "Project", "Contact"].includes(to)) {
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

   if (to === "Resume") {
  const resumeUrl = "/Resume/Esakkipandi.pdf";
  window.open(resumeUrl, "_blank"); // opens in new tab
}

  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest("#menu-button") &&
        !(event.target as HTMLElement).closest("#sidebar")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Floating Header */}
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
      </header>

      {/* Full-screen Sidebar for Mobile */}
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
    </>
  );
};

export default Header;
