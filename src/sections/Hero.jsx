import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import image from "../assets/myimage.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-y-6 md:gap-y-0 md:gap-x-16 lg:gap-x-24">
      
      {/* Left Content */}
      <motion.div
        className="flex-1 max-w-lg text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="inline-block px-4 py-1 bg-purple-900/40 rounded-full text-sm mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Welcome to my portfolio
        </motion.span>

        <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
          Hi, I'm{" "}
          <motion.span
            className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Taharim Hasan Mim
          </motion.span>
        </h1>

        <motion.h2
          className="text-2xl font-semibold text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-6 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I am a passionate full stack developer specialized in MERN stack
          with experience in building efficient, user-friendly applications and
          leading teams to success.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center md:justify-start gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start gap-6 text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="https://github.com/thmim" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/th-mim10" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:mdtaharimmim1010@gmail.com" className="hover:text-white transition-colors duration-300">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center lg:pr-28 md:justify-end relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent hover:border-cyan-500 transition-colors duration-500 shadow-2xl shadow-cyan-500/30"
        >
          <img
            src={image}
            alt="Profile"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
