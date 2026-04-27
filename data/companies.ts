export interface Company {
  society: string
  group: string
  period: string
  img: string
}

export const companies: Company[] = [
  {
    society: 'Adex',
    group: 'Aubay',
    period: 'Septembre 2001 - Décembre 2005',
    img: '/img/aubay.jpg',
  },
  {
    society: 'Logysil',
    group: 'Altelios Technology',
    period: 'Janvier 2006 - Décembre 2013',
    img: '/img/altelios.jpg',
  },
  {
    society: 'SQLI Entreprise',
    group: 'SQLI Group',
    period: 'Décembre 2013 - Janvier 2016',
    img: '/img/sqli.jpg',
  },
  {
    society: 'Texa Services',
    group: 'Stelliant',
    period: 'Février 2016 - Juin 2017',
    img: '/img/stelliant.jpg',
  },
  {
    society: 'Evenium',
    group: '',
    period: 'Juin 2017 - Octobre 2020',
    img: '/img/evenium.jpg',
  },
  {
    society: 'Leboncoin',
    group: 'Adevinta',
    period: 'Novembre 2020 - Aujourd\'hui',
    img: '/img/leboncoin.jpg',
  },
]
