"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AboutImg from "../../public/About/Development-cuate.svg";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      id="About"
      className="flex flex-col lg:flex-row items-center justify-between w-full bg-black/50 rounded-3xl px-6 sm:px-10 py-10 gap-8 mt-10 shadow-2xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Image Section */}
      <motion.div
        className="flex justify-center lg:justify-start w-full lg:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-purple-600 rounded-full p-4 sm:p-6 shadow-lg">
          <Image src={AboutImg} alt="About Illustration" className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto" />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex-1 lg:w-1/2 space-y-4 text-white"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-center lg:text-left text-purple-100">
          About Me
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-justify text-purple-200">
          I am <span className="font-bold text-white">EsakkiPandi</span>, a{" "}
          <span className="font-bold text-white">MERN Stack Developer</span> with a strong
          academic foundation in Computer Applications (BCA and MCA). I specialize in building scalable, user-friendly web applications and designing secure, high-performance APIs.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-justify text-purple-200">
          With hands-on experience in{" "}
          <span className="font-bold text-white">
            Node.js, Express.js, React.js, Next.js, MongoDB, and PostgreSQL
          </span>
          , I work across the full stack—from architecting backend systems to crafting intuitive frontends.
        </p>

        {/* Bullet Points */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg text-purple-100">What I focus on:</h2>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-purple-200">
            <li>
              <span className="font-bold text-white">Backend:</span> Query optimization, caching, indexing, load balancing, and clean API design for performance and scalability.
            </li>
            <li>
              <span className="font-bold text-white">Frontend:</span> Code-splitting, lazy loading, efficient state management, and responsive UI design for smooth and fast user experiences.
            </li>
          </ul>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-justify text-purple-200">
          Driven by system design principles and clean architecture, I&apos;m always exploring new technologies and strategies to push applications toward greater efficiency, scalability, and impact.
        </p>
      </motion.div>
    </motion.div>
  );
}
