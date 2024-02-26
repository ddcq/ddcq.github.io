'use client'

import { useTheme } from '../../src/hooks/useTheme'

export default function NCR() {
  useTheme()
  return (
    <div className="hero">
      <article className="prose hero-content  flex-col">
        <img src="img/bande.jpg" />
        <div className="navbar sticky top-0 bg-base-100">
          <div className="breadcrumbs navbar-start">
            <ul>
              <li>
                <a href="/">🏚️ Home</a>
              </li>
              <li>NCR</li>
              <li>Cegetel</li>
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
            CEGETEL
            <br />
            <small>Gestion de sauvegarde sur bande</small>
          </h2>
          <h5>Ingénieur Expert Database TERADATA</h5>
          <hr className="star-primary" />
          <dl>
            <dt>Description</dt>
            <dd>Développement d'un outil de gestion de sauvegarde basé sur Netvault</dd>
          </dl>
          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>Batch DOS</li>
                <li>NetVault 7</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>&Eacute;quipe</dt>
            <dd>
              <ul>
                <li>Un Développeur (moi)</li>
              </ul>
            </dd>
          </dl>
          <hr className="star-primary" />
          <h2>
            CCF
            <br />
            <small>Datamart Vues Utilisateurs</small>
          </h2>
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Rédaction des spécifications fonctionnelles et détaillées (PowerAMC)</li>
                <li>Développement des requêtes (SQL, Genio)</li>
                <li>Recette</li>
                <li>Création des jobs d'éxecution JCL sous MVS (Cortex, WinDDI)</li>
              </ul>
            </dd>
          </dl>
          <hr className="star-primary" />
          <h2>
            CHAMPION
            <br />
            <small>CRM, informatique décisionnelle pour les campagnes marketing</small>
          </h2>
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Procédures d'installation et de chargement automatique des données dans le nouveau modèle Teradata (Script Unix ksh, Teradata)</li>
                <li>Génération de rapport automatique (HTML, PPWizzard, Rex)</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>Script Unix ksh</li>
                <li>Teradata</li>
                <li>HTML</li>
                <li>PPWizzard</li>
                <li>Rex</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="modal-footer">
          <ul className="list-inline item-details">
            <li>
              Client: <strong>NCR</strong>
            </li>
            <li>
              Contexte : <strong>Secteur Bancaire</strong>
            </li>
            <li>
              Date: <strong>Octobre 2003 – septembre 2004</strong>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
