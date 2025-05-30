'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationRRH = {
  titre: "DFC 13 : GRH Missions du RRH et recrutement",
  objectifs: "Identifier et comprendre les enjeux de la fonction RH.",
  populationCible: "DRH, RRH prenant leurs fonctions ; cadres ou managers opérationnels nommés RRH",
  duree: "2 jours",
  programme: [
    "Acquérir une vision globale de la fonction RH et ses enjeux",
    "Identifier les enjeux et impacts de la fonction RH",
    "Diagnostiquer les pratiques RH de son entreprise",
    "Identifier les missions, rôles et compétences du DRH et du RRH",
    "Processus de recrutement",
    "Définition du poste de travail et du profil",
    "Processus de présélection et planification des entretiens de recrutement"
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

const MissionsRRHRecrutement: React.FC = () => (
  <div>
    {/* Banner */}
    <div
      className="relative h-80 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/nosformations/recrutement.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <header className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          {formationRRH.titre}
        </h1>
      </header>
    </div>

    {/* Info & Program */}
    <div className="w-full my-12 p-4">
      <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Objectifs :</span>
        <span>{formationRRH.objectifs}</span>
      </p>
      <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Population cible :</span>
        <span>{formationRRH.populationCible}</span>
      </p>
      <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Durée :</span>
        <span>{formationRRH.duree}</span>
      </p>

      <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl">Programme de formation :</span>
      </p>

      <div className="text-center">
        {renderList(formationRRH.programme)}
      </div>
    </div>
  </div>
)

export default MissionsRRHRecrutement;
