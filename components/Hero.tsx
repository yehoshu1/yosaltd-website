import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-row place-items-center justify-center">
      <div className="flex flex-col md:flex-row container items-center justify-between gap-8 py-16 px-4 md:px-16">
        <div className="flex flex-col gap-4 md:w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
            Welcome to Yosa Limited
          </h1>

          <p className="font-semibold italic text-lg text-blue-400">
            &quot;Your Partner For Success&quot;
          </p>
          <p className="text-lg font-medium leading-relaxed">
            Yosa Ltd offers cutting-edge supply and ICT solutions for modern
            businesses, providing agricultural inputs, solar system
            installations, Local Area Networks (LAN), Wide Area Networks (WAN),
            VSAT, Fibre Optics, CCTV surveillance systems and so much more. We
            have everything you need to transform your business and achieve
            success.{" "}
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Contact Us</Button>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/hero-img.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="rounded-xl w-full md:p-5 object-cover animate-bounce-small duration-3000"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
