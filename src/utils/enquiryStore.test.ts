import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  getInMemoryEnquiryData, 
  setInMemoryEnquiryData, 
  resetInMemoryEnquiryData,
  setInMemoryPreviewConfirmed,
  getInMemoryPreviewConfirmed,
  INITIAL_ENQUIRY_DATA 
} from '../context/EnquiryStoreContext';

test('in-memory store preserves form fields across simulated page navigation', () => {
  resetInMemoryEnquiryData();

  // Visitor starts filling out form
  setInMemoryEnquiryData({
    fullName: 'Elena Rostova',
    workEmail: 'elena@vanguardtech.com',
    companyName: 'Vanguard Technical Systems',
    serviceInterest: 'lead-qualification',
    message: 'We are seeking help qualifying enterprise software leads.'
  });

  // Verify fields are stored in memory
  let current = getInMemoryEnquiryData();
  assert.equal(current.fullName, 'Elena Rostova');
  assert.equal(current.workEmail, 'elena@vanguardtech.com');
  assert.equal(current.serviceInterest, 'lead-qualification');

  // Visitor navigates away to Privacy page and reads policy
  // ... simulated unmount/remount of ContactPage ...

  // Visitor returns to Contact page
  const retrieved = getInMemoryEnquiryData();
  assert.equal(retrieved.fullName, 'Elena Rostova');
  assert.equal(retrieved.workEmail, 'elena@vanguardtech.com');
  assert.equal(retrieved.companyName, 'Vanguard Technical Systems');
  assert.equal(retrieved.serviceInterest, 'lead-qualification');
  assert.equal(retrieved.message, 'We are seeking help qualifying enterprise software leads.');
});

test('in-memory store allows editing after preview confirmation', () => {
  resetInMemoryEnquiryData();

  setInMemoryEnquiryData({
    fullName: 'Robert Chen',
    workEmail: 'robert@chenconsulting.io',
    companyName: 'Chen Consulting',
    serviceInterest: 'cold-calling',
    message: 'Initial project message for B2B outreach.',
    privacyAccepted: true
  });

  setInMemoryPreviewConfirmed(true);
  assert.equal(getInMemoryPreviewConfirmed(), true);

  // User clicks "Return to Form / Edit Enquiry"
  setInMemoryPreviewConfirmed(false);
  setInMemoryEnquiryData({
    message: 'Updated project message with additional criteria.'
  });

  const updated = getInMemoryEnquiryData();
  assert.equal(updated.fullName, 'Robert Chen');
  assert.equal(updated.message, 'Updated project message with additional criteria.');
  assert.equal(getInMemoryPreviewConfirmed(), false);
});
