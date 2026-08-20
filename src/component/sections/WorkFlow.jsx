'use client';

import React from 'react';

function WorkFlow() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Engage stakeholders across business, IT and compliance to define objectives, user journeys, regulatory requirements and success metrics.',
    },
    {
      number: '02',
      title: 'AI‑Assisted Design',
      description: 'Rapidly prototype architecture, wireframes and user interfaces using AI tools, ensuring alignment with your brand, workflow needs and technical standards.',
    },
    {
      number: '03',
      title: 'Engineering & QA',
      description: 'Senior engineers build the solution using modern frameworks, implementing security best practices and rigorous automated testing for high scalability.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deploy through secure DevOps pipelines to cloud or on‑premise environments, configuring monitoring and analytics for enterprise governance.',
    },
    {
      number: '05',
      title: 'Continuous Improvement',
      description: 'Post‑launch, we collect feedback and performance data to iteratively enhance features and optimize user experience using AI analytics.',
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-600/15 text-slate-900 rounded-full border border-slate-600/30 shadow-sm">
            Our Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A Structured Path to Enterprise Success
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial discovery to post-launch optimization, our comprehensive methodology guarantees security, precision, and performance.
          </p>
        </div>

        {/* Redesigned Grid Style with Creative Accents & Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.slice(0,3).map((step, index) => (
            <div
              key={index}
              className={`relative bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group overflow-hidden ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Top Accent Gradient Bar that highlights on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-extrabold text-slate-600">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-600/10 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                <span className="text-slate-600 opacity-70">
                  Phase {step.number} of 05
                </span>
                <span className="text-slate-400 group-hover:text-slate-900 transition-colors">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.slice(3,5).map((step, index) => (
            <div
              key={index}
              className={`relative bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group overflow-hidden ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Top Accent Gradient Bar that highlights on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-extrabold text-slate-600">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-600/10 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                <span className="text-slate-600 opacity-70">
                  Phase {step.number} of 05
                </span>
                <span className="text-slate-400 group-hover:text-slate-900 transition-colors">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkFlow;