'use client'

import Breadcrumbs from '../../src/components/Breadcrumbs'
import { useTheme } from '../../src/hooks/useTheme'

export default function CreditAgricoleGreenWeb() {
  useTheme()
  return (
    <div className="parallax-group">
      <Breadcrumbs breadcrumbs="🏦 Crédit Agricole|💸 GreenWeb" />
      <section className="parallax-section parallax-image bg-[url('/img/keys.jpg')]" />
      <section className="parallax-heading">
        <h2 className="parallax-title">GreenWeb</h2>
      </section>
      <section className="parallax-section parallax-article">
        <p className="text-4xl text-center">Migration du logiciel de Crédit</p>
        <h5 className="text-3xl text-center">Ingénieur étude et développement</h5>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/keys2.jpg')]" />
      <section className="parallax-section parallax-article">
        <h3 className="text-3xl">Tâches</h3>
        <ul>
          <li>Développement et Intégration de modules techniques devant respecter la norme nationale (Java/Eclipse)</li>
          <li>Automatisation d'installation de serveurs supplémentaires (Script DOS)</li>
          <li>Modification de l'architecture : externalisation des services d'édition, dématérialisation et d'interfaçage Mainframe (Bdoc, MQ, SQL Server)</li>
          <li>Optimisation du serveur d'Application (Apache HTTP, Tomcat, Java)</li>
          <li>Supervision et contrôle de performance (Zabbix, JMX, Patrol)</li>
          <li>Résolution d'incidents de production</li>
          <li>Développement d’un module LDAP (Spring)</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/ca.jpg')]" />
      <section className="parallax-section parallax-article">
        <h3>Technologies</h3>
        <ul>
          <li>Java</li>
          <li>Spring</li>
          <li>Eclipse</li>
          <li>Tomcat</li>
          <li>SQL Server</li>
          <li>JMX</li>
          <li>Bdoc</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/labyrinth.jpg')]" />
      <section className="parallax-section parallax-article">
        <h3>&Eacute;quipe</h3>
        <ul>
          <li>Un intégrateur</li>
          <li>2 Developpeurs</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/verre.jpg')]" />
      <section className="parallax-section parallax-article">
        <h2 className="text-4xl text-center">Urbanisation des applications</h2>
        <h5 className="text-3xl text-center">Ingénieur étude et développement</h5>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/rack.jpg')]" />
      <section className="parallax-section parallax-article">
        <h3>Tâches</h3>
        <ul>
          <li>Normalisation d'une installation urbanisée des middlewares Apache/PHP/Tomcat/Java</li>
          <li>Procédures de déploiement sous Windows et Linux</li>
        </ul>
        <h3>Technologies</h3>
        <ul>
          <li>Script DOS</li>
          <li>Script bash</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/virtualization.jpg')]" />
      <section className="parallax-section parallax-article">
        <h3>&Eacute;quipe</h3>
        <ul>
          <li>Un Développeur</li>
        </ul>
      </section>
      <section className="parallax-section parallax-image bg-[url('/img/ca/credit_agricole.jpg')]" />
      <section className="parallax-section parallax-article">
        <ul className="list-inline item-details">
          <li>
            Client : <strong>CRÉDIT AGRICOLE, GIE SYNERGIE</strong>
          </li>
          <li>
            Contexte :
            <strong>Secteur Bancaire / Maintenance Applicative</strong>
          </li>
          <li>
            Date : <strong>Avril 2007- juin 2012</strong>
          </li>
        </ul>
      </section>
    </div>
  )
}
