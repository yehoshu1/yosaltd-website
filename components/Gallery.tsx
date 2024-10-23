'use client';

import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import LightGallery with no SSR but preload it
const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
  loading: () => null
});

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Types
interface ImageItem {
  src: string;
  responsive: string;
  thumb: string;
  alt: string;
  subHtml: string;
}

interface GalleryProps {
  images: ImageItem[];
  title?: string;
  description?: string;
}

const ImageGallery: React.FC<GalleryProps> = ({
  images,
  title = 'Gallery',
  description = 'Explore our diverse tech portfolio'
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
        setLoadedImages(prev => new Set(prev).add(index));
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
            className="group block w-full aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            
          >
            <div className="relative w-full h-full">
              <Image
                alt={image.alt}
                src={image.thumb}
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4}
              />
            </div>
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