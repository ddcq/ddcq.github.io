'use client'

interface EducationCardProps {
  year: string
  name: string
  org?: string
}

export default function EducationCard({ year, name, org }: EducationCardProps) {
  return (
    <li>
      <hr />
      <div className="timeline-start">{year}</div>
      <div className="timeline-middle text-4xl">👨‍🎓</div>
      <div className="timeline-end timeline-box">
        <h3 className="card-title">{name}</h3>
        {org && <p className="italic">{org}</p>}
      </div>
      <hr />
    </li>
  )
}
