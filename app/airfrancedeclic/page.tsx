'use client'

import { useTheme } from '../../src/hooks/useTheme'
import Breadcrumbs from '../../src/components/Breadcrumbs'
import { ParallaxTitle } from '../../src/components/ParallaxTitle'

export default function AirFranceDeclic() {
  useTheme()
  return (
    <div className="parallax-group">
      <Breadcrumbs breadcrumbs="✈️ Air France|📁 Declic" />
      <section className="parallax-section parallax-image bg-cockpit" />
      <section className="parallax-heading">
        <h2 className="parallax-title">DECLIC</h2>
      </section>
      <ParallaxTitle title="Dématérialisation de la documentation aéronautique embarquée." subtitle="Ingénieur étude et développement" />
      <section className="parallax-section parallax-image bg-af1" />
      <section className="parallax-section parallax-article min-h-min">
        <h3 className="text-5xl">Description</h3>
        <p>
          Dans le cadre de l'arrivée de l'A380 et de son ordinateur embarqué, Air France met en place une suite de projet en vue de remplacé la documentation
          embarqué papier par leur pendant numérique.
        </p>
        <h3 className="text-3xl">Tâches</h3>
        <ul>
          <li>Développement de la maquette dynamique (HTML/CSS/Javascript/Applet)</li>
          <li>Rédaction du MCD et des spécifications fonctionnelles et détaillées</li>
          <li>Développement de l'application (WSAD, Struts, Ajax, Tomcat, IMS Connect, Derby)</li>
          <li>Rédaction du guide d'exploitation</li>
          <li>Liaison technique entre Air France et l’éditeur du visualiseur PDF (Jpedal)</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-af2" />
      <section className="parallax-section parallax-article">
        <h3 className="text-3xl">Technologies</h3>
        <ul>
          <li>Java</li>
          <li>Struts</li>
          <li>WebSphere Studio Application Developer</li>
          <li>Tomcat</li>
          <li>IMS Connect</li>
          <li>JMX</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-af3" />
      <section className="parallax-section parallax-article">
        <h3 className="text-3xl">&Eacute;quipe</h3>
        <ul>
          <li>Un chef de projet</li>
          <li>Un Développeur</li>
          <li>Un lead developpeur</li>
          <li>une AMOA</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/af/a380.webp')]" />
      <section className="parallax-section parallax-article">
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
      </section>
    </div>
  )
}
