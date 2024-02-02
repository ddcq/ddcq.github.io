'use client';

import Title from "../components/Title";

export default function Header() {
  return <header className="sticky top-0 bg-base-100 z-50">
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>

          <ul
            tabIndex="0"
            className="menu menu-lg dropdown-content mt-3 z-[1] p-lg shadow bg-neutral-50 rounded-box"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Compétences</a>
            </li>
            <li>
              <a>A propos de moi</a>
            </li>
            <li>
              <a>Projets</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="navbar-center font-title text-4xl text-primary">
        <a className="navbar-brand">Denis Declercq</a>
      </h1>
      <div className="navbar-end">
        <span className="mr-2">Theme :</span>
        <select
          data-choose-theme
          className="focus:outline-none h-10 rounded-full px-3 border"
        >
          <option value="">Default</option>
          {'light dark'
            .split(' ')
            .map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
        </select>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  </header>;
}
