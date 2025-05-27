'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationContinue = {
  titre: "GESTION DE LA FORMATION CONTINUE DANS L’ENTREPRISE",
  objectifs: [
    "Piloter la politique de la formation dans l’entreprise",
    "Concevoir et mettre en place un plan de formation motivant et efficace"
  ],
  populationCible: "DRH, RRH prenant leurs fonctions ; cadres ou managers opérationnels nommés RRH",
  duree: "2 jours",
  programme: [
    "La formation : composante du plan stratégique de l’entreprise",
    "Articuler GPEC et formation",
    "La formation et le système des contrats spéciaux de formation (CSF)",
    "Bâtir un plan de développement des compétences",
    "Mettre en place le plan de formation",
    "Évaluer la formation"
  ]
}

const renderObjectives = (items: string[]) => (
  <ul className="list-none space-y-2">
    {items.map((obj, idx) => (
      <li key={idx} className="flex items-center space-x-2 text-lg text-gray-800 dark:text-gray-200">
        <span className="block w-2 h-2 rounded-full bg-green-800" />
        <span>{obj}</span>
      </li>
    ))}
  </ul>
)

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

const GestionFormationContinue: React.FC = () => {
  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/nosformations/formation.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationContinue.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <div className="mb-4 flex items-start text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <div>
            <span className="font-semibold text-2xl">Objectifs :</span>
            {renderObjectives(formationContinue.objectifs)}
          </div>
        </div>

        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationContinue.populationCible}</span>
        </p>

        <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationContinue.duree}</span>
        </p>

        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>

        <div className="text-center">
          {renderList(formationContinue.programme)}
        </div>
      </div>
    </div>
  )
}

export default GestionFormationContinue;
