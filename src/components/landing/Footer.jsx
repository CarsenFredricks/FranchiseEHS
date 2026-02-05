import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Shield, Instagram, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] flex items-center justify-center shadow-lg shadow-[#38E1FF]/30 overflow-hidden">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697d1de3237eb62c102b3a4f/3f646d7da_33f376ab-abfe-4c2d-b5d3-a3532a197e0e.jpeg" alt="Franchise EHS" className="w-full h-full object-cover" />
                </div>
              <span className="text-xl font-bold text-white">Franchise EHS</span>
            </div>
            <p className="text-[#9FB4C4] text-sm leading-relaxed mb-4">
              Professional power washing and exterior cleaning services for South Florida's coastal communities.
            </p>
            <div className="flex items-center gap-2 text-[#38E1FF]">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">100% Satisfaction Guaranteed</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:2313295999" 
                  className="flex items-center gap-3 text-[#9FB4C4] hover:text-[#38E1FF] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>231-329-5999</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:franchiseexteriorhomeservices@gmail.com" 
                  className="flex items-center gap-3 text-[#9FB4C4] hover:text-[#38E1FF] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">franchiseexteriorhomeservices@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hours</h4>
            <div className="flex items-start gap-3 text-[#9FB4C4]">
              <Clock className="w-4 h-4 mt-0.5" />
              <div>
                <p>Monday – Saturday</p>
                <p className="font-medium text-white">8:00 AM – 6:00 PM</p>
                <p className="text-sm text-[#38E1FF] mt-2">Same-Day Service Available</p>
                <p className="text-xs text-[#9FB4C4]">(1pm cut-off time)</p>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Area</h4>
            <div className="flex items-start gap-3 text-[#9FB4C4] mb-6">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p>Jupiter</p>
                <p>West Palm Beach</p>
                <p>Boca Raton</p>
                <p>Boynton Beach</p>
                <p>Fort Lauderdale</p>
                <p>Coral Springs</p>
                <p className="text-[#38E1FF] text-xs mt-2">& surrounding areas</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-3 pt-5">
              <motion.a 
                href="https://www.instagram.com/franchise.ehs?igsh=dWVkaHg0bWhzYXRm"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
              >
                <div className="w-full h-full bg-[#0B0F14] rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                </div>
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/share/1AKyWyxt9u/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
              >
                <div className="w-full h-full bg-[#0B0F14] rounded-lg flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                </div>
              </motion.a>
              <motion.a 
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
              >
                <div className="w-full h-full bg-[#0B0F14] rounded-lg flex items-center justify-center">
                  <TikTokIcon className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                </div>
              </motion.a>
              <motion.a 
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="w-10 h-10 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] p-[2px] hover:shadow-lg hover:shadow-[#38E1FF]/30 transition-all group"
              >
                <div className="w-full h-full bg-[#0B0F14] rounded-lg flex items-center justify-center">
                  <Youtube className="w-4 h-4 text-[#38E1FF] group-hover:scale-110 transition-transform" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#9FB4C4]">
              © {new Date().getFullYear()} Franchise EHS. All rights reserved.
            </p>
            <p className="text-sm text-[#9FB4C4]">
              Professional Exterior Cleaning • South Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}