"use client";
import { Carousel } from '@/components/ui/carousel';
import { CarouselCard } from '@/components/ui/carousel-card';
export const TeamShowcase = () => {
  const cards = [
    {
      title: 'Montée en compétences',
      description: 'La formation est le moyen idéal pour y aboutir, elle constitue l’un des principaux leviers de management de votre capital humain.',
      imageUrl: '/image_formation/competence.jpg',
    },
    {
      title: 'Solution d’avenir',
      description: ' Le meilleur moyen c’est d’adopter une meilleure prise en charge de la formation de vos collaborateurs.',
      imageUrl: '/image_formation/solutions.jpg',
    },
    {
      title: 'Innovation pour votre entreprise',
      description: 'Attachez de l’importance à la formation de vos employés.',
      imageUrl: '/image_formation/innovation.jpg',
    },
    {
      title: 'Créer de la valeur pour votre entreprise',
      description: 'La formation est l’investissement le plus sûr pour y arriver .',
      imageUrl: '/image_formation/entreprise.jpg',
    },
    {
      title: 'Développer le potentiel humain',
      description: 'Adopter une politique de formation continue est la solution.',
      imageUrl: '/image_formation/humain.jpg',
    },
  ];
  return (
    <main className="p-10">
    <Carousel>
      {cards.map((card, i) => (
        <CarouselCard key={i} {...card} />
      ))}
    </Carousel>
  </main>
  );
};
