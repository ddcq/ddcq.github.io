'use client'
import { Icon } from '@/components/Icon'
import { ReactNode } from 'react'
import ClockSvg from './Clock'
import PaintSvg from './Paint'
export default function Header() {
  return (
    <header className="sticky top-0 bg-transparent z-50 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-base-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>

          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-lg shadow bg-base-100 rounded-box">
            <li>
              <a href="#presentation">Home</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#society">Carrière</a>
            </li>
            <li>
              <a href="#education">Formation</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#about">A propos de moi</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <IconButton href="/clock" iconSvg={<ClockSvg />} />
        <IconButton href="/theme-selector" iconSvg={<PaintSvg />} />
      </div>
    </header>
  )
}
function IconButton({ href, iconSvg }: { href: string; iconSvg: ReactNode }) {
  return (
    <a href={href} className="p-3 m-1 btn rounded-full btn-neutral">
      <Icon className="fill-neutral-content" width={24} height={24}>
        {iconSvg}
      </Icon>
    </a>
  )
}
