'use client'
import Title from '../components/Title'
import EducationCard from '../components/EducationCard'
import { useMediaQuery } from '@uidotdev/usehooks'

export default function Education() {
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)')
  return (
    <section id="education">
      <Title>Formation</Title>
      <ul
        className="timeline lg:grid lg:grid-cols-4 timeline-vertical lg:timeline-horizontal"
        {...(!isLargeDevice && { style: { '--timeline-col-start': '52px' } })}
      >
        <EducationCard year="2001" name="Master 2 Génie des Logiciels Applicatifs" org="UPMC" />
        <EducationCard year="2003" name="Teradata Basic, Physical Implementation, SQL, Utilitaires" />
        <EducationCard year="2013" name="Scrum Master Certification" org="SCRUM ALLIANCE, INC." />
        <EducationCard year="2021" name="Typescript" org="LE REACTEUR" />
      </ul>
    </section>
  )
}
