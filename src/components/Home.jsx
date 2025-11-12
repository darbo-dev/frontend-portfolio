import { Link as ScrollLink } from 'react-scroll'
import avatar from '../assets/avatarrmv.png'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.section
      id="Home"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full mt-16 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 border-b border-cyan-900"
    >
      <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-medium">
            Full Stack{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
              MERN
            </span>{' '}
            Developer
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
            Hey! I’m Darbaz, a web developer passionate about building beautiful and functional digital experiences. 
            I work with the MERN stack & latest version of NextJs and TailwindCSS 
            to create fast, responsive, and modern websites and web apps. I love turning ideas into reality through clean code and creative design 
          </p>
          <div>
            <ScrollLink 
            smooth={true} 
            duration={500} 
            to='Contact'  
            className="mt-8 cursor-pointer  px-6 py-2 bg-gradient-to-r  from-cyan-900 via-cyan-400 to-cyan-900 text-white/90 font-semibold rounded-xl hover:bg-cyan-300 transition-all">
              Get in touch
            </ScrollLink>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={avatar}
            alt="Darbaz avatar"
            className="w-82 lg:mb-40 rounded-full shadow-2xl shadow-cyan-900/90 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Home