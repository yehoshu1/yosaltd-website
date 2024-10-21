import Image from 'next/image';

const clients = [
  { name: 'mota', src: '/clients/mota.png' },
  { name: 'macra', src: '/clients/macra.png' },
  { name: 'immigration', src: '/clients/immigration.png' },
  { name: 'mg', src: '/clients/mg.png' },
  { name: 'egenco', src: '/clients/egenco.png' },
  { name: 'mra', src: '/clients/mra.png' },
  { name: 'african', src: '/clients/african.png' },
  { name: 'escom', src: '/clients/escom.png' },
  { name: 'lab', src: '/clients/lab.png' },
  { name: 'ccap', src: '/clients/ccap.png' },
  { name: 'unima', src: '/clients/unima.png' },
  { name: 'petroda', src: '/clients/petroda.png' },
  { name: 'etg', src: '/clients/etg.png' },
  { name: 'Western Union', src: '/clients/Western-Union-Logo.png' },
  { name: 'jh', src: '/clients/jh.png' },
  { name: 'afcor', src: '/clients/afcor.png' },
  { name: 'pci', src: '/clients/pci.png' },
  { name: 'manaso', src: '/clients/manaso.png' },
  { name: 'globe', src: '/clients/globe.png' },
];

const Clients = () => {
  return (
    <section id="clients" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Our Clients</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.name}
                width={100}
                height={100}
                className="object-contain filter grayscale hover:grayscale-0 scale-75 hover:scale-90 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;