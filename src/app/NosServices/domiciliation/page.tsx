'use client'
import React from 'react'
import { FaCheck } from 'react-icons/fa' 


const points = [
    "Une adresse administrative pour donner une image prestigieuse à votre entreprise.",
    "Une adresse de prestige qui figurera sur tous vos documents administratifs, courriers, contrats de l’entreprise ; de quoi donner une image plus professionnelle pour vos clients, fournisseurs ou partenaires.",
    "Maximiser votre référencement au sein d’un quartier d’affaires et donc paraître plus crédible.",
    "La gestion efficace de votre courrier ainsi que la prise en charge de vos appels téléphoniques.",
    "Une salle de réunion à votre disposition ainsi que des bureaux bien équipés.",
    "Une bonification sous forme de séances de coaching et formation gratuite pour le pilotage du démarrage de votre entreprise."
  ]

const AssistanceRecrutement: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        La Domiciliation des entreprises
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Content */}
     <main className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-md -mt-1 md:-mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          {/* Colonne de gauche : titre + paragraphe */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">
              Pourquoi choisir DATA FC SAFI ?
            </h2>
            <p className="text-gray-800 leading-relaxed font-bold dark:text-gray-100">
              Choisir notre service de domiciliation d entreprise, c est opter pour une solution fiable et professionnelle qui garantit une image sérieuse et légitime pour votre société. Notre emplacement stratégique offre une adresse prestigieuse, renforçant ainsi votre crédibilité auprès de vos clients et partenaires. En domiciliant votre entreprise chez nous, vous bénéficiez d une flexibilité sur mesure. Que vous soyez une start-up en pleine croissance ou une entreprise établie cherchant à élargir son rayon d action, vous bénéficierez d une infrastructure de qualité, d une assistance administrative de premier ordre et d une flexibilité qui s adapte à vos besoins spécifiques.
            </p>
          </section>

          {/* Colonne de droite : liste à puces */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">Domiciliez votre entreprise chez nous et bénéficiez de :</h2>
            {points.map((texte, idx) => (
              <div key={idx} className="flex items-start">
                <FaCheck className="w-6 h-6 text-green-800 flex-shrink-0 mt-1" />
                <p className="ml-3 text-gray-800 dark:text-gray-100 font-bold">{texte}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
  </div>
)

export default AssistanceRecrutement
