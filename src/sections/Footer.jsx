import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">
        
        {/* Left Section: Logo & Description */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
            Taharim Hasan
          </h3>
          <p className="text-gray-400">
            A passionate MERN Stack Developer building beautiful and functional web applications. Let's create something great together!
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>
        
        {/* Right Section: Contact & Social Icons */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <div className="space-y-4">
            <a href="mailto:mdtaharimmim1010@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-cyan-400 transition-colors duration-300">
              <FaEnvelope className="text-lg" />
              mdtaharimmim1010@gmail.com
            </a>
            <a href="tel:+880 1969018549" className="flex items-center justify-center md:justify-start gap-3 hover:text-cyan-400 transition-colors duration-300">
              <FaPhoneAlt className="text-lg" />
              +880 1969018549
            </a>
            <div className="flex items-center justify-center md:justify-start gap-6 text-2xl mt-6">
              <a href="https://github.com/thmim" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/th-mim10" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Taharim. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <p>
            Built with
          </p>
          <SiReact className="text-cyan-400 text-xl animate-spin-slow" />
          <p>
            and
          </p>
          <SiTailwindcss className="text-cyan-400 text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;