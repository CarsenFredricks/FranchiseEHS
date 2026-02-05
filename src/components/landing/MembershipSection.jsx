import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Sparkles, Crown } from 'lucide-react';

const membershipPlans = [
  {
    title: "Monthly",
    discount: "$150 OFF",
    description: "Up to 12 cleanings per year",
    delay: 0.1
  },
  {
    title: "Quarterly",
    discount: "$100 OFF",
    description: "Up to 4 cleanings per year",
    delay: 0.2
  },
  {
    title: "Biannual",
    discount: "$50 OFF",
    description: "Up to 2 cleanings per year",
    delay: 0.3
  }
];

export default function MembershipSection() {
  return (
    <section id="membership" className="relative bg-white">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <Crown className="w-12 h-12 text-[#FFD700] fill-[#FFD700] drop-shadow-lg" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#38E1FF] to-[#4FBEE8] bg-clip-text text-transparent mb-4">
            Franchise Wash Club Membership
          </h2>
          <p className="text-lg text-[#1A232B]/60 max-w-2xl mx-auto">
            Exclusive savings on recurring exterior cleaning
          </p>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: plan.delay, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#4FBEE8]/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38E1FF]/10 to-[#4FBEE8]/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#38E1FF]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0B0F14] mb-4">
                {plan.title}
              </h3>

              {/* Discount */}
              <div className="mb-6 flex items-baseline gap-3">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#38E1FF] to-[#4FBEE8] bg-clip-text text-transparent">
                  {plan.discount}
                </div>
                <div className="text-sm text-[#0B0F14] font-medium">
                  Each Visit
                </div>
              </div>

              {/* Description */}
              <p className="text-[#1A232B]/60 mb-8">
                {plan.description}
              </p>

              {/* CTA Button */}
              <motion.a
                href="tel:2313295999"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#38E1FF] text-[#0B0F14] rounded-xl font-semibold shadow-lg shadow-[#38E1FF]/20 hover:shadow-xl hover:shadow-[#38E1FF]/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom blend transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#f0faff] pointer-events-none" />
    </section>
  );
}