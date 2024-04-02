'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { useTheme } from '@/hooks/useTheme'
import { Banner, Image, Text } from '@/components/Parallax'

export default function TexaITex() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="Texa|iTex" />
      <Banner image="/img/expertassurance.jpg">iTex</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Gestionnaire de sinistres et de prestation d'expertise</h3>
        <p className="fluid-3xl text-center">Développeur Fullstack JEE/AngularJS | Technical Leader (Janvier 2016)</p>
      </Text>
      <Image url="/img/te/a.jpeg" />
      <Text title="Tâches">
        <ul className="list-disc">
          <li>Evaluation technique des candidats lors des entretiens.</li>
          <li>Animation de dojos, rétrospectives et points techniques.</li>
          <li>Formation et soutien technique des nouveaux arrivants</li>
          <li>Veille technologique.</li>
          <li>Méthodologie Agile, Kanban électronique.</li>
          <li>Implémentation des User Stories</li>
          <li>Revues de code / Gestion de la dette technique / Refactoring</li>
        </ul>
      </Text>
      <Image url="/img/te/b.jpeg" />
      <Text title="Technologies">
        <ul className="list-disc">
          <li>Angular JS 1.4</li>
          <li>Java 7</li>
          <li>JBoss 6</li>
          <li>Oracle 11g</li>
          <li>Case 360</li>
          <li>Bootstrap</li>
          <li>Jasmine</li>
          <li>Fitnesse</li>
          <li>Kanban</li>
        </ul>
      </Text>
      <Image url="/img/te/c.jpeg" />
      <Text title="&Eacute;quipe">
        <ul className="list-disc">
          <li>Un chef de projet</li>
          <li>Un architecte</li>
          <li>Six développeurs</li>
          <li>Un Développeur Tech Lead</li>
          <li>Six MOA</li>
        </ul>
      </Text>
      <Image url="/img/te/d.jpeg" />
      <Text>
        <ul className="list-inline item-details">
          <li>
            Date: <strong>Janvier 2014 - Février 2017</strong>
          </li>
        </ul>
      </Text>
      <Image url="/img/te/e.jpeg" />
      <Banner image="/img/expertassurance.jpg">Nouveau Texi Mobile</Banner>

      <Text>
        <h3 className="fluid-4xl text-center">Logiciel d'expertise sur site</h3>
        <p className="fluid-3xl text-center">Développeur Fullstack JavaScript | Technical Leader</p>
      </Text>
      <Image url="/img/te/f.jpeg" />
      <Text title="Tâches">
        <ul className="list-disc">
          <li>Cadrage technique</li>
          <li>Implémentation des User Stories</li>
          <li>Revues de code</li>
          <li>Evaluation technique des candidats lors des entretiens.</li>
          <li>Animation de dojos, rétrospectives et points techniques.</li>
          <li>Formation et soutien technique des nouveaux arrivant</li>
          <li>Veille technologique.</li>
          <li>Méthodologie Agile, Kanban électronique.</li>
        </ul>
      </Text>
      <Image url="/img/te/g.webp" />
      <Text title="Technologies">
        <ul className="list-disc">
          <li>Angular 2</li>
          <li>Node JS</li>
          <li>NoSQL</li>
          <li>Electron</li>
          <li>Bootstrap</li>
        </ul>
      </Text>
      <Image url="/img/te/h.jpeg" />
      <Text title="&Eacute;quipe">
        <ul className="list-disc">
          <li>3 développeurs</li>
          <li>1 chef de projet</li>
          <li>1 MOA</li>
        </ul>
      </Text>
      <Image url="/img/te/i.jpeg" />
      <Text>
        <ul className="list-inline item-details">
          <li>
            Client : <strong>Texa Service</strong>
          </li>
          <li>
            Contexte :<strong>Secteur Assurance / Développement Agile</strong>
          </li>
          <li>
            Date : <strong>Février 2017 - Juin 2017</strong>
          </li>
        </ul>
      </Text>
    </>
  )
}
