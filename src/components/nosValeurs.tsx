import React from 'react'
import { FaTachometerAlt ,FaClipboardCheck ,FaLock ,FaLightbulb,FaHandshake } from "react-icons/fa";
const NosValeurs = () => {
  return (
    <div className='mt-8 mb-9'>
       <h1 className="mb-8 mt-12 text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Nos<mark className="px-2 ml-1 text-white bg-teal-600 rounded-sm dark:bg-teal-500">Valeurs</mark></h1>
              <p className="font-normal text-2xl leading-6 text-gray-500 mt-10">Nos  activités professionnelles  reposent sur un équilibre de cinq piliers :</p>
              <div className="relative mt-14 z-10">
                  <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 text-white bg-gray-800 rounded-full flex justify-center items-center">
                      <FaLightbulb  className="animate-bounce"/>
                      </div>

                      <div className="z-20 w-12 h-12 text-white bg-gray-800 rounded-full flex justify-center items-center">
                      <FaLock   className="animate-bounce"/>
                      </div>

                      <div className="z-20 w-12 h-12 text-white bg-gray-800 rounded-full flex justify-center items-center">
                      <FaClipboardCheck   className="animate-bounce"/>
                      </div>
                  </div>
                  <hr className="z-10 absolute top-2/4 w-full h-1 bg-gray-300 rounded-2xl" /> 
              </div>

              <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                  <div>
                      <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">L’innovation​</p>
                  </div>
                  <div>
                      <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">La confidentialité et l’honnêteté ​</p>
                  </div>
                <div className="sm:block hidden">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">La responsabilité</p>
                </div>
            </div>
          

            <div className="relative mt-24 z-10">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 text-white bg-gray-800 rounded-full flex justify-center items-center ">
                    <FaHandshake  className="animate-bounce"/>
                    </div>

                    <div className="z-20 w-12 h-12 text-white bg-gray-800 rounded-full flex justify-center items-center">
                    <FaTachometerAlt className="animate-bounce"/>
                    </div>
                </div>
                <hr className="z-10 absolute top-2/4 w-8/12 h-1 bg-gray-300 rounded-2xl" />
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">​Le respect </p>
                </div>
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">​La performance​</p>
                </div>
            </div>
    </div>
  )
}

export default NosValeurs
