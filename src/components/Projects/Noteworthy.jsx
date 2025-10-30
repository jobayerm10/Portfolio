import React from "react";

const Noteworthy = () => {
  const projects = [
    {
      title: "Spotify-Like Music Player",
      desc: "A full-page music player built with React, Tailwind CSS, and Lucide React Icons.",
    },
    {
      title: "Portfolio Website",
      desc: "A sleek personal portfolio website built with React and Tailwind CSS.",
    },
    {
      title: "E-Commerce UI",
      desc: "An e-commerce homepage layout with a modern product grid and navigation bar.",
    },
    {
      title: "Weather App",
      desc: "A real-time weather dashboard using OpenWeather API and React Hooks.",
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
