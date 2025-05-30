'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationSSE = {
  titre: "DFC 35 : MANAGEMENT DE LA SANTÉ/SÉCURITÉ ET ENVIRONNEMENT DANS L’ENTREPRISE",
  objectifs: "Maîtriser les principes de management SSE pour améliorer la performance SST de l'entreprise.",
  populationCible: "Responsables Santé/Sécurité-Environnement",
  duree: "2 jours",
  programme: [
    "Les enjeux des systèmes de management Santé Sécurité Environnement (SSE)",
    "La réglementation SSE",
    "Missions d'un responsable SSE",
    "Aperçu général sur les référentiels ISO 14001 et ISO 45001",
    "Identification et analyse des risques SSE",
    "Conduite des actions de prévention et de protection",
    "Évaluation et suivi des actions sur les chantiers",
    "Utilisation du cycle PDCA",
    "Définir les objectifs à partir de la politique SSE et établir un plan d’action SSE",
    "Faire un état des lieux et mener des audits de poste pour progresser",
    "Actions correctives en cas d’incidents et identification des causes premières",
    "Élaborer des bilans et conduire des réunions de chantier",
    "Établir les indicateurs SSE à suivre et le tableau de bord pour l’application du PDCA",
    "Établir le plan de communication SSE pour clarifier les responsabilités"
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

const ManagementSSE: React.FC = () => {
  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/nosformations/sse.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationSSE.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Objectifs :</span>
          <span>{formationSSE.objectifs}</span>
        </div>
        <div className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationSSE.populationCible}</span>
        </div>
        <div className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationSSE.duree}</span>
        </div>

        <div className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </div>

        <div className="text-center">
          {renderList(formationSSE.programme)}
        </div>
      </div>
    </div>
  )
}

export default ManagementSSE;
