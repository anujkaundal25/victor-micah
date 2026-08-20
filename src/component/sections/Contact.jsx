"use client"
import React from 'react'

function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Image */}
        <div className="relative h-64 lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1000" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/20"></div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h2>
          <p className="text-slate-600 mb-8">
            We'd love to hear from you. Please fill out this form and we'll get back to you shortly.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we help you?" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact