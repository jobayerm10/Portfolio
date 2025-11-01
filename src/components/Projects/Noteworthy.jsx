import React from "react";

const Noteworthy = () => {
  const projects = [
    {
      title: "To-Do List App",
      desc: "Organize tasks with this stylish and easy-to-use to-do list.",
    },
    {
      title: "Temperature Converter",
      desc: "Convert Celsius, Fahrenheit, and Kelvin with style.",
    },
    {
      title: "Form Validation",
      desc: "Client-side form validation built using pure HTML and JS.",
    },
    {
      title: "Calculator",
      desc: "A modern calculator made with clean UI and fast logic.",
    },
    {
      title: "Task Manager",
      desc: "A productivity app to manage tasks with local storage support.",
    },
    {
      title: "Chat App UI",
      desc: "A clean chat interface built with React and Tailwind CSS for front-end demo.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      <h1 className="text-4xl text-center text-accent font-semibold ">
        Other Noteworthy Projects
      </h1>
      <div className="border w-120 bg-accent mt-5"></div>
      <div className="flex items-center justify-between max-w-6xl w-full gap-2 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-500 w-full shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <div className="card-body">
                <h2 className="card-title text-2xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="font-medium">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noteworthy;
