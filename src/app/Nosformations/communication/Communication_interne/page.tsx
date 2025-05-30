'use client'
import React from 'react'
import { Target, Book, Clock, Users } from 'lucide-react'

const formationDFC11 = {
  titre: "DFC 51 : Communication en interne",
  objectifs: "S’approprier des fondamentaux de la communication interne.",
  populationCible: "Personne ayant en charge de la communication interne au sein de son organisation.",
  duree: "2 jours",
  programme1: [
    "Les fondamentaux de la communication interne : enjeux, objectifs, acteurs et relais.",
    "Missions de responsable de communication interne",
    "Rôle de la communication dans le pilotage des projets.",
    "Le rôle de l’audit dans la démarche de communication",
  ],
  programme2: [
    "Les méthodes et les outils de communication interne.",
    "Communication de proximité et démultiplication par la ligne managériale",
    "Travailler en transverse au sein de l'entreprise",
  ],
  programme3: [
    "Intérêt du réseau de correspondants de communication",
    "Rôle des correspondants et périmètre d'intervention",
    "Les outils de motivation des correspondants de communication",
  ],
}

const Communication: React.FC = () => {
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
          style={{ backgroundImage: "url('/nosformations/communication.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <header className="relative flex items-center justify-center h-full">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {formationDFC11.titre}
            </h1>
          </header>
        </div>

        {/* Info & Program */}
        <div className="w-full my-12 p-4">
          <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
            <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Objectifs :</span>
            <span>{formationDFC11.objectifs}</span>
          </p>
          <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
            <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Population cible :</span>
            <span>{formationDFC11.populationCible}</span>
          </p>
          <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
            <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Durée :</span>
            <span>{formationDFC11.duree}</span>
          </p>

          <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
            <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl">Programme de formation :</span>
          </p>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-800 dark:text-gray-100 mt-8 mb-4">
              1 - Principes, missions et objectifs
            </h2>
            {renderList(formationDFC11.programme1)}

            <h2 className="text-2xl font-bold text-emerald-800 dark:text-gray-100 mt-8 mb-4">
              2 - La dimension humaine
            </h2>
            {renderList(formationDFC11.programme2)}

            <h2 className="text-2xl font-bold text-emerald-800 dark:text-gray-100 mt-8 mb-4">
              3 - Le réseau interne
            </h2>
            {renderList(formationDFC11.programme3)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Communication
