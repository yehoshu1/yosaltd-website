 'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Specification {
  icon: string;
  title: string;
  description: string;
}

const YosaLaptopShowcase: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/images/yosa-laptop-top.jpeg",
    "/images/yosa-laptop-angles.jpeg",
    "/images/yosa-laptop-front.jpeg"
  ];

  const specifications: Specification[] = [
    { icon: "🔧", title: "Processor", description: "Intel® i7 1355U" },
    { icon: "💾", title: "Memory", description: "16GB DDR4" },
    { icon: "💽", title: "Storage", description: "1TB M.2 NVME SSD" },
    { icon: "🖥️", title: "Display", description: '14" 1920×1080 IPS, 250 Cd/m2, 16:9' },
    { icon: "🔋", title: "Battery", description: "11.4V/4650mAh" },
    { icon: "📷", title: "Camera", description: "2.0M+DMIC" },
    { icon: "📶", title: "Connectivity", description: "WIFI 802.11ac/b/g/n, 2.4G/5.0GHz" },
    { icon: "🔌", title: "I/O Ports", description: "HDMI, USB3.0×2, USB2.0×1, Type-C USB×1, SD card slot, 3.5mm Audio, DC" }
  ];

  const accessories = [
    "Adapter & UK power cord",
    "14-inch laptop bag",
    "Type-C Hub with 1000M Ethernet, HDMI, VGA, USB-C, 3.5MM Audio, USB-A ×3",
    "Laser wireless mouse (2.4G, chargable)"
  ];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="lg:w-1/2 relative">
          <div className="bg-white p-4 rounded-lg shadow-md relative aspect-video flex items-center justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src={images[currentImageIndex]} 
                alt={`YOSA L1418 Laptop - View ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            <button 
              className="absolute left-2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-2">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`cursor-pointer border-2 rounded-md overflow-hidden ${idx === currentImageIndex ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setCurrentImageIndex(idx)}
              >
                <div className="relative h-16 w-full">
                  <Image 
                    src={img} 
                    alt={`YOSA L1418 Thumbnail ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">YOSA L1418</h1>
          <div className="flex items-center mt-2">
            <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">Windows 11</div>
            <div className="ml-2 px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-medium">Ultrabook</div>
          </div>
          
          <p className="mt-4 text-gray-600">
            Experience exceptional performance with the YOSA L1418 laptop. Featuring an Intel i7 processor, 
            sleek design, and comprehensive connectivity options, this ultrabook is perfect for 
            both productivity and entertainment.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((spec, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-xl mr-2">{spec.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-800">{spec.title}</h3>
                    <p className="text-gray-600 text-sm">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Included Accessories</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {accessories.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex-1">
              Buy Now
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              <ZoomIn size={18} className="mr-2" />
              View Full Specs
            </button>
          </div> */}
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💪</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Powerful Performance</h3>
            <p className="text-gray-600">Intel i7 processor paired with 16GB DDR4 memory for seamless multitasking.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🖥️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Crisp Display</h3>
            <p className="text-gray-600">14&quot; FHD IPS display with excellent color reproduction and clarity.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔌</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Complete Connectivity</h3>
            <p className="text-gray-600">Comprehensive port selection including HDMI, USB-C, and SD card reader.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Full Package</h3>
            <p className="text-gray-600">Comes with all essential accessories including a laptop bag and wireless mouse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YosaLaptopShowcase;