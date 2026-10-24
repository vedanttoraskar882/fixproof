import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market & Pricing', href: '#market-pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Request a Pilot', href: '#request-pilot' },
  ];

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand & Description (NO logo icon next to wordmark) */}
          <div className="md:col-span-6 lg:col-span-7">
            <a
              href="#home"
              className="inline-block text-white group mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md"
              aria-label="FixProof Home"
            >
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Fix<span className="text-teal-400">Proof</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mb-5 font-normal">
              FixProof is a proposed UK cybersecurity SaaS platform that independently verifies 
              whether reported security fixes have genuinely worked, records the supporting evidence 
              and checks whether those fixes remain effective.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Newcastle upon Tyne, United Kingdom</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 lg:col-span-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2 text-xs" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-teal-300 transition-colors py-1.5 focus:outline-none focus-visible:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom Bar with Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-400 max-w-2xl text-center md:text-left leading-normal font-normal">
            FixProof is designed to provide independent remediation-verification evidence. 
            Assessors, insurers and customers make their own acceptance decisions.
          </p>

          <p className="text-xs text-slate-400 shrink-0">
            &copy; {currentYear} FixProof. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
