'use client'

import { useTheme } from '../../src/hooks/useTheme'

export default function Oredis() {
  useTheme()
  return (
    <div className="hero">
      <article className="prose hero-content  flex-col">
        <img src="img/vetements.jpg" />
        <div className="navbar sticky top-0 bg-base-100">
          <div className="breadcrumbs navbar-start">
            <ul>
              <li>
                <a href="/">🏚️ Home</a>
              </li>
              <li>Oredis</li>
              <li>Oresys</li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary" href="/">
              Retour
            </a>
          </div>
        </div>
        <div>
          <h2>
            Oresys
            <br />
            <small>Logiciel de Gestion de Stock</small>
          </h2>
          <h5>Architecte & Ingénieur étude et développement</h5>
          <hr className="star-primary" />
          <dl>
            <dt>Description</dt>
            <dd>
              Informatisation complète de la chaîne de gestion de stock du grossiste en textiles. Approvisionnement, création des lots, suivi par code barre,
              prise en compte des retour, des avoirs, interfaçage avec la vente, facturation...
            </dd>
          </dl>
          <dl>
            <dt>Tâches</dt>
            <h6>
              Version 1 <small>Octobre 2001 – janvier 2003</small>
            </h6>
            <dd>
              <ul>
                <li>Responsable de l’Architecture du projet ORESYS, logiciel de gestion de stock</li>
                <li>Responsable de l’Environnement de Développement (VisualAge, Qwin, Tomcat)</li>
                <li>Support aux développeurs (Java, Struts, JSP)</li>
                <li>Interfaçage avec le logiciel de vente déjà en place (SQL Server 2000)</li>
                <li>Développement de la V1 d’ORESYS</li>
              </ul>
            </dd>
            <h6>
              Version 2 <small>Mai 2003 – septembre 2003</small>
            </h6>
            <dd>
              <ul>
                <li>Gestion des Anomalies</li>
                <li>Responsable de l’Intégration et de la Recette</li>
                <li>Maintenance de la plate-forme d’intégration</li>
                <li>Développement des nouvelles fonctionnalités V2</li>
              </ul>
            </dd>
            <dl>
              <dt>Technologies</dt>
              <dd>
                <ul>
                  <li>VisualAge fir java</li>
                  <li>Tomcat</li>
                  <li>SQL Server 2000</li>
                  <li>Struts</li>
                </ul>
              </dd>
              <dl>
                <dt>&Eacute;quipe</dt>
                <dd>
                  <ul>
                    <li>Un chef de projet / AMOA</li>
                    <li>Deux Développeurs</li>
                    <li>Un lead developpeur</li>
                  </ul>
                </dd>
              </dl>
            </dl>
          </dl>
        </div>
        <div className="modal-footer">
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
        </div>
      </article>
    </div>
  )
}
