import Gallery from "@/components/Gallery";
import React from "react";
import {ImageItem} from "../page";

const page = () => {
  const dynamicEl: ImageItem[] = [
    {
      src: "/img/cctv/3.png",
      responsive: "/img/cctv/3.png",
      thumb: "/img/cctv/3.png",
      alt: `...`,
    },
    {
      src: "/img/net/6.jpg",
      responsive: "/img/net/6.jpg",
      thumb: "/img/net/6.jpg",
      alt: `...`,
    },
    {
      src: "/img/net/8.jpg",
      responsive: "/img/net/8.jpg",
      thumb: "/img/net/8.jpg",
      alt: `...`,
    },
    {
      src: "/img/PC/p15s.jpg",
      responsive: "/img/PC/p15s.jpg",
      thumb: "/img/PC/p15s.jpg",
      alt: `...`,
    },
    {
      src: "/img/PC/3.jpg",
      responsive: "/img/PC/3.jpg",
      thumb: "/img/PC/3.jpg",
      alt: `...`,
    },
    {
      src: "/img/cctv/5.webp",
      responsive: "/img/cctv/5.webp",
      thumb: "/img/cctv/5.webp",
      alt: `...`,
    },
    {
      src: "/img/net/9.webp",
      responsive: "/img/net/9.webp",
      thumb: "/img/net/9.webp",
      alt: `...`,
    },
    {
      src: "/img/net/1.jpg",
      responsive: "/img/net/1.jpg",
      thumb: "/img/net/1.jpg",
      alt: `...`,
    },
    {
      src: "/img/air/2.jpg",
      responsive: "/img/air/2.jpg",
      thumb: "/img/air/2.jpg",
      alt: `...`,
    },
    {
      src: "/img/bio/1.webp",
      responsive: "/img/bio/1.webp",
      thumb: "/img/bio/1.webp",
      alt: `...`,
    },
    {
      src: "/img/G60F-GNSS-SPECS-800x800.png",
      responsive: "/img/G60F-GNSS-SPECS-800x800.png",
      thumb: "/img/G60F-GNSS-SPECS-800x800.png",
      alt: `...`,
    },
    {
      src: "/img/Mapper_page0_image.png",
      responsive: "/img/Mapper_page0_image.png",
      thumb: "/img/Mapper_page0_image.png",
      alt: `...`,
    },
  ];
  return <Gallery dynamicEl={dynamicEl} />;
};

export default page;
