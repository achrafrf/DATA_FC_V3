import React from 'react'
import Image from 'next/image'
import NotreMission from '@/components/notreMission'
import Nosengagement from '@/components/nosengagement'
import NosValeurs from '@/components/nosValeurs'
import Notrevesion from '@/components/notrevesion'
import { Separator } from "@/components/ui/separator";


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
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Title Section - Moved to top */}
        <div className="text-center mb-8 mt-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            MOT DU DIRECTEUR
          </h2>
          <h1 className="text-xl lg:text-2xl font-semibold text-teal-600 leading-tight">
            DATA FC : VOTRE PARTENAIRE STRATÉGIQUE POUR UNE CROISSANCE DURABLE
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Image - Higher positioning */}
          <div className="flex justify-center lg:justify-start relative order-1 lg:order-1">
            <div className="relative">
              {/* Modern decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-teal-400 rounded-full opacity-15"></div>
              
                  <div className="relative w-96 h-96">
  {/* شكل عضوي بتدرج teal */}
  <div
    className="absolute inset-0 z-0"
    style={{
      clipPath:
        'polygon(70% 0%, 100% 40%, 85% 100%, 15% 100%, 0% 40%, 30% 0%)',
      borderRadius: '50%',
      background: 'linear-gradient(to top right, #14b8a6, #5eead4)',
    }}
  />

  {/* صورة فوق الشكل */}
  <div className="absolute inset-0 z-10 flex items-center justify-center p-10">
    <Image
      src="/pic.png"
      alt="A. CHAKIK - Directeur DATA FC"
      className="w-full h-auto rounded-lg"
      width={3000}
      height={3000}
    />
  </div>
</div>


                  
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-2">
            
            <Separator className="bg-teal-200" />

            {/* Message Content */}
           <div className="space-y-6 text-gray-700 leading-relaxed font-bold text-lg">
  <p className="font-bold text-teal-600 text-lg">
    Chers Clients, Chers Partenaires,
  </p>
  
  <p className="text-gray-800">
    Au nom de toute l&apos;équipe DATA FC, je vous remercie de votre confiance et vous 
    souhaite la bienvenue sur notre plateforme. Dans un environnement économique en 
    constante évolution, la différenciation passe par l&apos;agilité, l&apos;innovation et l&apos;optimisation 
    des compétences – des défis que nous transformons en leviers de performance pour 
    votre organisation.
  </p>

  

  <p className="text-gray-800">
    Je vous invite à explorer nos solutions et à rencontrer nos équipes. Ensemble, 
    faisons de vos défis d&apos;aujourd&apos;hui les forces de demain.
  </p>

  <div className="pt-6">
    <p className="font-medium text-teal-600 text-lg">
      Bien sincèrement,
    </p>
    <div className="mt-4 space-y-1">
      <p className="text-2xl font-bold text-gray-900">
        A. CHAKIK
      </p>
      <p className="text-teal-600 font-medium text-lg">
        Directeur : DATA FC
      </p>
    </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex m-auto'>
  <div className="relative flex flex-col my-6 mr-4 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-lg text-teal-600 font-bold">
      Notre mission ?
    </span>
  </div>
  
  <div className="p-4">
    <p className="text-slate-600 leading-normal font-bold">
Vous offrir une alliance unique d’expertises synergiques : de
l’ingénierie de formation sur-mesure qui anticipe les besoins métiers, au recrutement
stratégique de profils à haute valeur ajoutée ; de l’externalisation intelligente qui
simplifie vos opérations, à la domiciliation professionnelle qui valorise votre image.
Une approche intégrée où chaque solution concourt à un même objectif : libérer
votre potentiel.    </p>
  </div>
</div>
 <div className="relative flex flex-col my-6 mr-4 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-lg text-teal-600 font-bold">
      Ce qui nous distingue ?
    </span>
  </div>
  
  <div className="p-4">
    <p className="text-slate-600 leading-normal font-bold">
Une culture du sur-mesure alliant vision sectorielle et
exécution pragmatique. Start-up agiles, PME en croissance ou grands groupes :
nous adaptons notre écosystème (savoir-faire, réseaux, technologies) à vos enjeux
spécifiques, avec une exigence commune – créer de la valeur tangible.    </p>
  </div>
</div>
 <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-lg text-teal-600 font-bold">
      Au-delà des services
    </span>
  </div>
  
  <div className="p-4">
    <p className="text-slate-600 leading-normal font-bold">
nous cultivons une philosophie partenariale : écoute active,
transparence opérationnelle et engagement mutuel. Car le Maroc, terre
d’opportunités, mérite des synergies ambitieuses où votre succès devient notre
référence.
</p>
  </div>
</div>
  </div>
  
      </main>
      </div>
               <div className="bg-white py-12 px-4 dark:bg-gray-800">
  <div className="mx-auto max-w-6xl lg:px-10">
    <div className="flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-x-12">
      
      {/* Texte */}
      <div aria-label="text-area" className="max-w-lg mt-28">
        <p className="text-4xl font-bold leading-tight text-teal-600 mb-4">
          Ils nous ont fait confiance
        </p>
        <p className="text-lg text-gray-800 font-bold dark:text-gray-100"> 
          Nous sommes convaincus que nous pouvons trouver le processus qui vous aidera à atteindre vos objectifs.
        </p>
      </div>
      
      {/* Logos */}
      <div className="hidden md:flex flex-col space-y-8">
        
        {/* Ligne 1 */}
        <div className="flex items-center justify-between space-x-8">
          <Image
            className=" h-20 w-auto object-contain"
            src="/Marsa-Maroc.webp"
            alt="Marsa Maroc"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-20 w-auto object-contain"
            src="/sogenco.png"
            alt="Sogenco"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-20 w-auto object-contain"
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
            className="h-20 w-auto object-contain"
            src="/hawd.jpg"
            alt="Hawd"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-20 w-auto object-contain"
            src="/group_enfant.png"
            alt="Group Enfant"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
          <Image
            className="h-20 w-auto object-contain"
            src="/espace_enfant.png"
            alt="Espace Enfant"
            width={160}
            height={60}
          />
        </div>
        
        <hr className="border-gray-300" />
        
        {/* Ligne 3 */}
 <div className="flex items-center justify-between space-x-4">
         
          <Image
            className="h-20 w-auto object-contain"
            src="/anda.png"
            alt="Group Enfant"
            width={160}
            height={60}
          />
          <div className="border-l border-gray-300 h-12" />
           <Image
    className="h-20 w-auto object-contain"
    src="/safi_pech.jpg"
    alt="Safi Pech"
    width={160}
    height={60}
  />

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
