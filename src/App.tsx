import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { MarketAndPricing } from './components/MarketAndPricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'platform', 'how-it-works', 'market-pricing', 'faq'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#080d1a] text-slate-100 font-sans selection:bg-teal-500/20 selection:text-teal-300">
      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {/* 1. Home */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Platform */}
        <Platform />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Market & Pricing (Contains Request a Pilot form at #request-pilot) */}
        <MarketAndPricing />

        {/* 6. FAQ */}
        <Faq />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
