'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useTheme } from '../../src/hooks/useTheme'
import { Banner, Image, Text } from '@/components/Parallax'

export default function Oredis() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="🧦 Oredis|📦 Oresys" />
      <Banner image="/img/vetements.jpg">Oresys</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Logiciel de Gestion de Stock</h3>
        <p className="fluid-3xl text-center">Architecte & Ingénieur étude et développement</p>
      </Text>
      <Image url="/img/or/a.jpeg" />
      <Text title="Description">
        La gestion de stock est un processus crucial pour améliorer la performance de la chaîne d’approvisionnement, en particulier pour les grossistes en
        textiles. Une informatisation complète de cette chaîne permet d’optimiser l’efficacité et d’augmenter le chiffre d’affaires de l’entreprise.
        <ul>
          <li>
            <b>Gestion des stocks en temps réel</b> : Surveillance et enregistrement des mouvements de stock à tout moment. Cela permet de réagir efficacement
            aux événements imprévus dans la chaîne d’approvisionnement
          </li>
          <li>
            <b>Création de lots</b> : Création de lots de produits similaires. Utilisation de codes-barres pour identifier et suivre chaque lot.
          </li>
          <li>
            <b>Prise en compte des retours et des avoirs</b> : Enregistrement les articles retournés dans le système et mise à jour les niveaux de stock.
            Gestion les avoirs (remboursements ou crédits) pour les articles retournés.
          </li>
          <li>
            <b>Interfaçage avec la vente</b> : Intégration du système de gestion de stock avec le système de vente (POS). Mise à jour automatique des niveaux de
            stock après chaque vente. Synchronisation des informations sur les produits (prix, disponibilité, etc.) entre les deux systèmes.
          </li>
        </ul>
      </Text>
      <Image url="/img/or/b.jpeg" />
      <Text title="Tâches">
        <h6 className="fluid-xl">
          Version 1 <span className="italic fluid-lg">Octobre 2001 – janvier 2003</span>
        </h6>
        <ul>
          <li>Responsable de l’Architecture du projet ORESYS, logiciel de gestion de stock</li>
          <li>Responsable de l’Environnement de Développement (VisualAge, Qwin, Tomcat)</li>
          <li>Support aux développeurs (Java, Struts, JSP)</li>
          <li>Interfaçage avec le logiciel de vente déjà en place (SQL Server 2000)</li>
          <li>Développement de la V1 d’ORESYS</li>
        </ul>
        <h6 className="fluid-xl">
          Version 2 <span className="italic fluid-lg">Mai 2003 – septembre 2003</span>
        </h6>
        <ul>
          <li>Gestion des Anomalies</li>
          <li>Responsable de l’Intégration et de la Recette</li>
          <li>Maintenance de la plate-forme d’intégration</li>
          <li>Développement des nouvelles fonctionnalités V2</li>
        </ul>
      </Text>
      <Image url="/img/or/b.webp" />
      <Text title="Technologies">
        <ul>
          <li>VisualAge for java</li>
          <li>Tomcat</li>
          <li>SQL Server 2000</li>
          <li>Struts</li>
        </ul>
      </Text>
      <Image url="/img/or/c.webp" />
      <Text title="&Eacute;quipe">
        <ul>
          <li>Un chef de projet / AMOA</li>
          <li>Deux Développeurs</li>
          <li>Un lead developpeur</li>
        </ul>
      </Text>
      <Image url="/img/or/d.webp" />
      <Text>
        <ul className="list-inline item-details">
          <li>
            Client: <strong>OREDIS</strong>
          </li>
          <li>
            Contexte : <strong>Secteur Grossiste Textile</strong>
          </li>
          <li>
            Date: <strong>Octobre 2001 - septembre 2003</strong>
          </li>
        </ul>
      </Text>
    </>
  )
}
