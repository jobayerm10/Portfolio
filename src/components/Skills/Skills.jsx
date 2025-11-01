import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiFirebase, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-700 dark:text-white" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#f9fafb] dark:bg-[#1e1f1c]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3f5040] mb-10">
          Tech Stack & Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-[#2a2b27] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-[#3f5040] font-medium dark:text-[#e8ede7]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
