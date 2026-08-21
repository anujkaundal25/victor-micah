import React from 'react';
import Image from 'next/image';

function WhyChooseUs() {
  const leftFeatures = [
    {
      title: "AI‑Driven Innovation",
      description: "Victor Micah employs AI‑accelerated prototyping, code generation and testing to reduce development cycles and enable rapid iteration without sacrificing quality.",
    },
    {
      title: "Enterprise‑Grade Expertise",
      description: "Projects are led and executed by senior engineers with deep experience in building mission‑critical systems. We understand compliance, security and performance requirements across Atlanta industries and abroad.",
    },
  ];

  const rightFeatures = [
    {
      title: "Strategic Partnership",
      description: "We collaborate closely with your leadership and technical teams in Atlanta and abroad to align our solutions with business objectives. From discovery through deployment, we provide transparency, governance and measurable results.",
    },
    {
      title: "Mission‑Driven Impact",
      description: "Through the Nova Fund, we commit 10% of net profits to support nonprofits chosen by our clients, allowing your organisation to contribute to meaningful social causes.",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-600/15 text-slate-900 rounded-full border border-slate-600/30 shadow-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineering the Future of Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We combine technical mastery, speed, and social responsibility to deliver unmatched value to our partners.
          </p>
        </div>

        {/* 3-Column Layout: Left Features, Center Image, Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Features 1 & 2 */}
          <div className="lg:col-span-4 space-y-8">
            {leftFeatures.map((item, index) => (
              <div 
                key={index} 
                className="space-y-2 text-left lg:text-right p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-sm group"
              >
                <span className="text-4xl font-extrabold text-slate-600 opacity-30 block group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Side: Image with Gradient Border Effect & Hover Zoom */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl max-w-sm p-1 bg-slate-600 group transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/hero/1.webp"
                  alt="Why Choose Us Victor Micah"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Features 3 & 4 */}
          <div className="lg:col-span-4 space-y-8">
            {rightFeatures.map((item, index) => (
              <div 
                key={index} 
                className="space-y-2 text-left p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-sm group"
              >
                <span className="text-4xl font-extrabold text-slate-600 opacity-30 block group-hover:opacity-100 transition-opacity">
                  0{index + 3}
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;