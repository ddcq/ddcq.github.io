'use client'
import dynamic from 'next/dynamic'
import Header from '../src/sections/Header'
import Presentation from '../src/sections/Presentation'
import Hearts from '@/components/Hearts'
import { useReadLocalStorage } from 'usehooks-ts'
import { useTheme } from '@/hooks/useTheme'

// Lazy load sections below the fold
const Skills = dynamic(() => import('../src/sections/Skills'))
const Society = dynamic(() => import('../src/sections/Society'))
const Education = dynamic(() => import('../src/sections/Education'))
const Portfolio = dynamic(() => import('../src/sections/Portfolio'))
const About = dynamic(() => import('../src/sections/About'))
const Footer = dynamic(() => import('../src/sections/Footer'))

export default function Home() {
  useTheme()
  const theme = useReadLocalStorage('theme');
  return (
    <>
      {theme === 'valentine' && <Hearts/>}
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
