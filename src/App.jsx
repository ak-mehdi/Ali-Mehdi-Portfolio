import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
