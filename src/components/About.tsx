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
      className="py-24 bg-[#f8fafc] text-slate-800 tech-grid-light border-y border-slate-200"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            The Verification Gap
          </div>
          <h2 
            id="about-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            A closed ticket should come with inspectable evidence.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Many organisations already scan for vulnerabilities. After a fix is applied, a finding may disappear 
            from a scanner report. However, a missing finding does not always establish that the fix worked.
          </p>
        </div>

        {/* The Three Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Problem 1 */}
          <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5">
              <AlertCircle className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Problem 01</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Closure can be ambiguous</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              A finding disappearing from a subsequent scan report does not prove remediation. 
              The absence can just as easily result from an offline host, expired scanner credentials, 
              network routing shifts or a relocated service.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              Absence of evidence is not evidence of remediation.
            </div>
          </div>

          {/* Problem 2 */}
          <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 mb-5">
              <RotateCcw className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">Problem 02</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Fixes can regress</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Security patches and configuration hardening frequently degrade over time. 
              Subsequent deployment pipelines, base image updates, system rollbacks or restored backups 
              can silently reintroduce vulnerability exposure.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              Without scheduled checks, regressions remain unnoticed until the next audit.
            </div>
          </div>

          {/* Problem 3 */}
          <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-5">
              <FileSpreadsheet className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1">Problem 03</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Evidence preparation is manual</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Internal IT teams and MSPs spend unrecoverable hours manually stitching together raw scanner exports, 
              helpdesk tickets, terminal screenshots and spreadsheets for Cyber Essentials Plus, 
              insurance renewals and customer security questionnaires.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              Ad-hoc screenshots lack verifiable cryptographic provenance and timestamps.
            </div>
          </div>

        </div>

        {/* Clear Position Statement & FixProof's Response */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-12 mb-20 shadow-xl border border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                The FixProof Approach
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                “Your team applies the fix. FixProof verifies and documents the outcome.”
              </p>
              <p className="text-base text-slate-300 max-w-2xl mx-auto">
                FixProof provides a structurally separate verification signal, retains the supporting evidence 
                and identifies problems that return.
              </p>
            </div>

            {/* Step-by-step role demarcation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">STEP 1</div>
                <div className="text-sm font-semibold text-white mb-1">Existing Scanners</div>
                <div className="text-xs text-slate-300">Identify vulnerabilities across your estates.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">STEP 2</div>
                <div className="text-sm font-semibold text-white mb-1">Customer / MSP</div>
                <div className="text-xs text-slate-300">Applies patches, firewall rules or reconfigurations.</div>
              </div>
              <div className="p-4 rounded-xl bg-teal-950/70 border border-teal-500/40">
                <div className="text-teal-300 font-mono text-xs font-bold mb-1">STEP 3</div>
                <div className="text-sm font-semibold text-teal-200 mb-1">FixProof Engine</div>
                <div className="text-xs text-teal-100/90">Independently retests and verifies the result.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">STEP 4</div>
                <div className="text-sm font-semibold text-white mb-1">Evidence & Watch</div>
                <div className="text-xs text-slate-300">Records tamper-evident chain and watches for regression.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">STEP 5</div>
                <div className="text-sm font-semibold text-white mb-1">Evidence Packs</div>
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

        {/* Founder and Leadership */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Founder and Leadership</h3>
            <p className="text-sm text-slate-600 mt-2">
              Combining practical vulnerability remediation background with deep cloud-infrastructure engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Founder Card */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  {/* Abstract typographic avatar */}
                  <div className="w-14 h-14 rounded-xl bg-teal-900 text-teal-200 font-bold text-lg flex items-center justify-center shrink-0 border border-teal-700 shadow-inner">
                    SRG
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Sahithi Reddy Gaddam</h4>
                    <p className="text-sm font-semibold text-teal-700">Founder, CEO & Product Owner</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span>Newcastle upon Tyne, United Kingdom</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-xs text-slate-700 mb-4 border border-slate-200">
                  <GraduationCap className="w-4 h-4 text-slate-600" aria-hidden="true" />
                  <span>MSc Cybersecurity, Teesside University</span>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Relevant Background</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Vulnerability-assessment and remediation support</li>
                    <li>Security-control implementation and review</li>
                    <li>User-access reviews and compliance documentation</li>
                    <li>Operational leadership, including leading a team of 25</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Responsibilities</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Product concept and customer discovery, evidence model, business-context scoring requirements, 
                  retest safety requirements, pilot development and commercial development.
                </p>
              </div>
            </div>

            {/* Proposed CTO Card */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  {/* Abstract typographic avatar */}
                  <div className="w-14 h-14 rounded-xl bg-slate-800 text-slate-200 font-bold text-lg flex items-center justify-center shrink-0 border border-slate-700 shadow-inner">
                    SRM
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Sandeep Reddy Marri</h4>
                    <p className="text-sm font-semibold text-slate-700">Proposed Co-founder & CTO</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Server className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span>Technical Architecture & Reliability</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-xs text-slate-700 mb-4 border border-slate-200">
                  <Layers className="w-4 h-4 text-slate-600" aria-hidden="true" />
                  <span>13+ Years DevOps & Cloud Infrastructure</span>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Relevant Experience</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>DevOps, cloud infrastructure and production operations</li>
                    <li>AWS, Kubernetes, Terraform and infrastructure-as-code</li>
                    <li>Automated CI/CD pipelines</li>
                    <li>Observability systems and security tooling</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Planned Responsibilities</div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
