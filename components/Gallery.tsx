"use client";

import React, {Suspense, useState, useEffect} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import LightGallery with no SSR but preload it
const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
  loading: () => null,
});

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Types
interface ImageItem {
  src: string;
  responsive: string;
  thumb: string;
  alt: string;
  description:string;
  price:string;
  subHtml: string;
}

interface GalleryProps {
  images: ImageItem[];
  title?: string;
  description?: string;
}

const ImageGallery: React.FC<GalleryProps> = ({
  images,
  title = "Gallery",
  description = "Explore our diverse tech portfolio",
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isGalleryReady, setIsGalleryReady] = useState(false);

  // Check if all images are loaded
  useEffect(() => {
    if (loadedImages.size === images.length) {
      setIsGalleryReady(true);
    }
  }, [loadedImages, images.length]);

  // Preload all images
  useEffect(() => {
    images.forEach((image, index) => {
      const img = new window.Image();
      img.src = image.thumb;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(index));
      };
    });
  }, [images]);

  const GalleryContent = () => {
    if (!isGalleryReady) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      );
    }

    return (
      <LightGallery
        elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        plugins={[lgThumbnail, lgZoom]}
        speed={500}
        backdropDuration={400}
        mode="lg-fade"
        download={false}
        closeOnTap={true}
        hideControlOnEnd={true}
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.src}
            className=""
          >
            {/* <div className="relative w-full h-full">
              <Image
                alt={image.alt}
                src={image.thumb}
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4}
              />
            </div> */}
            {/* <a
              href="#"
              className="group relative block overflow-hidden"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <div className="w-80 h-80 object-contain flex flex-col justify-center place-items-center place-content-center">
                <Image
                  src={image.thumb}
                  alt=""
                  fill
                  className="border-red-600 border-2 h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 my-3"
                />
              </div>

              <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-blue-600 px-3 py-1.5 text-xs font-medium">
                  {" "}
                  New{" "}
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Robot Toy
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
              </div>
            </a> */}
            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    src={image.thumb}
                    alt={image.alt}
                    className="w-full h-64 object-contain"
                    width={100}
                    height={100}
                  />
                 
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{image.alt}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {image.description}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-blue-500">${image.price}</p>

                    {/* <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>

                      <button className="text-sm border-red-600">Add to cart</button>
                    </div> */}
                  </div>
                </div>
              </a>
            </article>
          </a>
        ))}
      </LightGallery>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      <Suspense fallback={null}>
        <GalleryContent />
      </Suspense>
    </div>
  );
};

export default ImageGallery;
