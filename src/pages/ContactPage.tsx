import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { 
  ContactFormData, 
  validateContactForm, 
  VALID_SERVICE_OPTIONS 
} from '../utils/validation';
import { COMPANY_INFO } from '../data/content';
import { 
  CheckCircle, 
  AlertCircle, 
  Send, 
  Info, 
  RotateCcw, 
  ShieldCheck, 
  PhoneCall,
  Clock,
  Briefcase
} from 'lucide-react';

import { useEnquiryStore } from '../context/EnquiryStoreContext';

export const ContactPage: React.FC = () => {
  const { queryParams } = useRouter();
  const { formData, updateFormData, previewConfirmed, setPreviewConfirmed } = useEnquiryStore();

  // Determine intent from query param: 'consultation' | 'callback' | default
  const intent = queryParams.intent;

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync service preselection if query param provides a valid service option
  useEffect(() => {
    if (queryParams.service && VALID_SERVICE_OPTIONS.some(o => o.value === queryParams.service)) {
      // If service is not yet selected, preselect from query parameter
      if (!formData.serviceInterest) {
        updateFormData({ serviceInterest: queryParams.service });
      }
    }
  }, [queryParams.service, formData.serviceInterest, updateFormData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    updateFormData({
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error for field once user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({ ...prev, fieldName: true }));
    const result = validateContactForm(formData);
    if (result.errors[fieldName as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: result.errors[fieldName as keyof ContactFormData]
      }));
    }
  };

  /**
   * Modular submission handler.
   * In production, this function will call `fetch('/api/contact', { ... })`
   * or a server-side SMTP endpoint.
   * In this design preview, it validates rigorously and displays the honest confirmation state.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => { allTouched[key] = true; });
    setTouched(allTouched);

    const validation = validateContactForm(formData);
    setErrors(validation.errors);

    if (!validation.isValid) {
      // Focus the first invalid field for accessibility
      const firstInvalidField = Object.keys(validation.errors).find(k => validation.errors[k as keyof ContactFormData]);
      if (firstInvalidField) {
        const el = document.getElementById(firstInvalidField);
        if (el) el.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate standard asynchronous API call cycle
    setTimeout(() => {
      setIsSubmitting(false);
      setPreviewConfirmed(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const handleResetForm = () => {
    setPreviewConfirmed(false);
    // Keep form data intact so the user can review or edit (per requirements)
  };

  // Dynamic heading & context based on intent
  let pageHeading = 'Request a Consultation';
  let pageSubtext = 'Tell us about your target audience and commercial objectives. We will review your requirements and outline a tailored outreach strategy.';

  if (intent === 'callback') {
    pageHeading = 'Request a Phone Callback';
    pageSubtext = 'Provide your contact details and preferred discussion topics. A specialist will follow up directly by phone during standard business hours.';
  } else if (intent === 'consultation') {
    pageHeading = 'Schedule a B2B Outreach Consultation';
    pageSubtext = 'Explore how human-led cold calling and lead qualification can fit your sales pipeline. No pressure, no generic sales quotas.';
  }

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7F8] text-[#087F8C] text-xs font-bold tracking-wide uppercase">
          Commercial Enquiries
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10243A] tracking-tight">
          {pageHeading}
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          {pageSubtext}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Context & Expectations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-7 border border-[#E5E6DC] shadow-sm space-y-5">
            <h2 className="text-lg font-bold text-[#10243A] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#087F8C]" />
              What to Expect
            </h2>
            <ul className="space-y-4 text-sm text-[#475569]">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Consultative review:</strong> We analyze your market, target job titles, and current outreach friction.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Custom campaign scoping:</strong> Every client agreement is built around clear ICP criteria and agreed handoff rules.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>
                  <strong>No aggressive pitch:</strong> We determine mutual fit honestly before proposing any campaign activities.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#10243A] text-white rounded-2xl p-7 border border-[#173250] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F28C45] block">
              Engagement Policy
            </span>
            <h3 className="text-base font-bold text-white">
              Respectful B2B Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We practice what we preach. We do not spam your inbox or pass your contact details to external data brokers. Consultation enquiries are handled directly by our commercial team.
            </p>
          </div>
        </div>

        {/* Right Column: Form or Preview Confirmation */}
        <div className="lg:col-span-7">
          {/* MANDATORY PREVIEW NOTICE BANNER */}
          <div 
            className="mb-6 p-4 rounded-xl bg-[#EBF7F8] border border-[#087F8C]/30 text-[#066570] text-xs sm:text-sm flex items-start gap-3 shadow-xs"
            role="status"
            aria-live="polite"
          >
            <Info className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#10243A] block">
                Preview form — submissions are not emailed.
              </strong>
              <span>
                This is a fully interactive functional preview with active client-side validation. Personal data is not stored or transmitted across external networks.
              </span>
            </div>
          </div>

          {previewConfirmed ? (
            /* PREVIEW CONFIRMATION STATE (Per prompt specification) */
            <div 
              className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-[#087F8C] shadow-md space-y-6 animate-in fade-in zoom-in-95 duration-200"
              role="region"
              aria-labelledby="confirmation-heading"
            >
              <div className="w-14 h-14 rounded-full bg-[#EBF7F8] text-[#087F8C] flex items-center justify-center mx-auto sm:mx-0">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
                  Design Preview Validation Complete
                </div>
                <h2 id="confirmation-heading" className="text-2xl font-extrabold text-[#10243A]">
                  Your enquiry passed validation. Email delivery will be connected before launch.
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed pt-1">
                  In this live preview, all required fields and business formats were successfully validated against production rules. No mock data was saved to a database, and no simulated email was claimed as delivered.
                </p>
              </div>

              {/* Submitted Preview Summary */}
              <div className="bg-[#FAFAF7] rounded-xl p-5 border border-[#E5E6DC] text-xs text-[#475569] space-y-2 font-mono">
                <div className="font-bold text-[#10243A] text-xs font-sans uppercase tracking-wider pb-1 border-b border-[#E5E6DC]">
                  Validated Submission Parameters
                </div>
                <div><span className="text-[#10243A] font-semibold">Name:</span> {formData.fullName}</div>
                <div><span className="text-[#10243A] font-semibold">Work Email:</span> {formData.workEmail}</div>
                <div><span className="text-[#10243A] font-semibold">Company:</span> {formData.companyName}</div>
                {formData.website && <div><span className="text-[#10243A] font-semibold">Website:</span> {formData.website}</div>}
                {formData.phone && <div><span className="text-[#10243A] font-semibold">Phone:</span> {formData.phone}</div>}
                <div><span className="text-[#10243A] font-semibold">Service:</span> {VALID_SERVICE_OPTIONS.find(o => o.value === formData.serviceInterest)?.label}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#087F8C] hover:bg-[#066570] transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Return to Form / Edit Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* PROFESSIONAL ENQUIRY FORM */
            <form 
              onSubmit={handleSubmit} 
              noValidate 
              className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E6DC] shadow-sm space-y-6"
              aria-label="Consultation enquiry form"
            >
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                  Full Name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('fullName')}
                  placeholder="e.g. Eleanor Vance"
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                  Work Email <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  onBlur={() => handleBlur('workEmail')}
                  placeholder="name@company.com"
                  aria-required="true"
                  aria-invalid={!!errors.workEmail}
                  aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                    errors.workEmail ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                />
                {errors.workEmail && (
                  <p id="workEmail-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.workEmail}</span>
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                  Company Name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('companyName')}
                  placeholder="e.g. Apex Industrial Systems"
                  aria-required="true"
                  aria-invalid={!!errors.companyName}
                  aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                    errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                />
                {errors.companyName && (
                  <p id="companyName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.companyName}</span>
                  </p>
                )}
              </div>

              {/* Website (Optional) & Phone (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="website" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                    Website <span className="text-xs text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    onBlur={() => handleBlur('website')}
                    placeholder="company.com"
                    aria-invalid={!!errors.website}
                    aria-describedby={errors.website ? 'website-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                      errors.website ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                  />
                  {errors.website && (
                    <p id="website-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.website}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                    Phone Number <span className="text-xs text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    placeholder="+1 555 019 2834"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service Interest (Required Dropdown) */}
              <div>
                <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                  Service Interest <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  onBlur={() => handleBlur('serviceInterest')}
                  aria-required="true"
                  aria-invalid={!!errors.serviceInterest}
                  aria-describedby={errors.serviceInterest ? 'serviceInterest-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                    errors.serviceInterest ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                >
                  <option value="">-- Please select an outreach area --</option>
                  {VALID_SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && (
                  <p id="serviceInterest-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.serviceInterest}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#10243A] mb-1.5">
                  Enquiry Details & Target Audience <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Describe your current offer, target industry verticals, decision-maker titles, and campaign goals..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-[#FAFAF7] border ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E5E6DC]'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-all`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Privacy Acknowledgement */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    aria-invalid={!!errors.privacyAccepted}
                    aria-describedby={errors.privacyAccepted ? 'privacyAccepted-error' : undefined}
                    className="mt-1 w-4 h-4 rounded text-[#087F8C] focus:ring-[#087F8C] border-[#E5E6DC]"
                  />
                  <span className="text-xs text-[#5B6B7C] leading-normal">
                    I acknowledge that this enquiry will be handled according to the{' '}
                    <Link to="/privacy" className="text-[#087F8C] font-semibold underline hover:text-[#066570]">
                      Hub2Biz Draft Privacy Policy
                    </Link>{' '}
                    and will not be shared with third parties.
                  </span>
                </label>
                {errors.privacyAccepted && (
                  <p id="privacyAccepted-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.privacyAccepted}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white transition-all shadow-sm ${
                    isSubmitting 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-[#087F8C] hover:bg-[#066570] active:scale-[0.99]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Validating Enquiry Parameters...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 pt-1">
                Consultation requests use this form rather than an automated booking widget to protect review quality.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
