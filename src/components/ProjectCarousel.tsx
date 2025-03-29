
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  title: string;
  description: string;
  images: ProjectImage[];
  tags: string[];
}

const ProjectCarousel = ({ title, description, images, tags }: ProjectCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg animate-on-scroll hover:border-kairo-blue/50 transition-all duration-300 neon-border overflow-hidden">
      <div className="relative">
        <Carousel className="w-full mb-6">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-black/50 text-white hover:bg-black/70 border-kairo-blue" />
          <CarouselNext className="right-2 bg-black/50 text-white hover:bg-black/70 border-kairo-blue" />
        </Carousel>
      </div>

      <h3 className="font-bold text-xl mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-kairo-blue/20 border border-kairo-blue/30 text-kairo-blue rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCarousel;
