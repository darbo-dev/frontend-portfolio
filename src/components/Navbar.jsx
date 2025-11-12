import { motion } from 'framer-motion'
import { CodeXml, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const links = ['Home', 'Skills', 'About', 'Contact']
  const [activePage, setActivePage] = useState('Home')
  return (
    <motion.div className="fixed top-0 left-0 w-full z-50">
      <motion.nav
       className="relative w-[90%] md:w-[80%] mx-auto mt-2 rounded-full shadow-4xl
flex justify-between items-center py-2 px-10 md:px-16
backdrop-blur-lg bg-cyan-950/40 border border-cyan-900/80 "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ScrollLink
          to="Home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
        >
          <CodeXml size={20} className="text-cyan-400" />
          <span className="font-semibold text-xl md:text-2xl">DevDarbo<span className='text-cyan-400'>.</span>  </span>
        </ScrollLink>

        <div className="hidden md:flex space-x-10">
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="text-cyan-400"
              onClick={() => setActivePage(link)}
              className={`cursor-pointer font-medium capitalize transition ease-in-out duration-200
  ${activePage === link 
    ? 'text-cyan-400 py-2 px-4 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]'
    : 'hover:text-cyan-300 py-2 px-4 text-white hover:scale-105'}`}
            >
              {link}
            </ScrollLink>
          ))}
        </div>

        <motion.button
          className="flex cursor-pointer md:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
          initial={{ rotate: 0, scale: 0.95 }}
          whileTap={{ rotate: 360, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {openMenu ? <X /> : <Menu />}
        </motion.button>
      </motion.nav>

      {openMenu && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="md:hidden w-[90%] backdrop-blur-md mx-auto flex flex-col absolute left-0 right-0 bg-cyan-950/20 border border-cyan-900/10 rounded-xl py-2 px-4"
         
        >
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="text-cyan-400"
              onClick={() => setActivePage(link)}
             className={`cursor-pointer font-medium capitalize transition ease-in-out duration-200
  ${activePage === link 
    ? 'text-cyan-400 py-2 px-4 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]'
    : 'hover:text-cyan-300 py-2 px-4 text-white hover:scale-105'}`}
            >
              <p onClick={() => setOpenMenu((prev) => !prev)}>{link}</p>
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default Navbar