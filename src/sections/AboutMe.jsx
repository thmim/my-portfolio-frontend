import React from "react";
import { motion } from "framer-motion";
import photo from '../assets/developer.jpg'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 w-11/12 mx-auto bg-[#0B1120] text-white"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-500">
            <img
              src={photo}
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
           {/* Detailed Introduction */}
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Hello! I’m <span className="text-cyan-400 font-semibold">Taharim Hasan Mim</span>, 
            a passionate MERN Stack Developer who loves building user-friendly, scalable, 
            and visually appealing web applications.
          </p>

          {/* Programming Journey */}
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            My programming journey started in my University first year when I discovered the joy of solving 
            problems with code. Over the years, I have mastered technologies like 
            <span className="text-cyan-400"> React, Node.js, Express, and MongoDB</span>, 
            and developed a strong understanding of frontend and backend architecture.
          </p>

          {/* Type of Work */}
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            I enjoy working on projects that challenge me to think creatively and solve real-world 
            problems.
            I take pride in delivering high-quality results.
          </p>

          {/* Hobbies & Interests */}
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Outside of programming, I’m an avid sports enthusiast and love playing football. 
            
          </p>

          {/* Personality */}
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            My friends often describe me as curious, detail-oriented, and easy to work with. 
            I believe in continuous learning, sharing knowledge, and making every project 
            an enjoyable experience for the team and users alike.
          </p>

          {/* Personal Info */}
          {/* <div className="space-y-3 mb-8">
            <p className="flex items-center gap-3 text-gray-300">
              <FaUser className="text-cyan-400" /> <span><strong>Name:</strong> Taharim Hasan Mim</span>
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-cyan-400" /> <span><strong>Address:</strong> Khulna, Bangladesh</span>
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-cyan-400" /> <span><strong>Phone:</strong> +880 1969018549</span>
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-cyan-400" /> <span><strong>Email:</strong> mdtaharimmim1010@gmail.com</span>
            </p>
          </div> */}

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
