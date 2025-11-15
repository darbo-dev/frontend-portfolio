import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from './components/Footer'
import {motion} from 'framer-motion'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  return (
    <div className='w-screen h-screen mx-auto'>
      {loading ? (
      <div className='flex w-screen h-screen justify-center items-center flex-col gap-1'>
        <div>
          <p className='font-medium text-sm '>Be patient</p>
        </div>
        <motion.div>
          <AiOutlineLoading3Quarters size={25} className='text-sky-400 animate-spin' />
        </motion.div>
      </div>
      ) : (
        <>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Contact />
        <Footer />
        </>
      )}
    </div>
  )
}

export default App