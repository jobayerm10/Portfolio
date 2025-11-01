const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-8"
    >
      <h1 className="text-4xl text-center text-accent font-semibold ">
        Get In Touch
      </h1>
      <div className="border w-60 bg-accent mt-5"></div>
      <div className="text-center  w-2xl mt-10">
        <p className="text-xl">
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:jobayermahmud976@gmail.com"
          rel="noopener noreferrer"
          className="btn  px-10 mt-10 hover:!bg-[#3f5040] hover:text-[#fff]"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
