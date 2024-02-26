'use client'

import { useTheme } from '../../src/hooks/useTheme'

export default function CreditAgricoleGreenWeb() {
  useTheme()
  return (
    <div className="hero">
      <article className="prose hero-content  flex-col">
        <img src="img/keys.jpg" />
        <div className="navbar sticky top-0 bg-base-100">
          <div className="breadcrumbs navbar-start">
            <ul>
              <li>
                <a href="/">🏚️ Home</a>
              </li>
              <li>Crédit Agricole</li>
              <li>GreenWeb</li>
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
            GreenWeb
            <br />
            <small>Migration du logiciel de Crédit</small>
          </h2>
          <h5>Ingénieur étude et développement</h5>
          <hr className="star-primary" />
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Développement et Intégration de modules techniques devant respecter la norme nationale (Java/Eclipse)</li>
                <li>Automatisation d'installation de serveurs supplémentaires (Script DOS)</li>
                <li>
                  Modification de l'architecture : externalisation des services d'édition, dématérialisation et d'interfaçage Mainframe (Bdoc, MQ, SQL Server)
                </li>
                <li>Optimisation du serveur d'Application (Apache HTTP, Tomcat, Java)</li>
                <li>Supervision et contrôle de performance (Zabbix, JMX, Patrol)</li>
                <li>Résolution d'incidents de production</li>
                <li>Développement d’un module LDAP (Spring)</li>
              </ul>
            </dd>
          </dl>

          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>Java</li>
                <li>Spring</li>
                <li>Eclipse</li>
                <li>Tomcat</li>
                <li>SQL Server</li>
                <li>JMX</li>
                <li>Bdoc</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>&Eacute;quipe</dt>
            <dd>
              <ul>
                <li>Un intégrateur</li>
                <li>2 Developpeurs</li>
              </ul>
            </dd>
          </dl>
          <hr className="star-primary" />
          <h2>
            <small>Urbanisation des applications</small>
          </h2>
          <h5>Ingénieur étude et développement</h5>
          <hr className="star-primary" />
          <dl>
            <dt>Tâches</dt>
            <dd>
              <ul>
                <li>Normalisation d'une installation urbanisée des middlewares Apache/PHP/Tomcat/Java</li>
                <li>Procédures de déploiement sous Windows et Linux</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Technologies</dt>
            <dd>
              <ul>
                <li>Script DOS</li>
                <li>Script bash</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>&Eacute;quipe</dt>
            <dd>
              <ul>
                <li>Un Développeur</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div className="modal-footer">
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
        </div>
      </article>
    </div>
  )
}
