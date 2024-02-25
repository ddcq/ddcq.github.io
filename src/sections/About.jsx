'use client'
import Title from '../components/Title'

export default function About() {
  return (
    <section className="p-24" id="about">
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="Mon vécu" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <p>
            Avec près de 20 ans d’expérience dans les technologies JEE, j’ai pu suivre l’évolution des nouvelles technologies. J’ai gardé de mes premières
            années le soucis d’un code clair, le plus optimisé possible et dimensionné au besoin.
          </p>
          <p>
            J’ai toujours mené ma carrière avec la volonté d’être le plus ouvert aux autres idées. J’ai souvent eu l’occasion de travailler main dans la main
            avec la partie "Mainframe" qui dans beaucoup d’entreprises gardent encore le cœur du métier.
          </p>
          <p>
            Je me suis également appliqué à perfectionner mes requêtes SQL pour soulager le serveur d’application. J’ai souhaité aussi connaître les véritables
            problèmes que connaît la production au quotidien.
          </p>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="Ma vision" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
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

        <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="Ma vision" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <p>
            Aujourd’hui, j’ai trouvé une dynamique projet dans un cadre qui favorise la communication et l’agilité, dans l’environnement technologique que
            j’affectionne : JEE, React JS, Agilité.
          </p>
          <p>
            Avec l’équipe de développement, nous nous sommes beaucoup investis dans les projets avec la mise en place de processes agiles, d’un monorepo, d’une
            norme de programmation commune via ESLint. Nous travaillons sur des projets différents, sur des technos différentes (Cordova, NodeJS, React Native)
            mais nous gardons l’esprit d’équipe en mettant en commun un maximum de code source et d’agilité.
          </p>
          <p>
            Mais ma société a subit de plein fouet la crise de la COVID-19 et le confinement a été très difficile pour une entreprise dont le but est de
            rassembler les participants. Bien que les produits ont été adaptés pour des événements virtuels, la reprise se fait attendre. Ma société se doit
            donc de réduire la voilure pour continuer à exister. Je suis donc à la recherche d’un cadre épanouissant en terme de technologies, de gestion de
            projet et d’humain mais géographiquement acceptable pour moi.
          </p>
        </div>
      </div>
    </section>
  )
}
