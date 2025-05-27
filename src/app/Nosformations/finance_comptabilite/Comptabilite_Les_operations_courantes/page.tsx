'use client'
import React from 'react'
import { Target, Users, Clock, Book } from 'lucide-react'

const formationOperationsCourantes = {
  titre: "COMPTABILITÉ GÉNÉRALE : Les opérations courantes",
  objectifs: "Savoir comptabiliser les opérations courantes d'achats, de ventes, d'investissement, de trésorerie et de personnel.",
  populationCible: "Débutants en comptabilité",
  duree: "3 jours",
  programme: [
    {
      section: "1 - Enregistrer les opérations d'achat d'exploitation",
      items: [
        "Les factures : mentions obligatoires.",
        "Comptabiliser les opérations d'achats."
      ]
    },
    {
      section: "2 - Maîtriser les règles et enregistrer la TVA",
      items: [
        "Le mécanisme de la TVA.",
        "La TVA sur les débits et sur les encaissements."
      ]
    },
    {
      section: "3 - Comptabiliser les opérations d'investissement",
      items: [
        "Définition d'une immobilisation.",
        "Le traitement comptable des frais d'acquisition.",
        "Les avances, acomptes et retenues de garantie.",
        "Comptabiliser les dépenses d'entretien et de réparation.",
        "Enregistrement des cessions et mises au rebut.",
        "L'amortissement."
      ]
    },
    {
      section: "4 - Enregistrement des charges de personnel",
      items: [
        "Les notions fondamentales en matière de rémunération.",
        "Comptabilisation de l'écriture de paie.",
        "Les charges sociales et taxes liées au salaire."
      ]
    },
    {
      section: "5 - Traiter les opérations de vente",
      items: [
        "Enregistrer les opérations de vente.",
        "La comptabilisation des impayés."
      ]
    },
    {
      section: "6 - Enregistrer les opérations de trésorerie, de financement et de placement",
      items: [
        "Le traitement des encaissements et décaissements.",
        "Les opérations de prêt et d'emprunt."
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

const ComptabiliteOperationsCourantes: React.FC = () => {
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
            {formationOperationsCourantes.titre}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
      <div className="w-full my-12 p-4">
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Objectifs :</span>
          <span>{formationOperationsCourantes.objectifs}</span>
        </p>
        <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
          <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Population cible :</span>
          <span>{formationOperationsCourantes.populationCible}</span>
        </p>
        <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl mr-1">Durée :</span>
          <span>{formationOperationsCourantes.duree}</span>
        </p>

        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>

        <div className="text-center">
          {formationOperationsCourantes.programme.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-emerald-800 dark:text-gray-100 mt-8 mb-4">
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

export default ComptabiliteOperationsCourantes;