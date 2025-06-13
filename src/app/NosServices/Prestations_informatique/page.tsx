'use client'
import React from 'react'





const IngenierieFormation: React.FC = () => (
  <div className="space-y-12 py-12">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-4xl mt-6 md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        Prestations informatique
      </h1>
      <div className="mt-2 h-1 w-20 bg-green-800 mx-auto rounded-full" />

    </div>
    <ul className="space-y-6 max-w-3xl mx-auto px-4">
    <h1 className='font-bold text-2xl text-teal-600'>Solutions IT sur-mesure</h1>
      <li
        className="fade-in-item relative pl-8 text-lg md:text-xl text-gray-800 dark:text-gray-200"
      >
        Nous concevons des prestations informatiques adaptées à vos enjeux : <span className='font-bold text-teal-600'>cloud hybride,
cybersécurité, DevOps, IA et data analytics.</span>
        <span className="absolute left-0 top-1 w-3 h-3 bg-green-800 rounded-full" />
      </li>
          <li
        className="fade-in-item relative pl-8 text-lg md:text-xl text-gray-800 dark:text-gray-200"
      >
        Nos experts certifiés <span className='font-bold'>(AWS, Microsoft,
Google Cloud, etc.)</span>
        <span className="absolute left-0 top-1 w-3 h-3 bg-green-800 rounded-full" />
      </li>
          <li
        className="fade-in-item relative pl-8 text-lg md:text-xl text-gray-800 dark:text-gray-200"
      >
        accompagnent votre transformation digitale avec des architectures
scalables, des infrastructures optimisées et une gouvernance IT agile.
        <span className="absolute left-0 top-1 w-3 h-3 bg-green-800 rounded-full" />
      </li>
   
  </ul>
  </div>
)

export default IngenierieFormation
