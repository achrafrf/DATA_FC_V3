'use client'
import React from 'react'

const content = [
  "Vous êtes une entreprise et :",
  "Vous avez des besoins ponctuels en termes de qualifications ou de personnel ;",
  "Vous cherchez à gérer des besoins non planifiés en main d’œuvre ;",
  "Vous voulez gérer l’imprévisible ;",
  "Vous voulez gagner du temps et diminuer les risques ;",
  "Vous voulez limiter votre masse salariale et réduire les formalités administratives ;",
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

const InterimEntreprise: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        L’INTÉRIM POUR L’ENTREPRISE
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Content */}
    {renderList(content)}
    <h1 className='text-teal-600 text-center font-bold text-3xl'>L’intérim est la solution idéale pour vous.</h1>
  </div>
)

export default InterimEntreprise
