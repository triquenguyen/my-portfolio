import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Sidebar from './components/navbar/Sidebar'
import Social from './components/navbar/Social'
import AboutMe from './components/aboutme/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <div className='lg:p-10 bg-slate-100'>
      <Social />
      <Sidebar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
