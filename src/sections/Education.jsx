'use client'
import Title from '../components/Title'
import EducationCard from '../components/EducationCard'

export default function Education() {
  return (
    <section id="education">
      <Title>Formation</Title>
      <div className="flex flex-wrap w-full justify-center">
        <EducationCard year="2001" name="Master 2 Génie des Logiciels Applicatifs" org="UPMC" />
        <EducationCard year="2001" name="Scort IC Scripting" />
        <EducationCard year="2003" name="Teradata Basic, Physical Implementation, SQL, Utilitaires" />
        <EducationCard year="2013" name="Scrum Master Certification" org="SCRUM ALLIANCE, INC." />
      </div>
    </section>
  )
}
