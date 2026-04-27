export interface Project {
  slug: string
  img: string
  society: string
  project: string
  description: string
  path: string
}

export const projects: Project[] = [
  {
    slug: 'eveniumnet',
    img: 'img/event.jpg',
    society: 'Evenium',
    project: 'Net',
    description: 'Solutions intégrées pour événements présentiels, hybrides et virtuels',
    path: '/eveniumnet',
  },
  {
    slug: 'texaitex',
    img: 'img/expertassurance.jpg',
    society: 'Texa services',
    project: 'iTex',
    description: 'Gestionnaire de sinistres et de prestation d\'expertise',
    path: '/texaitex',
  },
  {
    slug: 'gedrms',
    img: 'img/coupure.jpg',
    society: 'General Electric',
    project: 'DRMS',
    description: 'Gestionnaire d\'effacement du réseau électrique',
    path: '/gedrms',
  },
  {
    slug: 'caalphee',
    img: 'img/keys.jpg',
    society: 'Crédit Agricole',
    project: 'Alphée',
    description: 'Maintenance application de la plateforme',
    path: '/caalphee',
  },
  {
    slug: 'airfrancedeclic',
    img: 'img/cockpit.jpg',
    society: 'Air France',
    project: 'Declic',
    description: 'Dématérialisation de la documentation aéronautique embarquée.',
    path: '/airfrancedeclic',
  },
  {
    slug: 'ncr',
    img: 'img/bande.jpg',
    society: 'NCR',
    project: 'CEGETEL',
    description: 'Gestion de sauvegarde sur bande',
    path: '/ncr',
  },
  {
    slug: 'oredis',
    img: 'img/vetements.jpg',
    society: 'Oredis',
    project: 'Oresys',
    description: 'Logiciel de Gestion de Stock',
    path: '/oredis',
  },
]
