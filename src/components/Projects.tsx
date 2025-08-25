import Image from "next/image";
import React from "react";
// import LearnYourself from '../../public/ProjectsImage/LearnYourself.png'
import TravelApp from '../../public/ProjectsImage/Traveling.png'
import FileEncrypter from '../../public/ProjectsImage/FileEncrypter.png'
import PrivateChat from '../../public/ProjectsImage/PrivateChat.png'
import Todo from '../../public/ProjectsImage/Todo.jpg'

// const projects = [
//   {
//     id: 2,
//     title: "Travel App",
//     description: "PAPPUTRAVELS is a smart travel app that helps users discover destinations and Pre-defined Packages with  Place Descriptions,",
//     image: TravelApp,
//     technologies: ["Next", "MongoDB","Node.js","Tailwind","TypeScript"],
//     liveDemo: "https://papputravels.vercel.app/",
//     github: "https://github.com/yourusername/chat-app",
//   },
//   {
//     id: 3,
//     title: "FileEncryptor App",
//     description: "It  is a online file encryption tool that allows users to encrypt and decrypt sensitive files using AES-256 encryption. It ensures data security and privacy, preventing unauthorized access. The app features a sleek UI, password protection, and quick file processing.",
//     image: FileEncrypter,
//     technologies: ["Next.js"],
//     liveDemo: "https://file-encryptor-mu.vercel.app/",
//     github: "https://github.com/yourusername/task-manager",
//   },
//   {
//     id: 4,
//     title: "Private Chat App",
//     description: "A full-stack MERN for private chat application that allows users to communicate securely with end-to-end encryption. It features real-time messaging and a user-friendly interface.",
//     image: PrivateChat,
//     technologies: ["React js", "Node.js","Tailwind","TypeScript","Socket.io"],
//     liveDemo: "https://shadow-console-chat.vercel.app/",
//     github: "https://github.com/Esakkipandi0214/shadow-console-chat.git",
//   },
//   {
//     id: 5,
//     title: "Todo App",
//     description: "A full-stack MERN for todo application that allows users to manage their tasks efficiently. It features user authentication, task creation, and real-time updates. Also tagging system and filtering tasks by status.",
//     image: Todo,
//     technologies: ["React js", "Node.js","Tailwind","TypeScript","Express.js","Social login"],
//     liveDemo: "https://agenda-verse-build.vercel.app",
//     github: "https://github.com/Esakkipandi0214/shadow-console-chat.git",
//   }
// ];

const projects = [
  {
    id: 2,
    title: "Travel App",
    description: "Backend of PAPPUTRAVELS handles destination management, pre-defined packages, and user data securely. APIs are built to fetch and update travel info, with MongoDB for storage.",
    image: TravelApp,
    technologies: ["Node.js", "MongoDB", "REST APIs", "TypeScript", "JWT Authentication"],
    liveDemo: "https://papputravels.vercel.app/",
    github: "https://github.com/yourusername/chat-app",
  },
  {
    id: 3,
    title: "FileEncryptor App",
    description: "Backend handles AES-256 encryption/decryption of files, user authentication, and secure storage. Ensures privacy and fast file processing through optimized server logic.",
    image: FileEncrypter,
    technologies: ["Node.js", "Express.js", "File Handling", "Encryption", "TypeScript"],
    liveDemo: "https://file-encryptor-mu.vercel.app/",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 4,
    title: "Private Chat App",
    description: "Backend provides real-time messaging with Socket.io, user authentication, and end-to-end encryption. Manages chat history and handles secure communication between users.",
    image: PrivateChat,
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT Authentication"],
    liveDemo: "https://shadow-console-chat.vercel.app/",
    github: "https://github.com/Esakkipandi0214/shadow-console-chat.git",
  },
  {
    id: 5,
    title: "Todo App",
    description: "Backend supports task management, user authentication, social login, tagging, and filtering by status. Built with Express.js and MongoDB for efficient task handling.",
    image: Todo,
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "Social login"],
    liveDemo: "https://agenda-verse-build.vercel.app",
    github: "https://github.com/Esakkipandi0214/shadow-console-chat.git",
  }
];


const Projects = () => {
  return (
    <section id="Project" className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10 tracking-wide text-gray-100">My Personal Projects</h2>
      
      <div className="grid lg:grid-cols-3  sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-5 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 border border-gray-700"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            
            <h3 className="text-xl font-semibold mt-5">{project.title}</h3>
            <p className="text-gray-300 flex text-justify text-sm mt-2">{project.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-white px-3 py-1 text-xs  rounded-lg flex justify-center items-center text-gray-900 font-medium">{tech}</span>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between">
              <a
                href={project.liveDemo}
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
              >
                Live Demo
              </a>
              {/* <a
                href={project.github}
                target="_blank"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
              >
                GitHub
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
