"use client";
import { useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

// Memoize NavLink component since it's used repeatedly
const NavLink = memo(({ href, children, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className="mx-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 font-semibold text-sm"
    onClick={onClick}
  >
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

// Constants moved outside component to prevent recreation
const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/portfolio", label: "Portfolio" }
] as const;

// Memoize SVG components
const CloseIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="text-gray-900 dark:text-gray-100"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
));
CloseIcon.displayName = 'CloseIcon';

const MenuIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="block w-8 h-8 text-gray-900 dark:text-gray-100"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
));
MenuIcon.displayName = 'MenuIcon';

// Memoize Logo component
const Logo = memo(() => (
  <Link href="/" className="flex flex-row mx-3">
    <Image
      src="/logo.svg"
      width={40}
      height={40}
      alt="Logo"
      className="block dark:hidden m-2"
      priority={true}
      loading="eager"
    />
    <Image
      src="/logo_dark.svg"
      width={80}
      height={80}
      alt="Logo"
      className="hidden dark:block p-3"
      loading="eager"
    />
    <div className="flex flex-row justify-center items-center">
      <p className="text-xl font-bold text-gray-800 dark:text-white">
        Yosa Limited
      </p>
    </div>
  </Link>
));
Logo.displayName = 'Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-40 hidden w-full bg-[#eef2fc] border-b md:flex border-b-black/25 dark:bg-gray-900 dark:backdrop-blur-sm dark:bg-opacity-80 backdrop-blur-sm bg-opacity-90 h-15">
        <Logo />
        <div className="flex justify-end flex-grow mx-2 items-center">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Button className="mx-3">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sticky top-0 z-50 flex flex-row w-full bg-white shadow-md md:hidden dark:bg-gray-900 dark:backdrop-blur-sm dark:bg-opacity-80 backdrop-blur-sm bg-opacity-90 h-15">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="z-20 flex justify-center mr-3 items-center">
          <button
            onClick={toggleMenu}
            className="h-7 w-7"
            aria-label="Toggle Menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {isOpen && (
          <div className="fixed -z-10 flex flex-col justify-start w-full h-screen mx-2 bg-white dark:bg-gray-900 dark:backdrop-blur-sm pt-28 dark:bg-opacity-95 bg-opacity-85 backdrop-blur-xl items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <Button className="mt-4">
              <Link href="/#contact" onClick={toggleMenu}>
                Contact Us
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}