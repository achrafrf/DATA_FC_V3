'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationQualiteISO = {
  titre: "DFC 32 : LES FONDAMENTAUX DE LA QUALITÉ ET DE L’ISO 9001",
  objectifs: "Connaître les enjeux et les principes de la qualité et de l’ISO 9001.",
  populationCible: "Toute personne désirant comprendre les enjeux et principes d’une démarche qualité.",
  duree: "2 jours",
  programme: [
    "Références et domaines d’applications de la norme ISO 9001",
    "Exigences principales de l'ISO 9001 : pratique dans l'entreprise.",
    "Les objectifs visés par la norme ISO 9001",
    "Les objectifs de la certification et le déroulement de l'audit.",
    "Conformité des produits et des services (Les 5 M)",
    "Utilité des procédures dans l’amélioration continue et la satisfaction des clients"
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

const LesFondamentauxQualiteISO: React.FC = () => (
  <div>
    {/* Banner */}
    <div
      className="relative h-80 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/nosformations/fondamentaux-iso9001.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <header className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          {formationQualiteISO.titre}
        </h1>
      </header>
    </div>

    {/* Info & Program */}
    <div className="w-full my-12 p-4">
      <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Objectifs :</span>
        <span>{formationQualiteISO.objectifs}</span>
      </p>
      <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Population cible :</span>
        <span>{formationQualiteISO.populationCible}</span>
      </p>
      <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Durée :</span>
        <span>{formationQualiteISO.duree}</span>
      </p>
      <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl">Programme de formation :</span>
      </p>
      <div className="text-center">
        {renderList(formationQualiteISO.programme)}
      </div>
    </div>
  </div>
)

export default LesFondamentauxQualiteISO;