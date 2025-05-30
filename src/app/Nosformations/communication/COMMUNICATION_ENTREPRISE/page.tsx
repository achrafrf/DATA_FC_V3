'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationDFC12 = {
  titre: "DFC 52 : LA COMMUNICATION EN ENTREPRISE",
  objectifs: "Sensibiliser les participants sur l’importance de la communication et son impact sur la RH.",
  populationCible: "Managers – responsables de communication",
  duree: "2 jours",
  programme1: [
    "Les réseaux de communication et la circulation des informations",
    "Les éléments du schéma de la communication",
    "Communication et perception",
    "Les principes de la communication efficace",
    "Qu’est-ce qu’une bonne communication ?",
    "Comment éviter une mauvaise communication ?",
    "Identifier son intention et obtenir une confirmation questionnée (La reformulation)",
    "Organisation des idées, langage positif, vague, négatif",
    "L’écoute : passive, active et obstacles à l’écoute",
  ],
}

const CommunicationEntrepriseStyled: React.FC = () => {
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
    <>
      <div>
        {/* Banner */}
        <div
          className="relative h-80 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/Nosformations/communication.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <header className="relative flex items-center justify-center h-full">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {formationDFC12.titre}
            </h1>
          </header>
        </div>

        {/* Info & Program */}
        <div className="w-full my-12 p-4">
          <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
            <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Objectifs :</span>
            <span>{formationDFC12.objectifs}</span>
          </p>
          <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
            <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Population cible :</span>
            <span>{formationDFC12.populationCible}</span>
          </p>
          <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
            <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Durée :</span>
            <span>{formationDFC12.duree}</span>
          </p>

          <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
            <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl">Programme de formation :</span>
          </p>

          <div className="text-center">
            {renderList(formationDFC12.programme1)}
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunicationEntrepriseStyled