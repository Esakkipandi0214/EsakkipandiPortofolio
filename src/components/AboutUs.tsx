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
      className="flex-1 mt-10 lg:gap-0 lg:flex justify-between sm:justify-center h-full items-center w-full bg-[#F0A04B] rounded-2xl px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image src={AboutImg} alt="About Illustration" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex-1 items-center gap-4 h-full md:pb-5 lg:pb-0 lg:min-h-[340px]"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h1 className="text-white font-semibold flex justify-center sm:justify-start items-center text-2xl">
          About
        </h1>
        <p className="text-white text-base md:text-lg leading-relaxed text-justify max-w-lg md:max-w-max">
          I am <span className="font-bold">EsakkiPandi</span>, a Backend Developer with a strong academic foundation in Computer Applications (BCA and MCA). I specialize in building scalable web applications, designing and integrating RESTful APIs, and optimizing backend performance. With expertise in Node.js, Express.js, Java Spring Boot, MongoDB, and PostgreSQL, I have hands-on experience in database management and implementing secure authentication systems. Passionate about system design and clean architecture, I continuously explore new technologies to enhance backend efficiency and scalability.        </p>
      </motion.div>
    </motion.div>
  );
}
