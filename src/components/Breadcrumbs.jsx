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
          <svg height="24px" viewBox="-48 -14 32 32" width="24px">
            <g>
              <path d="M-31-6c-5,0-9,2-12,6l-5-5v16h16l-5-5c1-4,6-8,10-8c6,0,11,5,11,11C-16-0-23-6-31-6z" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  )
}
