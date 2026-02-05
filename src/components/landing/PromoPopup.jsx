import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Gift } from 'lucide-react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const hasShown = sessionStorage.getItem('promoPopupShown');
    if (hasShown) return;

    // Show after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('promoPopupShown', 'true');
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Header decoration */}
              <div className="h-32 bg-gradient-to-br from-[#38E1FF] to-[#4FBEE8] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                
                {/* Icon */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                    <Gift className="w-10 h-10 text-[#38E1FF]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-14 pb-8 px-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0F14] mb-2">
                  Get $150 Off
                </h3>
                <p className="text-xl text-[#38E1FF] font-semibold mb-4">
                  Your First Wash
                </p>
                <p className="text-[#1A232B]/60 mb-8">
                  Limited-time offer for South Florida homeowners & businesses. 
                  Call now to claim your discount!
                </p>

                {/* CTA */}
                <motion.a
                  href="tel:2313295999"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#38E1FF] text-[#0B0F14] rounded-2xl font-bold text-lg shadow-xl shadow-[#38E1FF]/30 hover:shadow-2xl hover:shadow-[#38E1FF]/40 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}