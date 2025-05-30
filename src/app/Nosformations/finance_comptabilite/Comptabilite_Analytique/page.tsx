'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationComptabilite = {
  titre: "DFC 43 : COMPTABILITÉ ANALYTIQUE",
  objectifs: [
    "Calculer les charges et traiter de la CAE",
    "Établir le tableau de répartition des charges indirectes",
    "Tenir les fiches de stock"
  ],
  populationCible: "Personne cherchant à consolider une première expérience en comptabilité",
  duree: "3 jours",
  programme: [
    {
      section: "1 - Introduction à la CAE",
      items: ["Définition", "Objectifs", "Différence entre comptabilité générale et CAE"]
    },
    {
      section: "2 - Charges de la CAE",
      items: [
        "Charges non incorporables",
        "Charges supplétives",
        "Retrouver les charges de la CAE à partir des charges de la comptabilité générale"
      ]
    },
    {
      section: "3 - Traitement des charges de la CAE",
      items: [
        "Charges directes et charges indirectes",
        "Répartition des charges indirectes",
        "Tableau de répartition des charges indirectes"
      ]
    },
    {
      section: "4 - Inventaire permanent des stocks",
      items: ["Évaluation des entrées", "Évaluation des sorties (CMUP – FIFO – LIFO)"]
    },
    {
      section: "5 - Hiérarchie des coûts",
      items: [
        "Coût d’achat + CIP",
        "Coût de production + CIP",
        "Coût de revient",
        "Résultat analytique"
      ]
    }
  ]
}

const ComptabiliteAnalytique: React.FC = () => {
  const renderObjectives = () => (
    <ul className="list-none space-y-2">
      {formationComptabilite.objectifs.map((obj, idx) => (
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

  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Nosformations/analyse.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationComptabilite.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <div className="mb-4 flex items-start text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <div>
            <span className="font-semibold text-2xl">Objectifs :</span>
            {renderObjectives()}
          </div>
        </div>
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationComptabilite.populationCible}</span>
        </p>
        <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationComptabilite.duree}</span>
        </p>

        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>

        <div className="space-y-8">
          {formationComptabilite.programme.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl text-center font-bold text-emerald-800 dark:text-gray-100 mt-4 mb-2">
                {section.section}
              </h2>
              {renderList(section.items)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComptabiliteAnalytique;