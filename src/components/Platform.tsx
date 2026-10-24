import React from 'react';
import { 
  FileCode2, 
  Target, 
  ShieldCheck, 
  Link2, 
  Sliders, 
  Repeat, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRightLeft 
} from 'lucide-react';

export const Platform: React.FC = () => {
  return (
    <section 
      id="platform" 
      className="py-28 bg-[#070b14] text-slate-100 relative"
      aria-labelledby="platform-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-[11px] font-bold text-teal-300 uppercase tracking-widest mb-4">
            Platform Architecture
          </div>
          <h2 
            id="platform-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Six foundational pillars of independent verification.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Engineered as a structurally separate verification layer above your existing security stack, 
            providing inspectable evidence without intrusive testing.
          </p>
        </div>

        {/* The 6 Architectural Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* A. Scanner-Agnostic Evidence Ingestion */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <FileCode2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">Architecture Element A</div>
              <h3 className="text-lg font-bold text-white mb-2.5">Scanner-Agnostic Evidence Ingestion</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Accepts supported scanner exports and report formats, normalising findings into a unified security register 
                while preserving source references and original artefacts for audit provenance.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-400">
              <strong className="text-slate-300 block mb-0.5">MVP Integration Scope:</strong>
              The planned architecture is scanner-agnostic. The initial MVP begins with limited formats; not all commercial scanners are available at launch.
            </div>
          </div>

          {/* B. Business-Context Exposure Scoring */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">Architecture Element B</div>
              <h3 className="text-lg font-bold text-white mb-2.5">Business-Context Exposure Scoring</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Prioritises remediation by balancing vulnerability details with practical operational exposure:
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-5">
                <li>Source severity or CVSS benchmark</li>
                <li>Asset business criticality</li>
                <li>Tested external and internal reachability</li>
                <li>Evidenced compensating controls</li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-400">
              <strong className="text-slate-300 block mb-0.5">Visible Reasoning:</strong>
              Every prioritisation score displays its factual justification. No black-box or invented numerical scoring.
            </div>
          </div>

          {/* C. Independent Retest Engine */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-teal-500/35 p-7 flex flex-col justify-between hover:border-teal-400/60 transition-all shadow-xl shadow-teal-950/20">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 mb-5">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-teal-300 mb-1">Architecture Element C</div>
              <h3 className="text-lg font-bold text-white mb-2.5">Independent Retest Engine</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Executes safe, authorised checks from infrastructure structurally separate from the originating scanner.
              </p>
              <div className="text-xs text-slate-400 space-y-1 mb-5">
                <div className="font-semibold text-slate-300">Planned non-destructive checks:</div>
                <div className="pl-2 border-l border-slate-700 text-slate-400 leading-relaxed">
                  Connection and reachability checks • Service & version identification • Transport-layer configuration inspection • Non-destructive exposure checks
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs text-teal-200">
              <strong className="text-teal-300 block mb-0.5">Safety & Authority Mandate:</strong>
              No exploitation, DoS or customer data access. Requires signed authority, allow-listed targets and agreed windows. Testing halts immediately if instability is detected.
            </div>
          </div>

          {/* D. Verified Remediation Evidence Chain (VREC) */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Link2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">Architecture Element D</div>
              <h3 className="text-lg font-bold text-white mb-2.5">Verified Remediation Evidence Chain (VREC)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Assembles an immutable-by-audit audit trail recording finding lifecycle:
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-5">
                <li>Finding history and remediation actors</li>
                <li>Accurate verification timestamps</li>
                <li>Raw supporting network artefacts</li>
                <li>Linked cryptographic hashes & external timestamp anchoring</li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-400">
              <strong className="text-slate-300 block mb-0.5">Tamper-Evident Standard:</strong>
              Described strictly as tamper-evident. FixProof does not claim to be tamper-proof, blockchain-based or legally conclusive.
            </div>
          </div>

          {/* E. Compensating-Control-Aware Risk Model */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Sliders className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">Architecture Element E</div>
              <h3 className="text-lg font-bold text-white mb-2.5">Compensating-Control-Aware Risk Model</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Reflects verified perimeter and host protections (such as network access restrictions, IP whitelisting or WAF rules) when evaluating residual exposure.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
              <strong className="text-amber-300 block mb-0.5">Crucial Distinction:</strong>
              A compensating control can reduce exposure without proving that the underlying vulnerability has been fixed.
            </div>
          </div>

          {/* F. Regression Watch & Evidence Pack Generator */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Repeat className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">Architecture Element F</div>
              <h3 className="text-lg font-bold text-white mb-2.5">Regression Watch & Evidence Packs</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Two essential continuous assurance capabilities:
              </p>
              <div className="space-y-2 text-xs text-slate-300 mb-5">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <strong className="text-white block">1. Regression Watch:</strong>
                  Scheduled automated rechecks identify when previously closed vulnerabilities unexpectedly return.
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <strong className="text-white block">2. Evidence Pack Generator:</strong>
                  Organises findings, dates, outcomes and artefacts for Cyber Essentials Plus, cyber-insurance and client reviews.
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-400">
              <strong className="text-slate-300 block mb-0.5">Assessor Independence:</strong>
              Evidence packs support review. They do not replace an assessor's checks or guarantee certification acceptance.
            </div>
          </div>

        </div>

        {/* Retest Outcomes Detail Callout */}
        <div className="rounded-2xl bg-slate-900/80 border border-white/[0.08] p-7 sm:p-8 mb-16 shadow-xl">
          <div className="max-w-3xl mb-6">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400" aria-hidden="true" />
              Retest Engine Verification Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Every retest terminates in one of four distinct, unambiguous states. An offline host or unavailable port is strictly classified as unverifiable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/30">
              <div className="flex items-center gap-2 text-teal-300 font-bold text-sm mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" aria-hidden="true" />
                <span>Verified closed</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Independent safe check confirms the vulnerable service, port or weak cipher is no longer present or exposed.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm mb-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" aria-hidden="true" />
                <span>Still reachable</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Check confirms the targeted service remains live and vulnerable despite internal ticket closure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1.5">
                <HelpCircle className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Unverifiable</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Host offline, filtered or credentials unavailable. <em>An offline device must never automatically appear verified closed.</em>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-sm mb-1.5">
                <ArrowRightLeft className="w-4 h-4 text-purple-400" aria-hidden="true" />
                <span>Conflicting</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Discrepancy detected between multiple test angles or between scanner report data and direct live probe.
              </p>
            </div>
          </div>
        </div>

        {/* AI Role Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0a1224] to-slate-900/90 border border-white/[0.08] p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
              <Cpu className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">The Role of AI in FixProof</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Artificial intelligence may assist with report format extraction, review prioritisation and plain-English technical explanations. 
                However, <strong>core verification outcomes and risk scoring remain strictly deterministic</strong>. 
                FixProof is intentionally not positioned as an autonomous remediation bot.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/30 shrink-0">
            Deterministic Engine
          </span>
        </div>

      </div>
    </section>
  );
};
