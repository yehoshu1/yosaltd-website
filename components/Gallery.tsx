"use client";

import React, {useState} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

interface ImageItem {
  src: string;
  responsive: string;
  thumb: string;
  alt: string;
}

interface ImagesLoadedState {
  [key: number]: boolean;
}

type GalleryProps = {
  dynamicEl: ImageItem[];
};

export default function Gallery({dynamicEl}: GalleryProps): JSX.Element {
  const [imagesLoaded, setImagesLoaded] = useState<ImagesLoadedState>({});

  const onInit = (): void => {
    console.log("lightGallery has been initialized");
  };

  const handleImageLoad = (index: number): void => {
    setImagesLoaded((prev) => ({...prev, [index]: true}));
  };

  return (
    <div className="mx-10 md:mx-20 my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl dark:text-white font-bold mb-2">Gallery</h2>
        <p className="">Explore our diverse tech portfolio</p>
      </div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {dynamicEl.map((image: ImageItem, index: number) => (
          <a
            href={image.src}
            key={index}
            className="block w-full aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {!imagesLoaded[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <Image
              alt={image.alt}
              src={image.thumb}
              layout="fill"
              objectFit="contain"
              className={`transition-transform duration-300 hover:scale-110 ${
                imagesLoaded[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(index)}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
