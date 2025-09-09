'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaBullseye, FaUserTie, FaClock, FaBookOpen } from "react-icons/fa";

interface Item {
  id: number;
  title: string;
  description: string; 
  image?: string; 
  objectifs?: string;
  population?: string;
  duree?: string;
}

export default function DetailsPage() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/${type}?id=${id}`);
      const data = await res.json();
      setItem(data);
    };
    fetchData();
  }, [type, id]);

  if (!item) return <p className="p-8">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Image + Title */}
      <div className="relative w-full h-72 md:h-96">
        <img
          src={item.image || "/default-hero.jpg"}
          alt={item.title}
          className="w-full h-full object-cover rounded-b-2xl"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
          {item.title}
        </h1>
      </div>

      <div className="p-8">
        {/* تفاصيل مع أيقونات */}
        <div className="space-y-4 mb-8">
          {item.objectifs && (
            <p className="flex items-start gap-2 text-gray-700">
              <FaBullseye className="text-green-600 mt-1" /> 
              <span>
                <strong>Objectifs :</strong> {item.objectifs}
              </span>
            </p>
          )}

          {item.population && (
            <p className="flex items-start gap-2 text-gray-700">
              <FaUserTie className="text-green-600 mt-1" /> 
              <span>
                <strong>Population cible :</strong> {item.population}
              </span>
            </p>
          )}

          {item.duree && (
            <p className="flex items-start gap-2 text-gray-700">
              <FaClock className="text-green-600 mt-1" /> 
              <span>
                <strong>Durée :</strong> {item.duree}
              </span>
            </p>
          )}

          <p className="flex items-start gap-2 text-gray-700">
            <FaBookOpen className="text-green-600 mt-1" /> 
            <span>
              <strong>Programme de formation :</strong>
            </span>
          </p>
        </div>

        {/* الوصف (برنامج مفصل) */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    </div>
  );
}
