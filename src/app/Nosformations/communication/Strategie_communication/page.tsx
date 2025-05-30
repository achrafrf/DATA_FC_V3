'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationStrat = {
  code: "DFC53",
  titre: "Stratégie de communication",
  objectifs: "Permettre à une structure de constater l’état actuel de la communication afin d’en définir les améliorations nécessaires ; Formaliser sa stratégie de communication d’après les contacts et les objectifs établis.",
  populationCible: "Responsables de communication – Responsables marketing",
  duree: "2 jours",
  programme: [
    "Les enjeux et les objectifs d’une démarche de communication",
    "Évaluer les besoins en communication",
    "Les méthodes de recueil d’information (enquêtes qualitatives/quantitatives...)",
    "Concevoir un plan de communication au service de la stratégie de l’entreprise",
    "Bâtir sa stratégie de communication en fonction du contexte et des cibles prioritaires",
    "Planifier les actions de communication",
    "Définir le calendrier et les moyens financiers et humains en fonction des priorités stratégiques",
  ],
}

const StrategieCommunication: React.FC = () => {
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

  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Nosformations/communication.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationStrat.code} : {formationStrat.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Objectifs :</span>
          <span>{formationStrat.objectifs}</span>
        </p>
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationStrat.populationCible}</span>
        </p>
        <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationStrat.duree}</span>
        </p>

        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>

        <div className="text-center">
          {renderList(formationStrat.programme)}
        </div>
      </div>
    </div>
  )
}

export default StrategieCommunication;