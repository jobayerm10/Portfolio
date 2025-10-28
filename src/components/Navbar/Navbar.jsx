import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-5 m-4">
      <img
        src={logo}
        className="w-40 h-10 object-contain"
        alt="Jobayer Mahmud"
      />
      <div className=" flex justify-center items-center gap-10 relative w-full text-accent font-bold">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>

        <a
          href="/Jobayer-Mahmud-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent px-10 absolute right-0 hover:!bg-[#3f5040] hover:text-[#fff]"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
