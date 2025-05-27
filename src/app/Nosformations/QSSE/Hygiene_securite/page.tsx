'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationSST = {
  titre: "HYGIÈNE ET SÉCURITÉ : Sensibilisation à la santé et sécurité au travail",
  objectifs: "Sensibiliser les participants sur la sécurité au travail.",
  populationCible: "Responsables, managers référents/animateurs Santé-Sécurité, personnes gérant la protection/prévention des risques professionnels.",
  duree: "2 jours",
  programme: [
    "Démarche santé et sécurité au travail et vocabulaire associé (danger, dommage, événement dangereux, risques)",
    "Les indicateurs clés SST",
    "Analyse de risques SST",
    "Établir un bilan sécurité et rédiger un document d’évaluation des risques SST",
    "Agir sur l’esprit sécurité pour favoriser la protection (réduction de la gravité) et la prévention (réduire la probabilité d’apparition des risques))",
    "Faire respecter les consignes clés par les salariés",
    "Analyser les accidents (arbre des causes) et mettre en place les mesures correctives",
    "Impliquer l’encadrement pour développer une logique d'accompagnement et réagir aux non-respects des consignes",
    "Évaluer les progrès obtenus et les communiquer à tous les niveaux pour instaurer une dynamique sécurité"
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

const SensibilisationSST: React.FC = () => (
  <div>
    {/* Banner */}
    <div
      className="relative h-80 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/nosformations/sst.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <header className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          {formationSST.titre}
        </h1>
      </header>
    </div>

    {/* Info & Program */}
    <div className="w-full my-12 p-4">
      <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Target className="w-6 h-6 text-green-800 mr-2" />
        <span className="font-semibold text-2xl mr-1">Objectifs :</span>
        <span>{formationSST.objectifs}</span>
      </div>
      <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
        <Users className="w-6 h-6 text-green-800 mr-2" />
        <span className="font-semibold text-2xl mr-1">Population cible :</span>
        <span>{formationSST.populationCible}</span>
      </div>
      <div className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Clock className="w-6 h-6 text-green-800 mr-2" />
        <span className="font-semibold text-2xl mr-1">Durée :</span>
        <span>{formationSST.duree}</span>
      </div>
      <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
        <Book className="w-6 h-6 text-green-800 mr-2" />
        <span className="font-semibold text-2xl">Programme :</span>
      </div>
      <div className="text-center">
        {renderList(formationSST.programme)}
      </div>
    </div>
  </div>
)

export default SensibilisationSST;
