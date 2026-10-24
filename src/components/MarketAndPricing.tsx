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
      className="py-24 bg-[#080d1a] text-slate-100 tech-grid relative"
      aria-labelledby="market-pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">
            Audience & Commercial Model
          </div>
          <h2 
            id="market-pricing-heading" 
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Designed for UK SMEs and the providers who protect them.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored to organisations that require defensible, inspectable evidence of security remediation 
            for external auditors, insurers and major enterprise clients.
          </p>
        </div>

        {/* Target Audience Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Audience 1: UK SMEs */}
          <div className="p-8 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Building2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Primary Customers</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                UK SMEs (10–250 Employees)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Organisations already conducting vulnerability scanning, either directly or through an IT partner, 
                facing concrete regulatory or contractual verification demands.
              </p>

              <div className="mb-5">
                <div className="text-xs font-semibold text-slate-200 mb-2">Key Buying Triggers:</div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                  <li>Preparing for Cyber Essentials Plus certification</li>
                  <li>Renewing commercial cyber insurance with stricter policy conditions</li>
                  <li>Answering vendor security questionnaires from tier-1 clients</li>
                  <li>Demonstrating verified remediation evidence to enterprise buyers</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Illustrative Customer Sectors:</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300">Professional-services firms</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300">Software resellers</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300">Logistics businesses</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300">Care organisations</span>
              </div>
            </div>
          </div>

          {/* Audience 2: MSPs & MSSPs */}
          <div className="p-8 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Users2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Secondary Customers</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                Managed Service Providers (MSPs) & MSSPs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Managed Service Providers (MSP) and Managed Security Service Providers (MSSP) managing security, 
                patching and IT compliance across multiple SME client tenants.
              </p>

              <div className="mb-5">
                <div className="text-xs font-semibold text-slate-200 mb-2">Strategic Value for Providers:</div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                  <li>Provides third-party verification that remediation tickets were successfully resolved</li>
                  <li>Eliminates manual screenshot collation for client quarterly business reviews</li>
                  <li>Detects configuration regressions across client estates before external audits fail</li>
                  <li>Enables differentiated assurance reporting under dedicated partner licensing</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
                <strong className="text-slate-300 block mb-0.5">Multi-Client Console Notice:</strong>
                Partner reseller licensing is established commercially. The multi-client management console is an expansion milestone beyond the initial MVP.
              </div>
            </div>
          </div>

        </div>

        {/* Subscription Plans */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Proposed subscription plans
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Proposed prices, excluding VAT. Pricing and scope will be validated through pilots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            
            {/* STARTER */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">STARTER</h4>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    Up to 50 assets
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">£249</span>
                    <span className="text-sm font-medium text-slate-400 ml-1.5">per month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">For small business environments</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Includes:</div>
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
                  className="w-full py-3 px-4 rounded-lg bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 font-semibold text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <span>Discuss This Plan</span>
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* GROWTH */}
            <div className="rounded-xl bg-slate-900 border border-teal-500/40 p-8 flex flex-col justify-between hover:border-teal-400/60 transition-all shadow-lg shadow-teal-950/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">GROWTH</h4>
                  <span className="text-xs font-mono text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-500/30">
                    51–150 assets
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">£449</span>
                    <span className="text-sm font-medium text-slate-400 ml-1.5">per month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">For growing infrastructure footprints</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Includes:</div>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2.5 font-medium text-slate-100">
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
                  className="w-full py-3 px-4 rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400 font-semibold text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  <span>Discuss This Plan</span>
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* ENTERPRISE */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">ENTERPRISE</h4>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    151–400 assets
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">£799</span>
                    <span className="text-sm font-medium text-slate-400 ml-1.5">per month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">For multi-site or mature operations</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Includes:</div>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2.5 font-medium text-slate-100">
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
                  className="w-full py-3 px-4 rounded-lg bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 font-semibold text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
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

        {/* Additional Commercial Offers (Separated from subscriptions) */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Modular Engagements</span>
            <h3 className="text-2xl font-bold text-white mt-1">Additional Commercial Offers</h3>
            <p className="text-sm text-slate-300 mt-1">
              Fixed-price diagnostics, standalone audit deliverables and partner licensing arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Remediation-Evidence Diagnostic */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Remediation-Evidence Diagnostic</h4>
                  <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded">Standard</span>
                </div>
                <div className="text-2xl font-extrabold text-white mb-2">£2,250</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  A fixed-price entry engagement reviewing imported findings and independently retesting a sample of findings reported as closed.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Fixed-price scoped entry review.
              </div>
            </div>

            {/* Pilot Diagnostic */}
            <div className="p-6 rounded-xl bg-slate-900 border border-teal-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Pilot Diagnostic</h4>
                  <span className="text-xs font-mono text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-500/30">Discounted Pilot</span>
                </div>
                <div className="text-2xl font-extrabold text-teal-300 mb-2">£750</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Subject to pilot selection and agreed scope. Participation involves anonymised findings, structured feedback and permission to describe results without naming the organisation unless it consents.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-teal-400">
                Credited against year-1 subscription if subscribed within 60 days.
              </div>
            </div>

            {/* Evidence-Pack Add-On */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Evidence-Pack Add-On</h4>
                  <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded">Add-on</span>
                </div>
                <div className="text-2xl font-extrabold text-white mb-2">
                  £990 <span className="text-xs font-normal text-slate-400">per pack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Separately priced evidence-pack output organising findings, timestamps and verification proofs for formal submission.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Supports Cyber Essentials Plus, insurers and enterprise questionnaires.
              </div>
            </div>

            {/* Independent Verification Credits */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">Independent Verification Credits</h4>
                  <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded">On Demand</span>
                </div>
                <div className="text-2xl font-extrabold text-white mb-2">
                  £40 <span className="text-xs font-normal text-slate-400">per credit</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  On-demand verification buffer for ad-hoc rechecks beyond subscription allowances.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Credit entitlement and scope to be confirmed before purchase.
              </div>
            </div>

            {/* MSP Reseller Licence */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">MSP Reseller Licence</h4>
                  <span className="text-xs font-mono text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-500/30">Partner Tier</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-2xl font-extrabold text-white">£3,000</span>
                  <span className="text-xs text-slate-400">per year</span>
                  <span className="text-xs font-bold text-teal-400">plus</span>
                  <span className="text-2xl font-extrabold text-white">£35</span>
                  <span className="text-xs text-slate-400">per managed client per month</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Enables Managed Service Providers to deliver independent verification across client portfolios. 
                  Fees are structured as an annual base platform licence plus a transparent monthly charge per active client tenant.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Does not enforce arbitrary minimums or fictitious margins; scale matches client onboarding.
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Policy Card */}
        <div className="mb-20 p-6 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Percent className="w-4 h-4 text-teal-400" aria-hidden="true" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Pricing Policy Terms</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-3.5 rounded bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Annual Prepayment Discount:</strong>
              10% discount applies when paying annually in advance for subscription plans.
            </div>

            <div className="p-3.5 rounded bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Registered Charities:</strong>
              25% discount for eligible registered charities pursuing Cyber Essentials, subject to onboarding capacity.
            </div>

            <div className="p-3.5 rounded bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Diagnostic Subscription Credit:</strong>
              The discounted pilot diagnostic (£750) is credited against the first-year subscription when the customer subscribes within 60 days.
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-4 text-center">
            Note: Discounts cannot be assumed to be combined. All fees exclude VAT.
          </p>
        </div>

        {/* Working Pilot Request Form (#request-pilot) */}
        <PilotForm selectedPlan={selectedPlanForForm} />

      </div>
    </section>
  );
};
