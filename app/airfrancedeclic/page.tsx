'use client'

import { useTheme } from '@/hooks/useTheme'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { Image, Text } from '@/components/Parallax'

export default function AirFranceDeclic() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="✈️ Air France|📁 Declic" />
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image="/img/cockpit.jpg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-white font-thin">DECLIC</h1>
        </div>
      </ParallaxBanner>
      <Text>
        <h3 className="fluid-4xl text-center">Dématérialisation de la documentation aéronautique embarquée.</h3>
        <p className="fluid-3xl text-center">Ingénieur étude et développement</p>
      </Text>
      <Image url="/img/af/avion4.webp" />
      <Text title="Description">
        Dans le cadre de l'arrivée de l'A380 et de son ordinateur embarqué, Air France met en place une suite de projet en vue de remplacer la documentation
        embarquée papier par leur pendant numérique. En effet, les compagnies aériennes comme Air France utilisent de plus en plus des Electronic Flight Bags
        (EFB), qui sont des dispositifs électroniques qui permettent aux équipages de vol de consulter numériquement le contenu qui était traditionnellement
        imprimé, y compris les manuels de vol, les cartes de navigation, et d'autres documents nécessaires pour le vol. Les EFB peuvent être portables ou
        installés à bord de l'avion. Il est courant dans l'industrie aéronautique de passer à des solutions numériques pour améliorer l'efficacité et réduire
        les coûts. La transition vers des documents numériques offre plusieurs avantages, tels que la réduction du poids (moins de papier signifie moins de
        carburant brûlé), la facilité de mise à jour des documents, et l'amélioration de l'accessibilité pour les équipages. Le but de ce projet est de
        développer la future solution de consultation de documentation numérique qui sera installée sur l'ordinateur de bord de l'A380 ainsi que sur des
        ordinateurs portables sécurisés.
      </Text>
      <Image url="/img/af/avion1.webp" />
      <Text title="Tâches">
        <ul className="list-disc">
          <li>Développement de la maquette dynamique (HTML/CSS/Javascript/Applet)</li>
          <li>Rédaction du MCD et des spécifications fonctionnelles et détaillées</li>
          <li>Développement de l'application (WSAD, Struts, Ajax, Tomcat, IMS Connect, Derby)</li>
          <li>Rédaction du guide d'exploitation</li>
          <li>Liaison technique entre Air France et l’éditeur du visualiseur PDF (Jpedal)</li>
        </ul>
      </Text>
      <Image url="/img/af/avion2.jpg" />
      <Text title="Technologies">
        <ul>
          <li>Java</li>
          <li>Struts</li>
          <li>WebSphere Studio Application Developer</li>
          <li>Tomcat</li>
          <li>IMS Connect</li>
          <li>JMX</li>
        </ul>
      </Text>
      <Image url="/img/af/avion3.jpg" />
      <Text title="&Eacute;quipe">
        <ul>
          <li>Un chef de projet</li>
          <li>Un Développeur</li>
          <li>Un lead developpeur</li>
          <li>une AMOA</li>
        </ul>
      </Text>
      <Image url="/img/af/a380.webp" />
      <Text>
        <ul>
          <li>
            Client : <strong>AIR FRANCE</strong>
          </li>
          <li>
            Contexte : <strong>Secteur Transport / Maintenance Applicative</strong>
          </li>
          <li>
            Date : <strong>Septembre 2004 - mars 2007</strong>
          </li>
        </ul>
      </Text>
    </>
  )
}
