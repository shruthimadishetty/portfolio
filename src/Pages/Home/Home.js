import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Experience from '../../Components/Experience/Experience'
import Skills from '../../Components/Skills/Skills'
import Contact from '../../Components/Contact/Contact'
import Project from '../../Components/Project/Project'
import Hero from '../../Components/Hero/Hero'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
