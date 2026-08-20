'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/hero/1.webp',
    title: 'Enterprise-Grade Software Engineered for Performance',
    subtitle: 'Avoid inflated costs. Novaris delivers advanced software solutions and systems for businesses and industries, combining Design Thinking with AI Acceleration & Agile Methodology',
  },
  {
    image: '/hero/2.webp',
    title: 'Intelligence & Scale for Modern Enterprises',
    subtitle: 'Your business deserves technology that keeps pace with your ambitions. Novaris blends elite engineering expertise with artificial intelligence to build sophisticated systems.',
  },
  {
    image: '/hero/3.webp',
    title: 'Mission-Critical Systems Built for Security',
    subtitle: 'We specialize in complex, mission‑critical applications that require uncompromising performance, robust security, and strict regulatory compliance.',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] min-h-screen overflow-hidden bg-gray-900 text-white pt-20">
      {/* Smooth Sliding Background Track */}
      <div 
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
          >
            {/* Image */}
            <Image
              src={slide.image}
              alt={`Hero Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* Enhanced Overlay blended with the custom gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b0077]/40 to-[#720048]/40 mix-blend-multiply" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-2xl space-y-6 pointer-events-auto">
          
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            Novaris Engineering
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700">
            {slides[currentIndex].title}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed transition-all duration-700">
            {slides[currentIndex].subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-7 py-3 bg-white text-gray-900 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-7 py-3 bg-transparent border border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition">
              Our Solutions
            </button>
          </div>

        </div>
      </div>

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition focus:outline-none"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition focus:outline-none"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </section>
  );
}