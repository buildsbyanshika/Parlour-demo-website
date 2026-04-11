"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);



  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 text-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex bg-tranparent-300 justify-between items-center h-16 relative">
          <h1 className="font-bold text-lg font-serif ">LadiesParlour</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 font-serif text-gray-50 items-center relative">
            <Link href="/" className="px-2 py-1 rounded-lg font-bold transition-colors duration-200 hover:text-gray-200 hover:bg-pink-600 block">
              Home
            </Link>
            <div className="relative group">
              <Link
                href="#"
                className="px-2 py-1 rounded-lg font-bold transition-colors duration-200 group-hover:text-gray-200 group-hover:bg-pink-600 block"
              >
                About
              </Link>
              <div className="absolute left-0 top-full mt-2 w-40 bg-pink-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                <Link
                  href="/about"
                  className="relative block px-4 py-2 font-bold hover:bg-pink-500 hover:pl-6 transition-all 
                  before:content-['-'] before:absolute before:left-2 before:text-white before:opacity-0 
                  hover:before:opacity-100"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="relative block px-4 py-2 font-bold hover:bg-pink-500 hover:pl-6 transition-all 
                  before:content-['-'] before:absolute before:left-2 before:text-white before:opacity-0 
                  hover:before:opacity-100"
                >
                  FAQ
                </Link>
                <Link
                  href="/pricing"
                  className="relative block px-4 py-2 font-bold hover:bg-pink-500 hover:pl-6 transition-all 
                  before:content-['-'] before:absolute before:left-2 before:text-white before:opacity-0 
                  hover:before:opacity-100"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="relative block px-4 py-2 font-bold hover:bg-pink-500 hover:pl-6 transition-all 
                  before:content-['-'] before:absolute before:left-2 before:text-white before:opacity-0 
                  hover:before:opacity-100"
                >
                  Blog
                </Link>
              </div>
            </div>

            <Link
              href="/services"
              className="px-2 py-1 rounded-lg font-bold transition-colors duration-200 hover:text-gray-200 hover:bg-pink-600"
            >
              Services
            </Link>
            <Link href="/contact" className="px-2 py-1 rounded-lg font-bold transition-colors duration-200 hover:text-gray-200 hover:bg-pink-600">
              Contact
            </Link>
            <Link href="/gallery" className="px-2 py-1 rounded-lg font-bold transition-colors duration-200 hover:text-gray-200 hover:bg-pink-600">
              Gallery
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white font-bold focus:outline-none z-30"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6 font-bold text-white" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {menuOpen && (
            <div className="md:hidden bg-pink-500 py-4 font-serif px-4 absolute top-16 left-0 right-0 z-20 -mx-4 px-0">
              <Link
                href="/"
                className="block w-full font-bold hover:text-gray-200 border-b border-pink-300 pb-2 px-4"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`w-full flex font-bold justify-between items-center pt-2 border-b border-pink-300 pb-2 px-4 transition-colors duration-200 ${aboutOpen ? "bg-pink-600 text-white" : "hover:text-gray-200"}`}
                aria-expanded={aboutOpen}
                aria-controls="mobile-about-menu"
              >
                <span>About</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? "rotate-180" : "rotate-0"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {aboutOpen && (
                <div className="border-pink-300 py-4">
                  <Link
                    href="/about"
                    className="block w-full font-bold hover:text-gray-200 pb-2 pl-8 pr-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/faq"
                    className="block w-full font-bold hover:text-gray-200  pb-2 pl-8 pr-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full font-bold hover:text-gray-200 pb-2 pl-8 pr-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/blog"
                    className="block w-full font-bold hover:text-gray-200 pl-8 pr-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              )}

              <Link
                href="/services"
                className="block w-full font-bold hover:text-gray-200 pt-2 border-b border-pink-300 pb-2 px-4"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block w-full font-bold hover:text-gray-200 pt-2 border-b border-pink-300 pb-2 px-4"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
