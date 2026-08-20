'use client';

import React from 'react';

function Blog() {
  const blogList = [
    {
      title: 'The Future of Digital Transformation in 2026',
      description: 'Digital transformation in Atlanta and abroad is no longer a competitive advantage, it has become a survival requirement. In 2026, companies across healthcare, logistics, government, finance, retail, and manufacturing...',
      date: '20',
      month: 'Aug',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'ERP Systems: How Businesses Use Them to Run Smarter',
      description: 'ERP systems are one of the most important tools a growing business can use to stay organized. They bring core operations into one place so teams can manage finance, inventory, projects, purchasing, reporting, and other...',
      date: '20',
      month: 'Aug',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'SaaS Development: How Modern Software Products Are Built to Scale',
      description: 'SaaS development is the process of building software that people access online instead of installing on a local device. It powers everything from project management tools and CRMs to AI platforms, internal systems, and customer-',
      date: '20',
      month: 'Aug',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-600/15 text-slate-900 rounded-full border border-slate-600/30 shadow-sm">
              Insights & News
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
              Read <span className="text-slate-600">Our Blog</span>
            </h2>
          </div>
          <div>
            <a
              href="#all-blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold text-sm rounded-full shadow-md hover:bg-slate-600 transition-all duration-300"
            >
              <span>&rarr;</span> See All Blogs
            </a>
          </div>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogList.map((blog, index) => (
            <div
              key={index}
              className="relative bg-slate-600 text-white rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container inside the card */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Blog Category Badge */}
                <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold tracking-wider px-3 py-1 rounded-lg shadow-md border border-white/20">
                  Blog
                </div>

                {/* Date Badge overlapping the bottom-left of the image */}
                <div className="absolute bottom-3 left-4 z-20 bg-slate-900/90 backdrop-blur-sm text-white text-center rounded-xl px-3 py-1.5 shadow-md border border-white/20">
                  <span className="block text-sm font-extrabold leading-tight">{blog.date}</span>
                  <span className="block text-[10px] uppercase font-medium text-slate-300">{blog.month}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-tight text-white leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                {/* Learn More Button inside the card */}
                <div className="pt-2">
                  <a
                    href="#blog-detail"
                    className="inline-block py-2.5 px-6 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow hover:bg-white hover:text-slate-900 transition"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;