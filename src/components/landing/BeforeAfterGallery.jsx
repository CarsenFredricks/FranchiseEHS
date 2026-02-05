import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, GripVertical } from 'lucide-react';

const transformations = [
  {
    id: 1,
    title: "Driveway Restoration",
    type: "Residential",
    before: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: 2,
    title: "Patio Deep Clean",
    type: "Residential",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    id: 3,
    title: "Commercial Storefront",
    type: "Commercial",
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
  },
  {
    id: 4,
    title: "Pool Deck Revival",
    type: "Residential",
    before: "https://images.unsplash.com/photo-1572331165267-854da2b021aa?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  }
];

function BeforeAfterSlider({ transformation }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={transformation.after}
        alt={`${transformation.title} - After cleaning`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={transformation.before}
          alt={`${transformation.title} - Before cleaning`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Before overlay tint */}
        <div className="absolute inset-0 bg-[#1A232B]/10" />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#38E1FF]">
          <GripVertical className="w-5 h-5 text-[#38E1FF]" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-4 py-2 bg-[#1A232B]/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
        Before
      </div>
      <div className="absolute top-4 right-4 px-4 py-2 bg-[#38E1FF] rounded-full text-[#0B0F14] text-sm font-medium">
        After
      </div>

      {/* Info Badge */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl">
          <span className="text-xs text-[#38E1FF] font-medium">{transformation.type}</span>
          <h4 className="font-semibold text-[#0B0F14]">{transformation.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTransformation = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B0F14] relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#38E1FF]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4FBEE8]/10 rounded-full blur-[80px]" />
      
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#38E1FF]/10 rounded-full text-sm font-medium text-[#38E1FF] mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            See the Transformation
          </h2>
          <p className="text-lg text-[#9FB4C4] max-w-2xl mx-auto">
            Drag the slider to reveal the dramatic difference our professional cleaning makes.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <BeforeAfterSlider transformation={transformations[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTransformation}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-[#38E1FF]' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTransformation}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>


        </motion.div>
      </div>
    </section>
  );
}