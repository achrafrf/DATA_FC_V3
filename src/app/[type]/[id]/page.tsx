'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Target, Users, Clock, Book } from "lucide-react"
import NotFoundItem from "@/app/not-found"

interface Item {
  id: number
  title: string
  description: string
  image?: string
  objectifs?: string
  population?: string
  duree?: string
}

export default function DetailsPage() {
  const { type, id } = useParams<{ type: string; id: string }>()
  const [item, setItem] = useState<Item | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/${type}?id=${id}`)
        if (!res.ok) throw new Error("Failed to fetch data") 
        const data = await res.json()

        const parsed = typeof data === "string" ? JSON.parse(data) : data
        setItem(parsed)
      } catch (error) {
        console.error("Fetch error:", error)
        setItem(null)
      } finally {
        setLoading(false)
      }
    }

    if (id && type) fetchData()
  }, [type, id])

  if (loading) return <p className="p-4 md:p-8 text-center">Loading...</p>
  if (!item) return <NotFoundItem />

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* Banner - Mobile Optimized */}
      <div
        className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image || "/default-hero.jpg"})` }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg text-center">
            {item.title}
          </h1>
        </header>
      </div>

      {/* Content - Mobile Optimized */}
      <div className="w-full my-6 md:my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Info Sections */}
        <div className="space-y-4 md:space-y-6">
          {item.objectifs && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  Objectifs :
                </span>
              </div>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 sm:mt-0.5">
                {item.objectifs}
              </span>
            </div>
          )}

          {item.population && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  Population cible :
                </span>
              </div>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 sm:mt-0.5">
                {item.population}
              </span>
            </div>
          )}

          {item.duree && (
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  Durée :
                </span>
              </div>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 sm:mt-0.5">
                {item.duree}
              </span>
            </div>
          )}

          {/* Programme Section */}
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500 flex-shrink-0" />
              <span className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                Programme de formation :
              </span>
            </div>
            
            {/* Responsive content container */}
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none 
                          prose-headings:text-base sm:prose-headings:text-lg
                          prose-p:text-sm sm:prose-p:text-base
                          prose-li:text-sm sm:prose-li:text-base
                          prose-table:text-sm sm:prose-table:text-base
                          overflow-hidden">
              <div 
                className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}