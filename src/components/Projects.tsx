import Image from "next/image";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import TravelApp from '../../public/ProjectsImage/Traveling.png';
import FileEncrypter from '../../public/ProjectsImage/FileEncrypter.png';
import PrivateChat from '../../public/ProjectsImage/PrivateChat.png';
import Todo from '../../public/ProjectsImage/Todo.jpg';

const projects = [
  {
    id: 2,
    title: "Travel App",
    description:
      "PAPPUTRAVELS is a smart travel app that helps users discover destinations and pre-defined packages with place descriptions.",
    image: TravelApp,
    technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind", "TypeScript"],
    liveDemo: "https://papputravels.vercel.app/",
    github: "https://github.com/Esakkipandi0214/PAPPUTRAVELS.git",
  },
  {
    id: 3,
    title: "FileEncryptor App",
    description:
      "Online file encryption tool allowing users to encrypt/decrypt files using AES-256. Secure, fast, and with password protection.",
    image: FileEncrypter,
    technologies: ["Next.js"],
    liveDemo: "https://file-encryptor-mu.vercel.app/",
    github: "https://github.com/Esakkipandi0214/FileEncryptor.git",
  },
  {
    id: 4,
    title: "Private Chat App",
    description:
      "Full-stack MERN private chat app with end-to-end encryption, real-time messaging, and a user-friendly interface.",
    image: PrivateChat,
    technologies: ["React", "Node.js", "Tailwind", "TypeScript", "Socket.io"],
    liveDemo: "https://shadow-console-chat.vercel.app/",
    github: "https://github.com/Esakkipandi0214/shadow-console-chat.git",
  },
  {
    id: 5,
    title: "Todo App",
    description:
      "Full-stack MERN todo app with authentication, task creation, tagging, filtering by status, and real-time updates.",
    image: Todo,
    technologies: ["React", "Node.js", "Tailwind", "TypeScript", "Express.js", "Social login"],
    liveDemo: "https://agenda-verse-build.vercel.app",
    github: "https://github.com/Esakkipandi0214/agenda-verse-build.git",
  },
];

const Projects = () => {
  return (
    <section
      id="Project"
      className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10 tracking-wide text-gray-100">
        My Personal Projects
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-5 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700 flex flex-col"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base text-justify">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/20 px-3 py-1 text-xs rounded-full flex justify-center items-center text-gray-100 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-black font-medium text-sm shadow-md transition-all duration-300"
              >
                <FiExternalLink />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg text-white font-medium text-sm shadow-md transition-all duration-300"
              >
                <FiGithub />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
