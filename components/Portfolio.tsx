import React from 'react';

interface PortfolioItem {
  title: string;
  items: string[];
}

interface PortfolioItemProps {
  title: string;
  items: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, items }) => (
  <div className="w-full md:w-1/2 mb-8 px-4">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="list-disc list-outside pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="pl-1">{item}</li>
      ))}
    </ul>
  </div>
);

const Portfolio: React.FC = () => {
  const portfolioData: PortfolioItem[] = [
    {
      title: "Supply of Laptops",
      items: ["The Malawi Revenue Authority(MRA)"]
    },
    {
      title: "Supply of Network Switches",
      items: ["The Malawi Revenue Authority(MRA)"]
    },
    {
      title: "Supply of Fertiliser",
      items: ["Smallholder Farmers Fertilizer Revolving Fund of Malawi"]
    },
    {
      title: "Supply of Livestock",
      items: ["The Ministry of Agriculture"]
    },
    {
      title: "Supply, Installation and Servicing of air conditioners",
      items: ["Zomba Central Hospital", "Immigration Head Offices"]
    },
    {
      title: "VOIP Installations",
      items: ["Chibuku brewery offices", "Seedco Blantyre and Lilongwe offices"]
    },
    {
      title: "VSAT Installations",
      items: [
        "Cargill Cotton Company Blantyre Office",
        "Crystal Beach Salima",
        "OIBM Fatima in Nsanje",
        "John Hopkins in Blantyre",
        "Fargo Mzimba office",
        "Mota Engil Malawi (Livingstonia, Zalewa, Liwonde and Mangochi)",
        "African Parks of Malawi (Majete)"
      ]
    },
    {
      title: "PABX and Telephone Voice Logging and Recording Systems installations",
      items: [
        "Lab Enterprises",
        "Elvis Freight",
        "Dimakis 2013 Limited Chigumula",
        "Audit Consult"
      ]
    },
    {
      title: "Total IT Support",
      items: [
        "Post Dot Net (Western Union)",
        "Audit Consult",
        "HMS foods and Grains",
        "CCAP Blantyre Synod",
        "Dimakis 2013 Limited",
        "Immigration Headquarters",
        "Lab enterprises"
      ]
    },
    {
      title: "Supply of Network Cables",
      items: [
        "Globe Internet Limited",
        "I.T Center (C3 Limited)",
        "AFCOR Solutions",
        "Computech"
      ]
    },
    {
      title: "Local Area Network and Wide Area Network Installation",
      items: [
        "Immigration Headquarters, Lilongwe, Mzuzu and Mwanza Boarder",
        "Malawi Communications Regulatory Authority (MACRA)",
        "University of Malawi",
        "Export Trading Group",
        "Elvis Freight",
        "Lab Enterprises",
        "Deliotte Blantyre",
        "Affordable Glass and Aluminum",
        "H.M.S Foods and Grains",
        "MANASO Blantyre and Mzuzu Offices",
        "Ministry of Agriculture, Irrigation and water Development (Lilongwe)",
        "Superior Hotel (Blantyre)",
        "Dimakis 2013 Limited(Chigumula)",
        "Hallmark Creations (Blantyre-Nyambadwe)",
        "Likoma Tele-Centre under MACRA",
        "Project Concern International (PCI Malawi)",
        "CSL Panel Beaters.",
        "Delamere Properties.",
        "Mota Engil Malawi",
        "Royal Consultants"
      ]
    },
    {
      title: "Supply of CCTV Surveillance Systems",
      items: [
        "Petroda Malawi",
        "Immigration Head Quarters, Lilongwe and Mzuzu Offices",
        "Combine Cargo Blantyre",
        "Lab Enterprises",
        "Child Justice Court (Funded by UNICEF)",
        "Gold Card Executive Lodge",
        "Ndirande Executive Lodge"
      ]
    }
  ];

  return (
    <div className=" px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Portfolio</h2>
      </div>
      <div className="flex flex-wrap mx-10 md:mx-20">
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;