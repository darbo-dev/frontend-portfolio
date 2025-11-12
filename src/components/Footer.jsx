import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-900/90 border-t border-cyan-800 py-6">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-gray-300">
        <p className="text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} Darbaz Rzgar. All rights reserved. ☕️
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/darbo-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/darbazctrlc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:darborzgar7@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope />
          </a>
            <a
            target="_blank"
            href="https://www.instagram.com/journeywithmern/"
            className="hover:text-cyan-400 cursor-pointer transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="flex gap-1 items-center m-2">
            <FaPhone />
            <span>07733803031</span>
        </div>
        <div>
            <ScrollLink to="Home" smooth={true} duration={500} className="text-sky-500">Scroll to top</ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;