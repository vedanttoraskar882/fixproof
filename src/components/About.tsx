import React from 'react';
import { 
  AlertCircle, 
  RotateCcw, 
  FileSpreadsheet, 
  GraduationCap, 
  MapPin, 
  Layers, 
  Server
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-28 bg-[#0a0f1d] text-slate-100 border-y border-white/[0.08] relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-white/[0.1] text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-4">
            The Remediation Gap
          </div>
          <h2 
            id="about-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            A closed ticket should come with inspectable evidence.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Many organisations already scan for vulnerabilities. After a fix is applied, a finding may disappear 
            from a scanner report. However, a missing finding does not always establish that the fix worked.
          </p>
        </div>

        {/* The Three Problems Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Problem 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] shadow-xl hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-6">
                <AlertCircle className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-1.5">Problem 01</div>
              <h3 className="text-xl font-bold text-white mb-3">Closure can be ambiguous</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                A finding disappearing from a subsequent scan report does not prove remediation. 
                The absence can just as easily result from an offline host, expired scanner credentials, 
                network routing shifts or a relocated service.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200/90 font-medium">
              Absence of evidence is not evidence of remediation.
            </div>
          </div>

          {/* Problem 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] shadow-xl hover:border-rose-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-6">
                <RotateCcw className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Problem 02</div>
              <h3 className="text-xl font-bold text-white mb-3">Fixes can regress</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Security patches and configuration hardening frequently degrade over time. 
                Subsequent deployment pipelines, base image updates, system rollbacks or restored backups 
                can silently reintroduce vulnerability exposure.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200/90 font-medium">
              Without scheduled checks, regressions remain unnoticed until the next audit.
            </div>
          </div>

          {/* Problem 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] shadow-xl hover:border-indigo-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-6">
                <FileSpreadsheet className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 mb-1.5">Problem 03</div>
              <h3 className="text-xl font-bold text-white mb-3">Evidence preparation is manual</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Internal IT teams and MSPs spend unrecoverable hours manually stitching together raw scanner exports, 
                helpdesk tickets, terminal screenshots and spreadsheets for Cyber Essentials Plus, 
                insurance renewals and customer security questionnaires.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200/90 font-medium">
              Ad-hoc screenshots lack verifiable cryptographic provenance and timestamps.
            </div>
          </div>

        </div>

        {/* Clear Position Statement & FixProof's Response */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d1527] to-slate-900 border border-teal-500/30 p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400">
                The FixProof Approach
              </span>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
                “Your team applies the fix. FixProof verifies and documents the outcome.”
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                FixProof provides a structurally separate verification signal, retains the supporting evidence 
                and identifies problems that return.
              </p>
            </div>

            {/* Step-by-step role demarcation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-6 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06]">
                <div className="text-teal-400 font-mono text-[11px] font-bold mb-1">STEP 1</div>
                <div className="text-sm font-bold text-white mb-1">Existing Scanners</div>
                <div className="text-xs text-slate-300">Identify vulnerabilities across your estates.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06]">
                <div className="text-teal-400 font-mono text-[11px] font-bold mb-1">STEP 2</div>
                <div className="text-sm font-bold text-white mb-1">Customer / MSP</div>
                <div className="text-xs text-slate-300">Applies patches, firewall rules or reconfigurations.</div>
              </div>
              <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-500/40">
                <div className="text-teal-300 font-mono text-[11px] font-bold mb-1">STEP 3</div>
                <div className="text-sm font-bold text-teal-200 mb-1">FixProof Engine</div>
                <div className="text-xs text-teal-100/90">Independently retests and verifies the result.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06]">
                <div className="text-teal-400 font-mono text-[11px] font-bold mb-1">STEP 4</div>
                <div className="text-sm font-bold text-white mb-1">Evidence & Watch</div>
                <div className="text-xs text-slate-300">Records tamper-evident chain and watches for regression.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06]">
                <div className="text-teal-400 font-mono text-[11px] font-bold mb-1">STEP 5</div>
                <div className="text-sm font-bold text-white mb-1">Evidence Packs</div>
                <div className="text-xs text-slate-300">Support external assessor, insurer and client reviews.</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-slate-400">
                <strong className="text-slate-300">Important demarcation:</strong> FixProof is an independent verification layer above existing scanners. 
                It does not replace vulnerability scanners, ticketing tools, assessors or insurers.
              </p>
            </div>
          </div>
        </div>

        {/* Founder and Leadership (NO photo/avatar boxes as requested!) */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Founder and Leadership</h3>
            <p className="text-sm text-slate-400 mt-2">
              Combining practical vulnerability remediation background with deep cloud-infrastructure engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Founder Card - Clean typography without avatar or photo box */}
            <div className="bg-slate-900/90 rounded-2xl p-8 border border-white/[0.08] shadow-xl flex flex-col justify-between hover:border-teal-500/30 transition-all">
              <div>
                <div className="mb-5 pb-5 border-b border-white/[0.08]">
                  <h4 className="text-xl font-bold text-white">Sahithi Reddy Gaddam</h4>
                  <p className="text-sm font-semibold text-teal-400 mt-0.5">Founder, CEO & Product Owner</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                    <span>Newcastle upon Tyne, United Kingdom</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 text-xs font-medium text-teal-300 mb-5 border border-teal-500/20">
                  <GraduationCap className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
                  <span>MSc Cybersecurity, Teesside University</span>
                </div>

                <div className="mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Relevant Background</div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                    <li>Vulnerability-assessment and remediation support</li>
                    <li>Security-control implementation and review</li>
                    <li>User-access reviews and compliance documentation</li>
                    <li>Operational leadership, including leading a team of 25</li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.08]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Responsibilities</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Product concept and customer discovery, evidence model, business-context scoring requirements, 
                  retest safety requirements, pilot development and commercial development.
                </p>
              </div>
            </div>

            {/* Proposed CTO Card - Clean typography without avatar or photo box */}
            <div className="bg-slate-900/90 rounded-2xl p-8 border border-white/[0.08] shadow-xl flex flex-col justify-between hover:border-white/[0.15] transition-all">
              <div>
                <div className="mb-5 pb-5 border-b border-white/[0.08]">
                  <h4 className="text-xl font-bold text-white">Sandeep Reddy Marri</h4>
                  <p className="text-sm font-semibold text-slate-300 mt-0.5">Proposed Co-founder & CTO</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                    <Server className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>Technical Architecture & Reliability</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 mb-5 border border-white/[0.08]">
                  <Layers className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  <span>13+ Years DevOps & Cloud Infrastructure</span>
                </div>

                <div className="mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Relevant Experience</div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                    <li>DevOps, cloud infrastructure and production operations</li>
                    <li>AWS, Kubernetes, Terraform and infrastructure-as-code</li>
                    <li>Automated CI/CD pipelines</li>
                    <li>Observability systems and security tooling</li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.08]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Planned Responsibilities</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Architecture, secure infrastructure, platform development, system reliability and retest orchestration.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
