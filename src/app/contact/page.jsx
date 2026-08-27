'use client';

import React, { useState } from 'react';
import { 
  HiOutlineEnvelope, 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi2';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      
      {/* SECTION 1: HERO SECTION (Updated with Contact-related background image and header clearance) */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-50 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us Communication Background"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-md">
            Get in Touch
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 text-white">
            Let's Build Something Exceptional Together
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivers advanced software systems for businesses, industries and governments—combining AI acceleration, senior engineering and enterprise‑grade reliability.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#contact-form-section"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-semibold text-sm rounded-lg shadow-xl hover:bg-slate-100 transition"
            >
              Send a Message <HiOutlineArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT DETAILS & INTERACTIVE FORM */}
      <section id="contact-form-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-900/10 text-slate-900 rounded-full">
                Victor Micah Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Connect With Our Team
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you're looking for executive advisory, compliance audits, or custom software architectures, our team is ready to respond.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a 
                href="mailto:contact@victormicah.com" 
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-400 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <HiOutlineEnvelope className="text-xl" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Us</span>
                  <span className="text-sm font-bold text-slate-900">contact@victormicah.com</span>
                </div>
              </a>

              <a 
                href="tel:6784628728" 
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-400 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Call Us</span>
                  <span className="text-sm font-bold text-slate-900">678-462-8728</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
                  <HiOutlineMapPin className="text-xl" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Document Office</span>
                  <span className="block text-xs font-semibold text-slate-900 mt-0.5">Prepared By: Victor Micah</span>
                  <span className="text-sm text-slate-600 block mt-1 leading-snug">
                    1166 Misty Valley Court<br />Lawrenceville, GA 30045
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  <HiOutlineCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out to Victor Micah. A senior strategist or consultant will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Secure Inquiry</h3>
                  <p className="text-xs text-slate-500">Fill out the fields below and our team will be in touch promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Full Name *</label>
                    <input 
                      required
                      id="fullName"
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Work Email *</label>
                    <input 
                      required
                      id="email"
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder="678-462-8728" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Area of Interest</label>
                    <select 
                      id="service"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition"
                    >
                      <option>Healthcare Compliance Audits</option>
                      <option>Executive Leadership Advisory</option>
                      <option>MedIntegrity Group Strategy</option>
                      <option>Operational Risk Management</option>
                      <option>Regulatory Policy Consulting</option>
                      <option>Custom Software & AI Solutions</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Project Details / Message *</label>
                  <textarea 
                    required
                    id="message"
                    rows={5}
                    placeholder="Describe your goals, requirements, or compliance objectives..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-semibold text-sm rounded-lg shadow-lg hover:bg-slate-800 transition flex items-center justify-center gap-2"
                >
                  Submit Inquiry <HiOutlineArrowRight />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default ContactPage;