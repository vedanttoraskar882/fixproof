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
  Clock,
  Check
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#070b14] text-slate-100"
      aria-label="FixProof Introduction"
    >
      {/* Subtle modern radial background glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.12),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-widest text-teal-300 uppercase">
                Independent remediation verification
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Independent proof that your security fixes hold.
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              Turn reported vulnerability fixes into independently verified, timestamped evidence. 
              FixProof is designed to work alongside your existing scanners, helping UK SMEs and MSPs 
              prepare for assessments, insurance renewals and customer security reviews.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#request-pilot"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold tracking-wide rounded-xl bg-teal-400 text-slate-950 hover:bg-teal-300 active:bg-teal-500 transition-all shadow-lg shadow-teal-400/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 border border-white/[0.1] transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Explore the Platform
              </a>
            </div>

            {/* Supporting phrases */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <Check className="w-3 h-3" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium text-slate-300">
                  Works alongside existing scanners
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <Check className="w-3 h-3" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium text-slate-300">
                  Safe, authorised verification
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <Check className="w-3 h-3" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium text-slate-300">
                  Evidence that can be inspected
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Concept Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0c1222]/95 border border-white/[0.1] shadow-2xl p-5 sm:p-7 relative backdrop-blur-xl">
              
              {/* Header bar with badge and spec tag */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    Platform concept preview — illustrative
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08]">
                  VREC-ENGINE-SPEC
                </span>
              </div>

              {/* Step Flow Diagram: Scanner -> Fix -> Retest -> Record -> Watch */}
              <div className="mb-6">
                <div className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                  Verification Lifecycle Flow
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.06] flex flex-col items-center text-center">
                    <Search className="w-4 h-4 text-slate-400 mb-1.5" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Existing Scanner Finding</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.06] flex flex-col items-center text-center">
                    <Wrench className="w-4 h-4 text-slate-400 mb-1.5" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Customer or MSP Applies Fix</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-teal-950/70 border border-teal-500/40 flex flex-col items-center text-center shadow-sm shadow-teal-500/10">
                    <ShieldCheck className="w-4 h-4 text-teal-400 mb-1.5" aria-hidden="true" />
                    <span className="text-[11px] font-bold text-teal-200">Independent Retest</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.06] flex flex-col items-center text-center">
                    <FileCheck className="w-4 h-4 text-slate-400 mb-1.5" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Evidence Record</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.06] flex flex-col items-center text-center">
                    <RefreshCw className="w-4 h-4 text-slate-400 mb-1.5" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-slate-200">Regression Watch</span>
                  </div>
                </div>
              </div>

              {/* Compact Illustrative Evidence Timeline */}
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.08] mb-6">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                    <span className="text-xs font-bold text-slate-200">Illustrative Evidence Timeline</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Target: gateway.corp.net:443</span>
                </div>

                <div className="relative pl-6 space-y-3.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700/60">
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-slate-500" aria-hidden="true" />
                    <span className="font-semibold text-slate-300">Finding imported.</span>
                    <span className="text-[11px] font-mono text-slate-400">Scanner report CVE-2024-XXXX</span>
                  </div>
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-slate-500" aria-hidden="true" />
                    <span className="font-semibold text-slate-300">Remediation logged.</span>
                    <span className="text-[11px] font-mono text-slate-400">IT Patch Ticket #4829</span>
                  </div>
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-teal-400 ring-2 ring-teal-500/30" aria-hidden="true" />
                    <span className="font-bold text-teal-300">Independent retest.</span>
                    <span className="text-[11px] font-mono text-teal-400">Separate retest engine run</span>
                  </div>
                  <div className="relative flex items-center justify-between text-xs">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-500/30" aria-hidden="true" />
                    <span className="font-bold text-emerald-300">Evidence recorded.</span>
                    <span className="text-[11px] font-mono text-emerald-400">VREC hash anchored</span>
                  </div>
                </div>
              </div>

              {/* Four Planned Verification Outcomes Legend */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 mb-2.5 uppercase tracking-wider flex items-center justify-between">
                  <span>Planned Verification Outcomes</span>
                  <span className="text-[10px] font-normal lowercase text-slate-400">deterministic classification</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* Verified closed */}
                  <div className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-teal-300">Verified closed</div>
                      <div className="text-[10px] text-teal-400/80">Fix proven effective</div>
                    </div>
                  </div>

                  {/* Still reachable */}
                  <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-rose-300">Still reachable</div>
                      <div className="text-[10px] text-rose-400/80">Exposure persists</div>
                    </div>
                  </div>

                  {/* Unverifiable */}
                  <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-amber-300">Unverifiable</div>
                      <div className="text-[10px] text-amber-400/80">Offline or unreachable</div>
                    </div>
                  </div>

                  {/* Conflicting */}
                  <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center gap-2">
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
