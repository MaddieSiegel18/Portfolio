/*import all components and css files*/

import React from 'react'
import NavBar from '../components/navbar'
import About from '../components/about'
import Projects from '../components/projects'
import WorkAndSkills from '../components/workAndSkills'
import Footer from '../components/footer'
import '../App.css'
import '../styles/main.css'

function Main() {


  return (
    <div className='main'>
      <NavBar />
      <About />
      <Projects />
      <WorkAndSkills />
      <Footer />
    </div>
  )
}

export default Main
