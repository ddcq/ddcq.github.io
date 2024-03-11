'use client'

import Breadcrumbs from '../../src/components/Breadcrumbs'
import { useTheme } from '../../src/hooks/useTheme'

export default function EveniumNet() {
  useTheme()
  return (
    <div className="parallax-group">
      <Breadcrumbs breadcrumbs="Evenium|Net" />
      <section className="parallax-section parallax-image bg-[url('/img/ev/e.jpg')]" />
      <section className="parallax-heading">
        <h2 className="parallax-title">Net</h2>
      </section>
      <section className="parallax-section parallax-article">
        <p className="text-4xl text-center">Gestionnaire d’invitation et d’inscription des participants</p>
        <h5 className="text-3xl text-center">Developpeur Fullstack JEE/Javascript</h5>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ev/a.jpg')]" />
      <section className="parallax-section parallax-article">
        Evenium accompagne ses clients dans toutes les étapes de l’organisation de leurs événements : des inscriptions au reporting, en passant par l’accueil
        digital des invités, l'interactivité et le networking pendant l’événement. Son expertise lui permet de développer des solutions qui répondent aux
        besoins de milliers de clients internationaux et leur permettent d’atteindre leurs objectifs.
        <hr className="star-primary" />
        NET est l’outil de la suite de logiciel Evenium permettant de gérer les inscriptions. Il intègre notamment une billetterie personnalisable comprenant un
        formulaire d’inscription, l’agenda des sessions, plusieurs systèmes de paiement, etc. Développé en JSF, certaines fonctionnalités se modernisent en
        étant réécrite en Node/React afin de pouvoir plus facilement évoluer. <br />
        J'ai été le principal développeur de l'une des premières fonctionnalité à avoir migrer et également la plus complèxe : le site de billetterie. D'autres
        migrations de fonctionnalités m'ont été attribués comme le téléchargement de billet, la réattribution de billet ou la mise à jour en masse de
        participants.
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ev/f.jpg')]" />
      <section className="parallax-section parallax-article">
        <div className="w-full grid grid-cols-3 gap-3">
          <div>
            <h3 className="text-3xl">Tâches</h3>
            <ul>
              <li>Implémentation des spécifications fonctionnelles</li>
              <li>Revues de code</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">Technologies</h3>
            <ul>
              <li>React.js 16, Redux.js</li>
              <li>Java 7</li>
              <li>JBoss 6</li>
              <li>Oracle 11g</li>
              <li>Git, Jenkins, Circle-CI</li>
              <li>Material-UI</li>
              <li>Kanban</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">&Eacute;quipe</h3>
            <ul>
              <li>Un chef de projets</li>
              <li>Un Ingénieur Système</li>
              <li>Sept développeurs</li>
              <li>2 MOA</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ev/c.jpg')]" />
      <section className="parallax-section parallax-article">
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
      </section>
    </div>
  )
}
