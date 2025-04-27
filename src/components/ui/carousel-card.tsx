import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CarouselCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CarouselCard({ title, description, imageUrl }: CarouselCardProps) {
  return (
    <Card className="w-[300px] rounded-xl shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover"
        height={4000}
        width={3000}
      />
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
