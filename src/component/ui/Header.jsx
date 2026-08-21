"use client";

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMainHeader, setShowMainHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction to show/hide main header only after scrolling past top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only activate fixed/hiding behavior after scrolling past the top bar (approx 45px)
      if (currentScrollY > 45) {
        if (currentScrollY > lastScrollY) {
          // Scrolling DOWN -> Hide main header
          setShowMainHeader(false);
          setIsMobileMenuOpen(false);
        } else {
          // Scrolling UP -> Show main header
          setShowMainHeader(true);
        }
      } else {
        // At the very top, keep main header in its normal static position
        setShowMainHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const pages = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebookF size={14} /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram size={14} /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter size={14} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedinIn size={14} /> },
  ];

  return (
    // Added absolute positioning and explicit transparent dark context so it overlays the hero image cleanly
    <header className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">
      
      {/* Top Header - Scrolls away normally */}
      <div className="bg-slate-950 border-b border-slate-800 text-slate-300 text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Contact Details with Icons */}
          <div className="flex flex-wrap items-center gap-6 pl-11">
            <a href="mailto:contact@victormicah.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <HiMail className="text-slate-400" size={16} />
              contact@victormicah.com
            </a>
            <a href="tel:6784628728" className="flex items-center gap-2 hover:text-white transition-colors">
              <HiPhone className="text-slate-400" size={16} />
              678-462-8728
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pr-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-1.5 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div 
        className={`w-full transition-all duration-300 ${
          showMainHeader 
            ? 'fixed top-0 left-0 bg-slate-900 shadow-lg shadow-black/30 border-b border-slate-800 translate-y-0' 
            : 'relative bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo / Brand */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" width={80} height={100} />
            </div>

            {/* Desktop Navigation Links & CTA */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                {pages.map((page, index) => (
                  <a
                    key={index}
                    href={page.href}
                    className="text-sm font-medium text-white hover:text-slate-300 transition-colors duration-200"
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
                className="text-white hover:text-slate-300 focus:outline-none p-2"
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

        {/* Smooth Mobile Menu Dropdown */}
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
                className="block text-sm font-medium text-white hover:text-slate-300 py-1.5 transition-colors"
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
      </div>
    </header>
  );
}

export default Header;