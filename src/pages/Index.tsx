
import React from 'react';
import CryptoLogo from '@/components/CryptoLogo';
import HeroSection from '@/components/HeroSection';
import CryptoPricesSection from '@/components/CryptoPricesSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CryptoLogo />
      <HeroSection />
      <CryptoPricesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
