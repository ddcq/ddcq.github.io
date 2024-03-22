'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useTheme } from '@/hooks/useTheme'
import { Banner, Image, Text } from '@/components/Parallax'

export default function CreditAgricoleAlphee() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="🏦 Crédit Agricole|💸 Alphée" />
      <Banner image="/img/keys.jpg">Alphée</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Maintenance Applicative</h3>
        <p className="fluid-3xl text-center">Ingénieur étude et développement</p>
      </Text>
      <Image url="/img/ca/keys2.jpg" />
      <Text title="Description">
        <p>
          Alphée est une plateforme logicielle web innovante conçue pour faciliter l’accès à une gamme complète d’applications financières. Elle offre un point
          d’accès unique à l’ensemble des outils intégrées pour la simulation de crédits, la gestion de portefeuilles de prêts et l’analyse financière,
          permettant ainsi à ces applications financières de communiquer entre elles et de déleguer les besoins tels que l’authentification, le partage
          d’informations ou de documents. Alphée est donc un point central pour l’utilisateur et les différentes applications liées au crédit.
        </p>
        <p>Alphée est également le nom du fleuve du Péloponnèse qu’Héraclèse détourna pour nettoyer les écuries d’Augias dans la mythologie grecque.</p>
      </Text>
      <Image url="/img/ca/travaux.jpeg" />
      <Text title="Tâches">
        <ul>
          <li>Développement et Intégration de modules techniques devant respecter la norme nationale (Java/Eclipse)</li>
          <li>Automatisation d’installation de serveurs supplémentaires (Script DOS)</li>
          <li>Modification de l’architecture : externalisation des services d’édition, dématérialisation et d’interfaçage Mainframe (Bdoc, MQ, SQL Server)</li>
          <li>Optimisation du serveur d’Application (Apache HTTP, Tomcat, Java)</li>
          <li>Supervision et contrôle de performance (Zabbix, JMX, Patrol)</li>
          <li>Résolution d’incidents de production</li>
          <li>Développement d’un module LDAP (Spring)</li>
        </ul>
      </Text>
      <Image url="/img/ca/ca.jpg" />
      <Text title="Technologies">
        <ul>
          <li>Java</li>
          <li>Spring</li>
          <li>Eclipse</li>
          <li>Tomcat</li>
          <li>SQL Server</li>
          <li>JMX</li>
          <li>Bdoc</li>
        </ul>
      </Text>
      <Image url="/img/ca/labyrinth.jpg" />
      <Text title="&Eacute;quipe">
        <ul>
          <li>Un intégrateur</li>
          <li>2 Developpeurs</li>
        </ul>
      </Text>
      <Image url="/img/ca/verre.jpg" />
      <Text>
        <h2 className="text-4xl text-center">Urbanisation des applications</h2>
        <h5 className="text-3xl text-center">Ingénieur étude et développement</h5>
      </Text>
      <Image url="/img/ca/rack.jpg" />
      <Text>
        <h3>Tâches</h3>
        <ul>
          <li>Normalisation d’une installation urbanisée des middlewares Apache/PHP/Tomcat/Java</li>
          <li>Procédures de déploiement sous Windows et Linux</li>
        </ul>
        <h3>Technologies</h3>
        <ul>
          <li>Script DOS</li>
          <li>Script bash</li>
        </ul>
      </Text>
      <Image url="/img/ca/virtualization.jpg" />
      <Text>
        <h3>&Eacute;quipe</h3>
        <ul>
          <li>Un Développeur</li>
        </ul>
      </Text>
      <Image url="/img/ca/credit_agricole.jpg" />
      <Text>
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
      </Text>
    </>
  )
}
