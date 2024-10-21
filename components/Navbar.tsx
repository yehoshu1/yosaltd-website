'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link href={href} className="mx-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-semibold text-sm" onClick={onClick}>
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-40 hidden w-full bg-white border-b md:flex border-b-gray-400/50 dark:bg-gray-900 dark:backdrop-blur-sm dark:bg-opacity-80 backdrop-blur-sm bg-opacity-90 h-15">
        <Link href="/" className="flex flex-row mx-3">
          <Image src="/logo.svg" width={40} height={40} alt="Logo" className="block dark:hidden m-2" priority={true} />
          <Image src="/logo_dark.svg" width={80} height={80} alt="Logo" className="hidden dark:block p-3" />
          <div className="flex flex-row justify-center items-center">
            <p className="text-xl font-bold text-gray-800 dark:text-white">
              Yosa Limited
            </p>
          </div>
        </Link>
        <div className="flex justify-end flex-grow mx-2 items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
          <Button className='mx-3'><Link href="/#contact">Contact Us</Link></Button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sticky top-0 z-50 flex flex-row w-full bg-white shadow-md md:hidden dark:bg-gray-900 dark:backdrop-blur-sm dark:bg-opacity-80 backdrop-blur-sm bg-opacity-90 h-15">
        <div className='flex-grow'>
          <Link href="/" className="flex flex-row mx-3">
            <Image src="/logo.svg" width={40} height={40} alt="Logo" className="block dark:hidden m-2" priority={true} />
            <Image src="/logo_dark.svg" width={80} height={80} alt="Logo" className="hidden dark:block p-3" />
            <div className="flex flex-row justify-center items-center">
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                Yosa Limited
              </p>
            </div>
          </Link>
        </div>
        <div className="z-20 flex justify-center mr-3 items-center">
          <button
            onClick={toggleMenu}
            className="h-7 w-7"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="text-gray-900 dark:text-gray-100">
                <path fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="block w-8 h-8 text-gray-900 dark:text-gray-100">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="fixed -z-10 flex flex-col justify-start w-full h-screen mx-2 bg-white dark:bg-gray-900 dark:backdrop-blur-sm pt-28 dark:bg-opacity-95 bg-opacity-85 backdrop-blur-xl items-center">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={toggleMenu}>{item.label}</NavLink>
            ))}
            <Button className='mt-4'><Link href="/#contact" onClick={toggleMenu}>Contact Us</Link></Button>
          </div>
        )}
      </nav>
    </>
  );
}