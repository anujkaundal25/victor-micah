import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogData from "../data";
import { 
  HiOutlineArrowLeft, 
  HiOutlineCalendar, 
  HiOutlineClock,
  HiOutlineUserCircle 
} from "react-icons/hi2";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* IMMERSIVE HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative bg-slate-950 text-white pt-50 pb-24 px-5 overflow-hidden">
        {/* Background Image with Dark Gradient Overlay */}
        {blog.image && (
          <div className="absolute inset-0 z-0">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover opacity-25 scale-105 filter blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/50 to-slate-950/50" />
          </div>
        )}

        <div className="mx-auto max-w-4xl relative z-10 space-y-6 pt-6">
          {/* Back Button */}
          <div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/20 transition-all backdrop-blur-md shadow-sm"
            >
              <HiOutlineArrowLeft /> Back to Insights
            </Link>
          </div>

          {/* Category Badge */}
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-800/80 text-slate-200 rounded-full border border-slate-700 backdrop-blur-sm">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white shadow-sm">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2 border-t border-white/10">
            <span className="flex items-center gap-2 font-medium text-white">
              <HiOutlineUserCircle className="text-lg text-slate-400" /> {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineCalendar className="text-slate-400" /> {blog.date}
            </span>
            {blog.readTime && (
              <span className="flex items-center gap-1.5">
                <HiOutlineClock className="text-slate-400" /> {blog.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* BLOG CONTENT CONTAINER */}
      <article className="mx-auto max-w-4xl px-5 py-16 -mt-8 relative z-20">
        
        {/* Excerpt Box */}
        <div className="mb-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xl text-lg md:text-xl font-medium leading-relaxed text-slate-700 border-l-4 border-l-slate-900">
          {blog.excerpt}
        </div>

        {/* Dynamic Content Parsing */}
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          {blog.content.split("\n").map((paragraph, index) => {
            const trimmed = paragraph.trim();

            if (!trimmed) {
              return null;
            }

            if (trimmed === "---") {
              return <hr key={index} className="my-10 border-slate-200" />;
            }

            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-12 mb-4"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-8 mb-3"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("- ")) {
              return (
                <li
                  key={index}
                  className="ml-6 list-disc text-slate-700 my-1.5 marker:text-slate-400"
                >
                  {trimmed.replace("- ", "")}
                </li>
              );
            }

            return (
              <p key={index} className="mb-6 text-slate-700 leading-7">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* POST FOOTER NAVIGATION */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            Published by <strong className="text-slate-900">{blog.author}</strong> on {blog.date}
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-all shadow"
          >
            <HiOutlineArrowLeft /> Back to All Articles
          </Link>
        </div>

      </article>
    </main>
  );
}