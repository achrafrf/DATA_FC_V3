"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const valuesData = [
  {
    title: "Integrity",
    description: "We commit to the highest ethical standards.",
    imageUrl: "https://picsum.photos/200/150?random=1",
  },
  {
    title: "Innovation",
    description: "We embrace creativity and drive change.",
    imageUrl: "https://picsum.photos/200/150?random=2",
  },
  {
    title: "Collaboration",
    description: "We work together to achieve common goals.",
    imageUrl: "https://picsum.photos/200/150?random=3",
  },
];

export const ValueCarousel = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % valuesData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currentValue = valuesData[currentValueIndex];

  return (
    <div className="flex justify-center">
      <Card className="w-full md:w-2/3 lg:w-1/2 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{currentValue.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
        
          <CardDescription className="text-center">{currentValue.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

