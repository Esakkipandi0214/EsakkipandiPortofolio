import React, { useState } from "react";
import {
  Globe,
  Github,
  Linkedin,
  // UtensilsCrossed,
  // ShoppingBag,
  FolderKanban,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ANZLogo from '../../../public/ProjectsImage/ClientProjects/ANZLogo.jpg'
import AldaleelaLogo from '../../../public/ProjectsImage/ClientProjects/AldaleelaLogo.png'

const RedirectHub = () => {
  const [showProjects, setShowProjects] = useState(false);

  // Example projects with icons
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-sm w-full text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          EsakkiPandi R
        </h1>
        <p className="text-gray-500 mb-8">MERN Stack Developer</p>

        <div className="flex flex-col gap-4">
          {/* Portfolio */}
          <a
            href="https://esakkipandi-portofolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            <Globe className="w-5 h-5" />
            Portfolio
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Esakkipandi0214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-black transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/esakkipandi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          {/* Client Live Projects */}
          <button
            onClick={() => setShowProjects(true)}
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition"
          >
            <FolderKanban className="w-5 h-5" />
            Client Live Projects
          </button>
        </div>
      </div>

      {/* Animated Popup Modal */}
      <AnimatePresence>
        {showProjects && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
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
                    className="flex  items-start gap-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition shadow-md"
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
                    <div className='flex justify-start items-start flex-col'>
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
