
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TunnelEffect from '@/components/TunnelEffect';

const Index = () => {
  return (
    <div className="min-h-screen font-inter bg-dark-bg text-white relative">
      <TunnelEffect />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
