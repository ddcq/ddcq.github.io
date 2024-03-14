'use client'
import daisyThemes from 'daisyui/src/theming/themes'
import { useTheme } from '../hooks/useTheme'
import { useMemo } from 'react'

export default function Header() {
  const [, saveTheme] = useTheme()
  const themes = useMemo(() => Object.entries(Object.groupBy(Object.entries(daisyThemes), ([_id, theme]) => theme['color-scheme'])), [])
  return (
    <header className="sticky top-0 bg-transparent z-50 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle bg-base-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>

          <ul tabIndex="0" className="menu menu-lg dropdown-content mt-3 z-[1] p-lg shadow bg-base-100 rounded-box">
            <li>
              <a href="#presentation">Home</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#about">A propos de moi</a>
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
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        {themes.map(([mode, themesByMode]) => (
          <div className="dropdown">
            <button className="m-1 btn rounded-box btn-neutral">Themes {mode}</button>
            <div className="shadow menu dropdown-content z-[1] rounded-box w-52 max-h-50vh">
              <ul>
                {themesByMode.map(([id]) => (
                  <li data-theme={id}>
                    <button className="hover:bg-gradient-to-r from-base-100 via-primary to-secondary from-50% p-1" onClick={() => saveTheme(id)}>
                      {id}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}
