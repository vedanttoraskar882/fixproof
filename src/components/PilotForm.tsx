import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle, Info, Lock } from 'lucide-react';

interface PilotFormProps {
  selectedPlan?: string;
}

interface PilotRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  selectedPlan?: string;
  submittedAt: string;
}

export const PilotForm: React.FC<PilotFormProps> = ({ selectedPlan }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [planInterest, setPlanInterest] = useState(selectedPlan || '');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Synchronise selectedPlan prop when passed from pricing cards
  useEffect(() => {
    if (selectedPlan) {
      setPlanInterest(selectedPlan);
    }
  }, [selectedPlan]);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required.';
    } else if (!/^[0-9+\s().-]{7,20}$/.test(phoneNumber.trim())) {
      errs.phoneNumber = 'Please enter a valid UK or international telephone number.';
    }

    if (!emailAddress.trim()) {
      errs.emailAddress = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address.';
    }

    if (!organisationName.trim()) {
      errs.organisationName = 'Organisation Name is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (isSaving) return;

    if (!validate()) {
      return;
    }

    setIsSaving(true);

    try {
      // 1. Verify localStorage accessibility
      if (typeof window === 'undefined' || !window.localStorage) {
        throw new Error('Browser localStorage is not available on this device.');
      }

      const storageKey = 'fixproof_pilot_requests';
      const existingRaw = localStorage.getItem(storageKey);
      let records: PilotRecord[] = [];

      // 2. Parse existing data safely
      if (existingRaw !== null) {
        try {
          const parsed = JSON.parse(existingRaw);
          if (!Array.isArray(parsed)) {
            // Malformed data exists; do NOT overwrite!
            setStatusMessage({
              type: 'error',
              text: 'Unable to save request: existing browser storage contains non-array data. FixProof will not overwrite existing records.'
            });
            setIsSaving(false);
            return;
          }
          records = parsed;
        } catch (parseErr) {
          // JSON parse failed; do NOT overwrite!
          setStatusMessage({
            type: 'error',
            text: 'Unable to save request: existing stored data is corrupted. FixProof has protected existing data and aborted save.'
          });
          setIsSaving(false);
          return;
        }
      }

      // 3. Construct new record
      // Using standard crypto.randomUUID() with fallback
      const generateId = () => {
        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
          return crypto.randomUUID();
        }
        return 'id-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
      };

      const newRecord: PilotRecord = {
        id: generateId(),
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        emailAddress: emailAddress.trim(),
        organisationName: organisationName.trim(),
        submittedAt: new Date().toISOString()
      };

      if (planInterest.trim()) {
        newRecord.selectedPlan = planInterest.trim();
      }

      // 4. Append without overwriting
      records.push(newRecord);

      // 5. Save to localStorage
      localStorage.setItem(storageKey, JSON.stringify(records));

      // 6. Reset form only on success
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
      setPlanInterest('');
      setErrors({});

      // 7. Exact success message required
      setStatusMessage({
        type: 'success',
        text: 'Your pilot request has been saved on this browser. It has not been sent to FixProof.'
      });

    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Storage error: unable to save request to this browser. Local storage may be full or disabled.'
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div 
      id="request-pilot" 
      className="rounded-2xl bg-slate-900 border border-slate-800 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Left Column: Context & Disclaimers */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">
            Pilot Application
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
            Request a FixProof pilot
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Tell us about your organisation and interest in independent remediation verification.
          </p>

          <div className="space-y-4 text-xs text-slate-400">
            <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Controlled Scope:</strong> Pilots run under strict non-destructive rules of engagement, 
                signed authority and agreed testing windows.
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-start gap-3">
              <Lock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>No Credentials or Exploits:</strong> FixProof never asks for passwords, payment details 
                or raw vulnerability reports on this public landing page.
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-start gap-3">
              <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Diagnostic Credit:</strong> Participating pilot diagnostics (£750 subject to selection) 
                are credited against first-year subscription when you subscribe within 60 days.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800 shadow-inner">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-200 mb-1.5">
                Full Name <span className="text-teal-400">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                placeholder="e.g. Sarah Jenkins"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.fullName 
                    ? 'border-rose-500 focus:border-rose-400' 
                    : 'border-slate-700 focus:border-teal-400'
                }`}
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                required
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-200 mb-1.5">
                Email Address <span className="text-teal-400">*</span>
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                  if (errors.emailAddress) setErrors({ ...errors, emailAddress: '' });
                }}
                placeholder="s.jenkins@organisation.co.uk"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.emailAddress 
                    ? 'border-rose-500 focus:border-rose-400' 
                    : 'border-slate-700 focus:border-teal-400'
                }`}
                aria-invalid={errors.emailAddress ? 'true' : 'false'}
                aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                required
              />
              {errors.emailAddress && (
                <p id="emailAddress-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  {errors.emailAddress}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-200 mb-1.5">
                Phone Number <span className="text-teal-400">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                }}
                placeholder="+44 20 7946 0991"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.phoneNumber 
                    ? 'border-rose-500 focus:border-rose-400' 
                    : 'border-slate-700 focus:border-teal-400'
                }`}
                aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                required
              />
              {errors.phoneNumber && (
                <p id="phoneNumber-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Organisation Name */}
            <div>
              <label htmlFor="organisationName" className="block text-xs font-semibold text-slate-200 mb-1.5">
                Organisation Name <span className="text-teal-400">*</span>
              </label>
              <input
                id="organisationName"
                name="organisationName"
                type="text"
                autoComplete="organization"
                value={organisationName}
                onChange={(e) => {
                  setOrganisationName(e.target.value);
                  if (errors.organisationName) setErrors({ ...errors, organisationName: '' });
                }}
                placeholder="Apex Logistics Ltd / North Shield MSP"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.organisationName 
                    ? 'border-rose-500 focus:border-rose-400' 
                    : 'border-slate-700 focus:border-teal-400'
                }`}
                aria-invalid={errors.organisationName ? 'true' : 'false'}
                aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
                required
              />
              {errors.organisationName && (
                <p id="organisationName-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  {errors.organisationName}
                </p>
              )}
            </div>

            {/* Optional Plan Interest (Pre-selected from Pricing button) */}
            {planInterest && (
              <div className="p-2.5 rounded-lg bg-teal-950/40 border border-teal-500/30 flex items-center justify-between text-xs">
                <span className="text-teal-300">
                  Referenced plan: <strong>{planInterest}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setPlanInterest('')}
                  className="text-slate-400 hover:text-white underline text-[11px]"
                >
                  Clear reference
                </button>
              </div>
            )}

            {/* Browser Storage Notice (Required placement near submit button) */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 leading-normal">
                This form saves your details on this browser only. It does not send them to FixProof.
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSaving}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400 active:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                {isSaving ? 'Saving to browser...' : 'Save Pilot Request'}
              </button>
            </div>

            {/* Feedback Alerts */}
            {statusMessage && (
              <div
                className={`p-3.5 rounded-lg text-xs leading-relaxed flex items-start gap-2.5 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-200'
                    : 'bg-rose-950/80 border border-rose-500/40 text-rose-200'
                }`}
                role="status"
                aria-live="polite"
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};
