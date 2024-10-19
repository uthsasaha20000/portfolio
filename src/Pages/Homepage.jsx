import React from 'react'
import Education from '../Components/Education'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Banner from '../Components/Banner'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Achievements from '../Components/Achievements'

function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Achievements></Achievements>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Homepage