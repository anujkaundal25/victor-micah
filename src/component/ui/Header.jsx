"use client";

import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pages = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src="/logo.png" alt=""
            width={80}
            height={100} />
          </div>

          {/* Desktop Navigation Links & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {pages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {page.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="bg-white text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-sm shadow-md hover:bg-slate-200 transition duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Smooth Mobile Menu Dropdown with Slate Background */}
      <div 
        className={`md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 border-transparent'
        }`}
      >
        <div className="px-4 space-y-3">
          {pages.map((page, index) => (
            <a
              key={index}
              href={page.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-white py-1.5 transition-colors"
            >
              {page.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-slate-900 font-semibold py-2.5 rounded-lg text-sm shadow hover:bg-slate-200 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;