import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MyCarousel from "@/components/MyCarousel";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import YosaLaptopShowcase from "@/components/YosaLaptopShowcase";

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
        "AMD Ryzen™ 5 5500U (up to 4.0 GHz max boost clock, 8 MB L3 cache, 6 cores, 12 threads). 3 8 GB DDR4 3200 DIMM Storage capacity: 256 GB SSD",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/PC/p15s.jpg",
      responsive: "/img/PC/p15s.jpg",
      thumb: "/img/PC/p15s.jpg",
      alt: "Lenovo ThinkPad E14",
      description:
        "Intel Core i7-1355U processor, 16GB of RAM, 512GB SSD, 14-inch IPS display, Intel Iris Xe graphics.",
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
        "Lenovo ThinkStation P358 30GL0051US Workstation - AMD Ryzen 9 PRO 5945 - 32 GB",
      price: "3,785.93",
      subHtml: `...`,
    },
    {
      src: "/img/cctv/3.png",
      responsive: "/img/cctv/3.png",
      thumb: "/img/cctv/3.png",
      alt: "CCTV Camera",
      description: "Hikvision CCTV Camera Systems",
      price: "",
      subHtml: `...`,
    },
    {
      src: "/img/cctv/5.webp",
      responsive: "/img/cctv/5.webp",
      thumb: "/img/cctv/5.webp",
      alt: "Surveillance System",
      description: "Hikvision CCTV Camera Systems",
      price: "799.99",
      subHtml: `...`,
    },
    {
      src: "/img/bio/1.webp",
      responsive: "/img/bio/1.webp",
      thumb: "/img/bio/1.webp",
      alt: "Biometric Scanner",
      description:
        "Multi-Modal Biometric Access Control System with Fingerprint",
      price: "599.99",
      subHtml: `...`,
    },
    {
      src: "/img/G60F-GNSS-SPECS-800x800.png",
      responsive: "/img/G60F-GNSS-SPECS-800x800.png",
      thumb: "/img/G60F-GNSS-SPECS-800x800.png",
      alt: "HugeRock G60 Mobile Mappers",
      description: `High-precision GNSS/RTK positioning boards, support BDS, GPS, GALILEO, GLONASS, NavIC*, QZSS* systems and SBAS*, IMU* `,
      price: "3499.99",
      subHtml: `...`,
    },
    {
      src: "/img/Mapper_page0_image.png",
      responsive: "/img/Mapper_page0_image.png",
      thumb: "/img/Mapper_page0_image.png",
      alt: "Mobile Mappers",
      description:
        "Professional GPS Mapping System with GIS Software, Real-time Data Collection",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/maize-dryer.jpg",
      responsive: "/img/maize-dryer.jpg",
      thumb: "/img/maize-dryer.jpg",
      alt: " Portable Multi Grain Dryer",
      description: `2T/hour portable multi grain dryer (mobile with tyres, combined diesel drier from drier discharge outlet, directly to hopper of automatic packaging and bagging scale with bagging hopper 1T size) `,
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/server-poweredge-r760-black-gallery-1.avif",
      responsive: "/img/net/server-poweredge-r760-black-gallery-1.avif",
      thumb: "/img/net/server-poweredge-r760-black-gallery-1.avif",
      alt: "PowerEdge R760 Rack Server",
      description:
        "The 2U, 2 socket Dell PowerEdge R760 enables faster time to value with peak compute performance, through optimum configurations.",
      price: "1899.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/6.jpg",
      responsive: "/img/net/6.jpg",
      thumb: "/img/net/6.jpg",
      alt: "Ubiquiti Unifi Switch",
      description:
        "Ubiquiti Unifi Network Switches of different configurations",
      price: "1299.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/cisco-isr4331-k9-front.jpg",
      responsive: "/img/net/cisco-isr4331-k9-front.jpg",
      thumb: "/img/net/cisco-isr4331-k9-front.jpg",
      alt: "ISR4331 K9 Cisco Integrated Services Router",
      description:
        "ISR4331 K9 provides 100 Mbps to 300 Mbps of aggregate throughput and offers an enhanced service module (SM-X) slot that supports single-width and double-width service modules, which provides flexibility in network deployment.",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/c9200I-cisco-network-switch.jpg",
      responsive: "/img/net/c9200I-cisco-network-switch.jpg",
      thumb: "/img/net/c9200I-cisco-network-switch.jpg",
      alt: "Cisco c9200l Network Switch",
      description:
        "Catalyst C9200 Cisco Network Switches of various configuraions",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/unifi 6 long range.png",
      responsive: "/img/net/unifi 6 long range.png",
      thumb: "/img/net/unifi 6 long range.png",
      alt: "Unifi 6 Long Range Access Point",
      description:
        "Ceiling-mounted WiFi 6 AP with 8 spatial streams and extended signal range",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/Cisco_Catalyst-C8200-1N-4T-Front-scaled-640x450.webp",
      responsive:
        "/img/net/Cisco_Catalyst-C8200-1N-4T-Front-scaled-640x450.webp",
      thumb: "/img/net/Cisco_Catalyst-C8200-1N-4T-Front-scaled-640x450.webp",
      alt: "Cisco Catalyst 8200 Series Edge Platforms",
      description:
        "The Cisco® Catalyst® 8000 Edge Platforms Family provides a flexible, scalable, and secure WAN edge for business-first resiliency and cloud-native agilitys",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/flexbox_with_fmp_attached_2.webp",
      responsive: "/img/net/flexbox_with_fmp_attached_2.webp",
      thumb: "/img/net/flexbox_with_fmp_attached_2.webp",
      alt: "Flexbox Series - Universal Transceivers",
      description:
        "Including the NEW FLEXBOX MOBILITY PACK providing Bluetooth, Battery Pack + USB-C. ",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/net/Interactive Flipboard.jpg",
      responsive: "/img/net/Interactive Flipboard.jpg",
      thumb: "/img/net/Interactive Flipboard.jpg",
      alt: "Interactive Flipboards",
      description:
        "Smart interactive digital flipboards",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/solar/led-bulbs.jpg",
      responsive: "/img/solar/led-bulbs.jpg",
      thumb: "/img/solar/led-bulbs.jpg",
      alt: "Led Bulbs",
      description:
        "Led Bulbs of different types",
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
        "Chigo AC-12CHSD-W Inverter 3.5kw 12000Btu Wifi R32 GWP 675",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/air/smart hyundai wall split air con 7000 btu.avif",
      responsive: "/img/air/smart hyundai wall split air con 7000 btu.avif",
      thumb: "/img/air/smart hyundai wall split air con 7000 btu.avif",
      alt: "Hyundai R32 T1 12000 Btu Air Condition",
      description:
        "High-Efficiency Cooling and Heating: The HYUNDAI R32 T1 12000 Btu Split Air Conditioner boasts an EER of 3.21 for cooling and COP of 3.61 for heating, ensuring efficient and cost-effective operation",
      price: "4999.99",
      subHtml: `...`,
    },
    {
      src: "/img/air/2.jpg",
      responsive: "/img/air/2.jpg",
      thumb: "/img/air/2.jpg",
      alt: "Air Conditioning Unit",
      description:
        "Commercial Grade Energy Efficient Split AC Systems",
      price: "2999.99",
      subHtml: `...`,
    },
    {
      src: "/img/Fertiliser.png",
      responsive: "/img/Fertiliser.png",
      thumb: "/img/Fertiliser.png",
      alt: "Fertiliser",
      description:
        "Various types of fertilisers",
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
      <YosaLaptopShowcase/>
      <MyCarousel />
      <Gallery images={images} />
      <Contact />
      <BackToTop />
    </div>
  );
}
