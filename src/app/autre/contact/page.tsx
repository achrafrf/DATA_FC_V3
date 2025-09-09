'use client'

import React, { useState } from 'react'
import Image from 'next/image' // مهم للاستعمال مع Next.js

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', objet: '', message: '' })
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      {/* الصورة فوق الفورم */}
      <Image src="/logo.png" alt="Contact Image" width={300} height={150} className="mb-6 rounded-full shadow-lg" />

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg grid gap-6 dark:bg-gray-800">
      <h1 className=' text-center text-4xl font-bold text-teal-600'>contactez-nous</h1>
        <input
          name="nom"
          value={form.nom}
          onChange={handleChange}
          placeholder="Nom"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
        />
        <input
          name="objet"
          value={form.objet}
          onChange={handleChange}
          placeholder="Objet"
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold p-3 rounded-lg transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Envoi…' : 'Envoyer'}
        </button>
        {status === 'success' && <p className="text-green-600 text-center">Message envoyé avec succès !</p>}
        {status === 'error' && <p className="text-red-600 text-center">Erreur, réessayez plus tard.</p>}
      </form>
    </div>
  )
}
