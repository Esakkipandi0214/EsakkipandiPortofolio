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
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white flex justify-center items-center p-2 bg-orange-500 w-12 h-12 rounded-full">
            EP
          </h2>
          <p className="text-sm mt-2 max-w-xs">
            Innovating the future, one project at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/esakkipandi"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://github.com/Esakkipandi0214"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} EsakkiPandi (EP). All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
