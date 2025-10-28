import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <img
        src={logo}
        className="w-15 h-15 object-contain"
        alt="Jobayer Mahmud"
      />
      <div className="flex">
        <ul>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
