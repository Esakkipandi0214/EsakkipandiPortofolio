import React, { useState, useEffect, useRef } from "react";
import { Globe, Github, Linkedin, FolderKanban, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ANZLogo from "../../../public/ProjectsImage/ClientProjects/ANZLogo.jpg";
import AldaleelaLogo from "../../../public/ProjectsImage/ClientProjects/AldaleelaLogo.png";

const RedirectHub = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const tooltipRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const projects = [
    {
      name: "Aldaleela",
      link: "https://www.aldaleela.ae/",
      company: "iSpatial Techno Solutions",
      logo: AldaleelaLogo,
    },
    {
      name: "ANZ Developer Portal",
      link: "https://developer.online.anz.com/",
      company: "ANZ Bank",
      logo: ANZLogo,
    },
  ];

  const links = [
    {
      id: "portfolio",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-indigo-600 hover:bg-indigo-700",
      text: "Portfolio",
      href: "https://esakkipandi-portofolio.vercel.app",
    },
    {
      id: "github",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-gray-900 hover:bg-black",
      text: "GitHub",
      href: "https://github.com/Esakkipandi0214",
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-blue-600 hover:bg-blue-700",
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/esakkipandi",
    },
  ];

  const handleTooltip = (id: string) => {
    setActiveTooltip((prev) => (prev === id ? null : id));
  };

  // ✅ Detect click outside tooltip or button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInside = Object.values(tooltipRefs.current).some(
        (ref) => ref && ref.contains(target)
      );
      if (!clickedInside) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeTooltip]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-sm w-full text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          EsakkiPandi R
        </h1>
        <p className="text-gray-500 mb-8">MERN Stack Developer</p>

        {/* Social & Project Links */}
        <div className="flex justify-center gap-3  vs:gap-5 sm:gap-6 relative flex-wrap">
          {links.map((item) => (
            <div
              key={item.id}
              className="relative flex justify-center"
              ref={(el) => {tooltipRefs.current[item.id] = el}}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent closing when clicking button
                  handleTooltip(item.id);
                }}
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${item.color} text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                {item.icon}
              </button>

              {/* Tooltip */}
              <AnimatePresence>
                {activeTooltip === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-12 z-30"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.href, "_blank");
                      setActiveTooltip(null);
                    }}
                  >
                    <div className="relative bg-gray-900 text-white text-sm font-medium rounded-md px-3 py-1.5 shadow-lg whitespace-nowrap cursor-pointer">
                      {item.text}
                      <div
                        className="absolute left-1/2 -bottom-2 -translate-x-1/2"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderTop: "8px solid #111827",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Client Projects Button */}
          <div
            className="relative flex justify-center"
            ref={(el) => {tooltipRefs.current["projects"] = el}}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTooltip("projects");
              }}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-600 text-white rounded-full hover:bg-green-700 hover:scale-110 transition-transform duration-300 shadow-md"
            >
              <FolderKanban className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Projects Tooltip */}
            <AnimatePresence>
              {activeTooltip === "projects" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-12 z-30"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProjects(true);
                    setActiveTooltip(null);
                  }}
                >
                  <div className="relative bg-gray-900 text-white text-sm font-medium rounded-md px-3 py-1.5 shadow-lg whitespace-nowrap cursor-pointer">
                    Key Projects
                    <div
                      className="absolute left-1/2 -bottom-2 -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "8px solid #111827",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-400 text-sm mt-6">
          🔗 Tap icons → then tap tooltip to open
        </p>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showProjects && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProjects(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowProjects(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🚀 Client Live Projects
              </h2>

              <div className="flex flex-col gap-3">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition shadow-md"
                  >
                    <div className="flex pt-1 items-center justify-center gap-3">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={24}
                        height={24}
                        className="object-contain rounded"
                      />
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <span>{project.name}</span>
                      <span className="text-sm font-normal opacity-80">
                        {project.company}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RedirectHub;
