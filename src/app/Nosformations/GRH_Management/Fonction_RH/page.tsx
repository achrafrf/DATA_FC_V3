'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationMobiliteTalents = {
  titre: "DFC 16 : FONCTION RH : Évaluation mobilité et gestion des talents",
  objectifs: "Maîtriser les méthodes et techniques de gestion de la mobilité et des talents.",
  populationCible: "DRH, RRH prenant leurs fonctions ; cadres ou managers opérationnels nommés RRH",
  duree: "2 jours",
  programme: [
    "Mettre en place un plan des entretiens annuels et professionnels",
    "Élaborer des supports et des référentiels d'évaluation",
    "Mener des évaluations avec objectivité et prévenir les situations à risque",
    "Distinguer entretien annuel et professionnel",
    "Explorer les motivations et le projet professionnel",
    "Gérer les cas difficiles en termes de mobilité",
    "Identifier et développer les potentiels et les talents",
    "Les critères d'évaluation du potentiel et des talents",
    "Bâtir des plans de succession",
    "Développer et fidéliser les talents"
  ]
}

const renderList = (items: string[]) => (
  <ul className="list-none space-y-4">
    {items.map((item, idx) => (
      <li
        key={idx}
        className="fade-in-item flex justify-center items-center space-x-2 text-xl text-gray-800 dark:text-gray-200"
        style={{ animationDelay: `${idx * 0.3}s` }}
      >
        <span className="block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-800" />
        <span className="text-center">{item}</span>
      </li>
    ))}
  </ul>
)

const EvaluationMobiliteTalents: React.FC = () => {
  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Nosformations/Législation du travail.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationMobiliteTalents.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold text-2xl mr-1">Objectifs :</span>
          <span>{formationMobiliteTalents.objectifs}</span>
        </p>
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationMobiliteTalents.populationCible}</span>
        </p>
        <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationMobiliteTalents.duree}</span>
        </p>
        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>
        <div className="text-center">
          {renderList(formationMobiliteTalents.programme)}
        </div>
      </div>
    </div>
  )
}

export default EvaluationMobiliteTalents;
