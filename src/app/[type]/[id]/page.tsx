'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Target, Users, Clock, Book } from "lucide-react"

interface Item {
  id: number
  title: string
  description: string
  image?: string
  objectifs?: string
  population?: string
  duree?: string
}

const renderList = (items: string[]) => (
  <ul className="list-none space-y-4">
    {items.map((item, idx) => (
      <li
        key={idx}
        className="fade-in-item flex justify-center items-center space-x-2 text-xl text-gray-800 dark:text-gray-200"
        style={{ animationDelay: `${idx * 0.3}s` }}
      >
        <span className="block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-800" />
        <span className="text-center">{item}</span>
      </li>
    ))}
  </ul>
)

export default function DetailsPage() {
  const { type, id } = useParams<{ type: string; id: string }>()
  const [item, setItem] = useState<Item | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/${type}?id=${id}`)
      const data = await res.json()
      setItem(data)
    }
    fetchData()
  }, [type, id])

  if (!item) return <p className="p-8">Loading...</p>

  // تحويل description إلى قائمة (كل سطر = عنصر)
  const programme = item.description
    ? item.description.split("\n").filter(line => line.trim() !== "")
    : []

  return (
    <div className="dark:bg-gray-900">
      {/* Banner */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image || "/default-hero.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {item.title}
          </h1>
        </header>
      </div>

      {/* Info & Program */}
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
            <span className="font-semibold text-2xl mr-1">
              Population cible :
            </span>
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
          <span className="font-semibold text-2xl">
            Programme de formation :
          </span>
        </p>

        <div className="text-center">
          {programme.length > 0 ? renderList(programme) : <p>{item.description}</p>}
        </div>
      </div>
    </div>
  )
}
