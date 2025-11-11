// app/responsive-header/page.tsx
'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ChevronDown, ChevronUp } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface FormationItem {
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

export default function ResponsiveHeaderPage() {
  const router = useRouter()
  const [formations, setFormations] = useState<FormationItem[]>([])
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())

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
  ]

  const toggleCategory = (code: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(code)) {
        newSet.delete(code)
      } else {
        newSet.add(code)
      }
      return newSet
    })
  }

  // Get formations by code
  const getFormationsByCode = (code: string) => {
    return formations.filter(f => f.code === code)
  }

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const res = await fetch('/api/formations')
        if (res.ok) {
          const data = await res.json()
          setFormations(data)
        }
      } catch (err) {
        console.error('Erreur chargement formations:', err)
      }
    }
    fetchFormations()
  }, [])

  const handleClose = () => {
    router.back()
  }

  return (
    <>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        
        .mobile-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .mobile-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="bg-amber-300 dark:bg-gray-900 border-b border-amber-400 dark:border-gray-700 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 py-4">
            <h1 className="text-xl font-bold text-teal-800 dark:text-teal-400">
              Nos Formations
            </h1>
            <button
              onClick={handleClose}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 animate-slideIn">
          {/* Welcome Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-amber-200 dark:border-gray-600">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                  Formations Professionnelles
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Découvrez nos programmes de formation
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Choisissez une catégorie pour explorer nos formations spécialisées 
              adaptées à vos besoins professionnels.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            {formationCategories.map((category) => {
              const categoryFormations = getFormationsByCode(category.code)
              const isOpen = openCategories.has(category.code)
              
              return (
                <div 
                  key={category.code}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.code)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">
                          {category.code}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 dark:text-white text-sm leading-tight">
                          {category.title}
                        </h3>
                        {categoryFormations.length > 0 && (
                          <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                            {categoryFormations.length} formation(s) disponible(s)
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {categoryFormations.length > 0 && (
                        <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                          {categoryFormations.length}
                        </span>
                      )}
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {/* Formations List */}
                  {isOpen && (
                    <div className="animate-fadeIn border-t border-gray-100 dark:border-gray-700">
                      <div className="p-4 space-y-3">
                        {categoryFormations.length > 0 ? (
                          categoryFormations.map((formation) => (
                            <Link
                              key={formation.id}
                              href={`/formations/${formation.id}`}
                              className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500 transition-all duration-200 hover:shadow-md group"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-white text-xs font-bold">
                                    {formation.customCode || 'F'}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors text-sm leading-tight">
                                    {formation.title}
                                  </h4>
                                  {formation.duree && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      ⏱️ {formation.duree}
                                    </p>
                                  )}
                                  {formation.population && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                      👥 {formation.population}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <div className="text-center py-6">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl">📚</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Aucune formation disponible
                            </p>
                            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                              Bientôt de nouveaux programmes
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}