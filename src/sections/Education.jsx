'use client'
import Title from '../components/Title'
import EducationCard from '../components/EducationCard'

export default function Education() {
  return (
    <section id="education">
      <Title>Formation</Title>
      <ul class="timeline lg:grid lg:grid-cols-4 timeline-vertical lg:timeline-horizontal">
        <EducationCard year="2001" name="Master 2 Génie des Logiciels Applicatifs" org="UPMC" />
        <EducationCard year="2003" name="Teradata Basic, Physical Implementation, SQL, Utilitaires" />
        <EducationCard year="2013" name="Scrum Master Certification" org="SCRUM ALLIANCE, INC." />
        <EducationCard year="2021" name="Typescript" org="LE REACTEUR" />
      </ul>
    </section>
  )
}
