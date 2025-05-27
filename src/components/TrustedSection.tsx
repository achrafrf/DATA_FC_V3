import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export function TrustedSection() {
  const logos = [
    '/Marsa-Maroc.webp',
    '/sogenco.png',
    '/fertitech.png',
    '/hawd.jpg',
    '/group_enfant.png',
    '/espace_enfant.png',
    '/safi_pech.jpg',
  ]
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <p className="md:max-w-44 md:border-r md:pr-6 text-lg font-bold text-end text-teal-700">
            Ils nous ont fait confiance
          </p>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {logos.map((src, i) => (
                <div key={i} className="flex">
                  <Image
                    className="mx-auto h-14 w-fit dark:invert"
                    src={src} alt="Logo"
                    width={160} height={60}
                  />
                </div>
              ))}
            </InfiniteSlider>
            <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
            <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1}/>
            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1}/>
          </div>
        </div>
      </div>
    </section>
  )
}
