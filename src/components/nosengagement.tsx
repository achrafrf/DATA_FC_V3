import React from 'react'
import { FaCheckCircle
   } from "react-icons/fa";
const Nosengagement = () => {
  return (
    <div>
      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                      <div className="w-full">
                      <h1 className="mb-13 mt-8   font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Nos<mark className="px-2 ml-1 text-white bg-teal-600 rounded-sm dark:bg-teal-500">Engagements</mark></h1>
                      <ul className="space-y-4 italic font-semibold mt-8 text-xl text-gray-700 list-none dark:text-gray-400">
        {[
          "Garantir des prestations de qualité répondant aux exigences de nos clients.",
          "Être un partenaire d’excellence de nos clients.",
          "Fournir des solutions innovantes et sur mesure pour chaque entreprise cliente.",
          "Satisfaire nos clients dans le but de maintenir une relation confirmée et durable.",
          "Mettre en place des solutions en ressources humaines adaptées aux structures et aux enjeux de chaque entreprise cliente.",
          "Assurer une déontologie de travail dans toutes nos interventions.",
          "Viser l’excellence et la perfection dans la réalisation de toutes nos prestations.",
          "Adopter des pratiques responsables et un comportement éthique avec nos clients."
        ].map((text, i) => (
          <li key={i} className="flex items-center gap-x-2 dark:text-white">
            <FaCheckCircle className="text-teal-600 shrink-0" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
                      </div>
                  </div>
    </div>
  )
}

export default Nosengagement;
