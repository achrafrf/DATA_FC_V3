import React from 'react'
import Image from 'next/image';
import {  FaLightbulb  
    ,FaBriefcase ,FaHandshake,FaGlobe,FaSyncAlt
   } from "react-icons/fa";


const NotreMission = () => {
  return (
    <div className='mb-9 '>
       {/*Notre Mission*/}
                                      <h1 className="mb-14 mt-18 text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Notre<mark className="px-2 ml-1 text-white bg-teal-600 rounded-sm dark:bg-teal-500">Mission</mark></h1>
                                      <div className="flex lg:flex-row flex-col md:gap-4 gap-6 justify-between lg:mt-6">
                                      <div className="relative mr-8 flex flex-col bg-white dark:bg-gray-900 shadow-sm border border-slate-200 rounded-lg w-[900px] transition-transform duration-300 ease-in-out hover:scale-105">
                            {/* Texte plus grand */}
                            <div className="p-8 ">
                              <p className="text-gray-700 text-2xl italic font-semibold leading-relaxed dark:text-white">
                                Aider l’entreprise, grâce à nos prestations, à faire face aux changements fréquents
                                pour assurer sa croissance et sa pérennité, suivre continuellement l’évolution
                                technologique et préserver une place privilégiée sur le marché concurrentiel.
                              </p>
                            </div>
                          
                            {/* Image plus petite */}
                            <div className="relative m-2.5 overflow-hidden text-white rounded-md h-[180px]">
                              <Image
                                src="/mission.jpg"
                                alt="card-image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                              />
                            </div>
                          </div>
                          
                                          <div className="w-full lg:w-7/12">
                                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10 text-center">
                                                  {/* <!-- Team Card --> */}
                                                  <div className="flex p-4 shadow-md bg-teal-600 rounded-2xl  transition-transform duration-300 ease-in-out hover:scale-105">
                                                      <div className="mr-6">
                                                         <FaBriefcase />
                                                      </div>
                                                      <div className=''>
                                                          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Entreprise & Stratégie</p>
                                                      </div>
                                                  </div>
                          
                                                  {/* <!-- Board Card --> */}
                                                  <div className="flex p-4 shadow-md bg-teal-600 rounded-2xl  transition-transform duration-300 ease-in-out hover:scale-105">
                                                      <div className="mr-6">
                                                       <FaHandshake />
                                                      </div>
                                                      <div className="">
                                                          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Prestations & Services
                                                          </p>
                                                      </div>
                                                  </div>
                          
                                                  {/* <!-- Press Card --> */}
                                                  <div className="flex p-4 shadow-md bg-teal-600 rounded-2xl  transition-transform duration-300 ease-in-out hover:scale-105">
                                                      <div className="mr-6">
                                                          <FaSyncAlt />
                                                      </div>
                                                      <div className="">
                                                          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Changements & Transformation</p>
                                                      </div>
                                                  </div>
                          
                                                  <div className="flex p-4 shadow-md bg-teal-600 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                                      <div className="mr-6">
                                                      <FaLightbulb />
                                                      </div>
                                                      <div className="">
                                                          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white"> Technologie & Innovation</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex p-4 shadow-md bg-teal-600 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
                                                      <div className="mr-6">
                                                          <FaGlobe />
                                                      </div>
                                                      <div className="">
                                                          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Marché & Concurrence</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                     {/*NosMission*/}
    </div>
  )
}

export default NotreMission
