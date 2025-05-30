'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationComptaGenerale = {
  titre: "DFC 41 : COMPTABILITÉ GÉNÉRALE : Logique et plan comptable",
  objectifs: "Connaitre la logique comptable et savoir utiliser le plan comptable.",
  populationCible: "Débutants en comptabilité",
  duree: "3 jours",
  programme: [
    {
      section: "1 - Positionner la comptabilité générale",
      items: [
        "Le rôle et les objectifs de la comptabilité générale.",
        "Le cadre réglementaire de la comptabilité et le lien avec la fiscalité."
      ]
    },
    {
      section: "2 - S'approprier la logique comptable",
      items: [
        "Le bilan : du patrimoine au bilan ; l'équilibre : emplois/ressources.",
        "L'actif et le passif.",
        "Le compte de résultat.",
        "Le lien entre bilan et compte de résultat."
      ]
    },
    {
      section: "3 - Utiliser le plan comptable",
      items: [
        "Le plan de comptes : structure et organisation.",
        "La position des comptes au bilan et au compte de résultat.",
        "La démarche de recherche de l'imputation comptable."
      ]
    },
    {
      section: "4 - Comptabiliser les opérations",
      items: [
        "La convention du débit/crédit.",
        "La démarche d'enregistrement des écritures.",
        "Entraînement pratique sur les schémas usuels d'écritures."
      ]
    },
    {
      section: "5 - Se repérer dans l'organisation comptable",
      items: [
        "La pièce justificative et sa conservation.",
        "Les états comptables : journal, grand-livre, balance."
      ]
    }
  ]
}

const ComptabiliteGenerale: React.FC = () => {
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

  return (
    <div>
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Nosformations/finance.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {formationComptaGenerale.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Objectifs :</span>
          <span>{formationComptaGenerale.objectifs}</span>
        </p>
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationComptaGenerale.populationCible}</span>
        </p>
        <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationComptaGenerale.duree}</span>
        </p>

        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>

        <div className="space-y-8">
          {formationComptaGenerale.programme.map((section, idx) => (
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
}

export default ComptabiliteGenerale;