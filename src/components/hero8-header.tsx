'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { FaPhone,FaCalendarAlt } from 'react-icons/fa'

export const HeroHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [formationsOpen, setFormationsOpen] = useState(false)
  const [commSubOpen, setCommSubOpen] = useState(false)
  const [finSubOpen, setFinSubOpen] = useState(false)
  const [qsseSubOpen, setQsseSubOpen] = useState(false)
  const [grhSubOpen, setGrhSubOpen] = useState(false)
  const [forSubOpen, setForSubOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState<'fr' | 'en' | 'ar'>('fr')
  const { theme, setTheme } = useTheme()

  const servicesRef = useRef<HTMLLIElement>(null)
  const formationsRef = useRef<HTMLLIElement>(null)
  const langRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (formationsRef.current && !formationsRef.current.contains(e.target as Node)) {
        setFormationsOpen(false)
        setCommSubOpen(false)
        setFinSubOpen(false)
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header>
        <div className="w-full bg-teal-600 p-0.5 md:flex md:items-center md:justify-between">
          <div className="flex justify-center ml-4">
        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </a>
        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </a>
        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 488 512">
            <path
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </a>
        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>
        <a href="#!" className="[&>svg]:h-4 [&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
      </div>
      <ul className="flex relative top-2 right-3 flex-wrap mr-3 font-bold text-sm text-white sm:mt-0">
          <li className='mr-4'>
              <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <FaPhone className="h-6 w-6 text-teal-100" />
            </span>
            06 75 34 37 30 
          </p>
          </li>
          <li>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <FaCalendarAlt className="h-6 w-6 text-teal-100" />
            </span>
            Prendre un RDV
          </p>
          </li>
      </ul>
      </div>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full z-30">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={140} height={40} />
          </Link>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu items */}
          <ul className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}>
            {/* Accueil */}
            <li>
              <Link href="/" className="block px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
                Accueil
              </Link>
            </li>
            {/* Qui sommes nous */}
            <li>
              <Link href="/about" className="block px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
                Qui sommes nous
              </Link>
            </li>
            {/* Nos Services */}
            <li ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(s => !s)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Nos Services
                <X className={`w-4 h-4 ml-1 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                  <li><Link href="/services/ingenierie" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Ingenierie de formation</Link></li>
                  <li><Link href="/services/formation-continue" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Formation continue: Formation qualifiante</Link></li>
                  <li><Link href="/services/conseil-recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Assistance conseil en recrutement</Link></li>
                  <li><Link href="/services/externalisation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Placement/externalisation RH</Link></li>
                  <li><Link href="/services/personnel-interimaire" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Fourniture de personnel intérimaire</Link></li>
                  <li><Link href="/services/prestations-informatiques" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Prestations informatiques</Link></li>
                  <li><Link href="/services/domiciliation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">La Domiciliation des entreprises</Link></li>
                  <li><Link href="/services/audit" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Audit</Link></li>
                </ul>
              )}
            </li>
            {/* Nos formations */}
            <li ref={formationsRef} className="relative">
              <button
                onClick={() => setFormationsOpen(f => !f)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Nos formations
                <X className={`w-4 h-4 ml-1 ${formationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {formationsOpen && (
                <ul className="absolute right-0 top-full mt-1 w-[42rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 z-50 grid grid-cols-4 gap-4">
                  <li>
                    <button
                      onClick={() => setCommSubOpen(c => !c)}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      Formation en Communication
                      <X className={`w-4 h-4 ${commSubOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {commSubOpen && (
                      <ul className="ml-2 absolute left-10 right-2 dark:bg-gray-900 border bg-amber-50 border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-50">
                        <li><Link href="/Nosformations/communication/Communication_interne" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Communication en interne</Link></li>
                        <li><Link href="/Nosformations/communication/COMMUNICATION_ENTREPRISE" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">LA COMMUNICATION EN ENTREPRISE</Link></li>
                        <li><Link href="/Nosformations/communication/Strategie_communication" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Stratégie de communication</Link></li>
                      </ul>
                    )}
                  </li>
                   {/* Foramation Submenu */}
                <li>
                  <button
                    onClick={() => setForSubOpen(f => !f)}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                    Formation
                    <X className={`w-4 h-4 transform transition-transform ${finSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {forSubOpen && (
                    <ul className="ml-2 absolute left-10 right-2 dark:bg-gray-900 border bg-gray-200 border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-50">
                      <li><Link href="/Nosformations/formation/metier_formateur" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"> Se former au métier de formateur </Link></li>
                      <li><Link href="/Nosformations/formation/action_formation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Réussir une action de formation</Link></li>
                    </ul>
                  )}
                </li>

                   {/* Finance Submenu */}
                <li>
                  <button
                    onClick={() => setFinSubOpen(f => !f)}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                    Formation en Finance, Comptabilité et Assurance
                    <X className={`w-4 h-4 transform transition-transform ${finSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {finSubOpen && (
                    <ul className="ml-2 absolute left-10 right-2 dark:bg-gray-900 border bg-amber-50 border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-50">
                      <li><Link href="/Nosformations/finance_comptabilite/Comptabilite_generale" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Comptabilité générale</Link></li>
                      <li><Link href="/Nosformations/finance_comptabilite/Comptabilite_Les_operations_courantes" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Opérations courantes</Link></li>
                      <li><Link href="/Nosformations/finance_comptabilite/Comptabilite_Analytique" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Comptabilité analytique</Link></li>
                      <li><Link href="/Nosformations/finance_comptabilite/Pratiquer_analyse_financiere" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Pratiquer l’analyse financière</Link></li>
                      <li><Link href="/Nosformations/finance_comptabilite/Analyse_financiere_du_tableau" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Analyse des flux de trésorerie</Link></li>
                    </ul>
                  )}
                </li>
                   <li>
                  <button
                    onClick={() => setGrhSubOpen(h => !h)}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                    GRH et Management
                    <X className={`w-4 h-4 transform transition-transform ${finSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {grhSubOpen && (
                    <ul className="ml-2 absolute left-10 right-2 dark:bg-gray-900 border bg-amber-50 border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-50">
                      <li><Link href="/Nosformations/GRH_Management/Management_equipe_projet" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Management d’équipe-projet</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/Gestion_conflits_vie_professionnelle" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Gestion des conflits dans la vie professionnelle</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/Missions_recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">GRH /Missions du RRH et recrutement</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/gestion_competences" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">GRH/La gestion des compétences</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/Gestion_Formation_Continue" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Formation Professionnelle</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/Fonction_RH" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Fonction RH, Evaluation mobilité et gestion des talents</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/GRH_remuneration" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">GRH/La rémunération</Link></li>
                      <li><Link href="/Nosformations/GRH_Management/GRH_Legislation_travail" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">GRH/Législation de travail</Link></li>
                    </ul>
                  )}
                </li>
                   <li>
                  <button
                    onClick={() => setQsseSubOpen(q => !q)}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                    Qualité-Santé-Sécurité-Environnement(QSSE)
                    <X className={`w-4 h-4 transform transition-transform ${finSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {qsseSubOpen && (
                    <ul className="ml-2 absolute left-10 right-2 dark:bg-gray-900 border bg-amber-50 border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-50">
                      <li><Link href="/Nosformations/QSSE/Sensibilisation_la_qualite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Sensibilisation à la qualité</Link></li>
                      <li><Link href="/Nosformations/QSSE/Les_fondamentaux_de_qualite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Les fondamentaux de la qualité et de l’ISO 9001</Link></li>
                      <li><Link href="/Nosformations/QSSE/Normes_HACCP" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Normes HACCP</Link></li>
                      <li><Link href="/Nosformations/QSSE/Hygiene_securite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Hygiène et sécurité « Sensibilisation à la santé et sécurité au travail »</Link></li>
                      <li><Link href="/Nosformations/QSSE/Management_Sante" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Management de la Santé/Sécurité et environnement dans l’entreprise</Link></li>
                      <li><Link href="/Nosformations/QSSE/Securite-_arbre_causes" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Santé/Sécurité- arbre des causes</Link></li>
                      <li><Link href="/Nosformations/QSSE/Prevention_risques" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Santé/Sécurité- Prévention des risques</Link></li>
                    </ul>
                  )}
                </li>

                  <li><Link href="/formations/management" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en Management</Link></li>
                  <li><Link href="/formations/tic" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en TIC</Link></li>
                  <li><Link href="/formations/vente-marketing" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en Vente & Marketing</Link></li>
                  <li><Link href="/formations/securite-routiere" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en sécurité routière</Link></li>
                  <li><Link href="/formations/conducteurs-routiers" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation conducteurs routiers</Link></li>
                  <li><Link href="/formations/industrielle" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation industrielle</Link></li>
                  <li><Link href="/formations/reconversion" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation de reconversion</Link></li>
                  <li><Link href="/formations/informatique" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en Informatique</Link></li>
                  <li><Link href="/formations/systems-info" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation SI</Link></li>
                  <li><Link href="/formations/bases-bigdata" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation Big Data</Link></li>
                  <li><Link href="/formations/bi" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation BI</Link></li>
                  <li><Link href="/formations/gestion-projets" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation gestion projets</Link></li>
                </ul>
              )}
            </li>
            {/* Autres */}
            <li>
              <Link href="/autres" className="block px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
                Autres
              </Link>
            </li>
            {/* Lang selector */}
            <li ref={langRef} className="relative">
              <button onClick={() => setLangOpen(o => !o)} className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
                {lang.toUpperCase()}<X className="w-4 h-4 ml-1" />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                  <li><button onClick={() => { setLang('fr'); setLangOpen(false) }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">FR</button></li>
                  <li><button onClick={() => { setLang('en'); setLangOpen(false) }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">EN</button></li>
                  <li><button onClick={() => { setLang('ar'); setLangOpen(false) }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">AR</button></li>
                </ul>
              )}
            </li>
            {/* Dark/light toggle */}
            <li className="flex items-center">
              <Switch checked={theme === 'dark'} onCheckedChange={val => setTheme(val ? 'dark' : 'light')} />
              {theme === 'dark' ? <Moon className="ml-2" /> : <Sun className="ml-2" />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}