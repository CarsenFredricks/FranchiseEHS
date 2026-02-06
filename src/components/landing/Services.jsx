import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Home, Building, Sparkles, Sun, Wind } from 'lucide-react';

const residentialServices = [
  {
    icon: Droplets,
    title: "Power Washing",
    description: "Restore your home's exterior with our professional-grade pressure washing that removes years of buildup."
  },
  {
    icon: Sparkles,
    title: "Window Cleaning",
    description: "Crystal-clear windows that let the Florida sunshine pour in, inside and out."
  },
  {
    icon: Sun,
    title: "Driveway & Patio Cleaning",
    description: "Transform stained concrete and pavers back to their original beauty."
  },
  {
    icon: Wind,
    title: "Soft Washing",
    description: "Gentle, effective cleaning safe for roofing, siding, landscaping, and surrounding surfaces."
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely and protect your home from water damage."
  }
];

const commercialServices = [
  {
    icon: Building,
    title: "Commercial Building Cleaning",
    description: "Make a lasting first impression with a spotless storefront and building exterior."
  },
  {
    icon: Droplets,
    title: "Commercial Power Washing",
    description: "Heavy-duty cleaning for parking lots, sidewalks, and large commercial surfaces."
  },
  {
    icon: Sparkles,
    title: "Commercial Window Cleaning",
    description: "Professional window cleaning for office buildings and retail spaces."
  }
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: -8 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative p-6 rounded-2xl bg-white border border-[#4FBEE8]/10 shadow-xl transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] flex items-center justify-center mb-4 shadow-lg shadow-[#38E1FF]/20">
        <service.icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-lg font-semibold text-[#0B0F14] mb-2">{service.title}</h3>
      <p className="text-[#1A232B]/60 leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="pt-8 pb-24 lg:pt-12 lg:pb-24 bg-gradient-to-b from-white to-[#f0faff] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#38E1FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#4FBEE8]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#38E1FF]/10 rounded-full text-sm font-medium text-[#2A6F8F] mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F14] mb-4">
            Professional Exterior Cleaning
          </h2>
          <p className="text-lg text-[#1A232B]/60 max-w-2xl mx-auto">
            From residential homes to commercial properties, we have the expertise and equipment to make any exterior shine.
          </p>
        </motion.div>

        {/* Residential Services */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B0F14] flex items-center justify-center">
              <Home className="w-5 h-5 text-[#38E1FF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B0F14]">Residential</h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Commercial Services */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B0F14] flex items-center justify-center">
              <Building className="w-5 h-5 text-[#38E1FF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B0F14]">Commercial</h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}