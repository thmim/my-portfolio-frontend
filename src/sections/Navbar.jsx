import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaTools, FaLaptopCode, FaGraduationCap, FaEnvelope }
  from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';
import { NavLink } from 'react-router';
import ThemeToggle from '../components/ThemeToggle';



const Navbar = () => {
  const navItems =
    <>

      <li>
        <NavLink to="/">
          <FaHome /> Home
        </NavLink>

      </li>
      <li>
        <Link to="about" smooth={true} duration={1600} activeClass="active" spy={true}>
          <FaUser /> About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={1600} activeClass="active" spy={true}>
          <FaTools /> Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={1600} activeClass="active" spy={true}>
          <FaLaptopCode /> Projects
        </Link>
      </li>
      {/* <li>
        <Link to="education" smooth={true} duration={1600} activeClass="active" spy={true}>
          <FaGraduationCap /> Education
        </Link>
      </li> */}
      <li>
        <Link to="contact" smooth={true} duration={1600} activeClass="active" spy={true}>
          <FaEnvelope /> Contact
        </Link>
      </li>

    </>


  return (
    <div className="navbar w-11/12 mx-auto mt-8 p3-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>
        <span className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-3xl font-bold bg-clip-text text-transparent">
          Taharim
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className=""><MdLightMode size={25} /></a> */}
        {/* <ThemeToggle></ThemeToggle> */}
        <a href="https://drive.google.com/file/d/18GQwiYpKGa0FE_T2mbRKO_1AWSwQW3_T/view?usp=sharing" target="_blank" class="btn bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;