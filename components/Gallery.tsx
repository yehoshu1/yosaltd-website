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
  description: string;
  price: string;
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
  description = "Explore our diverse product portfolio",
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
                    {/* <p className="text-lg font-bold text-blue-500">
                      ${image.price}
                    </p> */}
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
