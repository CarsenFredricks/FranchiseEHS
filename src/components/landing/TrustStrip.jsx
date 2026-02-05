import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Building2, Shield, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Zap,
    title: "Same-Day Service",
    subtitle: "Call Before 1PM"
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    subtitle: "All Property Types"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    subtitle: "Peace of Mind"
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    subtitle: "Guaranteed"
  }
];

export default function TrustStrip() {
  return (
    <section className="bg-white pt-8 pb-6 lg:pt-12 lg:pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38E1FF]/10 to-[#4FBEE8]/10 flex items-center justify-center group-hover:from-[#38E1FF]/20 group-hover:to-[#4FBEE8]/20 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-[#38E1FF]" />
                </div>

              </div>
              <h3 className="font-semibold text-[#0B0F14] mb-1">{item.title}</h3>
              <p className="text-sm text-[#1A232B]/60">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}