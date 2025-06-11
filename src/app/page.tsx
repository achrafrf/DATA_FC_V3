import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NotreMission from '@/components/notreMission'
import Nosengagement from '@/components/nosengagement'
import NosValeurs from '@/components/nosValeurs'
import Notrevesion from '@/components/notrevesion'

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
  <span className="typing-effect text-teal-600 block overflow-hidden border-r-4 border-teal-400 whitespace-nowrap">
DATA FC 
  </span>
  Formation & Consulting  
</h1>

                                <p className="mt-8 max-w-2xl text-pretty text-lg">Cabinet de conseil, de formation et d’accompagnement pour la réalisation de vos projets de développement continu.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base bg-teal-600">
                                        <Link href="#link">
                                            <span className="text-nowrap">Obtenez le maintenant</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base bg-teal-600 text-white">
                                        <Link href="#link">
                                            <span className="text-nowrap">Apprendre encore plus</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <Image
    className="-z-10 order-first mt-40 ml-auto w-full object-cover scale-75 sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
    src="/hero.png"
                                alt="Abstract Object"
                                height={4000}
                                width={3000}
                            />  
                            
                        </div>
                    </div>
                </section>





               <div className="bg-white py-12 px-4 dark:bg-gray-800">
  <div className="mx-auto max-w-6xl lg:px-10">
    <div className="flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-x-12">
      
      {/* Texte */}
      <div aria-label="text-area" className="max-w-lg">
        <p className="text-4xl font-semibold leading-tight text-teal-600 mb-4">
          Ils nous ont fait confiance
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-100"> 
          Nous sommes convaincus que nous pouvons trouver le processus qui vous aidera à atteindre vos objectifs.
        </p>
      </div>
      
      {/* Logos */}
      <div className="hidden md:flex flex-col space-y-6">
        
        {/* Ligne 1 */}
        <div className="flex items-center justify-between space-x-8">
          <Image
            className="h-12 w-auto object-contain"
            src="/Marsa-Maroc.webp"
            alt="Marsa Maroc"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-12 w-auto object-contain"
            src="/sogenco.png"
            alt="Sogenco"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-12 w-auto object-contain"
            src="/fertitech.png"
            alt="Fertitech"
            width={160}
            height={60}
          />
        </div>
        
        <hr className="border-gray-300" />
        
        {/* Ligne 2 */}
        <div className="flex items-center justify-between space-x-8">
          <Image
            className="h-12 w-auto object-contain"
            src="/hawd.jpg"
            alt="Hawd"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-12 w-auto object-contain"
            src="/group_enfant.png"
            alt="Group Enfant"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-12 w-auto object-contain"
            src="/espace_enfant.png"
            alt="Espace Enfant"
            width={160}
            height={60}
          />
        </div>
        
        <hr className="border-gray-300" />
        
        {/* Ligne 3 */}
<div className="flex items-center justify-center space-x-8">
  <Image
    className="h-12 w-auto object-contain"
    src="/safi_pech.jpg"
    alt="Safi Pech"
    width={160}
    height={60}
  />
  {/* Tu peux ajouter d’autres logos ici, ils seront automatiquement centrés */}
</div>
        
      </div>
    </div>
  </div>
</div>

  <div className="w-full min-h-screen mx-auto px-4 lg:px-8">
  {/* Notre MISSION */}
  <section className="py-16" id="notre-mission">
    <NotreMission />
  </section>

  {/* Notre VISION */}
  <section className="py-16">
    <Notrevesion  />
  </section>

  {/* Nos ENGAGEMENT */}
  <section className="py-16">
    <Nosengagement  />
  </section>

  {/* Nos VALEURS */}
  <section className="py-16">
    <NosValeurs />
  </section>
</div>

            </main>
    </>
  );
}
