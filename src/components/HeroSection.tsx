"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Sticker from "../../public/HeroSection/Programming-amico.svg";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      id="Home"
      className="w-full flex-1 min-h-screen md:min-h-max flex flex-col justify-center items-center px-6 sm:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Content Wrapper */}
      <motion.div className="relative w-full max-w-5xl text-center space-y-4">
        {/* Top Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button className="py-1 px-4 border-2 border-black rounded-full">
            <h1 className="text-black font-medium">Hello</h1>
          </button>
        </motion.div>

        {/* Name Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl">
            I&apos;m
          </motion.h1>
          <motion.h1
            className="text-orange-500 font-semibold text-4xl sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Esakki
          </motion.h1>
          <motion.h1
            className="text-orange-300 font-semibold text-4xl sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Pandi
          </motion.h1>
          <motion.h1
            className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            ,
          </motion.h1>
        </motion.div>

        {/* Title Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-black font-semibold text-3xl sm:text-4xl md:text-5xl">
            Full Stack Web Developer
          </h1>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex justify-center items-center mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 80 }}
      >
        <div className="bg-orange-500 rounded-full p-4 sm:p-6">
          <Image
            src={Sticker}
            className="w-[420px] sm:w-72 md:w-96 lg:w-[420px]"
            alt="Hero Illustration"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
