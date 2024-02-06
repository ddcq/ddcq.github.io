'use client'
export default function EducationCard({ year, name, org }) {
  return (
    <li>
      <hr />
      <div class="timeline-start">{year}</div>
      <div class="timeline-middle text-4xl">👨‍🎓</div>
      <div class="timeline-end timeline-box">
        <h3 className="card-title">{name}</h3>
        <p className="italic">{org}</p>
      </div>
      <hr />
    </li>
  )
}
