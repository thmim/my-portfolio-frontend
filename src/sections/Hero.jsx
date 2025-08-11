import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import image from '../assets/myimage.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-y-6 md:gap-y-0 md:gap-x-16 lg:gap-x-24">
      
      {/* Left Content */}
      <div className="flex-1 max-w-lg text-center md:text-left">
        <span className="inline-block px-4 py-1 bg-purple-900/40 rounded-full text-sm mb-14">
          Welcome to my portfolio
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
            Taharim
          </span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">
          MERN Stack Developer
        </h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto md:mx-0">
          I am a passionate full stack developer specialized in MERN stack
          with experience in building efficient, user-friendly applications and
          leading teams to success.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
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
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-400">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white transition-colors duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center lg:pr-28 md:justify-end relative">
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent hover:border-cyan-500 transition-colors duration-500 transform hover:scale-105 shadow-2xl shadow-cyan-500/30">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;