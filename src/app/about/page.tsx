"use client";

import Image from "next/image";
import { useState } from 'react';
import Modal from "@/components/Modal";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {FaMapMarkerAlt,FaExclamationCircle
 } from "react-icons/fa";


export default function AboutPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  const cards = [
    {
      id: 1,
      title: 'Des prestations de qualité',
      image: '/Lifesavers - Onlin.jpg',
    },
    { 
      id: 2,
      title: 'Des solutions sur mesure​ pour développer la compétitivité de votre entreprise!',
      image: '/Thinking face-bro.jpg',
    },
    {
      id: 3,
      title: 'Des conseils pour réussir vos projets',
      
      image: '/Project Stages-bro.jpg',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="py-24 relative dark:bg-gray-900">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-7">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <Image
                className="rounded-xl border-8 object-cover"
                src="/datafc.png"
                alt="about Us image"
                width={500} 
                height={500}
              />
            </div>
            <Image
              className="sm:ml-0 ml-auto rounded-xl object-cover border-8"
              src="/data.png"
              alt="about Us image"
              width={500} 
              height={500}
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-gray-100	">
                QUI SOMMES-NOUS ?
                </h2>
                <div className="text-gray-500 font-normal leading-relaxed lg:text-start text-center dark:text-white">
                Nous sommes un cabinet de conseil, de formation et d’accompagnement, engagé dans la réussite de vos projets de développement.

À travers cette présentation, nous vous offrons un aperçu de nos prestations et vous invitons à devenir notre partenaire, afin de vous aider à vous adapter à un monde en constante mutation et à vous sécuriser face à une réglementation en évolution permanente.

Nous mettons à votre disposition :
      <ul className='list-disc ml-8 text-black font-bold dark:text-white'>
        <li> Des prestations de qualité.</li>
        <li>Un encadrement professionnel.</li>  
        <li>Des solutions sur mesure pour renforcer la compétitivité de votre entreprise.</li>
        <li>Des conseils ciblés pour réussir vos projets et créer de la valeur ajoutée.</li>
      </ul>

Ensemble, construisons votre avenir avec efficacité et sérénité.
                </div>
              </div>
              
              <div
      ref={ref}
      className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
    >
      <div className="flex-col justify-start items-start inline-flex">
        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal dark:text-white">
          <CountUp end={inView ? 10 : 0}>
            {({ countUpRef, start }) => {
              if (inView) start();
              return <span ref={countUpRef} />;
            }}
          </CountUp>
          +
        </h3>
        <h6 className="text-gray-500 text-base font-normal leading-relaxed dark:text-white">Années expérience</h6>
      </div>

      <div className="flex-col justify-start items-start inline-flex">
        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal dark:text-white">
          <CountUp end={inView ? 35 : 0}>
            {({ countUpRef, start }) => {
              if (inView) start();
              return <span ref={countUpRef} />;
            }}
          </CountUp>
          +
        </h4>
        <h6 className="text-gray-500 text-base font-normal leading-relaxed dark:text-white">Projets réussis</h6>
      </div>

      <div className="flex-col justify-start items-start inline-flex">
        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal dark:text-white">
          <CountUp end={inView ? 15 : 0}>
            {({ countUpRef, start }) => {
              if (inView) start();
              return <span ref={countUpRef} />;
            }}
          </CountUp>
          +
        </h4>
        <h6 className="text-gray-500 text-base font-normal leading-relaxed dark:text-white">Clients satisfaits</h6>
      </div>
    </div>


            </div>
            <button onClick={openModal} className="sm:w-fit w-full px-3.5 py-2 bg-teal-700 hover:bg-teal-400 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex animate-bounce">
              <span className="px-1.5 flex text-white text-sm font-medium leading-6 cursor-pointer">afficher l emplacement<FaMapMarkerAlt className='justify-center relative left-1 'size={22}/></span>
            </button>



<Modal isOpen={isModalOpen} onClose={closeModal}>
  <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
    <div className="relative p-2.5 h-80 overflow-hidden rounded-xl bg-clip-border">
      {/* الـ iframe بالخلف */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover rounded-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.5738935835457!2d-9.232323440823315!3d32.29515280189281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac21f384f18d8b%3A0x881f62c86ae07612!2sDATA%20FC%20S.A.R.L!5e1!3m2!1sen!2sma!4v1749746100909!5m2!1sen!2sma"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* طبقة الرابط الشفّافة */}
      <a
        href="https://www.google.com/maps/place/DATA+FC+S.A.R.L/@32.2951528,-9.2323234,227m/data=!3m1!1e3!4m12!1m5!3m4!2zMzLCsDE3JzQ0LjMiTiA5wrAxMyc1NS4xIlc!8m2!3d32.2956389!4d-9.2319722!3m5!1s0xdac21f384f18d8b:0x881f62c86ae07612!8m2!3d32.295101!4d-9.2316815!16s%2Fg%2F11hjlc113z?hl=en&entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D" // ضع هنا رابط Google Maps الموجّه مباشرة
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Open in Google Maps"
      />
    </div>
    <div className="p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-slate-800 text-xl font-semibold">DATA FC</p>
        <p className="text-cyan-600 text-xl font-semibold">
          <a href="mailto:datafc2019@gmail.com">datafc2019@gmail.com</a>
        </p>
      </div>
      <p className="text-slate-600 leading-normal font-light">
        Centre d’affaires Plateau, 4ème étage, N°12, Ville Nouvelle, Safi​
      </p>
      <button
        onClick={closeModal}
        className="rounded-md w-full mt-6 bg-teal-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-teal-700 focus:shadow-none active:bg-cyan-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Fermer
      </button>
    </div>
  </div>
</Modal>

          </div>
        </div>
      </div>
      <div className="flex mt-10 flex-wrap justify-center gap-6 p-4">
  {cards.map((card) => (
    <div
      key={card.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 
                 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <a href="#">
        <Image
          className="rounded-t-lg w-full h-48 object-cover"
          src={card.image}
          alt={card.title}
          height={2000}
          width={3000}
        />
      </a>
      <div className="p-5">
        <a href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
        </a>
      </div>
    </div>
  ))}
</div>
<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
<h1 className="mb-10 text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Nous<mark className="px-2 ml-1 text-white bg-teal-600 rounded-sm dark:bg-teal-500">Focalisons sur:</mark></h1>
<div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                <p className="font-normal text-2xl leading-6 text-gray-500 mt-6 dark:text-zinc-50">le marché des ressources humaines et des services aux entreprises et ce par:​</p>
                <ul className="space-y-4 font-bold mt-8 text-2xl text-gray-700 list-none dark:text-white">
  {[
    "L’ingénierie de formation, la formation continue et l’assistance conseil en recrutement.",
    "L’exercice de l’activité d’intérim pour l’entreprise.",
    "La pratique de l’externalisation des ressources humaines.",
    "La mise à disposition des ressources humaines au profit des entreprises clientes.",
    "La Domiciliation des entreprises.",
  ].map((text, i) => (
    <li key={i} className="flex items-center gap-x-2">
      <FaExclamationCircle  className="text-teal-600 shrink-0" />
      <span>{text}</span>
    </li>
  ))}
</ul>
                </div>
                <div className="w-full lg:w-6/12 mt-20">
                    < Image className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" height={3000} width={2000}/>
                    <Image className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" height={3000} width={2000}/>
                    <Image className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" height={3000} width={2000}/>
                </div>
            </div>

              </div>
    </section>
  );
}
