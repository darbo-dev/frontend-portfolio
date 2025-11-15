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
  return (
    <div className='w-screen h-screen mx-auto'>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default App