'use client'
import React from 'react'

const content = [
  "Les actions de formation continue  n’ont de sens que si elles sont étroitement intégrées dans un processus visant l'atteinte des orientations stratégiques  de l’entreprise (ou de l’organisation) ;",
  "Pour rendre  la formation rentable, efficace et utile, il est très recommandé de se donner le temps, les moyens et la capacité d’effectuer un diagnostic des besoins en formation  afin de ne pas gaspiller le temps, l’énergie et  l’argent.",
  "C’est dans cette optique que nous vous proposons dans le cadre d’une action d’ingénierie, des interventions de spécialistes pour mettre en œuvre un processus de diagnostic des besoins, allant de l’analyse des besoins, la conception d’un plan  de formation à la réalisation et l’évaluation de la formation."
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

const IngenierieFormation: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        INGÉNIERIE DE FORMATION
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Content */}
    {renderList(content)}
  </div>
)

export default IngenierieFormation
