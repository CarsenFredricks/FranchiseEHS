import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Leaf, Zap, Award, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: "Young, Professional Local Team",
    description: "Energetic, dedicated crew that takes pride in every job"
  },
  {
    icon: Wrench,
    title: "Commercial-Grade Equipment",
    description: "Professional tools that deliver superior results every time"
  },
  {
    icon: Leaf,
    title: "Safe Soft-Wash Methods",
    description: "Gentle on surfaces, tough on dirt—protecting your property"
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    description: "Same-day service available when you call before 1PM"
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "100% happy or we make it right—that's our promise"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#38E1FF 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-[#38E1FF]/10 rounded-full text-sm font-medium text-[#2A6F8F] mb-4">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F14] mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#38E1FF] to-[#4FBEE8] bg-clip-text text-transparent">
                Franchise EHS
              </span>
            </h2>
            <p className="text-lg text-[#1A232B]/70 leading-relaxed mb-8">
              We're not just another cleaning company. We're your neighbors, committed to 
              making South Florida properties look their absolute best.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80"
                alt="Professional power washing team at work"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-[#38E1FF] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#0B0F14]" />
                  </div>
                  <div>
                    <div className="font-semibold">Trusted by Florida Homeowners</div>
                    <div className="text-sm text-white/80">Professional service, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="flex gap-5 p-5 rounded-2xl hover:bg-gradient-to-r hover:from-[#38E1FF]/5 hover:to-transparent transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] flex items-center justify-center shadow-lg shadow-[#38E1FF]/20">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0F14] mb-1">{reason.title}</h3>
                  <p className="text-[#1A232B]/60">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}