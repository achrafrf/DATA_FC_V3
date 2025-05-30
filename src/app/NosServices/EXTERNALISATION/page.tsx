'use client'
import React from 'react'

const content = [
  "Vous avez une entreprise :",
  "Vous cherchez à vous concentrer sur votre cœur de métier ;",
  "Vous cherchez l’accès à des compétences nouvelles ou supérieures, mais aussi à répondre aux évolutions technologiques ;",
  "Vous cherchez la maîtrise et la réduction du budget lié aux ressources humaines ;",
  "Vous cherchez à gagner en temps sur des fonctions répétitives et contraignantes sans valeur ajoutée ;",
  "Vous cherchez à optimiser certains processus RH ;"
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

const Externalisation: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        L’EXTERNALISATION
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>
     
    {/* Content */}
    {renderList(content)}
    <h1 className='font-bold text-3xl text-center text-teal-600'> La clé de la réussite est de trouver un véritable partenaire d’externalisation.</h1>
  </div>
)

export default Externalisation
