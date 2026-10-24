import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  FileCheck, 
  ArrowRightLeft,
  Search,
  Wrench,
  RefreshCw,
  Clock
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#080d1a] text-slate-100 tech-grid"
      aria-label="FixProof Introduction"
    >
      {/* Restrained decorative background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-teal-300 uppercase">
                Independent remediation verification
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Independent proof that your security fixes hold.
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Turn reported vulnerability fixes into independently verified, timestamped evidence. 
              FixProof is designed to work alongside your existing scanners, helping UK SMEs and MSPs 
              prepare for assessments, insurance renewals and customer security reviews.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#request-pilot"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400 active:bg-teal-600 transition-all shadow-md hover:shadow-teal-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                Request a Pilot
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700/80 border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Explore the Platform
              </a>
            </div>

            {/* Supporting phrases */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-300">
                  Works alongside existing scanners
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-300">
                  Safe, authorised verification
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-300">
                  Evidence that can be inspected
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Concept Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xl p-5 sm:p-6 relative backdrop-blur-sm">
              
              {/* Mandatory Illustrative Label */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    Platform concept preview — illustrative
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded border border-slate-700">
                  VREC-SPEC-01
                </span>
              </div>

              {/* Step Flow Diagram: Scanner -> Fix -> Retest -> Record -> Watch */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Verification Lifecycle Flow
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
                    <Search className="w-4 h-4 text-slate-400 mb-1" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Existing Scanner Finding</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
                    <Wrench className="w-4 h-4 text-slate-400 mb-1" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Customer or MSP Applies Fix</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-500/40 flex flex-col items-center text-center">
                    <ShieldCheck className="w-4 h-4 text-teal-400 mb-1" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-teal-200">Independent Retest</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
                    <FileCheck className="w-4 h-4 text-slate-400 mb-1" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Evidence Record</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
                    <RefreshCw className="w-4 h-4 text-slate-400 mb-1" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Regression Watch</span>
                  </div>
                </div>
              </div>

              {/* Compact Illustrative Evidence Timeline */}
              <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800/80 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                    <span className="text-xs font-semibold text-slate-200">Illustrative Evidence Timeline</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Target: mail.internal.corp:443</span>
                </div>

                <div className="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-slate-500" aria-hidden="true" />
                    <span className="font-medium text-slate-300">Finding imported.</span>
                    <span className="text-[11px] font-mono text-slate-500">Scanner report CVE-2024-XXXX</span>
                  </div>
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-slate-500" aria-hidden="true" />
                    <span className="font-medium text-slate-300">Remediation logged.</span>
                    <span className="text-[11px] font-mono text-slate-500">IT Patch Ticket #4829</span>
                  </div>
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-teal-400 ring-2 ring-teal-500/30" aria-hidden="true" />
                    <span className="font-medium text-teal-300">Independent retest.</span>
                    <span className="text-[11px] font-mono text-teal-400">Separate retest engine run</span>
                  </div>
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-500/30" aria-hidden="true" />
                    <span className="font-medium text-emerald-300">Evidence recorded.</span>
                    <span className="text-[11px] font-mono text-emerald-400">VREC hash anchored</span>
                  </div>
                </div>
              </div>

              {/* Four Planned Verification Outcomes Legend */}
              <div>
                <div className="text-xs font-semibold text-slate-400 mb-2.5 uppercase tracking-wider flex items-center justify-between">
                  <span>Planned Verification Outcomes</span>
                  <span className="text-[11px] font-normal lowercase text-slate-500">deterministic classification</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* Verified closed */}
                  <div className="p-2.5 rounded-lg bg-teal-950/40 border border-teal-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-teal-300">Verified closed</div>
                      <div className="text-[10px] text-teal-400/80">Fix proven effective</div>
                    </div>
                  </div>

                  {/* Still reachable */}
                  <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-500/30 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-rose-300">Still reachable</div>
                      <div className="text-[10px] text-rose-400/80">Exposure persists</div>
                    </div>
                  </div>

                  {/* Unverifiable */}
                  <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-amber-300">Unverifiable</div>
                      <div className="text-[10px] text-amber-400/80">Offline or unreachable</div>
                    </div>
                  </div>

                  {/* Conflicting */}
                  <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center gap-2">
                    <ArrowRightLeft className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-purple-300">Conflicting</div>
                      <div className="text-[10px] text-purple-400/80">Mixed signal detected</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
