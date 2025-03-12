"use client";
import dynamic from "next/dynamic"; // Import dynamic
import { motion } from "framer-motion";
import { Code, Server, Database, LayoutDashboard, Cloud, Globe } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    icon: <Code size={40} className="text-orange-500" />,
    description:
      "Building dynamic and scalable web applications using React, Next.js, and Node.js with modern frontend and backend technologies.",
  },
  {
    title: "Backend Development & APIs",
    icon: <Server size={40} className="text-blue-500" />,
    description:
      "Developing RESTful & GraphQL APIs with Express.js, ensuring secure authentication and seamless integrations.",
  },
  {
    title: "Database Management",
    icon: <Database size={40} className="text-green-500" />,
    description:
      "Efficiently designing and managing databases using MongoDB, Mongoose, and optimizing queries for better performance.",
  },
  {
    title: "UI/UX & Frontend Development",
    icon: <LayoutDashboard size={40} className="text-purple-500" />,
    description:
      "Creating beautiful, responsive, and interactive UIs with Tailwind CSS, Material UI, and Next.js.",
  },
  {
    title: "Deployment Services",
    icon: <Cloud size={40} className="text-teal-500" />,
    description:
      "Deploying applications on Vercel, Netlify and Render for seamless deployment workflows.",
  },
  {
    title: "E-Commerce & Payment Integration",
    icon: <Globe size={40} className="text-yellow-500" />,
    description:
      "Building e-commerce platforms with Stripe, Razorpay, and PayPal integration for secure transactions.",
  },
];

function Services() {
  return (
    <motion.section
      id="Service"
      className="py-12 px-6 bg-[#f6f5f1]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // `amount: 0.2` ensures animation triggers when 20% is in view
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          I specialize in full-stack development, backend APIs, UI/UX, and cloud deployment.
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
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-white">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ✅ Wrap with dynamic to prevent SSR issues
export default dynamic(() => Promise.resolve(Services), { ssr: false });
