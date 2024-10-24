import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MyCarousel from "@/components/MyCarousel";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export type ImageItem = {
  src: string;
  responsive: string;
  thumb: string;
  alt: string;
  description: string;
  price: string;
  subHtml: string;
};
export default function Home() {
  const images: ImageItem[] = [
    {
      src: "/img/PC/hpPavillion-15s.png",
      responsive: "/img/PC/hpPavillion-15s.png",
      thumb: "/img/PC/hpPavillion-15s.png",
      alt: "HP Pavillion 15s",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/PC/p15s.jpg",
      responsive: "/img/PC/p15s.jpg",
      thumb: "/img/PC/p15s.jpg",
      alt: "Business Laptop",
      description:
        '15.6" Professional Laptop, Intel i7, 32GB RAM, 1TB SSD, NVIDIA Graphics',
      price: "1499.99",
      subHtml: `...`,
    },
    {
      src: "/img/PC/014-hp-spectre-x360-14.webp",
      responsive: "/img/PC/014-hp-spectre-x360-14.webp",
      thumb: "/img/PC/014-hp-spectre-x360-14.webp",
      alt: "HP Spectre x360",
      description:
        '15.6" Professional Laptop, Intel i7, 32GB RAM, 1TB SSD, NVIDIA Graphics',
      price: "1499.99",
      subHtml: `...`,
    },
    {
      src: "/img/PC/3.jpg",
      responsive: "/img/PC/3.jpg",
      thumb: "/img/PC/3.jpg",
      alt: "Desktop Workstation",
      description:
        "Professional Workstation PC, Intel Xeon, 64GB RAM, RTX Graphics, 2TB Storage",
      price: "2499.99",
      subHtml: `...`,
    },
    {
      src: "/img/cctv/3.png",
      responsive: "/img/cctv/3.png",
      thumb: "/img/cctv/3.png",
      alt: "CCTV Camera",
      description:
        "4K Ultra HD Security Camera with Night Vision, 360° Coverage, IP67 Waterproof Rating",
      price: "299.99",
      subHtml: `...`,
    },
    {
      src: "/img/cctv/5.webp",
      responsive: "/img/cctv/5.webp",
      thumb: "/img/cctv/5.webp",
      alt: "Surveillance System",
      description:
        "8-Channel NVR Security System with 4 Cameras, AI Motion Detection, 2TB Storage",
      price: "799.99",
      subHtml: `...`,
    },
    {
      src: "/img/bio/1.webp",
      responsive: "/img/bio/1.webp",
      thumb: "/img/bio/1.webp",
      alt: "Biometric Scanner",
      description:
        "Multi-Modal Biometric Access Control System with Facial Recognition and Fingerprint",
      price: "599.99",
      subHtml: `...`,
    },
    {
      src: "/img/G60F-GNSS-SPECS-800x800.png",
      responsive: "/img/G60F-GNSS-SPECS-800x800.png",
      thumb: "/img/G60F-GNSS-SPECS-800x800.png",
      alt: "GNSS Device",
      description:
        "High-Precision GNSS Receiver with RTK Support, Multi-Constellation Tracking",
      price: "3499.99",
      subHtml: `...`,
    },
    {
      src: "/img/Mapper_page0_image.png",
      responsive: "/img/Mapper_page0_image.png",
      thumb: "/img/Mapper_page0_image.png",
      alt: "Mapping System",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/maize-dryer.jpg",
      responsive: "/img/maize-dryer.jpg",
      thumb: "/img/maize-dryer.jpg",
      alt: "Maize dryer",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/9.webp",
      responsive: "/img/net/9.webp",
      thumb: "/img/net/9.webp",
      alt: "Wireless Access Point",
      description:
        "Enterprise WiFi 6 Access Point, Dual-Band, MU-MIMO, POE Powered",
      price: "449.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/1.jpg",
      responsive: "/img/net/1.jpg",
      thumb: "/img/net/1.jpg",
      alt: "Network Rack",
      description:
        "42U Server Rack Cabinet with Cooling, Cable Management, and Power Distribution",
      price: "1899.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/6.jpg",
      responsive: "/img/net/6.jpg",
      thumb: "/img/net/6.jpg",
      alt: "Enterprise Network Switch",
      description:
        "48-Port Gigabit Managed Switch with PoE+, Layer 3 Features, Stackable",
      price: "1299.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/cisco-isr4331-k9-front.jpg",
      responsive: "/img/net/cisco-isr4331-k9-front.jpg",
      thumb: "/img/net/cisco-isr4331-k9-front.jpg",
      alt: "Cisco isr4331-k9",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/c9200I-cisco-network-switch.jpg",
      responsive: "/img/net/c9200I-cisco-network-switch.jpg",
      thumb: "/img/net/c9200I-cisco-network-switch.jpg",
      alt: "Cisco isr4331-k9",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/unifi 6 long range.png",
      responsive: "/img/net/unifi 6 long range.png",
      thumb: "/img/net/unifi 6 long range.png",
      alt: "Unifi 6 Long Range Access Point",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/Cisco_Catalyst-C8200-1N-4T-Front-scaled-640x450.webp",
      responsive:
        "/img/net/Cisco_Catalyst-C8200-1N-4T-Front-scaled-640x450.webp",
      thumb: "/img/net/Cisco_Catalyst-C8200-1N-4T-Front-scaled-640x450.webp",
      alt: "Cisco_Catalyst-C8200-1N-4T",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/flexbox_with_fmp_attached_2.webp",
      responsive: "/img/net/flexbox_with_fmp_attached_2.webp",
      thumb: "/img/net/flexbox_with_fmp_attached_2.webp",
      alt: "Flexbox Series - Universal Transceivers SFP, SFP, SFP+, XFP, QSFP+, QSFP28, SFP28",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/Interactive Flipboard.jpg",
      responsive: "/img/net/Interactive Flipboard.jpg",
      thumb: "/img/net/Interactive Flipboard.jpg",
      alt: "Interactive Flipboards",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/solar/led-bulbs.jpg",
      responsive: "/img/solar/led-bulbs.jpg",
      thumb: "/img/solar/led-bulbs.jpg",
      alt: "Led Bulbs",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/air/Chigo Split Air Conditioner 3.5kW-12000BTU-R-32.webp",
      responsive:
        "/img/air/Chigo Split Air Conditioner 3.5kW-12000BTU-R-32.webp",
      thumb: "/img/air/Chigo Split Air Conditioner 3.5kW-12000BTU-R-32.webp",
      alt: "Chigo Split Air Conditioner 3.5kW-12000BTU-R-32",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/air/smart hyundai wall split air con 7000 btu.avif",
      responsive: "/img/air/smart hyundai wall split air con 7000 btu.avif",
      thumb: "/img/air/smart hyundai wall split air con 7000 btu.avif",
      alt: "Smart Hyundai Wall Split Air Con 7000 BTU",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/air/2.jpg",
      responsive: "/img/air/2.jpg",
      thumb: "/img/air/2.jpg",
      alt: "Air Conditioning Unit",
      description:
        "Commercial Grade Split AC System, 24,000 BTU, Energy Efficient",
      price: "2999.99",
      subHtml: `...`,
    },
    {
      src: "/img/Fertiliser.png",
      responsive: "/img/Fertiliser.png",
      thumb: "/img/Fertiliser.png",
      alt: "Fertiliser",
      description:
        "Commercial Grade Split AC System, 24,000 BTU, Energy Efficient",
      price: "2999.99",
      subHtml: `...`,
    },
  ];

  return (
    <div>
      <Hero />
      <Clients />
      <About />
      <WhyUs />
      <Services />
      <MyCarousel />
      <Gallery images={images} />
      <Contact />
      <BackToTop />
    </div>
  );
}
