import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 text-white px-6 py-12 border-b border-cyan-900"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed">
         Hi, Nice got you here! I’m <span className="font-semibold text-cyan-400">Darbaz</span>, a 17-year-old{" "}
          <span className="font-semibold">Full Stack MERN Developer</span> and{" "}
          <span className="font-semibold">Computer Science student</span> passionate
          about building beautiful and functional digital experiences.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          My journey into web development began with curiosity — and turned into a love
          for creating things that live on the web. I enjoy working with technologies like{" "}
          <span className="font-semibold text-sky-400">React</span>,{" "}
          <span className="font-semibold text-sky-400">Next.js</span>,{" "}
          <span className="font-semibold text-sky-400">Node.js</span>, and{" "}
          <span className="font-semibold text-sky-400">MongoDB</span> to build fast,
          responsive, and scalable applications.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed">
          I’m always exploring new tools, improving my problem-solving skills, and
          focusing on clean code and modern design. My goal is to grow as a developer
          who creates products that inspire and make a real impact.
        </p>
      </div>
    </motion.section>
  );
};

export default About;