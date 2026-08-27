'use client';

import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main 2-Column Section: Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Single Image */}
          <div className="relative h-[450px] sm:h-[550px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="/about.webp"
              alt="Professional"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-600/15 text-slate-900 rounded-full border border-slate-600/30 shadow-sm">
              About Us
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Engineering Enterprise Excellence For Any Business Needed
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our story begins in Atlanta, Georgia and emphasizes our mission to serve enterprise and government clients, and introduces our leadership. Emerged from a vision to deliver advanced software solutions with the expertise and precision required by large enterprises and public institutions.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By combining senior engineering leadership with AI‑accelerated workflows, we deliver state‑of‑the‑art solutions that meet stringent quality, security and compliance standards. Serves clients across the U.S., Canada, the UK, Ghana and beyond.
            </p>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-block px-7 py-3 bg-slate-900 text-white font-semibold text-sm rounded-md shadow-lg hover:bg-slate-600 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Two Cards (Our Story & Our Values) with Enhanced Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          {/* Card 1: Our Story */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 p-8 rounded-2xl shadow-sm space-y-4 hover:border-slate-400 hover:shadow-md transition">
            {/* <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow">
              01
            </div> */}
            <h3 className="text-xl font-bold text-slate-900">
              Our Story
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Victor Micah emerged from a vision to deliver advanced software solutions with the expertise and precision required by large enterprises and public institutions. Based in Atlanta, Georgia, we have grown into a global team of senior engineers, designers and strategists. Our mission is to engineer intelligent, secure and enduring software systems that drive innovation and positive change.
            </p>
          </div>

          {/* Card 2: Our Values */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 p-8 rounded-2xl shadow-sm space-y-4 hover:border-slate-400 hover:shadow-md transition">
            {/* <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow">
              02
            </div> */}
            <h3 className="text-xl font-bold text-slate-900">
              Our Values
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our core values of quality, transparency and impact guide every project. We commit to delivering superior technology, communicating openly and aligning our success with social good through the Nova Fund. We encourage visitors to connect with our leaders, explore the Nova Fund and discover how we can support their digital transformation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;