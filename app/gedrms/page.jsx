'use client'
export default function GeneralElectricDRMS() {
  return (
    <div className="hero">
      <article className="prose hero-content  flex-col">
        <img src="img/coupure.jpg" />
        <div className="navbar sticky top-0 bg-base-100">
          <div className="breadcrumbs navbar-start">
            <ul>
              <li>
                <a href="/">🏚️ Home</a>
              </li>
              <li>General Electric</li>
              <li>DRMS</li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary" href="/">
              Retour
            </a>
          </div>
        </div>
        <div>
          <h2>
            DRMS
            <br />
            <small>Gestionnaire d’effacement du réseau électrique</small>
          </h2>
          <h5>Developpeur JEE | Technical Leader</h5>
          <hr className="star-primary" />
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Coordination technique des différents sites (Paris, Atlanta, Livingston)</li>
                <li>
                  À partir du logiciel « Product » développé à Atlanta, intégration de la partie « Project » spécifique au client, déploiement de la solution
                  finale sur les différents environnements.
                </li>
                <li>Rédaction du modèle conceptuel de données (Power Designer)</li>
                <li>Calcul d’indicateurs d’analyse (PL-SQL, SQL Developper)</li>
                <li>Développement de Web Services dans le cadre d’échanges bilatéraux avec le client (Eclipse, Hibernate, Glassfish, Oracle, Spring)</li>
                <li>Evolution de l’interface graphique pour enrichir la couche métier du client (Struts, Spring, Hibernate)</li>
                <li>Pre-recette de la solution (HP Quality Center)</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>Struts, Spring, Hibernate, Glassfish, PL-SQL, Oracle, Web Service, EJB</li>
                <li>SVN, Maven, Eclipse</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>&Eacute;quipe</dt>
            <dd>
              <ul>
                <li>3 deloppeurs</li>
                <li>1 chef de projet</li>
                <li>4 MOA</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="modal-footer">
          <ul className="list-inline item-details">
            <li>
              Client : <strong>GE ENERGY</strong>
            </li>
            <li>
              Contexte : <strong>Secteur Énergie / Développement SAAS</strong>
            </li>
            <li>
              Date : <strong>juin 2012 - mars 2013</strong>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
