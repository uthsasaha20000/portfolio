import React from 'react'
import Education from '../Components/Education'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Banner from '../Components/Banner'
import Contact from '../Components/Contact'

function Homepage() {
  return (
    <div>
      <Banner></Banner>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Homepage