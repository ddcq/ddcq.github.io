'use client'

import Title from '../components/Title'
import MissionCard from '../components/MissionCard'
import { projects } from '../../data/projects'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Title>Mes missions</Title>
      <div className="flex flex-wrap justofy-center">
        {projects.map((project) => (
          <MissionCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
