'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import Header from './header'
import { ChevronDown, ChevronUp } from "lucide-react";


export const HeroHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [autresOpen, setAutresOpen] = useState(false)
  const [formationsOpen, setFormationsOpen] = useState(false)
  const [commSubOpen, setCommSubOpen] = useState(false)
  const [formSubOpen, setFormSubOpen] = useState(false)
  const [finSubOpen, setFinSubOpen] = useState(false)
  const [grhSubOpen, setGrhSubOpen] = useState(false)
  const [qsseSubOpen, setQsseSubOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState<'fr' | 'en' | 'ar'>('fr')
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  const servicesRef = useRef<HTMLLIElement>(null)
  const autresRef = useRef<HTMLLIElement>(null)
  const formationsRef = useRef<HTMLLIElement>(null)
  const langRef = useRef<HTMLLIElement>(null)

  // Helpers to toggle only one formation submenu at a time
  const closeAllFormSubs = () => {
    setCommSubOpen(false)
    setFormSubOpen(false)
    setFinSubOpen(false)
    setGrhSubOpen(false)
    setQsseSubOpen(false)
  }
  const toggleComm = () => { closeAllFormSubs(); setCommSubOpen(o => !o) }
  const toggleForm = () => { closeAllFormSubs(); setFormSubOpen(o => !o) }
  const toggleFin = () => { closeAllFormSubs(); setFinSubOpen(o => !o) }
  const toggleGrh = () => { closeAllFormSubs(); setGrhSubOpen(o => !o) }
  const toggleQsse = () => { closeAllFormSubs(); setQsseSubOpen(o => !o) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)

    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (autresRef.current && !autresRef.current.contains(e.target as Node)) setAutresOpen(false)
      if (formationsRef.current && !formationsRef.current.contains(e.target as Node)) {
        setFormationsOpen(false)
        closeAllFormSubs()
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header>
        <div
        className={`transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      <nav className={`bg-white font-bold dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full z-30  transition-all duration-400  ${scrolled ? "top-0" : "top-9"}  flex items-center justify-between px-4 py-3 lg:py-4 `}>
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
               {/* Nos formations */}
            <li ref={formationsRef} className="relative">
              <button
                onClick={() => setFormationsOpen(f => !f)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Nos formations
{formationsOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }              </button>
              {formationsOpen && (
                <ul className="absolute right-32 top-full mt-1 w-[42rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50  gap-4">
                  <li className="border-b-1 border-teal-600">
                  <button
  onClick={toggleGrh}
  className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
>
  <span>
    <span className="text-teal-700">DFC1 :</span> GRH et Management
  </span>
  {grhSubOpen ? (
    <ChevronUp className="w-4 h-4 transition-transform" />
  ) : (
    <ChevronDown className="w-4 h-4 transition-transform" />
  )}
</button>

                  {grhSubOpen && (
              <ul className='absolute left-full top-0 mt-1 w-[32rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/Management_equipe_projet" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC11 : </span>Management d’équipe-projet</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/Gestion_conflits_vie_professionnelle" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC12 : </span>Gestion des conflits dans la vie professionnelle</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/Missions_recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC13 : </span>GRH /Missions du RRH et recrutement</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/gestion_competences" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC14 : </span>GRH/La gestion des compétences</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/Gestion_Formation_Continue" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC15 : </span>Formation Professionnelle</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/Fonction_RH" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC16 : </span>Fonction RH, Evaluation mobilité et gestion des talents</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/GRH_remuneration" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC17 : </span>GRH/La rémunération</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/GRH_Management/GRH_Legislation_travail" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC18 : </span>GRH/Législation de travail</Link></li>
                    </ul>
                  )}
                </li>
                 {/* Foramation Submenu */}
                <li className="border-b-1 border-teal-600">
                  <button
                    onClick={toggleForm}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                  DFC2 : Formation
{formSubOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }                     </button>
                  {formSubOpen && (
              <ul className='absolute left-full top-12 mt-1 w-[24rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/formation/metier_formateur" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC21 : </span> Se former au métier de formateur </Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/formation/action_formation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC22 : </span>Réussir une action de formation</Link></li>
                    </ul>
                  )}
                </li>
                 <li className="border-b-1 border-teal-600">
                  <button
                    onClick={toggleQsse}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                  DFC3 : Qualité-Santé-Sécurité-Environnement(QSSE)
{qsseSubOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }                   </button>
                  {qsseSubOpen && (
              <ul className='absolute left-full top-0 mt-1 w-[36rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Sensibilisation_la_qualite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC31 : </span>Sensibilisation à la qualité</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Les_fondamentaux_de_qualite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC32 : </span>Les fondamentaux de la qualité et de l’ISO 9001</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Normes_HACCP" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC33 : </span>Normes HACCP</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Hygiene_securite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC34 : </span>Hygiène et sécurité «Sensibilisation à la santé et sécurité au travail»</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Management_Sante" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC35 : </span>Management de la Santé/Sécurité et environnement dans l’entreprise</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Securite-_arbre_causes" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC36 : </span>Santé/Sécurité- arbre des causes</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/QSSE/Prevention_risques" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC37 : </span>Santé/Sécurité- Prévention des risques</Link></li>
                    </ul>
                  )}
                </li>
                   {/* Finance Submenu */}
                <li className="border-b-1 border-teal-600">
                  <button
                    onClick={toggleFin}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                  >
                    DFC4 : Formation en Finance, Comptabilité et Assurance
{finSubOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }                    </button>
                  {finSubOpen && (
              <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/finance_comptabilite/Comptabilite_generale" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC41 : </span>Comptabilité générale</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/finance_comptabilite/Comptabilite_Les_operations_courantes" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC42 : </span>Opérations courantes</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/finance_comptabilite/Comptabilite_Analytique" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC43 : </span>Comptabilité analytique</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/finance_comptabilite/Pratiquer_analyse_financiere" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC44 : </span>Pratiquer l’analyse financière</Link></li>
                      <li className="border-b-1 border-teal-600"><Link href="/Nosformations/finance_comptabilite/Analyse_financiere_du_tableau" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC45 : </span>Analyse des flux de trésorerie</Link></li>
                    </ul>
                  )}
                </li>
                   
                  <li className="border-b-1 border-teal-600">
                    <button
                      onClick={toggleComm}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                    DFC5 : Formation en Communication
{commSubOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }                    </button>
                    {commSubOpen && (
              <ul className='absolute left-full top-0 mt-1 w-[28rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        <li className="border-b-1 border-teal-600"><Link href="/Nosformations/communication/Communication_interne" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC51 : </span>Communication en interne</Link></li>
                        <li className="border-b-1 border-teal-600"><Link href="/Nosformations/communication/COMMUNICATION_ENTREPRISE" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC52 : </span>LA COMMUNICATION EN ENTREPRISE</Link></li>
                        <li className="border-b-1 border-teal-600"><Link href="/Nosformations/communication/Strategie_communication" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span className='text-teal-700'>DFC53 : </span>Stratégie de communication</Link></li>
                      </ul>
                    )}
                  </li>

                
                  

                  <li className="border-b-1 border-teal-600"><Link href="/formations/management" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en Management</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/tic" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en TIC</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/vente-marketing" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en Vente & Marketing</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/securite-routiere" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en sécurité routière</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/conducteurs-routiers" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation conducteurs routiers</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/industrielle" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation industrielle</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/reconversion" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation de reconversion</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/informatique" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation en Informatique</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/systems-info" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation SI</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/bases-bigdata" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation Big Data</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/bi" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation BI</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/formations/gestion-projets" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">Formation gestion projets</Link></li>
                </ul>
              )}
            </li>

            {/* Nos Services */}
            <li ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(s => !s)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Nos Services
{servicesOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden z-50">
                  <li className="border-b-1 border-teal-600"><Link  href="/NosServices/Ingenierie_formation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Ingenierie de formation</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/NosServices/Formation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Formation continue: Formation qualifiante</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/NosServices/conseil_recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Assistance conseil en recrutement</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/NosServices/EXTERNALISATION" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Placement/externalisation RH</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/services/personnel-interimaire" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Fourniture de personnel intérimaire</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/services/prestations-informatiques" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Prestations informatiques</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/NosServices/interim_entreprise" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">La Domiciliation des entreprises</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/services/audit" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Audit</Link></li>
                </ul>
              )}
            </li>
            {/* Autres */}
           <li ref={autresRef} className="relative">
              <button
                onClick={() => setAutresOpen(o => !o)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Autres
{autresOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  }              </button>
              {autresOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden z-50">
                  <li className="border-b-1 border-teal-600"><Link href="/services/ingenierie" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Formation Interentreprises</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/services/formation-continue" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Demande de devis</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/services/conseil-recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Notre vivier de competence</Link></li>
                  <li className="border-b-1 border-teal-600"><Link href="/services/conseil-recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link></li>
                </ul>
              )}
            </li>
            {/* Lang selector */}
            <li ref={langRef} className="relative">
              <button onClick={() => setLangOpen(o => !o)} className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400">
                {lang.toUpperCase()}{langOpen
    ? <ChevronUp className="w-4 h-4 transition-transform" />
    : <ChevronDown className="w-4 h-4 transition-transform" />
  } 
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden z-50">
                  <li className="border-b-1 border-teal-600"><button onClick={() => { setLang('fr'); setLangOpen(false) }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">FR</button></li>
                  <li className="border-b-1 border-teal-600"><button onClick={() => { setLang('en'); setLangOpen(false) }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">EN</button></li>
                  <li className="border-b-1 border-teal-600"><button onClick={() => { setLang('ar'); setLangOpen(false) }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">AR</button></li>
                </ul>
              )}
            </li>
            
            {/* Dark/light toggle */}
            <li className="flex items-center">
              <Switch checked={theme === 'dark'} onCheckedChange={val => setTheme(val ? 'dark' : 'light')} />
              {theme === 'dark' ? <Moon className="ml-2" /> : <Sun className="ml-2" />}
            </li>
          </ul>
      </nav>
    </header>
  )
}