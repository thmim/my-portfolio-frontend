import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFileDownload, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#0B1120] text-white w-11/12 mx-auto"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
            <h3 className="text-3xl font-bold">
            Let’s Share idea and <span className="text-cyan-400">Work Together!</span>
          </h3>
          <p className="text-gray-300">
            I’d love to hear from you! Whether it’s about a potential project,
            collaboration, or just a friendly hello — feel free to reach out.
          </p>

          <div className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg shadow shadow-cyan-500/20">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <span>mdtaharimmim1010@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg shadow shadow-cyan-500/20">
            <FaPhoneAlt className="text-cyan-400 text-2xl" />
            <span>+880 1969018549</span>
          </div>

          <div className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg shadow shadow-cyan-500/20">
            <FaWhatsapp className="text-green-400 text-2xl" />
            <span>+880 1969018549</span>
          </div>
          <div className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg shadow shadow-cyan-500/20">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <span>Khulna, Bangladesh</span>
          </div>
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <FaFileDownload />
            Resume
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827] p-6 rounded-lg shadow shadow-cyan-500/20 space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-300 font-medium">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#0B1120] border border-gray-700 focus:border-cyan-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-300 font-medium">
              Your Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#0B1120] border border-gray-700 focus:border-cyan-400 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-gray-300 font-medium">
              Your Message:
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 rounded-lg bg-[#0B1120] border border-gray-700 focus:border-cyan-400 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
