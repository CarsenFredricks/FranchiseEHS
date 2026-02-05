import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const mapCities = [
  { name: "Jupiter", highlight: true },
  { name: "West Palm Beach", highlight: false },
  { name: "Boca Raton", highlight: true },
  { name: "Boynton Beach", highlight: false },
  { name: "Fort Lauderdale", highlight: true },
  { name: "Coral Springs", highlight: false }
];

const allCities = [
  { name: "Jupiter", highlight: true },
  { name: "West Palm Beach", highlight: false },
  { name: "Boca Raton", highlight: true },
  { name: "Boynton Beach", highlight: false },
  { name: "Fort Lauderdale", highlight: true },
  { name: "Coral Springs", highlight: false },
  { name: "Pompano", highlight: false },
  { name: "Westlake", highlight: false }
];

export default function ServiceArea() {
  return (
    <section className="py-8 bg-gradient-to-b from-[#f0faff] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#38E1FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#4FBEE8]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stylized Florida map representation */}
            <div className="relative bg-gradient-to-br from-[#38E1FF]/10 to-[#4FBEE8]/10 rounded-3xl p-8 border border-[#38E1FF]/20">
              <div className="aspect-[4/5] relative">
                {/* Map background */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=800&q=80"
                    alt="South Florida aerial view"
                    className="w-full h-full object-cover opacity-30"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>
                
                {/* City pins */}
                <div className="absolute inset-0 p-6">
                  {mapCities.map((city, index) => (
                    <motion.div
                      key={city.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                      className="absolute z-10"
                      style={{
                        top: `${15 + index * 14}%`,
                        left: `${20 + (index % 2) * 30}%`
                      }}
                    >
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-full shadow-lg ${
                        city.highlight 
                          ? 'bg-[#38E1FF] text-[#0B0F14]' 
                          : 'bg-white text-[#0B0F14] border border-[#38E1FF]/20'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium whitespace-nowrap">{city.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Service area line */}
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M 30 15 Q 60 25 45 50 Q 30 75 50 90"
                    fill="none"
                    stroke="#38E1FF"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                </svg>
              </div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-12 -right-6 lg:bottom-4 lg:right-4 z-20 bg-[#0B0F14] text-white px-6 py-4 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold text-[#38E1FF]">50+</div>
              <div className="text-sm text-[#9FB4C4]">Miles Covered</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-[#38E1FF]/10 rounded-full text-sm font-medium text-[#2A6F8F] mb-4">
                Service Area
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F14] mb-4">
                Serving South Florida's{' '}
                <span className="bg-gradient-to-r from-[#38E1FF] to-[#4FBEE8] bg-clip-text text-transparent">
                  Coastal Communities
                </span>
              </h2>
              <p className="text-lg text-[#1A232B]/70 leading-relaxed">
                From Jupiter to Fort Lauderdale and everywhere in between, we bring professional 
                power washing and exterior cleaning services right to your door.
              </p>
            </div>

            {/* Cities List */}
            <div className="grid grid-cols-2 gap-4">
              {allCities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#38E1FF]/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#38E1FF]/10 flex items-center justify-center relative">
                    <MapPin className="w-4 h-4 text-[#38E1FF]" />
                  </div>
                  <span className="font-medium text-[#0B0F14] relative">{city.name}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-[#1A232B]/60 text-sm">
              And all surrounding cities between Jupiter → Fort Lauderdale → Coral Springs
            </p>

            {/* CTA */}
            <motion.a
              href="tel:2313295999"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#38E1FF] text-[#0B0F14] rounded-2xl font-semibold shadow-xl shadow-[#38E1FF]/30 hover:shadow-2xl hover:shadow-[#38E1FF]/40 transition-all"
            >
              <Phone className="w-5 h-5" />
              Check Your Area - Call Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}