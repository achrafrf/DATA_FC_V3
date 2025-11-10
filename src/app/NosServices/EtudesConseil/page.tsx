'use client'
import React from 'react'

const axes = [
  {
    title: "Axe 1 : Diagnostic Stratégique & Opportunité",
    description: "Analyser l'environnement et valider la pertinence d'un projet.",
    points: [
      "Études de marché et analyse concurrentielle",
      "Diagnostic organisationnel et analyse SWOT",
      "Recommandations stratégiques et scénarios"
    ]
  },
  {
    title: "Axe 2 : Ingénierie & Conception Opérationnelle",
    description: "Structurer le projet et optimiser sa mise en œuvre.",
    points: [
      "Architecture projet et modélisation des processus",
      "Plan d'exécution et chiffrage détaillé",
      "Définition du cadre d'évaluation"
    ]
  },
  {
    title: "Axe 3 : Pilotage & Optimisation en Temps Réel",
    description: "Suivre la performance et adapter la stratégie.",
    points: [
      "Tableaux de bord personnalisés avec KPIs",
      "Évaluations intermédiaires et mesures correctives",
      "Enquêtes d'engagement des parties prenantes"
    ]
  },
  {
    title: "Axe 4 : Mesure d'Impact & Valorisation",
    description: "Démontrer la valeur créée et capitaliser.",
    points: [
      "Analyse ROI et évaluation des effets réels",
      "Audit post-projet et recommandations stratégiques",
      "Capitalisation de l'expertise et optimisation des processus"
    ]
  }
]

const EtudesConseil: React.FC = () => (
  <div className="min-h-screen flex flex-col justify-center py-8">
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        Études & Conseil
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
      <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
        Notre méthodologie en 4 axes pour garantir la réussite de vos projets
      </p>
    </div>
     
    {/* Axes Content - Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
      {axes.map((axe, axeIndex) => (
        <div 
          key={axeIndex}
          className="fade-in-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-green-800 h-full flex flex-col"
          style={{ animationDelay: `${axeIndex * 0.2}s` }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {axe.title}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 flex-grow">
            {axe.description}
          </p>
          <ul className="space-y-2">
            {axe.points.map((point, pointIndex) => (
              <li
                key={pointIndex}
                className="flex items-start text-base text-gray-800 dark:text-gray-200"
              >
                <span className="text-green-800 mr-3 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

export default EtudesConseil