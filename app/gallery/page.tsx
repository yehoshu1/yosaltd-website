import Gallery from "@/components/Gallery";
import React from "react";
import {ImageItem} from "../page";

//for now it only loads when all images are correct
//TODO make it load even if some pictures do not load
const page = () => {
  const images: ImageItem[] = [
    // Mapping & GNSS Equipment
    {
      src: "/img/Mapper_page0_image.png",
      responsive: "/img/Mapper_page0_image.png",
      thumb: "/img/Mapper_page0_image.png",
      alt: "Professional Mapping System",
      description: "Advanced GPS Mapping System with Real-time Data Collection and Analysis Tools",
      price: 4999.99,
      subHtml: `...`,
    },
    {
      src: "/img/G60F-GNSS-SPECS-800x800.png",
      responsive: "/img/G60F-GNSS-SPECS-800x800.png",
      thumb: "/img/G60F-GNSS-SPECS-800x800.png",
      alt: "GNSS Receiver",
      description: "High-Precision GNSS Receiver with RTK Support and Multi-Constellation Tracking",
      price: 3499.99,
      subHtml: `...`,
    },

    // PC & Workstations
    {
      src: "/img/PC/1.jpg",
      responsive: "/img/PC/1.jpg",
      thumb: "/img/PC/1.jpg",
      alt: "Desktop Computer",
      description: "Business Desktop PC with Intel Core i5, 16GB RAM, 512GB SSD",
      price: 899.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/8.png",
      responsive: "/img/PC/8.png",
      thumb: "/img/PC/8.png",
      alt: "Gaming PC",
      description: "High-Performance Gaming PC with RTX 3080, 32GB RAM, RGB Cooling",
      price: 2199.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/10.webp",
      responsive: "/img/PC/10.webp",
      thumb: "/img/PC/10.webp",
      alt: "Mini PC",
      description: "Compact Mini PC with Intel i7, 16GB RAM, Perfect for Office Use",
      price: 799.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/3.jpg",
      responsive: "/img/PC/3.jpg",
      thumb: "/img/PC/3.jpg",
      alt: "Workstation PC",
      description: "Professional Workstation with Xeon CPU, 64GB RAM, Quadro Graphics",
      price: 3299.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/11.jpg",
      responsive: "/img/PC/11.jpg",
      thumb: "/img/PC/11.jpg",
      alt: "All-in-One PC",
      description: "27-inch All-in-One PC with Touch Screen, i7 Processor",
      price: 1499.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/LOT7SUMIworkstations_precision_7820_gallery_2 (1).jpg",
      responsive: "/img/PC/LOT7SUMIworkstations_precision_7820_gallery_2 (1).jpg",
      thumb: "/img/PC/LOT7SUMIworkstations_precision_7820_gallery_2 (1).jpg",
      alt: "Dell Precision Workstation",
      description: "Dell Precision 7820 Workstation, Dual Xeon, 128GB RAM",
      price: 4599.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/GEN4.jpg",
      responsive: "/img/PC/GEN4.jpg",
      thumb: "/img/PC/GEN4.jpg",
      alt: "Gen4 Desktop",
      description: "4th Generation Business Desktop with Enhanced Security Features",
      price: 1299.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/P340SSF.jpg",
      responsive: "/img/PC/P340SSF.jpg",
      thumb: "/img/PC/P340SSF.jpg",
      alt: "Lenovo P340",
      description: "Lenovo ThinkStation P340 Small Form Factor Workstation",
      price: 1799.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/7.webp",
      responsive: "/img/PC/7.webp",
      thumb: "/img/PC/7.webp",
      alt: "Custom Desktop",
      description: "Custom-Built Desktop PC for Content Creation",
      price: 1899.99,
      subHtml: `...`,
    },
    {
      src: "/img/PC/ktc-product-ssd-snv2s-500g-1-zm-lg.jpg",
      responsive: "/img/PC/ktc-product-ssd-snv2s-500g-1-zm-lg.jpg",
      thumb: "/img/PC/ktc-product-ssd-snv2s-500g-1-zm-lg.jpg",
      alt: "SSD Drive",
      description: "500GB NVMe SSD, Gen4 x4 Interface, Up to 7000MB/s",
      price: 89.99,
      subHtml: `...`,
    },

    // CCTV Cameras
    {
      src: "/img/cctv/5.webp",
      responsive: "/img/cctv/5.webp",
      thumb: "/img/cctv/5.webp",
      alt: "Security System",
      description: "8-Channel NVR System with 4K Cameras and AI Detection",
      price: 899.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/3.png",
      responsive: "/img/cctv/3.png",
      thumb: "/img/cctv/3.png",
      alt: "Bullet Camera",
      description: "4K Bullet Camera with Night Vision and 120° Wide Angle",
      price: 299.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/2C-1R.webp",
      responsive: "/img/cctv/2C-1R.webp",
      thumb: "/img/cctv/2C-1R.webp",
      alt: "2-Camera Kit",
      description: "2-Camera Security Kit with Recording Unit, Easy Setup",
      price: 449.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/2.jpg",
      responsive: "/img/cctv/2.jpg",
      thumb: "/img/cctv/2.jpg",
      alt: "PTZ Camera",
      description: "Pan-Tilt-Zoom Camera with 30x Optical Zoom",
      price: 599.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/6mp-hikvision-wdr-dome-ip-camera-1.webp",
      responsive: "/img/cctv/6mp-hikvision-wdr-dome-ip-camera-1.webp",
      thumb: "/img/cctv/6mp-hikvision-wdr-dome-ip-camera-1.webp",
      alt: "Hikvision Dome",
      description: "Hikvision 6MP WDR Dome IP Camera with IR",
      price: 249.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/DS-2CD2163G0-IS-2.8MM.jpg",
      responsive: "/img/cctv/DS-2CD2163G0-IS-2.8MM.jpg",
      thumb: "/img/cctv/DS-2CD2163G0-IS-2.8MM.jpg",
      alt: "Hikvision Turret",
      description: "Hikvision DS-2CD2163G0 6MP Turret Camera 2.8mm",
      price: 279.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/bec178fb-a87b-482e-a855-bec0195dc03c.jpg",
      responsive: "/img/cctv/bec178fb-a87b-482e-a855-bec0195dc03c.jpg",
      thumb: "/img/cctv/bec178fb-a87b-482e-a855-bec0195dc03c.jpg",
      alt: "Mini Dome",
      description: "Mini Dome Camera with Built-in Microphone",
      price: 189.99,
      subHtml: `...`,
    },
    {
      src: "/img/cctv/m3086v_ceiling_angle_left_2112_0.png.jpg",
      responsive: "/img/cctv/m3086v_ceiling_angle_left_2112_0.png.jpg",
      thumb: "/img/cctv/m3086v_ceiling_angle_left_2112_0.png.jpg",
      alt: "360° Camera",
      description: "360-Degree Panoramic Ceiling Camera",
      price: 499.99,
      subHtml: `...`,
    },

    // Networking Equipment
    {
      src: "/img/net/6.jpg",
      responsive: "/img/net/6.jpg",
      thumb: "/img/net/6.jpg",
      alt: "Network Switch",
      description: "48-Port Managed Switch with PoE+ Support",
      price: 1299.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/molex.webp",
      responsive: "/img/net/molex.webp",
      thumb: "/img/net/molex.webp",
      alt: "Network Cable",
      description: "Molex CAT6A Shielded Network Cable",
      price: 149.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/9.webp",
      responsive: "/img/net/9.webp",
      thumb: "/img/net/9.webp",
      alt: "Wireless AP",
      description: "Enterprise WiFi 6 Access Point with MU-MIMO",
      price: 399.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/1.jpg",
      responsive: "/img/net/1.jpg",
      thumb: "/img/net/1.jpg",
      alt: "Server Rack",
      description: "42U Server Rack with Cooling and Cable Management",
      price: 1999.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/s00006498.webp",
      responsive: "/img/net/s00006498.webp",
      thumb: "/img/net/s00006498.webp",
      alt: "Network Router",
      description: "Enterprise Router with Advanced Security Features",
      price: 799.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/cisco.webp",
      responsive: "/img/net/cisco.webp",
      thumb: "/img/net/cisco.webp",
      alt: "Cisco Switch",
      description: "Cisco Catalyst Enterprise Switch",
      price: 2499.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/dellemc-per550-16x2-5-above-lf-emc-honeycomb-bezel-w-lcd.png",
      responsive: "/img/net/dellemc-per550-16x2-5-above-lf-emc-honeycomb-bezel-w-lcd.png",
      thumb: "/img/net/dellemc-per550-16x2-5-above-lf-emc-honeycomb-bezel-w-lcd.png",
      alt: "Dell Server",
      description: "Dell PowerEdge R550 Rack Server",
      price: 4999.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/71j51Xnm-lL.jpg",
      responsive: "/img/net/71j51Xnm-lL.jpg",
      thumb: "/img/net/71j51Xnm-lL.jpg",
      alt: "Network Cabinet",
      description: "Wall-Mount Network Cabinet 9U",
      price: 299.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/1301_hi_res.png",
      responsive: "/img/net/1301_hi_res.png",
      thumb: "/img/net/1301_hi_res.png",
      alt: "Patch Panel",
      description: "48-Port CAT6 Patch Panel",
      price: 189.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/41ZC3n8QxDL.jpg",
      responsive: "/img/net/41ZC3n8QxDL.jpg",
      thumb: "/img/net/41ZC3n8QxDL.jpg",
      alt: "Network Tester",
      description: "Professional Network Cable Tester",
      price: 149.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/KVM1.jpg",
      responsive: "/img/net/KVM1.jpg",
      thumb: "/img/net/KVM1.jpg",
      alt: "KVM Switch",
      description: "8-Port KVM Switch with LCD Display",
      price: 699.99,
      subHtml: `...`,
    },
    {
      src: "/img/net/china kvm console.jpg",
      responsive: "/img/net/china kvm console.jpg",
      thumb: "/img/net/china kvm console.jpg",
      alt: "KVM Console",
      description: "1U Rack Mount KVM Console with 17\" LCD",
      price: 899.99,
      subHtml: `...`,
    },

    // Air Conditioning
    {
      src: "/img/air/1.webp",
      responsive: "/img/air/1.webp",
      thumb: "/img/air/1.webp",
      alt: "Split AC",
      description: "18,000 BTU Split Air Conditioner",
      price: 1499.99,
      subHtml: `...`,
    },
    {
      src: "/img/air/2.jpg",
      responsive: "/img/air/2.jpg",
      thumb: "/img/air/2.jpg",
      alt: "Commercial AC",
      description: "24,000 BTU Commercial Grade AC System",
      price: 2999.99,
      subHtml: `...`,
    },

    // Biometric Systems
    {
      src: "/img/bio/1.webp",
      responsive: "/img/bio/1.webp",
      thumb: "/img/bio/1.webp",
      alt: "Biometric Scanner",
      description: "Multi-Modal Biometric Access Control System",
      price: 599.99,
      subHtml: `...`,
    },
    {
      src: "/img/bio/3.jpg",
      responsive: "/img/bio/3.jpg",
      thumb: "/img/bio/3.jpg",
      alt: "Face Recognition System",
      description: "Advanced Facial Recognition Terminal with Temperature Screening",
      price: 799.99,
      subHtml: `...`,
    },

    // UPS Systems
    {
      src: "/img/UPS/1.jpg",
      responsive: "/img/UPS/1.jpg",
      thumb: "/img/UPS/1.jpg",
      alt: "Line Interactive UPS",
      description: "1500VA Line Interactive UPS with LCD Display",
      price: 399.99,
      subHtml: `...`,
    },
    {
      src: "/img/UPS/3.jpg",
      responsive: "/img/UPS/3.jpg",
      thumb: "/img/UPS/3.jpg",
      alt: "Online UPS",
      description: "3000VA Online Double Conversion UPS",
      price: 899.99,
      subHtml: `...`,
    },
    {
      src: "/img/UPS/4.jpg",
      responsive: "/img/UPS/4.jpg",
      thumb: "/img/UPS/4.jpg",
      alt: "Rack Mount UPS",
      description: "2200VA Rack-Mountable UPS with Network Card",
      price: 1299.99,
      subHtml: `...`,
    },
    {
      src: "/img/UPS/HRL1234WF2FR_product-1.jpg",
      responsive: "/img/UPS/HRL1234WF2FR_product-1.jpg",
      thumb: "/img/UPS/HRL1234WF2FR_product-1.jpg",
      alt: "UPS Battery",
      description: "12V 34W High Rate UPS Replacement Battery",
      price: 89.99,
      subHtml: `...`,
    },
    {
      src: "/img/UPS/PSC-SOLAR-1.5KVA12V-OGM-HYBRID-SOLAR-INVERTER-1-1.webp",
      responsive: "/img/UPS/PSC-SOLAR-1.5KVA12V-OGM-HYBRID-SOLAR-INVERTER-1-1.webp",
      thumb: "/img/UPS/PSC-SOLAR-1.5KVA12V-OGM-HYBRID-SOLAR-INVERTER-1-1.webp",
      alt: "Solar Inverter",
      description: "1.5KVA Hybrid Solar Inverter with MPPT Controller",
      price: 799.99,
      subHtml: `...`,
    },

    // Solar & Battery Systems
    {
      src: "/img/solar/lithium-battery.jpg",
      responsive: "/img/solar/lithium-battery.jpg",
      thumb: "/img/solar/lithium-battery.jpg",
      alt: "Lithium Battery",
      description: "48V 100Ah Lithium Battery for Solar Storage",
      price: 1499.99,
      subHtml: `...`,
    },
    {
      src: "/img/solar/lithium-ion-battery.webp",
      responsive: "/img/solar/lithium-ion-battery.webp",
      thumb: "/img/solar/lithium-ion-battery.webp",
      alt: "Li-ion Battery Pack",
      description: "Modular Lithium-ion Battery Pack with BMS",
      price: 1799.99,
      subHtml: `...`,
    },
    {
      src: "/img/solar/battery.png",
      responsive: "/img/solar/battery.png",
      thumb: "/img/solar/battery.png",
      alt: "Solar Battery",
      description: "Solar Energy Storage Battery System 10kWh",
      price: 3999.99,
      subHtml: `...`,
    },
    {
      src: "/img/solar/solar-lifepo4-lithium-battery.jpg",
      responsive: "/img/solar/solar-lifepo4-lithium-battery.jpg",
      thumb: "/img/solar/solar-lifepo4-lithium-battery.jpg",
      alt: "LiFePO4 Battery",
      description: "LiFePO4 Battery 51.2V 200Ah for Solar Systems",
      price: 2499.99,
      subHtml: `...`,
    },
    {
      src: "/img/solar/Photo-1.jpg",
      responsive: "/img/solar/Photo-1.jpg",
      thumb: "/img/solar/Photo-1.jpg",
      alt: "Solar Panel",
      description: "High-Efficiency Solar Panel 440W Monocrystalline",
      price: 399.99,
      subHtml: `...`,
    },
    {
      src: "/img/solar/solar-pump-new-hd.webp",
      responsive: "/img/solar/solar-pump-new-hd.webp",
      thumb: "/img/solar/solar-pump-new-hd.webp",
      alt: "Solar Pump",
      description: "Solar Powered Water Pump System 2HP",
      price: 899.99,
      subHtml: `...`,
    },
    {
      src: "/img/solar/solar-warer-pump-banner-mob.jpg",
      responsive: "/img/solar/solar-warer-pump-banner-mob.jpg",
      thumb: "/img/solar/solar-warer-pump-banner-mob.jpg",
      alt: "Solar Water Pump",
      description: "Complete Solar Water Pumping Solution with Controller",
      price: 1299.99,
      subHtml: `...`,
    }
];
  return <Gallery images={images} />;
};

export default page;