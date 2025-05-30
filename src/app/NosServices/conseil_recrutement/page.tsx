'use client'
import React from 'react'

const content = [
  "Le recrutement des compétences demande du temps, de la rigueur et de la méthode.",
  "Disposant des outils et des compétences nécessaires, DATA FC vous apporte conseil et soutien lors de votre processus de recrutement pour vous aider dans le cadre de votre stratégie de développement, à optimiser la gestion de vos ressources humaines.",
  "Les conseillers de DATA FC adoptent les démarches et les outils appropriés pour mener à bien l’action d’assistance au recrutement pour votre entreprise.",
  "Partant de votre demande, DATA FC peut intervenir pour tout ou partie du processus de recrutement : de l’analyse des tâches et des missions relatives au poste à pourvoir, à la définition des profils du poste recherché, à l’évaluation et l’appréciation des candidats.",
  "Après chaque action de recrutement, DATA FC vous livre un rapport détaillant les caractéristiques des profils des candidats retenus et s’engage à faire le suivi de recrutement pour s’assurer que l’intégration du candidat dans le poste de travail se déroule bien."
]

const renderList = (items: string[]) => (
  <ul className="space-y-6 max-w-3xl mx-auto px-4">
    {items.map((text, idx) => (
      <li
        key={idx}
        className="fade-in-item relative pl-8 text-lg md:text-xl text-gray-800 dark:text-gray-200"
        style={{ animationDelay: `${idx * 0.2}s` }}
      >
        <span className="absolute left-0 top-1 w-3 h-3 bg-green-800 rounded-full" />
        {text}
      </li>
    ))}
  </ul>
)

const AssistanceRecrutement: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        ASSISTANCE CONSEIL EN RECRUTEMENT
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Content */}
    {renderList(content)}
  </div>
)

export default AssistanceRecrutement