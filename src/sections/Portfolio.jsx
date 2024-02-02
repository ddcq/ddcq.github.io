'use client'

import Title from '../components/Title'
import MissionCard from '../components/MissionCard'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Title>Mes missions</Title>
      <div className="flex flex-wrap justofy-center">
        <MissionCard
          img="img/event.jpg"
          society="Evenium"
          project="Net"
          description="Solutions intégrées pour événements présentiels, hybrides et virtuels"
          path="/eveniumnet"
        />
        <MissionCard
          img="img/expertassurance.jpg"
          society="Texa services"
          project="iTex"
          description="Gestionnaire de sinistres et de prestation d'expertise"
          path="/texaitex"
        />
        <MissionCard
          img="img/coupure.jpg"
          society="General Electric"
          project="DRMS"
          description="Gestionnaire d’effacement du réseau électrique"
          path="/gedrms"
        />
        <MissionCard
          img="img/keys.jpg"
          society="Crédit Agricole"
          project="GreenWeb"
          description="Migration du logiciel de Crédit"
          path="/cagreenweb"
        />
        <MissionCard
          img="img/cockpit.jpg"
          society="Air France"
          project="Declic"
          description="Dématérialisation de la documentation aéronautique embarquée."
          path="/airfrancedeclic"
        />
        <MissionCard
          img="img/bande.jpg"
          society="NCR"
          project="CEGETEL"
          description="Gestion de sauvegarde sur bande"
          path="/ncr"
        />
        <MissionCard
          img="img/vetements.jpg"
          society="Oredis"
          project="Oresys"
          description="Logiciel de Gestion de Stock"
          path="/oredis"
        />
      </div>
    </section>
  )
}
