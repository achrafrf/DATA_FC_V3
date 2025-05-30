'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationFinanceAnalyse = {
  titre: "DFC 44 : PRATIQUER L’ANALYSE FINANCIÈRE",
  objectifs: "Maîtriser les outils d'analyse financière.",
  populationCible: "Responsable financier, chef comptable, contrôleur de gestion",
  duree: "2 jours",
  programme: [
    {
      section: "1 - Évaluer l’activité et la profitabilité",
      items: [
        "Repérer les comptes de résultat utiles à l'analyse.",
        "Interprétation de l'évolution des ventes.",
        "Soldes intermédiaires de gestion, charges classées par fonction.",
        "Capacité d'autofinancement (CAF).",
        "Variations de résultat : effet ciseau, absorption des charges fixes."
      ]
    },
    {
      section: "2 - Évaluer les équilibres financiers",
      items: [
        "Lecture financière du bilan.",
        "Fonds de roulement (FR), besoin en fonds de roulement (BFR) et trésorerie nette (TN).",
        "Les 5 crises de trésorerie et les remèdes associés."
      ]
    },
    {
      section: "3 - Analyse par les ratios",
      items: [
        "Profitabilité, BFR, structure, trésorerie, endettement, couverture des frais financiers.",
        "Rentabilité économique et financière.",
        "Comparaison aux moyennes sectorielles."
      ]
    },
    {
      section: "4 - Analyse du tableau des flux de trésorerie",
      items: [
        "Approfondir l'analyse des équilibres du bilan par les flux.",
        "Interaction entre le flux d'exploitation et d'investissement.",
        "Évaluer les choix de financement, la capacité de remboursement."
      ]
    }
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

const PratiquerAnalyseFinanciere: React.FC = () => {
  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/nosformations/analyse.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationFinanceAnalyse.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full max-w-3xl my-12 p-4">
        <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold">Objectifs :</span>
          <span className="ml-1">{formationFinanceAnalyse.objectifs}</span>
        </div>
        <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold">Population cible :</span>
          <span className="ml-1">{formationFinanceAnalyse.populationCible}</span>
        </div>
        <div className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold">Durée :</span>
          <span className="ml-1">{formationFinanceAnalyse.duree}</span>
        </div>
        <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2" />
          <span className="font-semibold">Programme :</span>
        </div>
        
        {formationFinanceAnalyse.programme.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl text-center font-bold text-emerald-800 mb-2">{section.section}</h2>
            {renderList(section.items)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PratiquerAnalyseFinanciere;