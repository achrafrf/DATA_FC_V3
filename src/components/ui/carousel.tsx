'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Carousel({ children }: { children: React.ReactNode[] }) {
    const [, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative px-4">
      <div ref={sliderRef} className="keen-slider py-6">
        {children.map((child, i) => (
          <div key={i} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-emerald-200 rounded-3xl">
        <Button size="icon" variant="ghost" onClick={() => instanceRef.current?.prev()}>
          <ChevronLeft />
        </Button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-emerald-200 rounded-3xl">
        <Button size="icon" variant="ghost" onClick={() => instanceRef.current?.next()}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
