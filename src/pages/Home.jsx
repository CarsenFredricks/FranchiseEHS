import React, { useEffect } from 'react';
import Hero from '@/components/landing/Hero';
import TrustStrip from '@/components/landing/TrustStrip';
import Services from '@/components/landing/Services';
import BeforeAfterGallery from '@/components/landing/BeforeAfterGallery';
import MembershipSection from '@/components/landing/MembershipSection';
import ServiceArea from '@/components/landing/ServiceArea';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import PromoPopup from '@/components/landing/PromoPopup';
import StickyCallButton from '@/components/landing/StickyCallButton';

export default function Home() {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Power Washing & Exterior Cleaning | South Florida | Same-Day Service";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional residential & commercial power washing serving Jupiter, Boca Raton, Fort Lauderdale & surrounding South Florida communities. Call now for a free estimate.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional residential & commercial power washing serving Jupiter, Boca Raton, Fort Lauderdale & surrounding South Florida communities. Call now for a free estimate.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <Hero />
      <TrustStrip />
      <Services />
      <BeforeAfterGallery />
      <MembershipSection />
      <ServiceArea />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />

      {/* Overlays */}
      <PromoPopup />
      <StickyCallButton />
    </div>
  );
}