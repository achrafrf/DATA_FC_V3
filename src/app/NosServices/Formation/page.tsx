'use client'
import React from 'react'

const content = [
  "Vous cherchez à développer vos compétences et améliorer la compétitivité de votre entreprise ?",
  "La formation est le moyen idéal pour y aboutir, elle constitue l’un des principaux leviers de management de votre capital humain.",
  "Vous cherchez l’outil essentiel d’évolution de votre entreprise ?",
  "Le meilleur moyen c’est d’adopter une meilleure prise en charge de la formation de vos collaborateurs.",
  "Vous voulez faire de votre entreprise une entreprise innovante ?",
  "Attachez de l’importance à la formation de vos employés.",
  "Vous voulez générer de la valeur ajoutée dans votre entreprise et atteindre les objectifs visés ?",
  "La formation est l’investissement le plus sûr pour y arriver.",
  "Vous cherchez à contribuer à la progression des performances du capital humain de votre entreprise ?",
  "Adopter une politique de formation continue est la solution."
]

const renderList = (items: string[]) => (
  <ul className="space-y-6 max-w-3xl mx-auto">
    {items.map((text, idx) => (
      <li
        key={idx}
        className="fade-in-item relative pl-8 text-lg md:text-xl"
        style={{ animationDelay: `${idx * 0.2}s` }}
      >
        {idx % 2 === 0 && (
          <span className="absolute left-0 top-1 w-3 h-3 bg-green-800 rounded-full" />
        )}
        <span className={idx % 2 === 0 ? 'text-teal-600 font-bold' : 'text-black dark:text-white'}>
          {text}
        </span>
      </li>
    ))}
  </ul>
)

const Formation: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        FORMATION
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Content */}
    <div className="px-4">
      {renderList(content)}
    </div>
  </div>
)

export default Formation