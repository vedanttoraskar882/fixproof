import React, { useState } from 'react';
import { 
  Building2, 
  Users2, 
  Check, 
  Percent, 
  ArrowDown
} from 'lucide-react';
import { PilotForm } from './PilotForm';

export const MarketAndPricing: React.FC = () => {
  const [selectedPlanForForm, setSelectedPlanForForm] = useState<string>('');

  const handleDiscussPlan = (planName: string) => {
    setSelectedPlanForForm(planName);
    const element = document.getElementById('request-pilot');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="market-pricing" 
      className="py-28 bg-[#070b14] text-slate-100 relative"
      aria-labelledby="market-pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-[11px] font-bold text-teal-300 uppercase tracking-widest mb-4">
            Audience & Commercial Model
          </div>
          <h2 
            id="market-pricing-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Designed for UK SMEs and the providers who protect them.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tailored to organisations that require defensible, inspectable evidence of security remediation 
            for external auditors, insurers and major enterprise clients.
          </p>
        </div>

        {/* Target Audience Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Audience 1: UK SMEs */}
          <div className="p-8 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] flex flex-col justify-between shadow-xl hover:border-teal-500/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                <Building2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400">Primary Customers</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                UK SMEs (10–250 Employees)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Organisations already conducting vulnerability scanning, either directly or through an IT partner, 
                facing concrete regulatory or contractual verification demands.
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">Key Buying Triggers:</div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                  <li>Preparing for Cyber Essentials Plus certification</li>
                  <li>Renewing commercial cyber insurance with stricter policy conditions</li>
                  <li>Answering vendor security questionnaires from tier-1 clients</li>
                  <li>Demonstrating verified remediation evidence to enterprise buyers</li>
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.08]">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Illustrative Customer Sectors:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-slate-300">Professional-services firms</span>
                <span className="px-3 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-slate-300">Software resellers</span>
                <span className="px-3 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-slate-300">Logistics businesses</span>
                <span className="px-3 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-slate-300">Care organisations</span>
              </div>
            </div>
          </div>

          {/* Audience 2: MSPs & MSSPs */}
          <div className="p-8 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] flex flex-col justify-between shadow-xl hover:border-teal-500/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                <Users2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400">Secondary Customers</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Managed Service Providers (MSPs) & MSSPs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Managed Service Providers (MSP) and Managed Security Service Providers (MSSP) managing security, 
                patching and IT compliance across multiple SME client tenants.
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">Strategic Value for Providers:</div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                  <li>Provides third-party verification that remediation tickets were successfully resolved</li>
                  <li>Eliminates manual screenshot collation for client quarterly business reviews</li>
                  <li>Detects configuration regressions across client estates before external audits fail</li>
                  <li>Enables differentiated assurance reporting under dedicated partner licensing</li>
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.08]">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-400">
                <strong className="text-slate-300 block mb-0.5">Multi-Client Console Notice:</strong>
                Partner reseller licensing is established commercially. The multi-client management console is an expansion milestone beyond the initial MVP.
              </div>
            </div>
          </div>

        </div>

        {/* Subscription Plans */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              Proposed subscription plans
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Proposed prices, excluding VAT. Pricing and scope will be validated through pilots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* STARTER */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.15] transition-all shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">STARTER</h4>
                  <span className="text-xs font-mono text-slate-300 bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/[0.08]">
                    Up to 50 assets
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-white tracking-tight">£249</span>
                    <span className="text-sm font-medium text-slate-400 ml-1.5">per month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">For small business environments</div>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Includes:</div>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Continuous ingestion</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Business-context scoring</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Retests within fair-use limits</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Evidence chain</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Regression watch</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Customer dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDiscussPlan('STARTER')}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-800 text-white hover:bg-slate-700 border border-white/[0.1] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <span>Discuss This Plan</span>
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* GROWTH */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e172a] to-slate-950 border border-teal-500/40 p-8 flex flex-col justify-between hover:border-teal-400 transition-all shadow-2xl shadow-teal-950/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                Scale
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">GROWTH</h4>
                  <span className="text-xs font-mono text-teal-300 bg-teal-500/15 px-2.5 py-1 rounded-md border border-teal-500/30">
                    51–150 assets
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-white tracking-tight">£449</span>
                    <span className="text-sm font-medium text-slate-400 ml-1.5">per month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">For growing infrastructure footprints</div>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Includes:</div>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2.5 font-semibold text-white">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Everything in Starter</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Higher retest allowance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Two scanner integrations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDiscussPlan('GROWTH')}
                  className="w-full py-3.5 px-4 rounded-xl bg-teal-400 text-slate-950 hover:bg-teal-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-teal-400/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  <span>Discuss This Plan</span>
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* ENTERPRISE */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.15] transition-all shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">ENTERPRISE</h4>
                  <span className="text-xs font-mono text-slate-300 bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/[0.08]">
                    151–400 assets
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-white tracking-tight">£799</span>
                    <span className="text-sm font-medium text-slate-400 ml-1.5">per month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">For multi-site or mature operations</div>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Includes:</div>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2.5 font-semibold text-white">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Everything in Growth</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Quarterly review</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDiscussPlan('ENTERPRISE')}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-800 text-white hover:bg-slate-700 border border-white/[0.1] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <span>Discuss This Plan</span>
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

          </div>

          <div className="text-center">
            <p className="text-xs text-slate-400">
              Plan inclusions describe the proposed commercial offering. Pilot availability is limited to the scope described above.
            </p>
          </div>
        </div>

        {/* Additional Commercial Offers */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400">Modular Engagements</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Additional Commercial Offers</h3>
            <p className="text-sm text-slate-300 mt-1 font-normal">
              Fixed-price diagnostics, standalone audit deliverables and partner licensing arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Remediation-Evidence Diagnostic */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Remediation-Evidence Diagnostic</h4>
                  <span className="text-xs font-mono text-slate-300 bg-white/[0.05] px-2 py-0.5 rounded">Standard</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-2">£2,250</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  A fixed-price entry engagement reviewing imported findings and independently retesting a sample of findings reported as closed.
                </p>
              </div>
              <div className="pt-3.5 border-t border-white/[0.08] text-[11px] text-slate-400">
                Fixed-price scoped entry review.
              </div>
            </div>

            {/* Pilot Diagnostic */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-teal-500/35 flex flex-col justify-between shadow-xl shadow-teal-950/20">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Pilot Diagnostic</h4>
                  <span className="text-xs font-mono text-teal-300 bg-teal-500/15 px-2 py-0.5 rounded border border-teal-500/30">Discounted Pilot</span>
                </div>
                <div className="text-3xl font-extrabold text-teal-300 mb-2">£750</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Subject to pilot selection and agreed scope. Participation involves anonymised findings, structured feedback and permission to describe results without naming the organisation unless it consents.
                </p>
              </div>
              <div className="pt-3.5 border-t border-white/[0.08] text-[11px] text-teal-400">
                Credited against year-1 subscription if subscribed within 60 days.
              </div>
            </div>

            {/* Evidence-Pack Add-On */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Evidence-Pack Add-On</h4>
                  <span className="text-xs font-mono text-slate-300 bg-white/[0.05] px-2 py-0.5 rounded">Add-on</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-2">
                  £990 <span className="text-xs font-normal text-slate-400">per pack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Separately priced evidence-pack output organising findings, timestamps and verification proofs for formal submission.
                </p>
              </div>
              <div className="pt-3.5 border-t border-white/[0.08] text-[11px] text-slate-400">
                Supports Cyber Essentials Plus, insurers and enterprise questionnaires.
              </div>
            </div>

            {/* Independent Verification Credits */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Independent Verification Credits</h4>
                  <span className="text-xs font-mono text-slate-300 bg-white/[0.05] px-2 py-0.5 rounded">On Demand</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-2">
                  £40 <span className="text-xs font-normal text-slate-400">per credit</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  On-demand verification buffer for ad-hoc rechecks beyond subscription allowances.
                </p>
              </div>
              <div className="pt-3.5 border-t border-white/[0.08] text-[11px] text-slate-400">
                Credit entitlement and scope to be confirmed before purchase.
              </div>
            </div>

            {/* MSP Reseller Licence */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.08] flex flex-col justify-between md:col-span-2 lg:col-span-2 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">MSP Reseller Licence</h4>
                  <span className="text-xs font-mono text-teal-300 bg-teal-500/15 px-2 py-0.5 rounded border border-teal-500/30">Partner Tier</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-3xl font-extrabold text-white">£3,000</span>
                  <span className="text-xs text-slate-400">per year</span>
                  <span className="text-xs font-bold text-teal-400">plus</span>
                  <span className="text-3xl font-extrabold text-white">£35</span>
                  <span className="text-xs text-slate-400">per managed client per month</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Enables Managed Service Providers to deliver independent verification across client portfolios. 
                  Fees are structured as an annual base platform licence plus a transparent monthly charge per active client tenant.
                </p>
              </div>
              <div className="pt-3.5 border-t border-white/[0.08] text-[11px] text-slate-400">
                Does not enforce arbitrary minimums or fictitious margins; scale matches client onboarding.
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Policy Card */}
        <div className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-white/[0.08] shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Percent className="w-4 h-4 text-teal-400" aria-hidden="true" />
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Pricing Policy Terms</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
              <strong className="text-white block mb-1">Annual Prepayment Discount:</strong>
              10% discount applies when paying annually in advance for subscription plans.
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
              <strong className="text-white block mb-1">Registered Charities:</strong>
              25% discount for eligible registered charities pursuing Cyber Essentials, subject to onboarding capacity.
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
              <strong className="text-white block mb-1">Diagnostic Subscription Credit:</strong>
              The discounted pilot diagnostic (£750) is credited against the first-year subscription when the customer subscribes within 60 days.
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-5 text-center">
            Note: Discounts cannot be assumed to be combined. All fees exclude VAT.
          </p>
        </div>

        {/* Working Pilot Request Form */}
        <PilotForm selectedPlan={selectedPlanForForm} />

      </div>
    </section>
  );
};
