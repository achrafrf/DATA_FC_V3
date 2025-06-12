// app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Envoi échoué')
      setStatus('success')
      setForm({ nom: '', email: '', objet: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero image */}
      <div
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Nosformations/communication.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <header className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            Contactez-nous
          </h1>
        </header>
      </div>

      <main className="min-h-screen mt-3 mb-3 bg-white flex flex-col md:flex-row max-w-6xl mx-auto px-4 md:px-8">
        {/* LEFT PANEL */}
        <aside className="md:w-1/3 bg-gray-900 text-white p-8 flex flex-col justify-center space-y-12">
          <ul className="space-y-8">
            <li className="flex items-center space-x-4">
              <FaPhone className="text-teal-600 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">Téléphone</p>
                <p className="text-teal-600">+212 (0) 808 522 452</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <FaWhatsapp className="text-teal-600 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">Whatsapp</p>
                <p className="text-teal-600">+212 (0) 616 132 491</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-teal-600 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-teal-600">contact@cimacef.com</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-teal-600 w-8 h-8 mt-1" />
              <div>
                <p className="text-lg font-semibold">Adresse</p>
                <p className="text-teal-600 leading-snug">
                  Avenue Moulay Ismail,<br />
                  Résidence Assalam I,<br />
                  Immeuble 3, Étage 5, N°72,<br />
                  Tanger – Maroc
                </p>
              </div>
            </li>
          </ul>
        </aside>

        {/* RIGHT PANEL */}
        <section className="md:w-2/3 bg-gray-100 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            <span className="text-teal-600 mr-2">–</span>
            Contactez-nous
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-teal-600 mb-1">Nom</label>
              <input
                id="nom"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full border border-teal-600 rounded-md bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-teal-600 mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-teal-600 rounded-md bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none"
                placeholder="Votre Email"
              />
            </div>

            {/* Objet */}
            <div>
              <label htmlFor="objet" className="block text-teal-600 mb-1">Objet</label>
              <input
                id="objet"
                name="objet"
                value={form.objet}
                onChange={handleChange}
                className="w-full border border-teal-600 rounded-md bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none"
                placeholder="Objet"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-teal-600 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border border-teal-600 rounded-md bg-transparent px-4 py-3 placeholder-gray-400 focus:outline-none resize-none"
                placeholder="Votre Message"
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-4 bg-teal-600 text-white font-bold px-8 py-4 rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Envoi…' : 'ENVOYER'}
            </button>

            {/* Statut */}
            {status === 'success' && (
              <p className="col-span-full text-green-600">
                Merci, votre message a bien été envoyé !
              </p>
            )}
            {status === 'error' && (
              <p className="col-span-full text-red-600">
                Une erreur est survenue, réessayez plus tard.
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  )
}
