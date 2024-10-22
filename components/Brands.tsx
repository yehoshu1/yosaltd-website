import Image from "next/image";

const clients = [
  {src: "/img/brands/cisco.png", alt: "Cisco"},
  {src: "/img/brands/1200px-HP_logo_2012.svg.png", alt: "HP"},
  {src: "/img/brands/Dell_logo_2016.svg.png", alt: "Dell"},
  {src: "/img/brands/hikvision-logo-1-770x400-1.jpg", alt: "Hikvision"},
  {src: "/img/brands/Lenovo.png", alt: "Lenovo"},
  {src: "/img/brands/sage-logo svg.svg", alt: "Sage"},
];

const Brands = () => {
  return (
    <section
      id="clients"
      className="clients section-bg"
    >
      <div className="container">
        <div>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 border border-blue-600"
            >
              <Image
                src={client.src}
                alt={client.alt}
                className="img-fluid"
                width={50}
                height={100}
                // layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
