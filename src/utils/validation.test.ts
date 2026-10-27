import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateUrl, validatePhone, validateContactForm, ContactFormData } from './validation';

test('validateEmail checks standard business emails', () => {
  assert.equal(validateEmail('alex@company.com'), true);
  assert.equal(validateEmail('sarah.connor@sub.domain.co.uk'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('@domain.com'), false);
  assert.equal(validateEmail(''), false);
});

test('validateUrl validates optional websites', () => {
  assert.equal(validateUrl(''), true); // optional
  assert.equal(validateUrl('company.com'), true);
  assert.equal(validateUrl('https://www.hub2biz.com'), true);
  assert.equal(validateUrl('not-a-domain'), false);
});

test('validatePhone validates optional phone formats', () => {
  assert.equal(validatePhone(''), true); // optional
  assert.equal(validatePhone('+1 (555) 019-2834'), true);
  assert.equal(validatePhone('+44 20 7946 0991'), true);
  assert.equal(validatePhone('123'), false); // too short
  assert.equal(validatePhone('abc-def-ghij'), false);
});

test('validateContactForm blocks empty and invalid submissions', () => {
  const emptyData: ContactFormData = {
    fullName: '',
    workEmail: '',
    companyName: '',
    website: '',
    phone: '',
    serviceInterest: '',
    message: '',
    privacyAccepted: false
  };

  const result = validateContactForm(emptyData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName.length > 0);
  assert.ok(result.errors.workEmail.length > 0);
  assert.ok(result.errors.companyName.length > 0);
  assert.ok(result.errors.serviceInterest.length > 0);
  assert.ok(result.errors.message.length > 0);
  assert.ok(result.errors.privacyAccepted.length > 0);
});

test('validateContactForm succeeds on complete valid business data', () => {
  const validData: ContactFormData = {
    fullName: 'David Sterling',
    workEmail: 'david@sterlingtech.io',
    companyName: 'Sterling Tech Solutions',
    website: 'sterlingtech.io',
    phone: '+1 415 555 2671',
    serviceInterest: 'cold-calling',
    message: 'We are launching a new B2B compliance software and need target outreach to VP of Security in fintech.',
    privacyAccepted: true
  };

  const result = validateContactForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.values(result.errors).every(err => err === ''), true);
});
