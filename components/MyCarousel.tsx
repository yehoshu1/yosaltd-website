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
      <h2 className="text-3xl font-bold my-10 text-center">Brand New 2023 Cars Available Now</h2>
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-row justify-center place-items-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {carImages.map((car, index) => (
              <CarouselItem key={index}>
                <Image
                  src={car.src}
                  alt={car.alt}
                  objectFit="contain"
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
