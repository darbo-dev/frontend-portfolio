import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiPostman, SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FiGitMerge } from "react-icons/fi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
  { name: "ReactJS", icon: <IoLogoReact className="text-blue-600" /> },
  { name: "NextJS", icon: <RiNextjsFill className="text-black/80 dark:text-white/90" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <BiLogoMongodb className="text-green-700" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  {name: "Git", icon: <FiGitMerge className="text-orange-500" />}
];

const Skills = () => {
  return (
    <motion.section
      id="Skills"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 text-white px-4 border-b border-cyan-900"
    >
      <div className="max-w-6xl w-full text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
          What I Know
        </h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 bg-cyan-900/30 border border-cyan-800/70 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 text-center group hover:scale-110 transition-transform duration-200"
            >
              <div className="text-4xl group-hover:drop-shadow-lg transition-all duration-300">
                {icon}
              </div>
              <p className="font-medium text-lg text-gray-100">{name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;