import React from 'react';
import { 
  CheckCircle2, 
  Upload, 
  Gauge, 
  PlayCircle, 
  Database, 
  FileSpreadsheet,
  FileSignature
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Ingest',
      subtitle: 'Scanner export normalisation',
      description: 'Import a supported scanner export or report and retain its source provenance. Findings are normalised into a clean security register without losing original raw scan artefacts.',
      icon: Upload,
    },
    {
      number: '02',
      title: 'Score',
      subtitle: 'Business-context prioritisation',
      description: 'Prioritise findings using severity, asset criticality, reachability and evidenced controls. Each score provides explainable context so teams know which fixes matter most.',
      icon: Gauge,
    },
    {
      number: '03',
      title: 'Retest',
      subtitle: 'Independent verification',
      description: 'After the customer or MSP logs remediation, run independent authorised checks and report the verification outcome across our four deterministic classifications.',
      icon: PlayCircle,
    },
    {
      number: '04',
      title: 'Record',
      subtitle: 'Tamper-evident chain',
      description: 'Add results, timestamps and supporting artefacts to the evidence chain. Findings are linked cryptographically with external timestamp anchoring for clear auditability.',
      icon: Database,
    },
    {
      number: '05',
      title: 'Watch & Export',
      subtitle: 'Continuous assurance & reporting',
      description: 'Recheck verified fixes for regression and prepare an evidence pack for the relevant external review, such as Cyber Essentials Plus or customer questionnaires.',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-28 bg-[#0a0f1d] text-slate-100 border-b border-white/[0.08] relative"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-white/[0.1] text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-4">
            Operating Methodology
          </div>
          <h2 
            id="how-it-works-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            How FixProof verifies and documents your fixes.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A structured five-step lifecycle ensuring safe retesting, defensible evidence generation 
            and continuous regression vigilance.
          </p>
        </div>

        {/* Essential Prerequisite Callout */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-7 rounded-2xl bg-amber-500/[0.08] border border-amber-500/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <FileSignature className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded mb-1.5 border border-amber-500/30">
                Mandatory Prerequisite
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Agree authority and scope before any retesting.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prior to executing any network probe or check, FixProof mandates formal signed authority, 
                explicitly allow-listed IP/domain targets and mutually agreed testing windows with strict rate limits.
              </p>
            </div>
          </div>
        </div>

        {/* Five Operating Steps */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/[0.1] -translate-y-10 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-6 border border-white/[0.08] shadow-xl hover:border-teal-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-black text-teal-400 tracking-tight">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-teal-300 mb-3">
                      {step.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>STAGE {step.number}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
