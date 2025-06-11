'use client'
import React from 'react'
import { FaCheck , FaEnvelope  } from 'react-icons/fa'

const advantages = [
  "Économies : Coûts réduits grâce au partage des ressources.",
  "Réseautage : Échanges enrichissants avec d’autres experts du secteur.",
  "Flexibilité : Programmes adaptés aux besoins du marché.",
  "Efficacité : Approche pratique et immersive pour des résultats rapides."
]

const calendar = [
  { month: 'Juillet', formation: 'Sensibilisation à la sécurité dans le milieu du travail', duree: '2 jours', prixJour: '900', prixTotal: '1 800' },
  { month: 'Juillet', formation: 'Formation des responsables santé-sécurité au travail', duree: '2 jours', prixJour: '900', prixTotal: '1 800' },
  { month: 'Août', formation: 'Formation des animateurs HSE', duree: '2 jours', prixJour: '1 000', prixTotal: '2 000' },
  { month: 'Septembre', formation: 'Formation pratique à l’arbre des causes', duree: '1 jour', prixJour: '900', prixTotal: '900' },
  { month: 'Septembre', formation: 'Le secourisme au travail', duree: '1 jour', prixJour: '900', prixTotal: '900' },
  { month: 'Octobre', formation: 'Sécurité incendie dans le milieu industriel', duree: '2 jours', prixJour: '900', prixTotal: '1 800' },
  { month: 'Novembre', formation: 'Formation en sécurité électrique', duree: '2 jours', prixJour: '950', prixTotal: '1 900' },
  { month: 'Décembre', formation: 'Formation en habilitation électrique', duree: '2 jours', prixJour: '950', prixTotal: '1 900' }
]

const FormationInterentreprises: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        Formation Interentreprises : Partagez l’excellence, maximisez la performance
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />
    </div>

    {/* Introduction et liste avantages */}
    <main className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-md -mt-1 md:-mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Texte explicatif */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">
            Pourquoi choisir nos formations interentreprises ?
          </h2>
          <p className="text-gray-800 leading-relaxed font-bold dark:text-gray-100">
            Chez DATA FC, nous proposons des formations interentreprises conçues pour offrir une expérience d’apprentissage collaborative et rentable. Ces formations permettent à vos équipes d’acquérir des compétences clés tout en échangeant avec des professionnels d’autres entreprises, favorisant ainsi l’émulation et les bonnes pratiques.
          </p>
        </section>

        {/* Avantages clés */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">Avantages clés :</h2>
          {advantages.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <FaCheck className="w-6 h-6 text-green-800 flex-shrink-0 mt-1" />
              <p className="ml-3 text-gray-800 dark:text-gray-100 font-bold">{item}</p>
            </div>
          ))}
        </section>
      </div>
      <section>
         
          <p className="text-gray-800 text-center leading-relaxed font-bold dark:text-gray-100">
Que ce soit pour maîtriser les nouvelles technologies, optimiser vos processus ou développer des compétences métiers, nos formations interentreprises vous offrent une solution gagnante. Découvrez nos prochaines sessions et formez vos équipes avec DATA FC !          </p>
        </section>
      {/* Calendrier des formations */}
      <section className="px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">
          Calendrier des Formations – Santé‑Sécurité au Travail (Juillet à Décembre 2025)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className='bg-teal-500'>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Mois</th>
                <th className="border border-gray-300 px-4 py-2">Formation</th>
                <th className="border border-gray-300 px-4 py-2">Durée</th>
                <th className="border border-gray-300 px-4 py-2">Prix (DH/jour)</th>
                <th className="border border-gray-300 px-4 py-2">Prix Total (DH)</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-4 py-2 font-bold">{item.month}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.formation}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.duree}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.prixJour}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.prixTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section Pourquoi choisir nos formations */}
      <section className="px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-800">
          Pourquoi choisir nos formations ?
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 text-green-800 flex-shrink-0 mt-1" />
            <span className="ml-3 text-gray-800 dark:text-gray-100 font-bold">Approche pratique : Cas concrets et mises en situation.</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 text-green-800 flex-shrink-0 mt-1" />
            <span className="ml-3 text-gray-800 dark:text-gray-100 font-bold">Formateurs experts : Certifiés et expérimentés.</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 text-green-800 flex-shrink-0 mt-1" />
            <span className="ml-3 text-gray-800 dark:text-gray-100 font-bold">Flexibilité : Sessions programmées régulièrement.</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 text-green-800 flex-shrink-0 mt-1" />
            <span className="ml-3 text-gray-800 dark:text-gray-100 font-bold">Certification : Attestation reconnue en fin de formation.</span>
          </li>
        </ul>
        <p className="mt-4 text-gray-800 dark:text-gray-100 font-bold flex items-center">
                      <FaEnvelope  className="w-5 h-5 text-teal-700 flex-shrink-0 mt-1 mr-2" />
          Contactez-nous pour vous inscrire ou demander un programme sur mesure !
        </p>
      </section>
    </main>
  </div>
)

export default FormationInterentreprises
