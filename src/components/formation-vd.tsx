"use client";
import React from 'react'

const Formationvd = () => {
  return (
    <section className="Imagemin-h-screen text-black py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
    <video width="100%" controls>
        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  
    <div className="w-full md:w-7/12 text-center md:text-left relative">
      <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
        <div className="flex items-center justify-center gap-2 dark:text-white">
          <div className="w-16 h-[2px] bg-black dark:bg-white"></div>
          <p>MORE ABOUT</p>
        </div>
      </div>
  
      <h2 className=" text-2xl text-black dark:text-white md:text-4xl font-bold leading-tight mb-4 pl-10">
      Découvrez <br/>Data FC  Services et Compétences
      </h2>
  
      <p className="italic font-semibold  text-2xl leading-10 text-gray-600 dark:text-gray-400 mt-5 mb-5">
      🎙️ Bienvenue chez Data FC !

      La formation est le moyen idéal pour développer les compétences 🚀et améliorer la compétitivité d’une entreprise ou un organisme🧠, elle constitue l’un des principaux leviers de management💡 du capital humain de l’entreprise.
👉 Restez avec nous pour en savoir plus !
      </p>
  
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a href="#" className="bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center mt-4">
          See Projects
        </a>
        <a href="#" className="border bg-teal-700 border-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center mt-4">
          More Details
        </a>
      </div>
    </div>
  </section>
  )
}

export default Formationvd
