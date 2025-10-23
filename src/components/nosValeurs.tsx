import React from 'react'
import { FaTachometerAlt, FaClipboardCheck, FaLock, FaLightbulb, FaHandshake } from "react-icons/fa";

const NosValeurs = () => {
  return (
    <div className='mt-8 mb-9 px-4 sm:px-6 lg:px-8'>
       {/* العنوان الرئيسي */}
       <h1 className="mb-6 mt-8 text-center font-extrabold leading-none tracking-tight text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-4xl dark:text-white">
         Nos<mark className="px-2 ml-1 text-white bg-teal-600 rounded-sm dark:bg-teal-500">Valeurs</mark>
       </h1>
       
       {/* النص التوضيحي */}
       <p className="font-normal text-lg sm:text-xl lg:text-2xl leading-6 text-gray-500 mt-4 lg:mt-6 dark:text-white">
         Nos activités professionnelles reposent sur un équilibre de cinq piliers :
       </p>

       {/* الصف الأول من القيم */}
       <div className="relative mt-6 lg:mt-10 z-10">
           <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
             <div className="z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white bg-teal-600 rounded-full flex justify-center items-center">
               <FaLightbulb className="text-sm sm:text-base lg:text-lg animate-bounce"/>
             </div>

             <div className="z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white bg-teal-600 rounded-full flex justify-center items-center">
               <FaLock className="text-sm sm:text-base lg:text-lg animate-bounce"/>
             </div>

             <div className="z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white bg-teal-600 rounded-full flex justify-center items-center">
               <FaClipboardCheck className="text-sm sm:text-base lg:text-lg animate-bounce"/>
             </div>
           </div>
           <hr className="z-10 absolute top-2/4 w-full h-0.5 sm:h-1 bg-gray-300 rounded-2xl" /> 
       </div>

       {/* نصوص الصف الأول */}
       <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-3 lg:mt-4">
           <div>
               <p className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl leading-5 lg:leading-6 text-gray-800 dark:text-white">
                 L innovation
               </p>
           </div>
           <div>
               <p className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl leading-5 lg:leading-6 text-gray-800 dark:text-white">
                 La confidentialité et l honnêteté
               </p>
           </div>
           <div className="block">
               <p className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl leading-5 lg:leading-6 text-gray-800 dark:text-white">
                 La responsabilité
               </p>
           </div>
       </div>

       {/* الصف الثاني من القيم */}
       <div className="relative mt-8 lg:mt-16 z-10">
           <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
               <div className="z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white bg-teal-600 rounded-full flex justify-center items-center">
                 <FaHandshake className="text-sm sm:text-base lg:text-lg animate-bounce"/>
               </div>

               <div className="z-20 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white bg-teal-600 rounded-full flex justify-center items-center">
                 <FaTachometerAlt className="text-sm sm:text-base lg:text-lg animate-bounce"/>
               </div>
           </div>
           <hr className="z-10 absolute top-2/4 w-8/12 h-0.5 sm:h-1 bg-gray-300 rounded-2xl" />
       </div>

       {/* نصوص الصف الثاني */}
       <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-3 lg:mt-4">
           <div>
               <p className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl leading-5 lg:leading-6 text-gray-800 dark:text-white">
                 Le respect
               </p>
           </div>
           <div>
               <p className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl leading-5 lg:leading-6 text-gray-800 dark:text-white">
                 La performance
               </p>
           </div>
       </div>
    </div>
  )
}

export default NosValeurs