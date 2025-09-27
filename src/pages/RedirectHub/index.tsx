import React from "react";
import { Globe, Github, Linkedin } from "lucide-react";

const RedirectHub = () => {
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
        </div>
      </div>
    </div>
  );
};

export default RedirectHub;
