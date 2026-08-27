'use client';

import React, { useState } from 'react';
import { 
  HiOutlineShieldCheck, 
  HiOutlineLightBulb, 
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineChevronDown
} from 'react-icons/hi2';

function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of software solutions do you specialize in?",
      answer: "We specialize in custom enterprise software development, intelligent AI automation, cloud-native SaaS platforms, cross-platform mobile apps, and robust API integrations designed for performance and strict security compliance."
    },
    {
      question: "How does your AI-accelerated workflow function?",
      answer: "We integrate artificial intelligence into our discovery, architecture, and testing pipelines. This drastically reduces development cycles while ensuring top-tier code quality, precise data analytics, and continuous security hardening."
    },
    {
      question: "What is your engagement model for international clients?",
      answer: "We operate with a collaborative hybrid workforce model. Senior solution architects and strategists provide local oversight and direct communication across the U.S., Canada, the UK, Ghana, and beyond."
    },
    {
      question: "What is the Nova Fund initiative?",
      answer: "The Nova Fund is our social impact initiative where we commit 10% of net profits to support nonprofits chosen by our clients, allowing your organization to contribute to meaningful social causes."
    }
  ];

  return (
    <div className="relative bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      
      {/* SECTION 1: HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 py-28 px-4 sm:px-6 lg:px-8 pt-50">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-slate-950/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-md">
            About Victor Micah
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 text-white">
            Engineering Enterprise Excellence For Any Business Needed
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Based in Atlanta, Georgia, Victor Micah blends elite engineering expertise with artificial intelligence to build sophisticated mission-critical applications and SaaS systems for clients across the U.S., Canada, the UK, Ghana and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-semibold text-sm rounded-lg shadow-xl hover:bg-slate-100 transition"
            >
              Let's Build Together <HiOutlineArrowRight className="text-lg" />
            </a>
            <a
              href="/service"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/30 text-white font-semibold text-sm rounded-lg shadow-sm hover:bg-white/10 transition"
            >
              Our Core Values
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY & OUR VALUES */}
      <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-900/10 text-slate-900 rounded-full">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 text-slate-900">
            Human-Centered Design Meets High Performance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We specialize in complex, mission-critical systems that demand uncompromised performance, stringent security compliance, and transparent design frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm hover:border-slate-400 transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
              <HiOutlineLightBulb className="text-2xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Our Story</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Victor Micah emerged from a vision to deliver advanced software solutions with the expertise and precision required by large enterprises and public institutions. Based in Atlanta, Georgia, we have grown into a global team of senior engineers, designers, and strategists driven to engineer intelligent, secure systems.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm hover:border-slate-400 transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
              <HiOutlineShieldCheck className="text-2xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Our Values</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Quality, transparency, and impact guide every project. Through the Nova Fund, we commit 10% of net profits to support nonprofits chosen by our clients, allowing your organization to actively contribute to meaningful social causes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL PRESENCE & STANDARDS */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-900/10 text-slate-900 rounded-full">
              Global Scale
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 text-slate-900">
              Security-First Architecture & Compliance Ready
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We design infrastructure that fulfills rigorous governance requirements, supporting multi-tenant environments, offline capabilities, and cross-border data compliance standards across Atlanta industries and abroad.
            </p>
            <ul className="space-y-3">
              {[
                'GDPR, HIPAA, and Enterprise Compliance frameworks',
                'Agile sprints with daily synchronization cycles',
                'Dedicated proactive maintenance & performance optimization'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <HiOutlineCheckCircle className="text-xl text-slate-900 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="Global strategy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-900/10 text-slate-900 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Find clarity on our technological approach, workflows, and global client partnerships.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                <span>{faq.question}</span>
                <HiOutlineChevronDown className={`text-xl text-slate-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-slate-900 text-white p-10 sm:p-16 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-all duration-700 text-white">
              Ready to Transform Your Digital Ecosystem?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect with our specialized team to discover how our custom software design and AI execution models can empower your organization.
            </p>
            <div className="pt-4">
              <a
                href="mailto:contact@mchinnovations.com"
                className="inline-block px-8 py-3.5 bg-white text-slate-900 font-semibold text-sm rounded-lg shadow hover:bg-slate-100 transition"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;