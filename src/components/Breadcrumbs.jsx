import { Children } from 'react'

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <div className="navbar sticky top-0 bg-base-100 z-30 justify-between">
      <div className="breadcrumbs">
        <ul>
          <li>
            <a href="/">🏚️ Home</a>
          </li>
          {Children.map(breadcrumbs.split('|'), (label) => (
            <li>{label}</li>
          ))}
        </ul>
      </div>
      <div>
        <a className="btn btn-accent btn-circle btn-sm" href="/">
          ⮌
        </a>
      </div>
    </div>
  )
}
