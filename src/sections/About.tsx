export default function About() {
  return (
    <section className="sm:p-24 flex flex-col gap-8 w-full" id="about">
      <div data-aos="fade-right" className="w-full card glass shadow-xl sm:card-side">
        <figure className="min-w-vw-96-min@sm-max@2xl">
          <img src="img/ia/c.webp" alt="Illustration développement" className="h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Expertise technique</h2>
          <p className="mb-4">
            <strong>Plus de 24 ans d'expérience</strong> dans le développement web, marqués par une adaptation constante aux évolutions technologiques.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Code clair, lisible et optimisé pour la performance</li>
            <li>Architecture orientée vers l'expérience utilisateur</li>
            <li>Expertise des systèmes complexes et legacy</li>
            <li>Migration vers des technologies modernes (React, TypeScript, microservices)</li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-left" className="self-end w-full card sm:card-side glass shadow-xl">
        <figure className="min-w-vw-96-min@sm-max@2xl">
          <img src="img/ia/b.webp" alt="Illustration collaboration" className="h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Collaboration & Leadership</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Travail d'équipe</strong> : collaboration étroite avec les équipes techniques (Mainframe, DevOps, Product)</li>
            <li><strong>Intégration</strong> : connexion réussie entre technologies modernes et systèmes legacy</li>
            <li><strong>Mentoring</strong> : accompagnement des développeurs juniors et partage de connaissances</li>
            <li><strong>Vision transversale</strong> : solutions robustes et évolutives pour la pérennité des projets</li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-right" className="card xl:card-side glass shadow-xl self-end max-h-3xl">
        <figure className="min-w-vw-96-min@sm-max@2xl">
          <img src="img/ia/a.webp" alt="Illustration optimisation" className="md:h-full w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Performance & Optimisation</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Optimisation SQL</strong> : indexation avancée, réécriture de requêtes, réduction des temps de réponse</li>
            <li><strong>Architecture</strong> : allègement de la charge serveur, amélioration de la scalabilité</li>
            <li><strong>Production</strong> : identification proactive des problématiques critiques</li>
            <li><strong>Fiabilité</strong> : solutions concrètes pour améliorer les processus opérationnels</li>
          </ul>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card md:card-side glass shadow-xl self-end max-h-3xl">
        <figure className="">
          <img src="img/ia/d.webp" alt="Illustration vision" className="md:h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Ma vision du développement</h2>

          <h3 className="font-bold text-lg mb-2">📊 Pragmatisme technologique</h3>
          <p className="mb-4">
            Les technologies (Docker, microservices, NoSQL, Big Data) sont des <strong>outils au service de l'utilisateur</strong>. L'adoption d'une nouvelle technologie doit être motivée par un besoin réel, pas par l'effet de mode.
          </p>

          <h3 className="font-bold text-lg mb-2">⚡ Automatisation & DevOps</h3>
          <p className="mb-4">
            Minimiser le temps sur les tâches répétitives pour se concentrer sur le code stratégique. Les IDE modernes, DevOps et CI/CD sont essentiels pour gagner en efficacité.
          </p>

          <h3 className="font-bold text-lg mb-2">🎯 Agilité & amélioration continue</h3>
          <p className="mb-4">
            <strong>Scrum Master certifié</strong> : fervent défenseur des méthodes agiles. Flexibilité, collaboration et réactivité transforment radicalement la gestion de projets.
          </p>

          <h3 className="font-bold text-lg mb-2">📚 Veille technologique</h3>
          <p>
            L'évolution rapide de notre industrie exige une veille constante. Rester compétitif signifie anticiper les tendances et intégrer les meilleures pratiques.
          </p>
        </div>
      </div>
    </section>
  )
}
