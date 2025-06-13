'use client'
import React from 'react'

const content = [
  "Fort d’un réseau dynamique de compétences, notre cabinet s’appuie sur des experts permanents, contractuels et vacataires, rigoureusement sélectionnés pour leur expertise métier et pédagogique.",
  "Cette diversité de profils nous permet de proposer des formations sur-mesure, innovantes et alignées sur les besoins spécifiques de nos clients.",
  "Des consultants seniors aux intervenants spécialisés, notre équipe allie savoir-faire technique et excellence académique pour garantir un impact durable.",
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
  <div className="space-y-12 py-12 font-bold">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        Notre vivier de compétences
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Content */}
    {renderList(content)}
  </div>
)

export default AssistanceRecrutement