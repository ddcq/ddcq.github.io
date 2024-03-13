export default function About() {
  return (
    <section className="sm:p-24 flex flex-col gap-8 w-full" id="about">
      <div data-aos="fade-right" className="w-full sm:w-96 card glass shadow-xl sm:card-side">
        <figure>
          <img src="img/ia/c.webp" className="h-full" />
        </figure>
        <div className="card-body">
          Avec près de 20 ans d’expérience dans les technologies JEE, j’ai pu suivre l’évolution des nouvelles technologies. J’ai gardé de mes premières années
          le soucis d’un code clair, le plus optimisé possible et dimensionné au besoin.
        </div>
      </div>
      <div data-aos="fade-left" className="self-end w-full sm:w-96 card sm:card-side glass shadow-xl">
        <figure>
          <img src="img/ia/b.webp" className="h-full" />
        </figure>
        <div className="card-body">
          J’ai toujours mené ma carrière avec la volonté d’être le plus ouvert aux autres idées. J’ai souvent eu l’occasion de travailler main dans la main avec
          la partie "Mainframe" qui dans beaucoup d’entreprises gardent encore le cœur du métier.
        </div>
      </div>
      <div data-aos="fade-right" className="card sm:card-side glass shadow-xl xl:w-1/2">
        <figure>
          <img src="img/ia/a.webp" />
        </figure>
        <div className="card-body">
          Je me suis également appliqué à perfectionner mes requêtes SQL pour soulager le serveur d’application. J’ai souhaité aussi connaître les véritables
          problèmes que connaît la production au quotidien.
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card md:card-side glass shadow-xl self-end max-w-3xl max-h-3xl">
        <figure className="">
          <img src="img/ia/d.webp" className="md:h-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title fluid-3xl">Ma vision</h2>
          <p>
            Un informaticien diot pouvoir mesurer ses efforts. S’il veut pouvoir se concentrer pleinement sur du code à forte valeur ajoutée, il est
            indispensable que les tâches fastidieuses et répétitives lui prennent peu de temps et d’efforts. C’est dans cet esprit que les IDE progressent et
            que le DevOps et l’agilité ont vu le jour.
          </p>
          <p>
            Docker, les micro-services, NoSQL, le Big Data, toutes ces technologies sont incroyables. Mais ce ne sont que des outils au service d’une meilleure
            expérience utilisateur. Le choix d’introduire un nouveau framework ne doit être guidé que pour résoudre une problématique, ce qui, in fine,
            améliorera le quotidien de nos utilisateurs ou même des membres de l’équipe.
          </p>
          <p>
            L’informatique est en perpétuel évolution et nous oblige à nous tenir informés des nouvelles avancées. La veille technologies fait partie intégrante
            de notre métier.
          </p>
          <p>
            Agilité et DevOps créent une révolution dans la gestion des projets informatiques. Lorsque l’on a testé les méthodes agiles et l’amélioration
            continue, il est impossible de revenir à une gestion classique et des cycles en V.
          </p>
        </div>
      </div>
    </section>
  )
}
