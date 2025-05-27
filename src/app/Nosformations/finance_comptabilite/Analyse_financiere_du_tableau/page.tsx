'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationFinance = {
  titre: "ANALYSE FINANCIÈRE DU TABLEAU DE FLUX DE TRÉSORERIE",
  objectifs: "Être capable d’analyser le tableau de flux de trésorerie.",
  populationCible: "Responsable financier, chef comptable, contrôleur de gestion",
  duree: "2 jours",
  programme: [
    {
      section: "1 - Lecture du tableau de flux",
      items: [
        "Flux de trésorerie de l'activité, de l'investissement, du financement.",
        "Principaux retraitements pour évaluer le flux de trésorerie d'activité.",
        "Définir la trésorerie."
      ]
    },
    {
      section: "2 - Analyse de flux de la trésorerie",
      items: [
        "Analyser différents contextes : croissance, perte de profitabilité, retournement.",
        "Les ratios spécifiques au tableau de flux.",
        "Service de la dette.",
        "Pourcentage de financement par emprunt.",
        "Taux de distribution.",
        "Diagnostics à partir du tableau de flux.",
        "Étude de cas d'analyse financière intégrant l'analyse par les flux."
      ]
    },
    {
      section: "3 - Agir sur le flux de trésorerie disponible",
      items: [
        "Repérer les actions opérationnelles pour améliorer la trésorerie disponible.",
        "Chiffrer les enjeux d'amélioration de la trésorerie.",
        "Pilotage de la performance par le flux de trésorerie disponible."
      ]
    },
    {
      section: "4 - Construire et analyser le plan de financement",
      items: [
        "Enchaînement des documents financiers prévisionnels.",
        "Évaluer les besoins de trésorerie, la capacité de remboursement, défendre les choix de financement."
      ]
    }
  ]
}

const AnalyseFluxTresorerie: React.FC = () => {
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
        style={{ backgroundImage: "url('/nosformations/finance.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationFinance.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <div className="mb-4 flex items-start text-lg text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold">🎯 Objectifs :</span>
          <span className="ml-1">{formationFinance.objectifs}</span>
        </div>

        <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold">👤 Population cible :</span>
          <span className="ml-1">{formationFinance.populationCible}</span>
        </div>

        <div className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold">⏱️ Durée :</span>
          <span className="ml-1">{formationFinance.duree}</span>
        </div>

        <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold">📚 Programme de formation :</span>
        </div>

        <div className="space-y-8">
          {formationFinance.programme.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl text-center font-bold text-green-800 dark:text-green-300 mb-2">
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

export default AnalyseFluxTresorerie;