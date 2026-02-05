import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Droplets, Sparkles, Menu, X, Clipboard, Instagram, Facebook, Youtube, FileText } from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#f0faff] via-white to-[#e6f7ff] overflow-hidden">
      {/* Subtle water texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338E1FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-8 lg:pt-16 lg:pb-12">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-[#38E1FF]/20">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697d1de3237eb62c102b3a4f/5a84c1fc9_33f376ab-abfe-4c2d-b5d3-a3532a197e0e.jpeg" 
                alt="Franchise EHS Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-xl font-bold text-[#0B0F14] tracking-tight">Franchise EHS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#0B0F14] font-medium hover:text-[#38E1FF] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#0B0F14] font-medium hover:text-[#38E1FF] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-[#0B0F14] font-medium hover:text-[#38E1FF] transition-colors"
            >
              Gallery
            </button>
            <a 
              href="tel:2313295999"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#38E1FF] text-[#0B0F14] rounded-full text-sm font-semibold hover:bg-[#6AEEFF] transition-all shadow-lg shadow-[#38E1FF]/20"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#0B0F14] text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-white rounded-2xl shadow-2xl p-6 z-50 border border-[#38E1FF]/10"
          >
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-[#0B0F14] font-medium py-3 hover:text-[#38E1FF] transition-colors"
              >
                Home
              </button>
              <div className="h-px bg-[#0B0F14]/5" />
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-[#0B0F14] font-medium py-3 hover:text-[#38E1FF] transition-colors"
              >
                Services
              </button>
              <div className="h-px bg-[#0B0F14]/5" />
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-[#0B0F14] font-medium py-3 hover:text-[#38E1FF] transition-colors"
              >
                Gallery
              </button>
              <div className="h-px bg-[#0B0F14]/5" />
              <a 
                href="tel:2313295999"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#38E1FF] text-[#0B0F14] rounded-xl text-sm font-semibold hover:bg-[#6AEEFF] transition-all shadow-lg shadow-[#38E1FF]/20 mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <div className="h-px bg-[#0B0F14]/5 mt-4" />
              <div className="flex justify-center gap-3 pt-4">
                <a 
                  href="https://www.instagram.com/franchise.ehs?igsh=dWVkaHg0bWhzYXRm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
                >
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a 
                  href="https://www.facebook.com/share/1AKyWyxt9u/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
                >
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
                >
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <TikTokIcon className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
                >
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              </div>
              </div>
              </motion.div>
              )}


        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#38E1FF]/10 rounded-full border border-[#38E1FF]/20"
              >
                <Sparkles className="w-4 h-4 text-[#38E1FF]" />
                <span className="text-sm font-medium text-[#2A6F8F]"><strong>Satisfaction</strong> Guaranteed</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B0F14] leading-[1.1] tracking-tight">
                South Florida's
                <span className="block mt-2 bg-gradient-to-r from-[#38E1FF] to-[#4FBEE8] bg-clip-text text-transparent">
                  Go-To Window Cleaning
                </span>
                <span className="block mt-1">& Power Washing</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#1A232B]/70 max-w-3xl mx-auto leading-relaxed">
                Residential & Commercial Services from Jupiter to Fort Lauderdale. 
                Fast, reliable, and backed by our 100% satisfaction guarantee.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:2313295999"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] text-[#0B0F14] rounded-2xl font-semibold text-lg shadow-xl shadow-[#38E1FF]/30 hover:shadow-2xl hover:shadow-[#38E1FF]/40 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#6AEEFF] to-[#38E1FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Phone className="relative w-5 h-5" />
                <span className="relative">Call Now</span>
              </motion.a>
              
              <motion.button
                onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/15 text-[#0B0F14] rounded-2xl font-semibold text-lg border border-white/10 hover:bg-white/25 transition-all shadow-lg backdrop-blur-sm"
              >
                <FileText className="w-5 h-5" />
                See Our Plans
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0B0F14]">100%</div>
                <div className="text-sm text-[#1A232B]/60">Satisfaction</div>
              </div>
              <div className="w-px h-10 bg-[#0B0F14]/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0B0F14]">Same Day</div>
                <div className="text-sm text-[#1A232B]/60">Service</div>
              </div>
              <div className="w-px h-10 bg-[#0B0F14]/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0B0F14]">Licensed</div>
                <div className="text-sm text-[#1A232B]/60">& Insured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}