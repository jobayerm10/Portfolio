import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-3 m-4">
      <img
        src={logo}
        className="w-15 h-15 object-contain"
        alt="Jobayer Mahmud"
      />
      <div className=" flex justify-center items-center gap-10 relative w-full text-accent">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>

        <button className="btn btn-primary px-10 absolute right-0">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
