import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NotreMission from '@/components/notreMission'
import Nosengagement from '@/components/nosengagement'
import NosValeurs from '@/components/nosValeurs'
import Notrevesion from '@/components/notrevesion'
const page = () => {
  return (
    <>
      <main className="overflow-x-hidden ">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
          <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
  <span className="typing-data-fc block text-teal-600">
    DATA FC
  </span>
  <span className="block mt-2">
    Formation &amp; Consulting
  </span>
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
<div
  className="pb-16 md:pb-32">                    
             <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-lg font-bold text-teal-700">Ils nous ont fait confiance</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
  <div className="flex">
    <Image 
      className="mx-auto h-14 w-fit dark:invert"
      src="/Marsa-Maroc.webp"
      alt="Nvidia Logo"
      width={160}
      height={60}
    />
  </div>
  <div className="flex">
    <Image
      className="mx-auto h-14 w-fit dark:invert"
      src="/sogenco.png"
      alt="Column Logo"
      width={160}
      height={50}
    />
  </div>
  <div className="flex">
    <Image
      className="mx-auto h-14 w-fit dark:invert"
      src="/fertitech.png"
      alt="GitHub Logo"
      width={70}
      height={16}
    />
  </div>
  <div className="flex">
    <Image
      className="mx-auto h-14 w-fit dark:invert"
      src="/hawd.jpg"
      alt="Nike Logo"
      width={80}
      height={20}
    />
  </div>
  <div className="flex">
    <Image
      className="mx-auto h-14 w-fit dark:invert"
      src="/group_enfant.png"
      alt="Lemon Squeezy Logo"
      width={100}
      height={20}
    />
  </div>
  <div className="flex">
    <Image
      className="mx-auto h-14 w-fit dark:invert"
      src="/espace_enfant.png"
      alt="Laravel Logo"
      width={70}
      height={16}
    />
  </div>
  <div className="flex">
    <Image
      className="mx-auto h-14 w-fit dark:invert"
      src="/safi_pech.jpg"
      alt="Lilly Logo"
      width={90}
      height={28}
    />
  </div>
                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container m-auto'>
                          
     {/*Notre mISSION*/}
    <NotreMission />     
     {/*NotreMission*/}

    {/*Notre Vision*/}
    <Notrevesion />
    {/*NosVision*/}

    {/*NosEngagement*/}
    <Nosengagement />
    {/*NosEngagement*/}

    {/*NosValeurs*/}
    <NosValeurs />
    {/*Nos-Valeurs*/}
                </div>
            </main>
    </>
  )
}

export default page
