'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Sample data for "Nos domaines de formation" with paths
const formations = [
  {
    title: 'DFC1 : GRH et Management',
    links: [
      { name: 'DFC11 : Management d’équipe-projet', path: '/Nosformations/GRH_Management/Management_equipe_projet' },
      { name: 'DFC12 : Gestion des conflits dans la vie professionnelle', path: '/Nosformations/GRH_Management/Gestion_conflits_vie_professionnelle' },
      { name: 'DFC13 : GRH /Missions du RRH et recrutement', path: '/Nosformations/GRH_Management/Missions_recrutement' },
      { name: 'DFC14 : GRH/La gestion des compétences', path: '/Nosformations/GRH_Management/gestion_competences' },
      { name: 'DFC15 : Formation Professionnelle', path: '/Nosformations/GRH_Management/Gestion_Formation_Continue' },
      { name: 'DFC16 : Fonction RH, Evaluation mobilité et gestion des talents', path: '/Nosformations/GRH_Management/Fonction_RH' },
      { name: 'DFC17 : GRH/La rémunération', path: '/Nosformations/GRH_Management/GRH_remuneration' },
      { name: 'DFC18 : GRH/Législation de travail', path: '/Nosformations/GRH_Management/GRH_Legislation_travail' },
    ],
  },
  {
    title: 'DFC2 : Formation',
    links: [
      { name: 'DFC21 : Se former au métier de formateur', path: '/Nosformations/formation/metier_formateur' },
      { name: 'DFC22 : Réussir une action de formation', path: '/Nosformations/formation/action_formation' },
    ],
  },
  {
    title: 'DFC3 : Qualité-Santé-Sécurité-Environnement (QSSE)',
    links: [
      { name: 'DFC31 : Sensibilisation à la qualité', path: '/Nosformations/QSSE/Sensibilisation_la_qualite' },
      { name: 'DFC32 : Les fondamentaux de la qualité et de l’ISO 9001', path: '/Nosformations/QSSE/Les_fondamentaux_de_qualite' },
      { name: 'DFC33 : Normes HACCP', path: '/Nosformations/QSSE/Normes_HACCP' },
      { name: 'DFC34 : Hygiène et sécurité «Sensibilisation à la santé et sécurité au travail»', path: '/Nosformations/QSSE/Hygiene_securite' },
      { name: 'DFC35 : Management de la Santé/Sécurité et environnement dans l’entreprise', path: '/Nosformations/QSSE/Management_Sante' },
      { name: 'DFC36 : Santé/Sécurité- arbre des causes', path: '/Nosformations/QSSE/Securite-_arbre_causes' },
      { name: 'DFC37 : Santé/Sécurité- Prévention des risques', path: '/Nosformations/QSSE/Prevention_risques' },
    ],
  },
  {
    title: 'DFC4 : Formation en Finance, Comptabilité et Assurance',
    links: [
      { name: 'DFC41 : Comptabilité générale', path: '/Nosformations/finance_comptabilite/Comptabilite_generale' },
      { name: 'DFC42 : Opérations courantes', path: '/Nosformations/finance_comptabilite/Comptabilite_Les_operations_courantes' },
      { name: 'DFC43 : Comptabilité analytique', path: '/Nosformations/finance_comptabilite/Comptabilite_Analytique' },
      { name: 'DFC44 : Pratiquer l’analyse financière', path: 'Nosformations/finance_comptabilite/Pratiquer_analyse_financiere' },
      { name: 'DFC45 : Analyse des flux de trésorerie', path: 'Nosformations/finance_comptabilite/Analyse_financiere_du_tableau' }
    ],
  },
   {
    title: 'DFC5 : Formation en Communication',
    links: [
      { name: 'DFC51 : Communication en interne', path: '/Nosformations/communication/Communication_interne' },
      { name: 'DFC52 : LA COMMUNICATION EN ENTREPRISE', path: '/Nosformations/communication/COMMUNICATION_ENTREPRISE' },
      { name: 'DFC53 : Stratégie de communication', path: '/Nosformations/communication/Strategie_communication' },
    ],
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl mt-6 mb-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Nos domaines de formation
        </h1>
        <div className="mt-2 h-1 w-20 bg-teal-600 mx-auto rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <ul className="space-y-4">
          {formations.map((domain, idx) => {
            const [prefix, rest] = domain.title.split(' : ');
            return (
              <li key={domain.title} className="border-b last:border-b-0 pb-2">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center text-lg font-medium focus:outline-none"
                >
                  <span>
                    <span className="text-teal-600">{prefix}</span>
                    <span> : </span>
                    <span className="text-black dark:text-gray-100">{rest}</span>
                  </span>
                  {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div
                  className={`mt-2 overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="pl-4 space-y-1 font-bold">
                    {domain.links.map((link) => (
                      <li key={link.name} className='text-gray-600'>
                        <a href={link.path} className="text-balck hover:underline">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
