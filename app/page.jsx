'use client'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Header from '../src/sections/Header'
import Skills from '../src/sections/Skills'
import Presentation from '../src/sections/Presentation'
import About from '../src/sections/About'
import Portfolio from '../src/sections/Portfolio'
import Footer from '../src/sections/Footer'
import Society from '../src/sections/Society'
import Education from '../src/sections/Education'

export default function Home() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <>
      <Header />
      <Presentation />
      <Skills />
      <About />
      <Society />
      <Education />
      <Portfolio />
      <Footer />
    </>
  )
}
