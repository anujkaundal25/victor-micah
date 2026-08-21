'use client';

import React from 'react';

function Services() {
  const servicesList = [
    {
      title: 'Websites & CMS',
      description: 'High‑performance corporate websites and secure content management systems built for global audiences. We design resilient architectures with multi‑language support, robust permissions and seamless integration with marketing and analytics platforms.',
      image: 'https://i.pinimg.com/736x/e6/8c/42/e68c42c5a2de16c8388891247d98e103.jpg',
    },
    {
      title: 'Mobile App Platforms',
      description: 'Cross‑platform and native mobile solutions engineered to support thousands of users. We enable real‑time data synchronization, offline access, and integration with enterprise back‑ends and identity providers.',
      image: 'https://i.pinimg.com/736x/c1/c3/76/c1c376c026ffd22bfa6452f9f9fe2812.jpg',
    },
    {
      title: 'SaaS Platforms',
      description: 'Custom web applications and cloud‑native SaaS platforms that handle complex workflows, data processing and multi‑tenancy. Our solutions are built for scalability, compliance (GDPR, HIPAA) and reliability.',
      image: 'https://i.pinimg.com/236x/96/6d/d6/966dd638824ef045287fcc36fbd0c737.jpg',
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Intelligent, scalable software solutions designed to help businesses innovate and grow. From custom web applications and mobile platforms to advanced data systems and digital products, our team transforms complex ideas into seamless user experiences.
          </p>
        </div>

        {/* 3 Services Cards Grid (Showing exactly 3 in one row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-16">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="relative bg-slate-600 text-white pt-24 pb-8 px-6 rounded-3xl shadow-xl flex flex-col justify-between mt-12 group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Overlapping Floating Image Card (Pushed higher up) */}
              <div className="absolute -top-16 left-6 right-6 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 pt-4 text-center">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div className=" absolute -bottom-4 left-30 pt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow hover:bg-white hover:text-slate-900 transition"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Discovery Link */}
        <div className="text-center pt-6 flex items-center justify-center gap-2 text-sm">
          <span className="text-slate-600 font-medium">Lets Discover More</span>
          <a
            href="#all-services"
            className="text-slate-900 font-bold hover:text-slate-600 inline-flex items-center gap-1 transition-colors"
          >
            &rarr; See All Services
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;