"use client";
import dynamic from "next/dynamic"; // Import dynamic
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Globe } from "lucide-react";

const services = [
  {
    title: "Backend Development & APIs",
    icon: <Server size={40} className="text-blue-500" />,
    description:
      "Building secure and scalable backend services with Node.js, Express.js, and Java Spring Boot. Experienced in designing RESTful and GraphQL APIs with authentication, authorization, and third-party integrations.",
  },
  {
    title: "Database Management",
    icon: <Database size={40} className="text-green-500" />,
    description:
      "Designing and managing relational (PostgreSQL) and NoSQL (MongoDB) databases, with query optimization and data modeling for performance and reliability.",
  },
  {
    title: "Microservices & Architecture",
    icon: <Code size={40} className="text-orange-500" />,
    description:
      "Implementing clean architecture and microservice-based systems to ensure scalability, maintainability, and seamless system integration.",
  },
  {
    title: "Deployment & Monitoring",
    icon: <Cloud size={40} className="text-teal-500" />,
    description:
      "Deploying applications on Render, Docker, and cloud platforms with monitoring and logging using tools like GCP and OpenTelemetry.",
  },
  {
    title: "E-Commerce & Payment Integration",
    icon: <Globe size={40} className="text-yellow-500" />,
    description:
      "Integrating secure payment gateways (Stripe, Razorpay, PayPal) and building e-commerce features with robust backend workflows.",
  },
  // ,
  // {
  //   title: "Frontend (Additional Skill)",
  //   icon: <LayoutDashboard size={40} className="text-purple-500" />,
  //   description:
  //     "Capable of creating responsive UIs with React, Next.js, and Tailwind CSS when required for full-stack development.",
  // },
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
          I specialize in backend development, designing and building robust
          APIs, managing databases, implementing secure authentication, and
          deploying scalable applications to the cloud.{" "}
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

// ✅ Wrap with dynamic to prevent SSR issues
export default dynamic(() => Promise.resolve(Services), { ssr: false });
