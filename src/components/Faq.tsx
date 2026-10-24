import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  // Allow multiple or single open items. Here we track open state per question.
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'faq-1': true, // Open the first item by default for immediate preview
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What does FixProof do?',
      answer: 'It is designed to independently verify reported vulnerability fixes, retain supporting evidence and check whether the exposure returns.',
    },
    {
      id: 'faq-2',
      question: 'Does FixProof replace our existing scanner?',
      answer: 'No. It works downstream of supported scanner exports and reports.',
    },
    {
      id: 'faq-3',
      question: 'Who applies the security fixes?',
      answer: 'Your internal IT team or MSP applies remediation. FixProof verifies and documents the outcome.',
    },
    {
      id: 'faq-4',
      question: 'What if a device is offline?',
      answer: 'An unavailable device can produce an unverifiable outcome. It is not automatically marked verified closed.',
    },
    {
      id: 'faq-5',
      question: 'Are the retests safe?',
      answer: 'Planned checks are non-destructive, scoped, authorised and rate-limited. No exploitation or denial-of-service testing is performed.',
    },
    {
      id: 'faq-6',
      question: 'What does the evidence chain contain?',
      answer: 'Finding history, timestamps, actors, outcomes and supporting artefacts linked through cryptographic hashes.',
    },
    {
      id: 'faq-7',
      question: 'What happens if a problem returns?',
      answer: 'Regression Watch is designed to recheck verified fixes and flag returning exposure. Scheduling depends on product scope.',
    },
    {
      id: 'faq-8',
      question: 'Does an evidence pack guarantee Cyber Essentials Plus certification?',
      answer: 'No. Packs support readiness and review. Independent assessors make certification decisions and perform their own checks.',
    },
    {
      id: 'faq-9',
      question: 'Which integrations are available?',
      answer: 'The MVP starts with limited scanner-export and MSP-report formats. Additional integrations are planned. Compatibility must be confirmed during pilot scoping.',
    },
    {
      id: 'faq-10',
      question: 'Can MSPs use FixProof?',
      answer: 'The commercial model includes an MSP reseller licence. The multi-client console is a planned expansion beyond the initial MVP.',
    },
    {
      id: 'faq-11',
      question: 'Are evidence packs included in subscription prices?',
      answer: 'Evidence packs are listed separately at £990 per pack.',
    },
    {
      id: 'faq-12',
      question: 'Is the pilot free?',
      answer: 'The proposed pilot diagnostic is £750, subject to selection and scope. The standard diagnostic list price is £2,250.',
    },
    {
      id: 'faq-13',
      question: 'Does submitting the form send my information to FixProof?',
      answer: 'No. This frontend demonstration stores the request only in the current browser’s localStorage.',
    },
    {
      id: 'faq-14',
      question: 'Are prices inclusive of VAT?',
      answer: 'No. All listed prices exclude VAT and are proposed prices to be validated through pilots.',
    },
  ];

  return (
    <section 
      id="faq" 
      className="py-24 bg-[#f8fafc] text-slate-800 border-t border-slate-200 tech-grid-light"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            Common Inquiries
          </div>
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers regarding FixProof’s verification methodology, safety controls and commercial pilot programme.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = !!openItems[item.id];
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div 
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <span 
                      className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-teal-50 text-teal-600' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 ${
                    !isOpen ? 'hidden' : 'block'
                  }`}
                >
                  <p className="pl-7">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accordion helper note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Have a specific pilot requirement or scanner format to discuss? Use the{' '}
            <a href="#request-pilot" className="text-teal-700 font-semibold underline hover:text-teal-800">
              pilot request form
            </a>{' '}
            above.
          </p>
        </div>

      </div>
    </section>
  );
};
