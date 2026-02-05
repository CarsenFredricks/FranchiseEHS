import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0F14] via-[#1A232B] to-[#0B0F14] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#38E1FF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4FBEE8]/5 rounded-full blur-[100px]" />
      

      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] mb-8 shadow-2xl shadow-[#38E1FF]/30"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to See Your Property{' '}
          <span className="bg-gradient-to-r from-[#38E1FF] to-[#6AEEFF] bg-clip-text text-transparent">
            Look Brand New?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-xl text-[#9FB4C4] mb-10 max-w-2xl mx-auto"
        >
          Get your free estimate today. Same-day service available for calls before 1PM.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <motion.a
            href="tel:2313295999"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#38E1FF] text-[#0B0F14] rounded-2xl font-bold text-lg shadow-2xl shadow-[#38E1FF]/40 hover:shadow-[#38E1FF]/60 transition-all overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#6AEEFF] to-[#38E1FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            <Phone className="relative w-6 h-6" />
            <span className="relative">Free Estimate</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Phone Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <a 
            href="tel:2313295999" 
            className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold text-white hover:text-[#38E1FF] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#38E1FF]/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#38E1FF]" />
            </div>
            231-329-5999
          </a>
          <p className="text-[#9FB4C4] mt-3">Mon-Sat: 8:00 AM – 6:00 PM</p>
        </motion.div>
      </div>
    </section>
  );
}