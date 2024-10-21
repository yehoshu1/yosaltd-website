import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const WhyUs = () => {
  return (
    <section className='mx-10 md:mx-20 my-20 flex flex-col md:flex-row' id='whyus'>
      <div className='my-10 md:w-[50%] flex flex-col place-content-center'>
        <h2 className="text-3xl font-bold text-gray-900">Why Us</h2>
        <p className='my-3'>We believe that our products and services are the best in the market, and we&apos;re committed to providing our customers with the best experience possible. Here are some reasons why you should choose us:</p>
        <div className='my-5'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>01 High-Quality Products and Services</AccordionTrigger>
              <AccordionContent>
                <p>We pride ourselves on the quality of our products and services. We supply
                  only the best products and services and ensure that our products and
                  services meet the highest standards.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>02 Expertise and Experience</AccordionTrigger>
              <AccordionContent>
                Our team has years of experience in the industry, and we&apos;ve built up a
                wealth of expertise that we can use to help our customers get the best
                results.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>03 Customer Satisfaction</AccordionTrigger>
              <AccordionContent>
                Our customers are our top priority, and we&apos;re committed to providing them
                with the best experience possible. We&apos;re always here to help, and we&apos;ll do
                whatever it takes to ensure that our customers are satisfied.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
      <div>
        <Image
          src="/illustrations/data-center.png"
          alt="Why Us"
          width={500}
          height={500}
          className="rounded-xl w-full md:p-5 object-cover "
          priority
        />
      </div>
    </section>
  );
};

export default WhyUs;