'use client'

import { useTheme } from '../../src/hooks/useTheme'

export default function EveniumNet() {
  useTheme()
  return (
    <div className="hero">
      <article className="prose hero-content  flex-col">
        <img src="img/event.jpg" />
        <div className="navbar sticky top-0 bg-base-100">
          <div className="breadcrumbs navbar-start">
            <ul>
              <li>
                <a href="/">🏚️ Home</a>
              </li>
              <li>Evenium</li>
              <li>Net</li>
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
            Net
            <br />
            <small>Gestionnaire d’invitation et d’inscription des participants</small>
          </h2>
          Evenium accompagne ses clients dans toutes les étapes de l’organisation de leurs événements : des inscriptions au reporting, en passant par l’accueil
          digital des invités, l'interactivité et le networking pendant l’événement. Son expertise lui permet de développer des solutions qui répondent aux
          besoins de milliers de clients internationaux et leur permettent d’atteindre leurs objectifs.
          <h5>Developpeur Fullstack JEE/Javascript</h5>
          <hr className="star-primary" />
          NET est l’outil de la suite de logiciel Evenium permettant de gérer les inscriptions. Il intègre notamment une billetterie personnalisable comprenant
          un formulaire d’inscription, l’agenda des sessions, plusieurs systèmes de paiement, etc. Développé en JSF, certaines fonctionnalités se modernisent en
          étant réécrite en Node/React afin de pouvoir plus facilement évoluer. <br />
          J'ai été le principal développeur de l'une des premières fonctionnalité à avoir migrer et également la plus complèxe : le site de billetterie.
          D'autres migrations de fonctionnalités m'ont été attribués comme le téléchargement de billet, la réattribution de billet ou la mise à jour en masse de
          participants.
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Implémentation des spécifications fonctionnelles</li>
                <li>Revues de code</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>React.js 16, Redux.js</li>
                <li>Java 7</li>
                <li>JBoss 6</li>
                <li>Oracle 11g</li>
                <li>Git, Jenkins, Circle-CI</li>
                <li>Material-UI</li>
                <li>Kanban</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>&Eacute;quipe</dt>
            <dd>
              <ul>
                <li>Un chef de projets</li>
                <li>Un Ingénieur Système</li>
                <li>Sept développeurs</li>
                <li>2 MOA</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="modal-footer">
          <ul className="list-inline item-details">
            <li>
              Employeur : <strong>Evenium</strong>
            </li>
            <li>
              Contexte : <strong>Secteur Evénementiel</strong>
            </li>
            <li>
              Date : <strong>Juin 2017 - Aujourd'hui</strong>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
