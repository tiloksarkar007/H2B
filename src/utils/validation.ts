/**
 * Form validation utilities for B2B Contact / Consultation Enquiries
 */

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  website: string;
  phone: string;
  serviceInterest: string;
  message: string;
  privacyAccepted: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<keyof ContactFormData, string>;
}

export const VALID_SERVICE_OPTIONS = [
  { value: 'cold-calling', label: 'B2B Cold Calling' },
  { value: 'lead-research', label: 'Lead Research & Prospect Identification' },
  { value: 'lead-qualification', label: 'Lead Qualification' },
  { value: 'appointment-setting', label: 'Appointment Setting' },
  { value: 'full-funnel', label: 'Multi-Service / Full Outreach Campaign' },
  { value: 'general', label: 'General Commercial Enquiry' }
];

export function validateEmail(email: string): boolean {
  if (!email) return false;
  // RFC 5322 compliant regex simplified for standard modern business email
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return regex.test(email.trim());
}

export function validateUrl(url: string): boolean {
  if (!url || !url.trim()) return true; // Optional field
  const trimmed = url.trim();
  try {
    const formatted = trimmed.startsWith('http://') || trimmed.startsWith('https://') 
      ? trimmed 
      : `https://${trimmed}`;
    const parsed = new URL(formatted);
    return parsed.hostname.includes('.');
  } catch {
    return false;
  }
}

export function validatePhone(phone: string): boolean {
  if (!phone || !phone.trim()) return true; // Optional field
  const trimmed = phone.trim();
  // Accepts international format, dashes, spaces, brackets, min 7 digits
  const digitCount = (trimmed.match(/\d/g) || []).length;
  const validChars = /^[0-9+\s\-().]+$/.test(trimmed);
  return validChars && digitCount >= 7 && digitCount <= 18;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<keyof ContactFormData, string> = {
    fullName: '',
    workEmail: '',
    companyName: '',
    website: '',
    phone: '',
    serviceInterest: '',
    message: '',
    privacyAccepted: ''
  };

  // 1. Full Name: required, min 2 chars
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  // 2. Work Email: required, valid format
  if (!data.workEmail || !data.workEmail.trim()) {
    errors.workEmail = 'Please provide your work email address.';
  } else if (!validateEmail(data.workEmail)) {
    errors.workEmail = 'Please enter a valid email address (e.g., name@company.com).';
  }

  // 3. Company Name: required, min 2 chars
  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your company or organization name.';
  }

  // 4. Website: optional, must be valid if provided
  if (data.website && !validateUrl(data.website)) {
    errors.website = 'Please enter a valid website URL or domain (e.g., company.com).';
  }

  // 5. Phone: optional, must be valid phone format if provided
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number with at least 7 digits.';
  }

  // 6. Service Interest: required, must match known list
  const validServiceValues = VALID_SERVICE_OPTIONS.map(opt => opt.value);
  if (!data.serviceInterest || !validServiceValues.includes(data.serviceInterest)) {
    errors.serviceInterest = 'Please select the service or area of interest.';
  }

  // 7. Message: required, min 10 chars
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide details about your target market, offer, or enquiry (minimum 10 characters).';
  }

  // 8. Privacy: required
  if (!data.privacyAccepted) {
    errors.privacyAccepted = 'You must acknowledge the privacy notice to proceed.';
  }

  const isValid = Object.values(errors).every(err => err === '');

  return { isValid, errors };
}
