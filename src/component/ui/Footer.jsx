"use client";

import React from "react";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl tracking-wide block">
                Victor Micah
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Delivers advanced software systems for businesses, industries and
              governments—combining AI acceleration, senior engineering and
              enterprise‑grade reliability.
            </p>
            <div className="space-y-2 text-sm text-slate-300 pt-2">
              <p className="flex items-center gap-2">
                <span className="font-medium text-white">Email:</span>{" "}
                contact@victormicah.com
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium text-white">Phone:</span>{" "}
                6784628728
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-xs">&▸</span> Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-xs">&▸</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-xs">&▸</span> Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-xs">&▸</span> Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-xs">&▸</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> Websites & CMS
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> Mobile App Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> SaaS Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> Automation & AI
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> Care & Optimization
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> ERP Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 hover:text-slate-500 transition-colors"
                >
                  <span className="text-xs">&▸</span> Education & Training
                  Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Document Office Address & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-wide mb-2">
                Document Office
              </h3>
              <p className="text-xs font-medium text-white">
                Prepared By: Victor Micah
              </p>
              <p className="text-xs text-slate-300">
                1166 Misty Valley Court Lawrenceville , GA 30045{" "}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-wide">
                Stay Tuned With Us
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-white text-slate-900 font-semibold text-sm rounded-md hover:bg-slate-200 transition shadow-md"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Details */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Anders Nilsen & MedIntegrity
            Group. All Rights Reserved.
          </p>
          <p className="text-slate-400">
            Designed with precision & accountability by Victor Micah.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
