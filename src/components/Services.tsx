"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Globe, LayoutDashboard, BookOpen } from "lucide-react";

const services = [
  {
    title: "Backend Development & APIs",
    icon: <Server size={40} className="text-blue-500" />,
    description:
      "Building scalable and secure backend services using Node.js and Express.js, designing RESTful and GraphQL APIs, with authentication, authorization, and third-party integrations.",
  },
  {
    title: "Database Management (MongoDB)",
    icon: <Database size={40} className="text-green-500" />,
    description:
      "Designing and managing MongoDB databases, optimizing queries, modeling data efficiently, and ensuring high performance and reliability.",
  },
  {
    title: "Frontend Development (React & Next.js)",
    icon: <LayoutDashboard size={40} className="text-purple-500" />,
    description:
      "Creating responsive, dynamic, and user-friendly interfaces using React and Next.js with Tailwind CSS, and integrating frontend with backend APIs.",
  },
  {
    title: "Full-Stack Integration",
    icon: <Code size={40} className="text-orange-500" />,
    description:
      "Implementing full-stack applications using the MERN stack (MongoDB, Express, React, Node.js), ensuring seamless communication between frontend and backend.",
  },
  {
    title: "Deployment & Cloud",
    icon: <Cloud size={40} className="text-teal-500" />,
    description:
      "Deploying full-stack applications on cloud platforms like Render, Vercel, and AWS. Setting up CI/CD pipelines, monitoring, and logging for production-ready apps.",
  },
  {
    title: "E-Commerce & Payment Integration",
    icon: <Globe size={40} className="text-yellow-500" />,
    description:
      "Integrating secure payment gateways (Stripe, PayPal, Razorpay) and building e-commerce features with robust backend workflows and React frontend components.",
  },
  {
    title: "Full-Stack Development Training",
    icon: <BookOpen size={40} className="text-pink-500" />,
    description:
      "Teaching MERN stack development through structured courses and hands-on projects, covering backend, frontend, database management, and deployment best practices.",
  },
];

function Services() {
  return (
    <motion.section
      id="Service"
      className="py-12 px-6 bg-black/50 rounded-3xl my-1 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="text-white/90 mt-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          I specialize in MERN stack development: building full-stack applications, managing MongoDB databases, developing dynamic React interfaces, integrating secure APIs, deploying scalable applications to the cloud, and mentoring others in full-stack development.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#3D3D3D] rounded-xl shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-white">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default dynamic(() => Promise.resolve(Services), { ssr: false });
