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
        {themes.map(([mode, themesByMode]) => (
          <div className="dropdown">
            <button className="m-1 btn rounded-btn btn-neutral hidden sm:block">Themes {mode}</button>
            <button className="m-1 btn rounded-full btn-neutral sm:hidden">
              <svg enable-background="new 0 0 512 512" height="24px" version="1" viewBox="0 0 512 512" width="24px" className="fill-neutral-50">
                {mode === 'dark' ? (
                  <path d="M350,343c-50,50-131,50-181,0c-50-50-50-131,0-181c13-13,29-23,48-30c6-2,12-0,16,4c4,4,6,10.833,4,17c-13,35-4,74,22,100c26,26,65,35,100,22c6-2,12-0.582,17,4c4,4,6,10.812,4,17C373,314,363,330,350,343z M191,185c-37,37-37,98,0,136c40,40,108,36,143-8c-36,2-71-10.729-98-37c-26-26-39-62-37-98C197,180,194,182,191,185z" />
                ) : (
                  <g>
                    <g>
                      <path d="M256,144c-62,0-112,50-112,112c0,62,50,112,112,112s112-50,112-112C368,194,318,144,256,144z M256,112c9,0,16-7,16-16V64c0-9-7-16-16-16c-9,0-16,7-16,16v32C240,105,247,112,256,112z M256,400c-9,0-16,7-16,16v32c0,9,7,16,16,16c9,0,16-7,16-16v-32C272,407,265,400,256,400z M380,154l23-23c6-6,6-16,0-23c-6-6-16-6-23,0l-23,23c-6,6-6,16,0,23C364,160,374,160,380,154z M132,358l-23,23c-6,6-6,16,0,23c6,6,16,6,23,0l23-23c6-6,6-16,0-23C148,352,138,352,132,358z M112,256c0-9-7-16-16-16H64c-9,0-16,7-16,16c0,9,7,16,16,16h32C105,272,112,265,112,256z M448,240h-32c-9,0-16,7-16,16c0,9,7,16,16,16h32c9,0,16-7,16-16C464,247,457,240,448,240z M132,154c6,6,16,6,23,0c6-6,6-16,0-23l-23-23c-6-6-16-6-23,0c-6,6-6,16,0,23L132,154z M380,358c-6-6-16-6-23,0c-6,6-6,16,0,23l23,23c6,6,16,6,23,0c6-6,6-16,0-23L380,358z" />
                    </g>
                  </g>
                )}
              </svg>
            </button>
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
