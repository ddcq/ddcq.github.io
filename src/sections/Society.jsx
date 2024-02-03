'use client'
import Title from '../components/Title'
import SocietyCard from '../components/SocietyCard'

export default function Society() {
  return (
    <section id="society">
      <Title>Carrière professionnelle</Title>
      <p className="italic text-sm text-center">Les entreprises qui m'ont fait confiance avant vous</p>
      <div className="flex flex-wrap w-full justify-center">
        {[
          ['Adex', 'Aubay', 'Septembre 2001 - Décembre 2005', '/img/aubay.jpg'],
          ['Logysil', 'Altelios Technology', 'Janvier 2006 - Décembre 2013', '/img/altelios.jpg'],
          ['SQLI Entreprise', 'SQLI Group', 'Décembre 2013 - Janvier 2016', '/img/sqli.jpg'],
          ['Texa Services', 'Stelliant', 'Février 2016 - Juin 2017', '/img/stelliant.jpg'],
          ['Evenium', '', 'Juin 2017 - Octobre 2020', '/img/evenium.jpg'],
          ['Leboncoin', 'Adevinta', 'Novembre 2020 - Aujourd’hui', '/img/leboncoin.jpg'],
        ].map(([society, group, period, img]) => (
          <SocietyCard key={society} {...{ society, group, period, img }} />
        ))}
      </div>
    </section>
  )

}

