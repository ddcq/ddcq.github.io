export interface Education {
  year: string
  name: string
  org?: string
}

export const education: Education[] = [
  {
    year: '2001',
    name: 'Master 2 Génie des Logiciels Applicatifs',
    org: 'UPMC',
  },
  {
    year: '2003',
    name: 'Teradata Basic, Physical Implementation, SQL, Utilitaires',
  },
  {
    year: '2013',
    name: 'Scrum Master Certification',
    org: 'SCRUM ALLIANCE, INC.',
  },
  {
    year: '2021',
    name: 'Typescript',
    org: 'LE REACTEUR',
  },
]
