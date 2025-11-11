'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon, ChevronLeft } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import Header from './header'
import { ChevronDown, ChevronUp } from "lucide-react";

export const HeroHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [autresOpen, setAutresOpen] = useState(false)
  const [formationsOpen, setFormationsOpen] = useState(false)
  const [activeFormation, setActiveFormation] = useState<string | null>(null)

  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  const servicesRef = useRef<HTMLLIElement>(null)
  const autresRef = useRef<HTMLLIElement>(null)
  const formationsRef = useRef<HTMLLIElement>(null)

  // Dynamic interface
  interface Item {
    id: number
    title: string
    description: string
    code?: string
    objectifs?: string
    population?: string
    duree?: string
    image?: string
    customCode?: string
  }

  const [services, setServices] = useState<Item[]>([])
  const [formations, setFormations] = useState<Item[]>([])

  // Formation categories
  const formationCategories = [
    { code: 'DFC1', title: 'GRH et Management' },
    { code: 'DFC2', title: 'Formation' },
    { code: 'DFC3', title: 'Qualité-Santé-Sécurité-Environnement (QSSE)' },
    { code: 'DFC4', title: 'Finance, Comptabilité et Assurance' },
    { code: 'DFC5', title: 'Communication' },
    { code: 'DFC6', title: 'Management' },
    { code: 'DFC7', title: 'TIC et Informatique' },
    { code: 'DFC8', title: 'Vente & Marketing' },
    { code: 'DFC9', title: 'Sécurité routière' },
    { code: 'DFB1', title: 'Formation industrielle' },
    { code: 'DFB2', title: 'Formation de reconversion' },
    { code: 'DFB3', title: 'Formation gestion projets' },
  ];

  const toggleFormation = (code: string) => {
    console.log('Toggle formation:', code, 'Current active:', activeFormation);
    setActiveFormation(activeFormation === code ? null : code);
  };

  // Get formations by code
  const getFormationsByCode = (code: string) => {
    return formations.filter(f => f.code === code);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)

    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (autresRef.current && !autresRef.current.contains(e.target as Node)) {
        setAutresOpen(false)
      }
      if (formationsRef.current && !formationsRef.current.contains(e.target as Node)) {
        setFormationsOpen(false)
        setActiveFormation(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    const fetchData = async () => {
      try {
        const resServices = await fetch('/api/services')
        const resFormations = await fetch('/api/formations')

        if (resServices.ok) setServices(await resServices.json())
        if (resFormations.ok) setFormations(await resFormations.json())
      } catch (err) {
        console.error('Erreur chargement navbar:', err)
      }
    }
    fetchData()

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
    setFormationsOpen(false)
    setAutresOpen(false)
    setActiveFormation(null)
  }

  return (
    <>
      <style jsx global>{`
        .nav-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-menu-item {
          transition: all 0.2s ease-in-out;
        }
        
        .mobile-menu-item:hover {
          transform: translateX(8px);
        }
        
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #0d9488 transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #0d9488;
          border-radius: 3px;
        }
        
        .nav-shadow {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-nav-shadow {
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .formation-submenu {
          border-right: 3px solid #0d9488;
          background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
        }
        
        .dark .formation-submenu {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
        }

        @keyframes slideDown {
          from { 
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>

      <header className="relative">
        {/* Top Header */}
        <div className={`transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
          <Header />
        </div>

        {/* Main Navigation */}
        <nav className={`
          bg-amber-300 font-bold dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 
          fixed w-full z-50 transition-all duration-400 flex items-center justify-between 
          px-4 py-3 lg:py-4 nav-shadow
          ${scrolled ? "top-0" : "top-9"}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center z-50" onClick={closeMobileMenu}>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={140} 
              height={40}
              className="w-32 lg:w-36 transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:items-center lg:space-x-6">
            <li>
              <Link href="/" className="px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 rounded-lg">
                Accueil
              </Link>
            </li>
            
            <li>
              <Link href="/about" className="px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 rounded-lg">
                Qui sommes nous
              </Link>
            </li>

            {/* Services Dropdown */}
            <li ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 rounded-lg"
              >
                Nos Services
                {servicesOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden z-50">
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/Ingenierie_formation" className="block px-4 py-3 transition-colors">
                      Ingénierie de formation
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/Formation" className="block px-4 py-3 transition-colors">
                      Formation continue: Formation qualifiante
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/conseil_recrutement" className="block px-4 py-3 transition-colors">
                      Assistance conseil en recrutement
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/EtudesConseil" className="block px-4 py-3 transition-colors">
                      Études & Conseil
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/EXTERNALISATION" className="block px-4 py-3 transition-colors">
                      Placement/externalisation RH
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/Prestations_informatique" className="block px-4 py-3 transition-colors">
                      Prestations informatique
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/interim_entreprise" className="block px-4 py-3 transition-colors">
                      Fourniture de personnel intérimaire
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/NosServices/domiciliation" className="block px-4 py-3 transition-colors">
                      La Domiciliation des entreprises
                    </Link>
                  </li>
                  {services.map(service => (
                    <li key={service.id} className="border-b border-gray-200 dark:border-gray-600 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <Link
                        href={`/services/${service.id}`}
                        className="block px-4 py-3 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Formations Dropdown */}
            <li ref={formationsRef} className="relative">
              <button
                onClick={() => {
                  setFormationsOpen(!formationsOpen);
                  setActiveFormation(null);
                }}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 rounded-lg"
              >
                Nos formations
                {formationsOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
              </button>
              
              {/* Formations Dropdown Menu */}
              {formationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-[800px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-lg overflow-hidden z-50">
                  <div className="flex h-[500px]">
                    {/* Submenu Panel - LEFT Side */}
                    <div className="w-1/2 formation-submenu overflow-y-auto scrollbar-thin">
                      <div className="p-6 h-full">
                        {activeFormation ? (
                          <div className="animate-fadeIn">
                            <h3 className="text-lg font-bold text-teal-700 dark:text-teal-400 mb-4 flex items-center">
                              <span className="bg-teal-600 text-white px-3 py-1 rounded-md mr-3 text-sm">
                                {activeFormation}
                              </span>
                              <span className="text-gray-800 dark:text-white">
                                {formationCategories.find(cat => cat.code === activeFormation)?.title}
                              </span>
                            </h3>
                            
                            <div className="space-y-3">
                              {getFormationsByCode(activeFormation).length > 0 ? (
                                getFormationsByCode(activeFormation).map((formation) => (
                                  <Link
                                    key={formation.id}
                                    href={`/formations/${formation.id}`}
                                    className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-md transition-all group"
                                    onClick={closeMobileMenu}
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div className="flex-shrink-0 w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                                        <span className="text-teal-600 dark:text-teal-400 text-xs font-bold">
                                          {formation.customCode || 'F'}
                                        </span>
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors text-sm leading-tight">
                                          {formation.title}
                                        </h4>
                                        {formation.duree && (
                                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            Durée: {formation.duree}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                ))
                              ) : (
                                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">📚</span>
                                  </div>
                                  <p className="text-sm">Aucune formation disponible</p>
                                  <p className="text-xs mt-1">Bientôt de nouvelles formations</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl">🎓</span>
                            </div>
                            <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">
                              Sélectionnez une catégorie
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                              Choisissez une catégorie de formation pour voir les détails des formations disponibles
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Main Formations List - RIGHT Side */}
                    <div className="w-1/2 border-l border-gray-200 dark:border-gray-600 overflow-y-auto scrollbar-thin">
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-teal-700 dark:text-teal-400 mb-4 px-2">
                          Catégories de Formation
                        </h3>
                        <div className="space-y-2">
                          {formationCategories.map((category) => {
                            const categoryFormations = getFormationsByCode(category.code);
                            return (
                              <button
                                key={category.code}
                                onClick={() => toggleFormation(category.code)}
                                className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
                                  activeFormation === category.code 
                                    ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-2 border-teal-200 dark:border-teal-800' 
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-transparent'
                                }`}
                              >
                                <div className="flex items-center space-x-2">
                                  <ChevronLeft 
                                    className={`w-4 h-4 transition-transform ${
                                      activeFormation === category.code ? '-rotate-90 text-teal-600' : 'text-gray-400'
                                    }`} 
                                  />
                                  <div className="flex items-center space-x-3">
                                    <span className="font-semibold text-teal-600 dark:text-teal-400 min-w-[60px]">
                                      {category.code}
                                    </span>
                                    <span className="text-sm text-left">{category.title}</span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {categoryFormations.length > 0 && (
                                    <span className="text-xs bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-2 py-1 rounded-full">
                                      {categoryFormations.length}
                                    </span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Autres Dropdown */}
            <li ref={autresRef} className="relative">
              <button
                onClick={() => setAutresOpen(!autresOpen)}
                className="flex items-center px-3 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 rounded-lg"
              >
                Autres
                {autresOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
              </button>
              {autresOpen && (
                <ul className="absolute left-0 mt-2 w-60 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden z-50">
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/autre/Formation_Interentreprises" className="block px-4 py-3 transition-colors">
                      Formation Interentreprises
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/autre/demande_devis" className="block px-4 py-3 transition-colors">
                      Demande de devis
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/autre/Notre_vivier" className="block px-4 py-3 transition-colors">
                      Notre vivier de compétence
                    </Link>
                  </li>
                  <li className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Link href="/autre/contact" className="block px-4 py-3 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Theme Toggle */}
            <li className="flex items-center space-x-2 pl-4">
              <Sun className="w-4 h-4" />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={val => setTheme(val ? 'dark' : 'light')} 
              />
              <Moon className="w-4 h-4" />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-teal-800 dark:text-gray-200 z-50 p-2 rounded-lg hover:bg-amber-400/50 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden nav-transition"
              onClick={closeMobileMenu}
            />
          )}

          {/* Mobile Menu */}
          <div className={`
            fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 
            transform transition-transform duration-300 ease-in-out z-50 lg:hidden mobile-nav-shadow overflow-y-auto
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col h-full pt-16 pb-6">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                <X size={24} />
              </button>

              {/* Mobile Menu Items */}
              <div className="space-y-1 px-4">
                <Link href="/" onClick={closeMobileMenu} className="mobile-menu-item block py-4 px-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all border-b border-gray-100 dark:border-gray-700">
                  Accueil
                </Link>

                <Link href="/about" onClick={closeMobileMenu} className="mobile-menu-item block py-4 px-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all border-b border-gray-100 dark:border-gray-700">
                  Qui sommes nous
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="border-b border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="mobile-menu-item w-full flex items-center justify-between py-4 px-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  >
                    Nos Services
                    {servicesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {servicesOpen && (
                    <div className="mt-1 space-y-1 pl-6 pb-3 animate-slideDown">
                      <Link href="/NosServices/Ingenierie_formation" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Ingénierie de formation
                      </Link>
                      <Link href="/NosServices/Formation" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Formation continue
                      </Link>
                      <Link href="/NosServices/conseil_recrutement" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Conseil recrutement
                      </Link>
                      <Link href="/NosServices/EtudesConseil" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Études & Conseil
                      </Link>
                      <Link href="/NosServices/EXTERNALISATION" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Externalisation RH
                      </Link>
                      <Link href="/NosServices/Prestations_informatique" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Prestations informatique
                      </Link>
                      <Link href="/NosServices/interim_entreprise" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Personnel intérimaire
                      </Link>
                      <Link href="/NosServices/domiciliation" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Domiciliation
                      </Link>
                      {services.map(service => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Formations Dropdown */}
<div className="border-b border-gray-100 dark:border-gray-700">
  <Link
    href="/responsive-header"
    onClick={closeMobileMenu}
    className="mobile-menu-item w-full flex items-center justify-between py-4 px-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
  >
    <span>Nos formations</span>
    <ChevronDown className="w-5 h-5 text-gray-400" />
  </Link>
</div>

                {/* Mobile Autres Dropdown */}
                <div className="border-b border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => setAutresOpen(!autresOpen)}
                    className="mobile-menu-item w-full flex items-center justify-between py-4 px-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  >
                    Autres
                    {autresOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {autresOpen && (
                    <div className="mt-1 space-y-1 pl-6 pb-3 animate-slideDown">
                      <Link href="/autre/Formation_Interentreprises" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Formation Interentreprises
                      </Link>
                      <Link href="/autre/demande_devis" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Demande de devis
                      </Link>
                      <Link href="/autre/Notre_vivier" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Vivier de compétence
                      </Link>
                      <Link href="/autre/contact" onClick={closeMobileMenu} className="block py-3 px-4 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors">
                        Contact
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Theme Toggle */}
                <div className="flex items-center justify-between py-4 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg mt-4">
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">Thème</span>
                  <div className="flex items-center space-x-2">
                    <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <Switch 
                      checked={theme === 'dark'} 
                      onCheckedChange={val => setTheme(val ? 'dark' : 'light')} 
                    />
                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}