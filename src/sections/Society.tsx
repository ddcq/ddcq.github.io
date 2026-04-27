'use client'
import Title from '../components/Title'
import SocietyCard from '../components/SocietyCard'
import { companies } from '../../data/companies'

export default function Society() {
  return (
    <section id="society">
      <Title>Carrière professionnelle</Title>
      <p className="italic text-sm text-center">Les entreprises qui m'ont fait confiance avant vous</p>
      <div className="flex flex-wrap w-full justify-center ml-lg">
        {companies.map((company) => (
          <SocietyCard key={company.society} {...company} />
        ))}
      </div>
    </section>
  )

}

