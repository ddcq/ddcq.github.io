'use client'

import { useTheme } from '../../src/hooks/useTheme'

export default function AirFranceDeclic() {
  useTheme()
  return (
    <div className="hero">
      <article className="prose hero-content  flex-col">
        <img src="img/cockpit.jpg" />
        <div className="navbar sticky top-0 bg-base-100">
          <div className="breadcrumbs navbar-start">
            <ul>
              <li>
                <a href="/">🏚️ Home</a>
              </li>
              <li>✈️ Air France</li>
              <li>📁 Declic</li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary" href="/">
              Retour
            </a>
          </div>
        </div>
        <h2 className="text-5xl font-bold text-center">DECLIC</h2>
        <b className="text-3xl">Dématérialisation de la documentation aéronautique embarquée.</b>
        <h5 className="text-3xl">Ingénieur étude et développement</h5>
        <hr />
        <div className="text-left">
          <dl>
            <dt>Description</dt>
            <dd>
              Dans le cadre de l'arrivée de l'A380 et de son ordinateur embarqué, Air France met en place une suite de projet en vue de remplacé la
              documentation embarqué papier par leur pendant numérique.
            </dd>
          </dl>
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Développement de la maquette dynamique (HTML/CSS/Javascript/Applet)</li>
                <li>Rédaction du MCD et des spécifications fonctionnelles et détaillées</li>
                <li>Développement de l'application (WSAD, Struts, Ajax, Tomcat, IMS Connect, Derby)</li>
                <li>Rédaction du guide d'exploitation</li>
                <li>Liaison technique entre Air France et l’éditeur du visualiseur PDF (Jpedal)</li>
              </ul>
            </dd>
          </dl>

          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>Java</li>
                <li>Struts</li>
                <li>WebSphere Studio Application Developer</li>
                <li>Tomcat</li>
                <li>IMS Connect</li>
                <li>JMX</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>&Eacute;quipe</dt>
            <dd>
              <ul>
                <li>Un chef de projet</li>
                <li>Un Développeur</li>
                <li>Un lead developpeur</li>
                <li>une AMOA</li>
              </ul>
            </dd>
          </dl>
          <ul>
            <li>
              Client : <strong>AIR FRANCE</strong>
            </li>
            <li>
              Contexte :
              <strong>Secteur Transport / Maintenance Applicative</strong>
            </li>
            <li>
              Date : <strong>Septembre 2004 - mars 2007</strong>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
