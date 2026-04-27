'use client'
import Title from '../components/Title'
import EducationCard from '../components/EducationCard'
import { useMediaQuery } from 'usehooks-ts'
import { education } from '../../data/education'

export default function Education() {
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)')
  return (
    <section id="education">
      <Title>Formation</Title>
      <ul
        className="timeline lg:grid lg:grid-cols-4 timeline-vertical lg:timeline-horizontal"
        {...(!isLargeDevice && { style: { '--timeline-col-start': '52px' } as React.CSSProperties })}
      >
        {education.map((edu) => (
          <EducationCard key={`${edu.year}-${edu.name}`} {...edu} />
        ))}
      </ul>
    </section>
  )
}
