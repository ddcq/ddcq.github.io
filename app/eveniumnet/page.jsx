'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useTheme } from '@/hooks/useTheme'
import { Banner, Image, Text } from '@/components/Parallax'

export default function EveniumNet() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="Evenium|Net" />
      <Banner image="/img/ev/e.jpg">Evenium Net</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Gestionnaire d’invitation et d’inscription des participants</h3>
        <p className="fluid-3xl text-center">Développeur Fullstack JEE/Javascript</p>
      </Text>
      <Image url="/img/ev/a.jpg" />
      <Text>
        <p>
          Evenium NET est un outil de gestion des inscriptions et des envois d’invitations aux participants d’événements professionnels1. Il fait partie de la
          suite de logiciels Evenium, qui vise à simplifier l’organisation d’événements2.
        </p>
        <p>
          Voici quelques-unes des fonctionnalités clés d’Evenium NET :
          <ul className="list-disc pl-vw-20-min@md-max@2xl [&>li]:py-vw-2">
            <li>
              <b>Billetterie personnalisable</b> : Vous pouvez personnaliser votre billetterie pour correspondre à l’image de marque de votre événement. Cela
              comprend un formulaire d’inscription, l’agenda des sessions, et plusieurs systèmes de paiement.
            </li>
            <li>
              <b>Intégration transparente</b> : Evenium NET peut être intégré de manière transparente dans votre site web, CRM et plus de 500 autres
              applications.
            </li>
            <li>
              <b>Événements virtuels, hybrides et en personne</b> : Avec Evenium, vous pouvez facilement créer toutes sortes d’expériences d’événements virtuels
              et hybrides pour engager votre public et atteindre vos objectifs d’événement.
            </li>
            <li>
              <b>Webinaires</b> : Evenium vous permet d’organiser des webinaires inclusifs et participatifs et de transformer l’expérience généralement
              ennuyeuse en une conversation animée à deux sens avec votre public.
            </li>
            <li>
              <b>Réunions de petite taille</b> : Vous pouvez concevoir des réunions interactives de petite taille pour améliorer l’expérience de vos
              participants.
            </li>
            <li>
              <b>Solutions sur mesure pour chaque partie prenante</b> : Que vous soyez un organisateur d’événements, un présentateur ou un décideur, Evenium
              offre des solutions adaptées à vos besoins.
            </li>
          </ul>
        </p>
      </Text>
      <Image url="/img/ev/f.jpg" />
      <Text title="Tâches">
        <b>Modernisation de l’outil Evenium NET</b> : migration de JSF à Node/React. C’est une étape importante pour assurer l’évolutivité et la maintenabilité
        de l’application. Ce travail a contribué à améliorer l’outil Evenium NET et à le rendre plus moderne et évolutif.
        <ul className="list-disc pl-vw-20-min@md-max@2xl [&>li]:py-vw-2">
          <li>
            <b>Site de billetterie</b> : Artisan de la migration de cette fonctionnalité qui est l’une des plus complexes. La billetterie est un élément crucial
            de l’outil, car elle gère les inscriptions, les paiements et fournit l’agenda des sessions. La réécriture de cette fonctionnalité en Node/React a
            amélioré sa performance et sa facilité d’utilisation.
          </li>
          <li>
            <b>Téléchargement de billet</b> : Cette fonctionnalité permet aux participants de télécharger leurs billets une fois l’inscription terminée. Sa
            migration vers Node/React a permis d’améliorer l’expérience utilisateur en rendant le processus plus fluide et plus rapide.
          </li>
          <li>
            <b>Réattribution de billet</b> : Cette fonctionnalité permet aux participants de transférer leurs billets à d’autres personnes. Elle fait partie des 
            nouveautés dont l'implémentation a été rendu possible grâce à la migration vers Node/React.
          </li>
          <li>
            <b>Mise à jour en masse de participants</b> : Cette fonctionnalité permet aux organisateurs de mettre à jour les informations des participants en
            masse, ce qui est particulièrement utile pour les grands événements.
          </li>
        </ul>
      </Text>
      <Image url="/img/ev/speaker.jpeg" />
      <Text>
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
      </Text>
      <Image url="/img/ev/c.jpg" />
      <Text>
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
      </Text>
    </>
  )
}
