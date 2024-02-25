'use client'
import { useLocalStorage } from '@uidotdev/usehooks'
import daisyThemes from 'daisyui/src/theming/themes'
import { useEffect } from 'react'

export default function Header() {
  const [savedTheme, saveTheme] = useLocalStorage('theme', 'dark')
  useEffect(() => {
      changeTheme(savedTheme)
  }, [savedTheme])
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
          <select data-choose-theme className="focus:outline-none h-10 rounded-full px-3 border" value={savedTheme} onChange={e => {
            saveTheme(e.target.value)
          }}>
            { Object.keys(daisyThemes).map(theme => <option value={theme} key={theme}>{theme}</option>)}
          </select>
        </div>
    </header>
  )
}

function changeTheme(themeName) {
  const el = document.documentElement
  el.setAttribute("data-theme", themeName);
  el.setAttribute("color-scheme", daisyThemes[themeName]['color-scheme'])
}
