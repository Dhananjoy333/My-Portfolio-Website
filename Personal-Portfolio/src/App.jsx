import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Homepage/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Qualifications from './Components/Qualifications/Qualifications'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrollup from './Components/Scrollup/Scrollup'

function App() {
  return (
    <>
      <Navbar/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App
