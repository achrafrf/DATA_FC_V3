'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationArbreCauses = {
  titre: "DFC 36 :  SANTÉ/SÉCURITÉ : Arbre des causes",
  objectifs: "Maîtriser les techniques d’élaboration de l’arbre des causes pour déduire les mesures correctives et préventives contre les accidents.",
  populationCible: "Responsables Santé-Sécurité, qualité et/ou environnement, membres du CSE",
  duree: "2 jours",
  programme: [
    "Définition de l’arbre des causes",
    "Intérêts et limites de l'arbre des causes",
    "Rôle de l’arbre des causes dans la résolution de problème",
    "Analyse de l'accident : recueil des faits et des données",
    "Recherche de l’enchaînement des causes à l’origine de l’événement",
    "Construction de l’arbre des causes en respectant la logique d’enchaînement des événements",
    "Rédaction de comptes-rendus d'accidents exploitables et déduction des actions correctives et préventives clés"
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

const SanteSecuriteArbreCauses: React.FC = () => (
  <div>
    {/* Banner */}
    <div
      className="relative h-80 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/nosformations/sst-arbre-causes.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <header className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          {formationArbreCauses.titre}
        </h1>
      </header>
    </div>

    {/* Info & Program */}
    <div className="w-full my-12 p-4">
      <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Objectifs :</span>
        <span>{formationArbreCauses.objectifs}</span>
      </div>
      <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Population cible :</span>
        <span>{formationArbreCauses.populationCible}</span>
      </div>
      <div className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Durée :</span>
        <span>{formationArbreCauses.duree}</span>
      </div>
      <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl">Programme :</span>
      </div>
      <div className="text-center">
        {renderList(formationArbreCauses.programme)}
      </div>
    </div>
  </div>
)

export default SanteSecuriteArbreCauses;