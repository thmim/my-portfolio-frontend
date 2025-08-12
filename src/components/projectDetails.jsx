import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

import project1 from "../assets/freelance-marketplace.png";
import project2 from "../assets/hotel-booking.png";
import project3 from "../assets/edugenix.png";

// Project details data
const projectDetails = {
  1: {
    name: "Freelance Task Management",
    techStack: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
    description:
      "A freelance platform where clients can post tasks, hire freelancers, and manage projects easily.",
    liveLink: "https://freelance-marketplace-auth.web.app/",
    githubLink: "https://github.com/thmim/freelance-marketplace-client-repo",
    challenges:
      "Integrating post task and bid task and managing multiple user roles.",
    improvements:
      "Add AI-based task recommendations and advanced analytics for freelancers.",
    image: project1,
  },
  2: {
    name: "Modern Hotel Booking Site",
    techStack: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
    description:
      "A modern hotel booking platform with real-time availability, booking management, and secure payments.",
    liveLink: "https://hotel-booking-auth-30d43.web.app",
    githubLink: "https://github.com/thmim/hotel-booking-client-repo",
    challenges:
      "Implementing live availability updates, and manage guest data , guest reviews and ratings",
    improvements:
      "Add multi-language support and personalized booking suggestions.",
    image: project2,
  },
  3: {
    name: "E-Learning Website",
    techStack: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
    description:
      "An online learning platform where teacher can aplly for teacher role and teach. Also student can buy course to proper learning with progress tracking, and quizzes.",
    liveLink: "https://edugenix-e-learning-project.web.app",
    githubLink: "https://github.com/thmim/edugenix-project-client-repo",
    challenges:
      "Managing multiple roles and manage huge data",
    improvements:
      "Add AI-driven personalized course recommendations and implement quizes system.",
    image: project3,
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0B1120] text-white px-6 md:px-12 lg:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
          {project.name}
        </h1>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full object-cover rounded-xl shadow-lg shadow-cyan-500/30 mb-8"
        />

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {project.techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#1F2937] px-3 py-2 rounded-lg shadow shadow-cyan-500/20"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4 mb-8">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 hover:scale-105 transition-transform duration-300"
          >
            GitHub Repo
          </a>
        </div>

        {/* Challenges */}
        <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
        <p className="text-gray-300 mb-6">{project.challenges}</p>

        {/* Improvements */}
        <h2 className="text-2xl font-semibold mb-2">
          Potential Improvements & Future Plans
        </h2>
        <p className="text-gray-300 mb-6">{project.improvements}</p>

        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
          Back to Projects
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
