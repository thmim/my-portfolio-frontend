import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import project1 from '../assets/freelance-marketplace.png'
import project2 from '../assets/hotel-booking.png'
import project3 from '../assets/edugenix.png'
// Sample projects data
const projects = [
  {
    id: 1,
    name: "Freelance Task Management Site",
    image: project1,
  },
  {
    id: 2,
    name: "Modern Hotel Booking Site",
    image: project2,
  },
  {
    id: 3,
    name: "E-Learning Website",
    image: project3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20 bg-[#0B1120] text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#111827] rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={project.image} alt={project.name} className="w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
