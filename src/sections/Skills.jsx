import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaDatabase, FaGit, FaGithub
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiVercel, SiFirebase
} from 'react-icons/si';

// Data for the skills, can be easily updated
const skillsData = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12"
      style={{ backgroundColor: "#0B1120", color: "#F8FAFC" }}
    >
      {/* Custom CSS for the floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="w-11/12 mx-auto text-center">
        {/* Main Title with Gradient */}
        <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent lg:text-6xl font-bold mb-4">
          My Skills
        </h2>
        
        {/* Short Description */}
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of the key technologies and tools I've worked with to build full-stack web applications. My expertise lies in the MERN stack and related modern frameworks.
        </p>

        {/* Skills Grid with Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              // Added the custom animation class and a unique delay for each card
              className="relative p-6 group flex flex-col items-center justify-center text-center 
                         bg-gray-800/50 rounded-2xl shadow-xl hover:bg-gray-700/60 transition-all 
                         duration-300 transform hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Icon */}
              <div 
                className="text-6xl mb-4 transition-colors duration-300 group-hover:text-cyan-400"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
