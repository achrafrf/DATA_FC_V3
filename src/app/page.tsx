import React from 'react'
import Image from 'next/image'
import NotreMission from '@/components/notreMission'
import Nosengagement from '@/components/nosengagement'
import NosValeurs from '@/components/nosValeurs'
import Notrevesion from '@/components/notrevesion'
import { Separator } from "@/components/ui/separator";
import CommentRating from './api/comments/Comments'


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Modern geometric grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white opacity-60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 79px, rgba(20, 184, 166, 0.1) 80px, rgba(20, 184, 166, 0.1) 81px, transparent 82px),
                           linear-gradient(rgba(20, 184, 166, 0.1) 79px, transparent 80px, transparent 81px, rgba(20, 184, 166, 0.1) 82px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Modern floating elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-teal-500 rounded-2xl opacity-20 transform rotate-12"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-teal-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-teal-600 rounded-3xl opacity-15 transform -rotate-12"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-teal-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-teal-500 rounded-lg opacity-20"></div>
        <div className="absolute top-20 left-1/3 w-8 h-8 bg-teal-600 rounded-full opacity-30"></div>
      </div>


      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 font-bold">
        
        <div className="grid lg:grid-cols-5 gap-3 sm:gap-4">
          
          {/* Left Column - Image - 20% width and taller */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start order-1">
            <div className="relative">
              {/* Modern decorative elements */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-teal-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-teal-400 rounded-full opacity-15"></div>
              
              {/* صورة أطول */}
              <div className="relative w-44 h-60 sm:w-52 sm:h-68 lg:w-52 lg:h-80">
                <Image
                  src="/n-pic.png"
                  alt="A. CHAKIK - Directeur DATA FC"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  width={350}
                  height={450}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content - 80% width with adjusted spacing */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 animate-fade-in order-2 lg:pl-3">
            
            <Separator className="bg-teal-200 mb-2" />

            {/* Message Content with larger text */}
           <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
            <h2 className='text-teal-600 text-lg sm:text-xl font-bold'>
            MOT DU DIRECTEUR
            </h2>
            <h2 className='text-lg sm:text-xl text-gray-800 font-bold'>
            DATA FC : VOTRE PARTENAIRE STRATÉGIQUE POUR UNE CROISSANCE DURABLE
            </h2>
  <p className="font-bold text-teal-600 text-base sm:text-lg">
    Chers Clients, Chers Partenaires,
  </p>
    <p className="text-gray-800 ">
    Au nom de toute l&apos;équipe DATA FC, je vous remercie de votre confiance et vous 
    souhaite la bienvenue sur notre plateforme.<br/> 
    Dans un environnement économique en 
    constante évolution, la différenciation passe par l&apos;agilité, l&apos;innovation et l&apos;optimisation 
    des compétences – des défis que nous transformons en leviers de performance pour 
    votre organisation.<br/>Notre mission ? Vous offrir une alliance unique d’expertises synergiques : de l’ingénierie de formation sur-mesure qui anticipe les besoins métiers, au recrutement stratégique de profils à haute valeur ajoutée ; de l’externalisation intelligente qui simplifie vos opérations, à la domiciliation professionnelle qui valorise votre image. Une approche intégrée où chaque solution concourt à un même objectif : libérer votre potentiel.
  </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Content with larger text */}
        <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed mt-3 sm:mt-4">
  <p className='text-gray-800 text-sm sm:text-base leading-relaxed'>
  Ce qui nous distingue ? Une culture du sur-mesure alliant vision sectorielle et
exécution pragmatique. Start-up agiles, PME en croissance ou grands groupes :
nous adaptons notre écosystème (savoir-faire, réseaux, technologies) à vos enjeux
spécifiques, avec une exigence commune – créer de la valeur tangible.
  </p>
  <p className='text-gray-800 text-sm sm:text-base leading-relaxed'>
    Au-delà des services, nous cultivons une philosophie partenariale : écoute active,
transparence opérationnelle et engagement mutuel. Car le Maroc, terre
d’opportunités, mérite des synergies ambitieuses où votre succès devient notre
référence.
  </p>
  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
    Je vous invite à explorer nos solutions et à rencontrer nos équipes. Ensemble, 
    faisons de vos défis d’aujourd’hui les forces de demain.
  </p>
  <div className="pt-3 sm:pt-4">
    <p className="font-medium text-teal-600 text-base sm:text-lg">
      Bien sincèrement,
    </p>
    <div className="mt-2 sm:mt-3 space-y-1">
      <p className="text-xl sm:text-2xl font-bold text-gray-900">
        A. CHAKIK
      </p>
      <p className="text-teal-600 font-medium text-base sm:text-lg">
        Directeur : DATA FC
      </p>
    </div>
  </div>
</div>
      </main>
      </div>
              

  <div className="w-full min-h-screen mx-auto px-4 lg:px-8">
  {/* Notre MISSION */}
  <section className="py-10 sm:py-12" id="notre-mission">
    <NotreMission />
  </section>

  {/* Notre VISION */}
  <section className="py-10 sm:py-12">
    <Notrevesion  />
  </section>

  {/* Nos ENGAGEMENT */}
  <section className="py-10 sm:py-12">
    <Nosengagement  />
  </section>

  {/* Nos VALEURS */}
  <section className="py-10 sm:py-12">
    <NosValeurs />
  </section>
   
   {/* Clients Section */}
   <div className="bg-white py-6 sm:py-8 px-4 dark:bg-gray-800">
  <div className="mx-auto max-w-6xl lg:px-8">
    <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-x-8">
      
      {/* Texte */}
      <div aria-label="text-area" className="max-w-lg">
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-teal-600 mb-3 sm:mb-4">
          Ils nous ont fait confiance
        </p>  
      
      {/* Logos - Mobile optimized */}
      <div className="md:hidden flex flex-col space-y-4 mt-2">
        {/* Mobile layout - stacked logos */}
        <div className="grid grid-cols-2 gap-3">
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/Marsa-Maroc.webp"
            alt="Marsa Maroc"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/sogenco.png"
            alt="Sogenco"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/fertitech.png"
            alt="Fertitech"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/hawd.jpg"
            alt="Hawd"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/safirem.png"
            alt="Safi Pech"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/group_enfant.png"
            alt="Group Enfant"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/espace_enfant.png"
            alt="Espace Enfant"
            width={100}
            height={40}
          />
          <Image
            className="h-12 w-auto object-contain mx-auto"
            src="/anda.png"
            alt="Group Enfant"
            width={100}
            height={40}
          />
        </div>
      </div>

      {/* Desktop Logos */}
      <div className="hidden md:flex flex-col space-y-4 mt-2">
        
        {/* Ligne 1 */}
        <div className="flex items-center justify-between space-x-3 lg:space-x-6">
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/Marsa-Maroc.webp"
            alt="Marsa Maroc"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/sogenco.png"
            alt="Sogenco"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/fertitech.png"
            alt="Fertitech"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/hawd.jpg"
            alt="Hawd"
            width={120}
            height={45}
          />
        </div>
        
        {/* Ligne 2 */}
        <div className="flex items-center justify-between space-x-3 lg:space-x-6">
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/safirem.png"
            alt="Safi Pech"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/group_enfant.png"
            alt="Group Enfant"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/espace_enfant.png"
            alt="Espace Enfant"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/anda.png"
            alt="Anda"
            width={120}
            height={45}
          />
        </div>
        
        <hr className="border-gray-300" />
        
        {/* Ligne 3 */}
        <div className="flex items-center justify-between space-x-3 lg:space-x-6">
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/ITPM SAFI.png"
            alt="ITPM Safi"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/nouest.png"
            alt="Nouest"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/gardinnage.png"
            alt="Gardinnage"
            width={120}
            height={45}
          />
          <div className="border-l border-gray-300 h-8" />
          <Image
            className="h-14 lg:h-16 w-auto object-contain"
            src="/apme.png"
            alt="APME"
            width={120}
            height={45}
          />
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</div> 
<CommentRating />
            </main>
    </>
  );
}