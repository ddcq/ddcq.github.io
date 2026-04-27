'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useTheme } from '@/hooks/useTheme'
import { Banner, Image, Text } from '@/components/Parallax'

export default function NCR() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="NCR|Cegetel" />
      <Banner image="/img/bande.jpg">CEGETEL</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Gestion de sauvegarde sur bande</h3>
        <p className="fluid-3xl text-center">Ingénieur Expert Database TERADATA</p>
      </Text>
      <Image url="/img/ncr/a.jpeg" />
      <Text title="Description">
        Le logiciel NetVault est une solution de sauvegarde d'entreprise conçue pour les environnements hybrides et Cloud. Il offre une protection continue des
        données, une restauration instantanée et une défense contre les cyberattaques, notamment les rançongiciels. Avec des fonctionnalités telles que les
        sauvegardes immuables, la déduplication des données et la réplication rapide vers le Cloud, NetVault Plus vise à réduire les risques de temps d'arrêt et
        de perte de données.
        <br />
        Le développement d'un outil de gestion de sauvegarde basé sur Netvault permet d'automatiser les tâches de sauvegarde et de restauration à l'aide de
        scripts. Ces scripts peuvent être programmés pour exécuter des sauvegardes régulières, gérer l’espace de stockage, surveiller l’état des sauvegardes, et
        notifier les administrateurs en cas d’échec ou de succès des opérations. L’utilisation de scripts batch permet une intégration avec d’autres outils
        système et une personnalisation selon les besoins spécifiques de l’entreprise
        <h2 className="fluid-3xl">Technologies</h2>
        <ul>
          <li>Batch DOS</li>
          <li>NetVault 7</li>
        </ul>
        <h2 className="fluid-3xl">&Eacute;quipe</h2>
        <ul>
          <li>Un Développeur</li>
        </ul>
      </Text>
      <Banner image="/img/bande.jpg">CCF</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Datamart Vues Utilisateurs</h3>
        <p className="fluid-3xl text-center">Ingénieur Expert Database TERADATA</p>
      </Text>
      <Image url="/img/ncr/b.jpeg" />
      <Text title="Tâches">
        <ul className="list-disc">
          <li>Rédaction des spécifications fonctionnelles et détaillées (PowerAMC)</li>
          <li>Développement des requêtes (SQL, Genio)</li>
          <li>Recette</li>
          <li>Création des jobs d'éxecution JCL sous MVS (Cortex, WinDDI)</li>
        </ul>
      </Text>
      <Banner image="/img/bande.jpg">CHAMPION</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">CRM, informatique décisionnelle pour les campagnes marketing</h3>
        <p className="fluid-3xl text-center">Ingénieur Expert Database TERADATA</p>
      </Text>
      <Image url="/img/ncr/e.jpeg" />
      <Text title="Description">
        <p>
          Le CRM (Customer Relationship Management) en marketing est un outil puissant qui permet de gérer et d’analyser les interactions avec les clients pour
          optimiser les campagnes marketing. Le CRM est utilisé pour collecter et analyser les données relatives à l'audience, ce qui facilitera le travail des
          équipes marketing et commerciales. Teradata est un choix robuste pour l’extraction et l’analyse des données issues du CRM.
        </p>
        <h2 className="fluid-3xl">Tâches</h2>
        <ul className="list-disc ml-vw-12-max@md">
          <li>Procédures d'installation et de chargement automatique des données dans le nouveau modèle Teradata (Script Unix ksh, Teradata)</li>
          <li>Génération de rapport automatique (HTML, PPWizzard, Rex)</li>
        </ul>
        <h2 className="fluid-3xl">Technologies</h2>
        <ul className="list-disc ml-vw-12-max@md">
          <li>Script Unix ksh</li>
          <li>Teradata</li>
          <li>HTML</li>
          <li>PPWizzard</li>
          <li>Rex</li>
        </ul>
      </Text>
      <Image url="/img/ncr/d.jpeg" />
      <Text>
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
      </Text>
    </>
  )
}
