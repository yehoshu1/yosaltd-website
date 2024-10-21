import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="bg-white shadow-2xl border border-blue-600 rounded-lg overflow-hidden">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-blue-600">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-geo-alt text-2xl text-blue-600 mr-3"></i>
                    <h4 className="text-lg font-semibold">Location:</h4>
                  </div>
                  <p className="text-gray-600 mb-2">Plot 9/82 Hardman Road, Area 9, Lilongwe</p>
                  <p className="text-gray-600">Along Kabula-Michiru Road, Plot NO: 23, Kabula, Blantyre</p>
                </div>

                <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-blue-600">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-envelope text-2xl text-blue-600 mr-3"></i>
                    <h4 className="text-lg font-semibold">Email:</h4>
                  </div>
                  <p className="text-gray-600">info@yosaltd.com</p>
                </div>

                <div className="w-full md:w-1/3 p-6">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-phone text-2xl text-blue-600 mr-3"></i>
                    <h4 className="text-lg font-semibold">Call:</h4>
                  </div>
                  <p className="text-gray-600 mb-2">
                    <strong>Lilongwe</strong><br />
                    +265 211 344 566<br />
                    +265 991 660 669
                  </p>
                  <p className="text-gray-600">
                    <strong>Blantyre</strong><br />
                    +265 212 344 565<br />
                    +265 888 785 595
                  </p>
                </div>
              </div>

              <div className="w-full h-72">
                <iframe
                  src="https://maps.google.com/maps?q=Yosa Limited&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;