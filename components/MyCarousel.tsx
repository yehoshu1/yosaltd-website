import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MyCarousel = () => {
  const carImages = [
    {
      src: "/images/meap-boxes.jpeg",
      alt: "Green MEAP product boxes in cardboard container",
    },
    {
      src: "/images/meap-warehouse.jpeg",
      alt: "Stacked MEAP boxes in warehouse storage",
    },
    {
      src: "/images/forklifts-trailer.jpeg",
      alt: "Red HELI forklifts being transported on flatbed trailer",
    },
    {
      src: "/images/forklifts-operator.jpeg",
      alt: "Red HELI forklift with operator and assistant",
    },
    {
      src: "/car/raptor.png",
      alt: "Toyota Double Cab 4WD GR SPORTS",
    },
    {
      src: "/car/sports.png",
      alt: "Toyota Double Cab 4WD REVO LOCCO",
    },
    {
      src: "/car/Toyota DC 4WD REVO LOCCO black.png",
      alt: "Ford Ranger Raptor",
    },
    {
      src: "/car/Toyota DC 4WD REVO LOCCO bronze.png",
      alt: "Toyota Double Cab 4WD GR SPORTS",
    },
    {
      src: "/car/Toyota DC 4WD REVO LOCCO Red.png",
      alt: "Toyota Double Cab 4WD GR SPORTS",
    },
    {
      src: "/car/Toyota DC 4WD REVO LOCCO white.png",
      alt: "Toyota Double Cab 4WD GR SPORTS",
    },
    {
      src: "/car/Toyota DC 4WD.png",
      alt: "Toyota Double Cab 4WD GR SPORTS",
    },
    {
      src: "/car/locco.png",
      alt: "Ford Ranger Raptor",
    },
  ];

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-row justify-center place-items-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {carImages.map((car, index) => (
              <CarouselItem key={index}>
                <Image
                  src={car.src}
                  alt={car.alt}
                  objectFit="cover"
                  width={600}
                  height={600}
                  priority={index === 0}
                  className="rounded-lg object-contain w-fit mx-0 px-0"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;