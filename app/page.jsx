'use client'
import Skills from '../src/sections/Skills'
import Presentation from '../src/sections/Presentation'
import About from '../src/sections/About'
import Portfolio from '../src/sections/Portfolio'
import Footer from '../src/sections/Footer'
import Society from '../src/sections/Society'
import Education from '../src/sections/Education'
import Hearts from '@/components/Hearts'
import { useReadLocalStorage } from 'usehooks-ts'
import { useTheme } from '@/hooks/useTheme'
import dynamic from 'next/dynamic'
 
const Header = dynamic(() => import('../src/sections/Header'), {
  ssr: false,
})

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
