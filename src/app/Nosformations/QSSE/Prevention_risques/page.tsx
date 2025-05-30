'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationPrevention = {
  titre: "DFC 37 : SANTÉ/SÉCURITÉ : Prévention des risques",
  objectifs: "Savoir élaborer et mettre en œuvre un plan de prévention pour maîtriser les risques liés aux entreprises extérieures.",
  populationCible: "Responsables Santé-Sécurité, qualité et/ou environnement, membres du CSE",
  duree: "2 jours",
  programme: [
    {
      section: "1 - Le plan de prévention et son contenu",
      items: [
        "Le champ d’application du plan de prévention : dans quels cas précis l'engager ?",
        "Les obligations des entreprises : celle qui effectue les travaux, celle qui accueille les travaux"
      ]
    },
    {
      section: "2 - Rédaction du plan de prévention",
      items: [
        "Identifier les étapes clés pour la rédaction du plan de prévention",
        "Identifier les situations de risques sur le terrain et recueillir les éléments essentiels",
        "Réaliser des analyses des risques et les formaliser",
        "Élaborer et communiquer son plan de prévention"
      ]
    },
    {
      section: "3 - Suivi du plan de prévention",
      items: [
        "Mise en place et suivi du plan de prévention dans le but de maîtriser les risques",
        "Rédiger des documents de prévention pour les entreprises extérieures sur le terrain",
        "Assurer un contrôle permanent pendant l'intervention des entreprises extérieures",
        "Mettre à jour l'analyse de risques et le plan de prévention"
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

const PreventionRisques: React.FC = () => (
  <div>
    {/* Banner */}
    <div
      className="relative h-80 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/nosformations/prevention-risques.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <header className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          {formationPrevention.titre}
        </h1>
      </header>
    </div>

    {/* Info & Program */}
    <div className="w-full my-12 p-4">
      <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Objectifs :</span>
        <span>{formationPrevention.objectifs}</span>
      </div>
      <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Population cible :</span>
        <span>{formationPrevention.populationCible}</span>
      </div>
      <div className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl mr-1">Durée :</span>
        <span>{formationPrevention.duree}</span>
      </div>
      <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
        <span className="font-semibold text-2xl">Programme de formation :</span>
      </div>
      <div className="space-y-8">
        {formationPrevention.programme.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl text-center font-bold text-emerald-800 dark:text-gray-100 mt-4 mb-2">
              {section.section}
            </h2>
            {renderList(section.items)}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default PreventionRisques;
