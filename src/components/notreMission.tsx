import React from 'react'
import Image from 'next/image';
import {  FaLightbulb  
    ,FaBriefcase ,FaHandshake,FaGlobe,FaSyncAlt
   } from "react-icons/fa";

const NotreMission = () => {
  return (
    <div className='mb-9 px-4 sm:px-6 lg:px-8'>
       {/*Notre Mission*/}
       <h1 className="mb-10 mt-16 text-center font-extrabold leading-none tracking-tight text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-4xl dark:text-white">
         Notre<mark className="px-2 ml-1 text-white bg-teal-600 rounded-sm dark:bg-teal-500">Mission</mark>
       </h1>
       
       <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between lg:mt-6">
         {/* Carte principale */}
         <div className="relative flex flex-col bg-white dark:bg-gray-900 shadow-sm border border-slate-200 rounded-lg w-full lg:w-[900px] transition-transform duration-300 ease-in-out hover:scale-105">
           <div className="p-4 sm:p-6 lg:p-8">
             <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl italic font-semibold leading-relaxed dark:text-white">
               Aider l’entreprise, grâce à nos prestations, à faire face aux changements fréquents
               pour assurer sa croissance et sa pérennité, suivre continuellement l’évolution
               technologique et préserver une place privilégiée sur le marché concurrentiel.
             </p>
           </div>
           
           <div className="relative m-2.5 overflow-hidden text-white rounded-md h-[150px] sm:h-[180px]">
             <Image
               src="/mission.jpg"
               alt="card-image"
               layout="fill"
               objectFit="cover"
               className="rounded-md"
             />
           </div>
         </div>
         
         {/* Cartes des services */}
         <div className="w-full lg:w-7/12">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-8 text-center">
             {/* Cartes redimensionnées pour mobile */}
             <div className="flex p-3 sm:p-4 shadow-md bg-teal-600 rounded-xl lg:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
               <div className="mr-4 sm:mr-6 flex items-center">
                 <FaBriefcase className="text-white text-lg sm:text-xl" />
               </div>
               <div className='flex items-center'>
                 <p className="font-semibold text-base sm:text-lg lg:text-xl lg:leading-6 leading-5 text-white">
                   Entreprise & Stratégie
                 </p>
               </div>
             </div>

             <div className="flex p-3 sm:p-4 shadow-md bg-teal-600 rounded-xl lg:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
               <div className="mr-4 sm:mr-6 flex items-center">
                 <FaHandshake className="text-white text-lg sm:text-xl" />
               </div>
               <div className="flex items-center">
                 <p className="font-semibold text-base sm:text-lg lg:text-xl lg:leading-6 leading-5 text-white">
                   Prestations & Services
                 </p>
               </div>
             </div>

             <div className="flex p-3 sm:p-4 shadow-md bg-teal-600 rounded-xl lg:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
               <div className="mr-4 sm:mr-6 flex items-center">
                 <FaSyncAlt className="text-white text-lg sm:text-xl" />
               </div>
               <div className="flex items-center">
                 <p className="font-semibold text-base sm:text-lg lg:text-xl lg:leading-6 leading-5 text-white">
                   Changements & Transformation
                 </p>
               </div>
             </div>

             <div className="flex p-3 sm:p-4 shadow-md bg-teal-600 rounded-xl lg:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
               <div className="mr-4 sm:mr-6 flex items-center">
                 <FaLightbulb className="text-white text-lg sm:text-xl" />
               </div>
               <div className="flex items-center">
                 <p className="font-semibold text-base sm:text-lg lg:text-xl lg:leading-6 leading-5 text-white">
                   Technologie & Innovation
                 </p>
               </div>
             </div>

             <div className="flex p-3 sm:p-4 shadow-md bg-teal-600 rounded-xl lg:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
               <div className="mr-4 sm:mr-6 flex items-center">
                 <FaGlobe className="text-white text-lg sm:text-xl" />
               </div>
               <div className="flex items-center">
                 <p className="font-semibold text-base sm:text-lg lg:text-xl lg:leading-6 leading-5 text-white">
                   Marché & Concurrence
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default NotreMission