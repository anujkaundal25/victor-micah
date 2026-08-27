'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HiOutlineArrowRight, 
  HiOutlineCalendar, 
  HiOutlineClock
} from 'react-icons/hi2';

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Enterprise Architecture', 'Cloud & DevOps', 'Engineering Culture'];

  const articles = [
    {
      slug: "digital-transformation-atlanta-abroad-2026",
      title: "The Future of Digital Transformation in 2026",
      category: "Enterprise Architecture",
      readTime: "6 min read",
      author: "Marcus Vance",
      date: "Aug 20, 2026",
      excerpt: "Digital transformation is no longer a competitive advantage—it has become a survival requirement across healthcare, logistics, government, finance, and manufacturing.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      slug: "erp-systems-businesses-run-smarter-scale-better",
      title: "ERP Systems: How Businesses Use Them to Run Smarter",
      category: "Enterprise Architecture",
      readTime: "5 min read",
      author: "Elena Rostova",
      date: "Aug 20, 2026",
      excerpt: "ERP systems bring core operations into one unified dashboard so teams can seamlessly manage finance, inventory, projects, purchasing, and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      slug: "saas-development-how-modern-software-products-are-built-to-scale",
      title: "SaaS Development: How Modern Software Products Are Built to Scale",
      category: "Cloud & DevOps",
      readTime: "8 min read",
      author: "David Chen",
      date: "Aug 20, 2026",
      excerpt: "Explore how cloud-native SaaS development powers everything from high-scale project management tools and CRMs to complex multi-tenant platforms.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      slug: "enterprise-software-what-it-is-why-it-matters-and-how-businesses-use-it-to-scale",
      title: "Enterprise Software: What It Is, Why It Matters, and How Businesses Use It to Scale",
      category: "Enterprise Architecture",
      readTime: "7 min read",
      author: "Marcus Vance",
      date: "Aug 20, 2026",
      excerpt: "Enterprise software serves as the digital backbone of modern organizations, eliminating manual work silos and streamlining organizational scalability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    },
    {
      slug: "ai-software-development-how-businesses-build-smarter-faster-and-more-scalable-products",
      title: "AI Software Development: How Businesses Build Smarter, Faster, and More Scalable Products",
      category: "Artificial Intelligence",
      readTime: "6 min read",
      author: "Sarah Jenkins",
      date: "Aug 20, 2026",
      excerpt: "Discover how AI software development shifts static applications into dynamic, intelligent ecosystems capable of automated reasoning and deep personalization.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="relative bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-50 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=80"
            alt="Victor Micah Blog Background"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-md">
            Insights & Perspectives
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Engineering Thought Leadership & Technical Articles
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Deep dives into enterprise architecture, artificial intelligence frameworks, cloud optimization, and modern software development practices.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#articles"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-semibold text-sm rounded-lg shadow-xl hover:bg-slate-500 hover:text-white transition-all duration-300"
            >
              Browse Articles <HiOutlineArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARTICLES GRID & CATEGORY FILTERS */}
      <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Latest Publications
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore our latest engineering memos and architectural guides.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-500 hover:text-white hover:border-slate-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.slice(0,4).map((article, idx) => (
            <article 
              key={idx} 
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Image Links to Full Blog */}
                <Link href={`/blog/${article.slug}`} className="relative h-56 block overflow-hidden bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-md">
                    {article.category}
                  </span>
                </Link>

                {/* Article Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar className="text-sm" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineClock className="text-sm" /> {article.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${article.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-500 transition-colors tracking-tight">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-slate-600 group-hover:text-slate-500 transition-colors text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read Link Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 group-hover:text-slate-500 transition-colors">
                  Read Article <HiOutlineArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto mt-5">
          {filteredArticles.slice(4,5).map((article, idx) => (
            <article 
              key={idx} 
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Image Links to Full Blog */}
                <Link href={`/blog/${article.slug}`} className="relative h-56 block overflow-hidden bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-md">
                    {article.category}
                  </span>
                </Link>

                {/* Article Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar className="text-sm" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineClock className="text-sm" /> {article.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${article.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-500 transition-colors tracking-tight">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-slate-600 group-hover:text-slate-500 transition-colors text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read Link Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 group-hover:text-slate-500 transition-colors">
                  Read Article <HiOutlineArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3: ENGINEERING NEWSLETTER */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white rounded-full border border-white/20">
              Stay Informed
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Get Deep Technical Memos Delivered to Your Inbox
            </h2>
            <p className="text-slate-300 hover:text-slate-500 transition-colors text-sm leading-relaxed">
              We publish bi-weekly insights on software engineering architecture, scaling microservices, and practical artificial intelligence implementations. No spam, just technical depth.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 p-6 sm:p-8 rounded-2xl backdrop-blur-sm space-y-4">
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-slate-200">
              Professional Email Address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="name@company.com" 
                className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition flex-1"
              />
              <button 
                type="button"
                className="px-6 py-3 bg-white text-slate-900 font-semibold text-sm rounded-lg hover:bg-slate-500 hover:text-white transition-all duration-300 shadow"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-400">
              By subscribing, you agree to receive technical updates from Victor Micah. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BlogPage;