'use client'
import Header from '../src/sections/Header'
import Skills from '../src/sections/Skills'
import Presentation from '../src/sections/Presentation'
import About from '../src/sections/About'
import Portfolio from '../src/sections/Portfolio'
import Footer from '../src/sections/Footer'
import Society from '../src/sections/Society'
import Education from '../src/sections/Education'

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Skills />
      <Society />
      <Education />
      <Portfolio />
      <About />
      <Footer />
    </>
  )
}
