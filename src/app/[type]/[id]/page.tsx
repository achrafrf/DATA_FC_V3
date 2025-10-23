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

  if (loading) return <p className="p-8">Loading...</p>
  if (!item) return <NotFoundItem />

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image || "/default-hero.jpg"})` }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {item.title}
          </h1>
        </header>
      </div>

      {/* Info & Programme */}
      <div className="w-full my-12 p-4">
        {item.objectifs && (
          <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
            <Target className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Objectifs :</span>
            <span>{item.objectifs}</span>
          </p>
        )}

        {item.population && (
          <p className="mb-4 flex items-center text-xl text-gray-800 dark:text-gray-200">
            <Users className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Population cible :</span>
            <span>{item.population}</span>
          </p>
        )}

        {item.duree && (
          <p className="mb-6 flex items-center text-lg text-gray-800 dark:text-gray-200">
            <Clock className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
            <span className="font-semibold text-2xl mr-1">Durée :</span>
            <span>{item.duree}</span>
          </p>
        )}

        <p className="mb-4 flex items-center text-lg text-gray-800 dark:text-gray-200">
          <Book className="w-6 h-6 text-green-800 mr-2 flex-shrink-0" />
          <span className="font-semibold text-2xl">Programme de formation :</span>
        </p>

        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </div>
  )
}
