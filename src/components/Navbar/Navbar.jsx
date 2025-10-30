import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-5 m-4">
      <img
        src={logo}
        className="w-40 h-10 object-contain"
        alt="Jobayer Mahmud"
      />
      <div className="flex gap-10 text-accent font-bold">
        <div className="flex gap-10 mt-2">
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
        <a
          href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent px-10  hover:!bg-[#3f5040] hover:text-[#fff]"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
