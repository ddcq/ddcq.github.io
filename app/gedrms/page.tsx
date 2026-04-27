'use client'

import { useTheme } from '@/hooks/useTheme'
import { Banner, Text, Image } from '@/components/Parallax'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function GeneralElectricDRMS() {
  useTheme()
  return (
    <>
      <Breadcrumbs breadcrumbs="🏦 General Electric|💸 DRMS" />
      <Banner image="/img/coupure.jpg">DRMS</Banner>
      <Text>
        <h3 className="fluid-4xl text-center">Gestionnaire d’effacement du réseau électrique</h3>
        <p className="fluid-3xl text-center">Developpeur JEE | Technical Leader</p>
      </Text>
      <Image url="/img/ge/a.jpeg" />
      <Text title="Description">
        Le gestionnaire d'effacement joue un rôle crucial dans la stabilité du réseau électrique en France. Il permet aux consommateurs de réduire leur
        consommation d'électricité en réponse à un signal externe, ce qui aide à équilibrer la demande et l'offre d'électricité, surtout pendant les périodes de
        forte demande¹².
        <br />
        En France, les capacités d'effacement peuvent être mobilisées soit par des signaux tarifaires sur les offres de marché ou les tarifs réglementés de
        vente (TRV), soit par des opérateurs indépendants des fournisseurs des sites effacés¹. Cela signifie que les consommateurs peuvent valoriser leurs
        effacements en faisant appel à un opérateur d'effacement sans devoir obtenir l'accord préalable de leur fournisseur¹.
        <br />
        L'effacement peut être industriel, où un site réduit ou reporte sa consommation, ou diffus, où plusieurs petits effacements sont réalisés simultanément
        sur différents sites². En 2021, 30 % des réserves rapides et complémentaires étaient fournies par des capacités d'effacement, et en 2022, le volume
        d'effacement était de 17,6 GWh selon RTE².
        <br />
        Pour plus d'informations détaillées, vous pouvez consulter les ressources disponibles en ligne¹².
      </Text>
      <Image url="/img/ge/b.jpeg" />
      <Text title="Tâches">
        <ul>
          <li>Coordination technique des différents sites (Paris, Atlanta, Livingston)</li>
          <li>
            À partir du logiciel « Product » développé à Atlanta, intégration de la partie « Project » spécifique au client, déploiement de la solution finale
            sur les différents environnements.
          </li>
          <li>Rédaction du modèle conceptuel de données (Power Designer)</li>
          <li>Calcul d’indicateurs d’analyse (PL-SQL, SQL Developper)</li>
          <li>Développement de Web Services dans le cadre d’échanges bilatéraux avec le client (Eclipse, Hibernate, Glassfish, Oracle, Spring)</li>
          <li>Evolution de l’interface graphique pour enrichir la couche métier du client (Struts, Spring, Hibernate)</li>
          <li>Pre-recette de la solution (HP Quality Center)</li>
        </ul>
      </Text>
      <Image url="/img/ge/c.jpeg" />
      <Text title="Technologies">
        <ul>
          <li>Struts, Spring, Hibernate, Glassfish, PL-SQL, Oracle, Web Service, EJB</li>
          <li>SVN, Maven, Eclipse</li>
        </ul>
      </Text>
      <Image url="/img/ge/d.jpg" />
      <Text title="&Eacute;quipe">
        <ul>
          <li>3 deloppeurs</li>
          <li>1 chef de projet</li>
          <li>4 MOA</li>
        </ul>
      </Text>
      <Image url="/img/ge/f.jpeg" />
      <Text>
        <ul className="list-inline item-details">
          <li>
            Client : <strong>GE ENERGY</strong>
          </li>
          <li>
            Contexte : <strong>Secteur Énergie / Développement SAAS</strong>
          </li>
          <li>
            Date : <strong>juin 2012 - mars 2013</strong>
          </li>
        </ul>
      </Text>
    </>
  )
}
