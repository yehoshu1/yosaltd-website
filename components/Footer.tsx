import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2C363F] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-400"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-gray-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-gray-400"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Yosa Limited</h3>
            <h4 className="text-lg font-semibold mb-2">Blantyre</h4>
            <p className="space-y-1">
              <span className="block">Along kabula-Michiru Road</span>
              <span className="block">Plot NO: 23, Kabula</span>
              <span className="block">Blantyre</span>
              <span className="block">Malawi</span>
              <span className="block font-semibold">P.O BOX 830, Blantyre</span>
              <span className="block">
                <strong>Phone:</strong> +265 212 344 565
              </span>
              <span className="block">
                <strong>Email:</strong> info@yosaltd.com
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Yosa Limited</h3>
            <h4 className="text-lg font-semibold mb-2">Lilongwe</h4>
            <p className="space-y-1">
              <span className="block">Plot 9/82 Hardman Road,</span>
              <span className="block">Area 9,</span>
              <span className="block">Lilongwe</span>
              <span className="block">Malawi</span>
              <span className="block font-semibold">P.O Box X24, Lilongwe</span>
              <span className="block">
                <strong>Phone:</strong> +265 211 344 566
              </span>
              <span className="block">
                <strong>Email:</strong> info@yosaltd.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#2b3946] py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; Copyright <strong>Yosa Limited</strong>.{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
