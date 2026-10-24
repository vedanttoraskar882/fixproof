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
      className="py-24 bg-[#f8fafc] text-slate-800 border-b border-slate-200 tech-grid-light"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            Operating Methodology
          </div>
          <h2 
            id="how-it-works-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            How FixProof verifies and documents your fixes.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured five-step lifecycle ensuring safe retesting, defensible evidence generation 
            and continuous regression vigilance.
          </p>
        </div>

        {/* Essential Prerequisite Callout */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 rounded-xl bg-amber-50/80 border border-amber-300/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <FileSignature className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded mb-1">
                Mandatory Prerequisite
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Agree authority and scope before any retesting.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
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
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 -translate-y-8 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-teal-600 tracking-tight">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-teal-700 mb-3">
                      {step.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>STAGE {step.number}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
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
