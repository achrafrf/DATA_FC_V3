// app/autre/demande_devis/page.tsx
import React from 'react'

export default function Page() {
  return (
    <>
     <div
          className="relative h-80 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/Nosformations/communication.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <header className="relative flex items-center justify-center h-full">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                DEMANDER UN DEVIS

            </h1>
          </header>
        </div>
    <main className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
      {/* Logo */}

      {/* Formulaire */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Société / particulier*"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <input
          type="text"
          placeholder="RC/CIN"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        <input
          type="tel"
          placeholder="Téléphone*"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <input
          type="url"
          placeholder="prestation demander"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        {/* Civilité */}
        <div className="col-span-full flex items-center gap-4 flex-wrap">
          <span className="font-medium text-gray-700">Civilité du participant *</span>
          {['Mr', 'Mme', 'Melle', 'Autre'].map((civ) => (
            <label key={civ} className="flex items-center space-x-1">
              <input
                type="radio"
                name="civility"
                value={civ}
                className="accent-teal-500"
                defaultChecked={civ === 'Mr'}
              />
              <span className="text-gray-700">{civ}</span>
            </label>
          ))}
        </div>

        <input
          type="text"
          placeholder="Prénom*"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <input
          type="text"
          placeholder="Nom*"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        <input
          type="text"
          placeholder="Profession*"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

      

        {/* Bouton d'envoi */}
        <button
          type="submit"
          className="col-span-full bg-teal-500 text-white font-bold py-3 rounded-md hover:opacity-90 transition"
        >
          ENVOYER
        </button>
      </form>
    </main>
    </>
  )
}
