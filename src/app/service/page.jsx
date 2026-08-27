'use client';

import React from 'react';
import { 
  HiOutlineGlobeAlt, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBarSquare,
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi2';

function ServicesPage() {
  const services = [
    {
      title: "Websites & CMS",
      icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "High-performance corporate websites and secure content management systems built for global audiences. We design resilient architectures with multi-language support, robust permissions and seamless integration with marketing and analytics platforms.",
    },
    {
      title: "Mobile App Platforms",
      icon: <HiOutlineDevicePhoneMobile className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Cross-platform and native mobile solutions engineered to support thousands of users. We enable real-time data synchronization, offline access, and integration with enterprise back-ends and identity providers.",
    },
    {
      title: "SaaS Platforms",
      icon: <HiOutlineCloud className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
      description: "Custom web applications and cloud-native SaaS platforms that handle complex workflows, data processing and multi-tenancy. Our solutions are built for scalability, compliance (GDPR, HIPAA) and reliability.",
    },
    {
      title: "Automation & AI Integrations",
      icon: <HiOutlineCpuChip className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      description: "Design and deploy intelligent automation pipelines that streamline operations, connect disparate systems and deliver actionable insights. From AI chatbots to predictive analytics, we integrate advanced intelligence into your core processes.",
    },
    {
      title: "Care & Optimization Services",
      icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      description: "Proactive maintenance, security hardening and performance optimization to ensure your applications remain dependable and compliant.",
    },
    {
      title: "ERP Platforms",
      icon: <HiOutlineChartBarSquare className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      description: "Integrated ERP platforms that unify finances, human resources, inventory, supply chain and operational reporting. Sophisticated dashboards for real-time decision making. We build secure transaction flows, dynamic pricing engines and analytics portals tailored to leadership teams.",
    },
    {
      title: "Education & Training Portals",
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      description: "Robust learning management systems and certification platforms for workforce training and professional development. Our portals integrate with HR and compliance tools, offering analytics and gamification for engagement.",
    },
  ];

  return (
    <div className="relative bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-50 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/e6/8c/42/e68c42c5a2de16c8388891247d98e103.jpg"
            alt="Enterprise Technology Solutions Background"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-md">
            Our Core Services
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Intelligent Software Solutions Engineered for Growth
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From custom web applications and mobile platforms to advanced data systems and digital products, our team transforms complex ideas into seamless user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#services-grid"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-semibold text-sm rounded-lg shadow-xl hover:bg-slate-100 transition"
            >
              Explore Solutions <HiOutlineArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES GRID */}
      <section id="services-grid" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Enterprise-Grade Capability
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We deliver state‑of‑the‑art solutions that meet stringent quality, security, and compliance standards for industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center text-slate-900 shadow-sm">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* <div className="p-6 pt-0">
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Learn More <HiOutlineArrowRight />
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DELIVERY HIGHLIGHTS */}
      <section className="bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white rounded-full border border-white/20">
              The Victor Micah Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Built to Scale. Designed to Last.
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Every system we engineer is backed by rigorous testing, AI-accelerated development, and deep architectural forethought to ensure zero downtime.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "AI-Driven Prototyping", desc: "Rapid iterations reducing time-to-market." },
              { title: "Zero-Trust Security", desc: "Enterprise data locked down at every layer." },
              { title: "Cloud-Native Deployments", desc: "Scalable infrastructures on AWS, Azure, & GCP." },
              { title: "Dedicated Support", desc: "24/7 SLA-driven monitoring and care." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex items-start gap-4 backdrop-blur-sm">
                <HiOutlineCheckCircle className="text-2xl text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Let's Discuss Your Next Big Innovation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Partner with our senior engineering team to map out your architecture and kickstart your digital transformation journey today.
          </p>
          <div className="pt-6">
            <a
              href="mailto:contact@mchinnovations.com"
              className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold text-sm rounded-lg shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;