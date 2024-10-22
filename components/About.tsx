import React from "react";
import {Button} from "./ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gray-50"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-gray-700 mb-4">
              Yosa Ltd provides a wide range of products and services that cater
              to businesses&apos; diverse needs, including:
            </p>
            <ul className="space-y-2">
              {[
                "Agriculture",
                "Information and Communication Technology (ICT)",
                "General Supply",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-700 mb-6">
              The company is committed to delivering high-quality services and
              products, with a team of qualified and experienced personnel that
              is dedicated to meeting individual needs and solving complex
              problems. The company also offers excellent warranty terms and
              guarantees on all its services and equipment.
            </p>
            <Button
              variant={"outline"}
              className="text-primary font-medium border-primary hover:text-primary border-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
