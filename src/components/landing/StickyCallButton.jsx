import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-white/0 md:hidden z-40"
        >
          <motion.a
            href="tel:2313295999"
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#38E1FF] to-[#4FBEE8] text-[#0B0F14] rounded-2xl font-bold text-lg shadow-2xl shadow-[#38E1FF]/40"
          >
            <Phone className="w-6 h-6" />
            Call Now — 231-329-5999
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}