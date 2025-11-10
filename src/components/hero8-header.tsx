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
  const [DFC6Open, setDFC6Open] = useState(false)
  const [DFC7Open, setDFC7Open] = useState(false)
  const [DFC8Open, setDFC8Open] = useState(false)
  const [DFC9Open, setDFC9Open] = useState(false)
  const [DFB1Open, setDFB1Open] = useState(false)
  const [DFB2Open, setDFB2Open] = useState(false)
  const [DFB3Open, setDFB3Open] = useState(false)

  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  const servicesRef = useRef<HTMLLIElement>(null)
  const autresRef = useRef<HTMLLIElement>(null)
  const formationsRef = useRef<HTMLLIElement>(null)

  //dynamic
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

  // Helpers to toggle only one formation submenu at a time
  const closeAllFormSubs = () => {
    setCommSubOpen(false)
    setFormSubOpen(false)
    setFinSubOpen(false)
    setGrhSubOpen(false)
    setQsseSubOpen(false)
    setDFC6Open(false);
    setDFC7Open(false);
    setDFC8Open(false);
    setDFC9Open(false);
    setDFB1Open(false);
    setDFB2Open(false);
    setDFB3Open(false);
  }

  const toggleComm = () => { closeAllFormSubs(); setCommSubOpen(o => !o) }
  const toggleForm = () => { closeAllFormSubs(); setFormSubOpen(o => !o) }
  const toggleFin = () => { closeAllFormSubs(); setFinSubOpen(o => !o) }
  const toggleGrh = () => { closeAllFormSubs(); setGrhSubOpen(o => !o) }
  const toggleQsse = () => { closeAllFormSubs(); setQsseSubOpen(o => !o) }
  const toggleDFC6 = () => { closeAllFormSubs(); setDFC6Open(o => !o) }
  const toggleDFC7 = () => { closeAllFormSubs(); setDFC7Open(o => !o) }
  const toggleDFC8 = () => { closeAllFormSubs(); setDFC8Open(o => !o) }
  const toggleDFC9 = () => { closeAllFormSubs(); setDFC9Open(o => !o) }
  const toggleDFB1 = () => { closeAllFormSubs(); setDFB1Open(o => !o) }
  const toggleDFB2 = () => { closeAllFormSubs(); setDFB2Open(o => !o) }
  const toggleDFB3 = () => { closeAllFormSubs(); setDFB3Open(o => !o) }

  // إغلاق القائمة على الجوال عند النقر على رابط
  const closeMobileMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
    setFormationsOpen(false)
    setAutresOpen(false)
    closeAllFormSubs()
  }

  // دالة مساعدة لعرض القوائم الفرعية للتكوين في الجوال
  const renderMobileFormationSubmenu = (title: string, code: string, toggleFunction: () => void, isOpen: boolean) => {
    const filteredFormations = formations.filter((f) => f.code === code)
    
    if (filteredFormations.length === 0) return null;

    return (
      <li className="border-b border-teal-600">
        <button
          onClick={toggleFunction}
          className="w-full text-left px-6 py-3 hover:bg-amber-100 dark:hover:bg-gray-700 flex justify-between items-center"
        >
          <span className="font-semibold">{title}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {isOpen && (
          <ul className="bg-amber-100 dark:bg-gray-700 border-l-2 border-teal-600">
            {filteredFormations.map((f) => (
              <li key={f.customCode} className="border-b border-teal-600 last:border-b-0">
                <Link
                  href={`/formations/${f.id}`}
                  className="block px-8 py-3 hover:bg-amber-50 dark:hover:bg-gray-600 text-sm"
                  onClick={closeMobileMenu}
                >
                  <span className="text-teal-700 dark:text-teal-400 font-medium">{f.customCode} : </span>
                  {f.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

 useEffect(() => {
  // scroll
  const onScroll = () => setScrolled(window.scrollY > 100)
  window.addEventListener('scroll', onScroll)

  // click outside
  const handleClickOutside = (e: MouseEvent) => {
    if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
      setServicesOpen(false)
    }
    if (autresRef.current && !autresRef.current.contains(e.target as Node)) {
      setAutresOpen(false)
    }
    if (formationsRef.current && !formationsRef.current.contains(e.target as Node)) {
      setFormationsOpen(false)
      closeAllFormSubs()
    }
  }
  document.addEventListener('mousedown', handleClickOutside)

  // fetch services & formations
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

  // cleanup
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
      <nav className={`bg-amber-300 font-bold dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full z-30 transition-all duration-400 ${scrolled ? "top-0" : "top-9"} flex items-center justify-between px-4 py-3 lg:py-4`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={140} height={40} className="hidden md:block" />
          <Image src="/logo.png" alt="Logo" width={100} height={30} className="block md:hidden" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-6">
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
              {servicesOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
            </button>
            {servicesOpen && (
              <ul className="absolute left-0 mt-2 w-96 bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden z-50">
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/Ingenierie_formation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Ingenierie de formation
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/Formation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Formation continue: Formation qualifiante
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/conseil_recrutement" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Assistance conseil en recrutement
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/EXTERNALISATION" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Placement/externalisation RH
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/Prestations_informatique" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Prestations informatique
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/interim_entreprise" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Fourniture de personnel intérimaire
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/NosServices/domiciliation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    La Domiciliation des entreprises
                  </Link>
                </li>
                {/* Dynamic Services */}
                {services.map(service => (
                  <li key={service.id} className="border-b border-teal-600 last:border-b-0">
                    <Link
                      href={`/services/${service.id}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
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
              {formationsOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
            </button>
            {formationsOpen && (
              <ul className="absolute right-32 top-full mt-1 w-full lg:w-[22rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-0 z-50 gap-4 lg:absolute lg:right-32 lg:top-full">
                <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-amber-200 p-4 gap-4">
                  {/* DFC1: GRH et Management */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleGrh}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC1 :</span> GRH et Management</span>
                      {grhSubOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {grhSubOpen && (
                      <ul className='mt-2 lg:w-[22rem] absolute left-full top-0 w-[32rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4 lg:absolute lg:left-full lg:top-0'>
                        {formations.filter((f) => f.code === "DFC1").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC2: Formation */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleForm}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC2 :</span> Formation</span>
                      {formSubOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {formSubOpen && (
                      <ul className='absolute left-full top-12 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC2").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC3: QSSE */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleQsse}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC3 :</span> Qualité-Santé-Sécurité-Environnement(QSSE)</span>
                      {qsseSubOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {qsseSubOpen && (
                      <ul className='absolute left-full top-0 mt-1 w-[36rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC3").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC4: Finance */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleFin}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC4 :</span> Formation en Finance, Comptabilité et Assurance</span>
                      {finSubOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {finSubOpen && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC4").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC5: Communication */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleComm}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC5 :</span> Formation en Communication</span>
                      {commSubOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {commSubOpen && (
                      <ul className="absolute left-full top-0 mt-1 w-[28rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4">
                        {formations.filter((f) => f.code === "DFC5").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC6: Management */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFC6}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC6 :</span> Formation en Management</span>
                      {DFC6Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFC6Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC6").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC7: TIC et Informatique */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFC7}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC7 :</span> Formation en TIC et Informatique</span>
                      {DFC7Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFC7Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC7").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC8: Vente & Marketing */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFC8}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC8 :</span> Formation en Vente & Marketing</span>
                      {DFC8Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFC8Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC8").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFC9: Sécurité routière */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFC9}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFC9 :</span> Formation en sécurité routière</span>
                      {DFC9Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFC9Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFC9").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFB1: Formation industrielle */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFB1}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFB1 :</span> Formation industrielle</span>
                      {DFB1Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFB1Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFB1").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFB2: Formation de reconversion */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFB2}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFB2 :</span> Formation de reconversion</span>
                      {DFB2Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFB2Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFB2").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* DFB3: Formation gestion projets */}
                  <li className="border-b border-teal-600 relative">
                    <button
                      onClick={toggleDFB3}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span><span className="text-teal-700">DFB3 :</span> Formation gestion projets</span>
                      {DFB3Open ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
                    </button>
                    {DFB3Open && (
                      <ul className='absolute left-full top-0 mt-1 w-[24rem] bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 z-50 gap-4'>
                        {formations.filter((f) => f.code === "DFB3").map((f) => (
                          <li key={f.customCode} className="border-b border-teal-600">
                            <Link
                              href={`/formations/${f.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="text-teal-700">{f.customCode} : </span>
                              {f.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Dynamic Formations */}
                  {formations.filter((f) => f.code === "DFC").map((f) => (
                    <li key={f.id} className="border-b border-teal-600">
                      <Link
                        href={`/Nosformations/${f.code}/${f.title.replace(/\s+/g, "_")}`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <span className="text-teal-700">{f.code}{f.id} : </span>
                        {f.title}
                      </Link>
                    </li>
                  ))}
                </div>
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
              {autresOpen ? <ChevronUp className="w-4 h-4 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
            </button>
            {autresOpen && (
              <ul className="absolute left-0 mt-2 w-60 bg-amber-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden z-50">
                <li className="border-b border-teal-600">
                  <Link href="/autre/Formation_Interentreprises" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Formation Interentreprises
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/autre/demande_devis" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Demande de devis
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/autre/Notre_vivier" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Notre vivier de competence
                  </Link>
                </li>
                <li className="border-b border-teal-600">
                  <Link href="/autre/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </li>

         

          {/* Dark/light toggle */}
          <li className="flex items-center">
            <Switch checked={theme === 'dark'} onCheckedChange={val => setTheme(val ? 'dark' : 'light')} />
            {theme === 'dark' ? <Moon className="ml-2" /> : <Sun className="ml-2" />}
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={closeMobileMenu}></div>

        {/* Mobile Menu Sidebar */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-amber-300 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" onClick={closeMobileMenu}>
              <Image src="/logo.png" alt="Logo" width={120} height={35} />
            </Link>
            <button onClick={closeMobileMenu} className="text-teal-800 dark:text-gray-200">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="overflow-y-auto h-full pb-20">
            <ul className="py-4">
              {/* Accueil Mobile */}
              <li>
                <Link href="/" className="block px-4 py-3 border-b border-teal-600 hover:bg-amber-200 dark:hover:bg-gray-800" onClick={closeMobileMenu}>
                  Accueil
                </Link>
              </li>

              {/* Qui sommes nous Mobile */}
              <li>
                <Link href="/about" className="block px-4 py-3 border-b border-teal-600 hover:bg-amber-200 dark:hover:bg-gray-800" onClick={closeMobileMenu}>
                  Qui sommes nous
                </Link>
              </li>

              {/* Nos Services Mobile */}
              <li className="border-b border-teal-600">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-200 dark:hover:bg-gray-800 flex justify-between items-center"
                >
                  Nos Services
                  {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {servicesOpen && (
                  <ul className="bg-amber-200 dark:bg-gray-800">
                    <li><Link href="/NosServices/Ingenierie_formation" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Ingenierie de formation</Link></li>
                    <li><Link href="/NosServices/Formation" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Formation continue</Link></li>
                    <li><Link href="/NosServices/conseil_recrutement" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Assistance conseil en recrutement</Link></li>
                    <li><Link href="/NosServices/EXTERNALISATION" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Placement/externalisation RH</Link></li>
                    <li><Link href="/NosServices/Prestations_informatique" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Prestations informatique</Link></li>
                    <li><Link href="/NosServices/interim_entreprise" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Fourniture de personnel intérimaire</Link></li>
                    <li><Link href="/NosServices/domiciliation" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>La Domiciliation des entreprises</Link></li>
                    {services.map(service => (
                      <li key={service.id}>
                        <Link href={`/services/${service.id}`} className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Nos formations Mobile */}
              <li className="border-b border-teal-600">
                <button
                  onClick={() => setFormationsOpen(!formationsOpen)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-200 dark:hover:bg-gray-800 flex justify-between items-center"
                >
                  Nos formations
                  {formationsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {formationsOpen && (
                  <ul className="bg-amber-200 dark:bg-gray-800">
                    {renderMobileFormationSubmenu("DFC1 : GRH et Management", "DFC1", toggleGrh, grhSubOpen)}
                    {renderMobileFormationSubmenu("DFC2 : Formation", "DFC2", toggleForm, formSubOpen)}
                    {renderMobileFormationSubmenu("DFC3 : Qualité-Santé-Sécurité-Environnement(QSSE)", "DFC3", toggleQsse, qsseSubOpen)}
                    {renderMobileFormationSubmenu("DFC4 : Formation en Finance, Comptabilité et Assurance", "DFC4", toggleFin, finSubOpen)}
                    {renderMobileFormationSubmenu("DFC5 : Formation en Communication", "DFC5", toggleComm, commSubOpen)}
                    {renderMobileFormationSubmenu("DFC6 : Formation en Management", "DFC6", toggleDFC6, DFC6Open)}
                    {renderMobileFormationSubmenu("DFC7 : Formation en TIC et Informatique", "DFC7", toggleDFC7, DFC7Open)}
                    {renderMobileFormationSubmenu("DFC8 : Formation en Vente & Marketing", "DFC8", toggleDFC8, DFC8Open)}
                    {renderMobileFormationSubmenu("DFC9 : Formation en sécurité routière", "DFC9", toggleDFC9, DFC9Open)}
                    {renderMobileFormationSubmenu("DFB1 : Formation industrielle", "DFB1", toggleDFB1, DFB1Open)}
                    {renderMobileFormationSubmenu("DFB2 : Formation de reconversion", "DFB2", toggleDFB2, DFB2Open)}
                    {renderMobileFormationSubmenu("DFB3 : Formation gestion projets", "DFB3", toggleDFB3, DFB3Open)}
                  </ul>
                )}
              </li>

              {/* Autres Mobile */}
              <li className="border-b border-teal-600">
                <button
                  onClick={() => setAutresOpen(!autresOpen)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-200 dark:hover:bg-gray-800 flex justify-between items-center"
                >
                  Autres
                  {autresOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {autresOpen && (
                  <ul className="bg-amber-200 dark:bg-gray-800">
                    <li><Link href="/autre/Formation_Interentreprises" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Formation Interentreprises</Link></li>
                    <li><Link href="/autre/demande_devis" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Demande de devis</Link></li>
                    <li><Link href="/autre/Notre_vivier" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Notre vivier de competence</Link></li>
                    <li><Link href="/autre/contact" className="block px-6 py-2 border-b border-teal-600 hover:bg-amber-100 dark:hover:bg-gray-700" onClick={closeMobileMenu}>Contact</Link></li>
                  </ul>
                )}
              </li>

             

              {/* Theme Toggle Mobile */}
              <li className="flex items-center justify-between px-4 py-3 border-b border-teal-600">
                <span>Thème</span>
                <div className="flex items-center">
                  <Switch checked={theme === 'dark'} onCheckedChange={val => setTheme(val ? 'dark' : 'light')} />
                  {theme === 'dark' ? <Moon className="ml-2 w-5 h-5" /> : <Sun className="ml-2 w-5 h-5" />}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger mobile and Login Button for Mobile Header */}
        <div className="lg:hidden flex items-center space-x-4">
         
          
          {/* Hamburger mobile */}
          <button
            className="text-teal-800 font-bold text-3xl dark:text-gray-200"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}