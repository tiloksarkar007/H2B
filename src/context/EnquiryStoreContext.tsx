import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContactFormData } from '../utils/validation';

export const INITIAL_ENQUIRY_DATA: ContactFormData = {
  fullName: '',
  workEmail: '',
  companyName: '',
  website: '',
  phone: '',
  serviceInterest: '',
  message: '',
  privacyAccepted: false,
};

// In-memory singleton state holder (not stored in localStorage, cookies, or DB)
let memoryStore: ContactFormData = { ...INITIAL_ENQUIRY_DATA };
let isPreviewConfirmedMemory = false;

export const getInMemoryEnquiryData = (): ContactFormData => ({ ...memoryStore });
export const setInMemoryEnquiryData = (data: Partial<ContactFormData>): void => {
  memoryStore = { ...memoryStore, ...data };
};
export const resetInMemoryEnquiryData = (): void => {
  memoryStore = { ...INITIAL_ENQUIRY_DATA };
  isPreviewConfirmedMemory = false;
};
export const getInMemoryPreviewConfirmed = (): boolean => isPreviewConfirmedMemory;
export const setInMemoryPreviewConfirmed = (confirmed: boolean): void => {
  isPreviewConfirmedMemory = confirmed;
};

interface EnquiryContextType {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  resetFormData: () => void;
  previewConfirmed: boolean;
  setPreviewConfirmed: (confirmed: boolean) => void;
}

const EnquiryContext = createContext<EnquiryContextType | null>(null);

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormDataState] = useState<ContactFormData>(() => getInMemoryEnquiryData());
  const [previewConfirmed, setPreviewConfirmedState] = useState<boolean>(() => getInMemoryPreviewConfirmed());

  const updateFormData = (patch: Partial<ContactFormData>) => {
    setInMemoryEnquiryData(patch);
    setFormDataState(prev => ({ ...prev, ...patch }));
  };

  const resetFormData = () => {
    resetInMemoryEnquiryData();
    setFormDataState({ ...INITIAL_ENQUIRY_DATA });
    setPreviewConfirmedState(false);
  };

  const setPreviewConfirmed = (confirmed: boolean) => {
    setInMemoryPreviewConfirmed(confirmed);
    setPreviewConfirmedState(confirmed);
  };

  return (
    <EnquiryContext.Provider
      value={{
        formData,
        updateFormData,
        resetFormData,
        previewConfirmed,
        setPreviewConfirmed,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiryStore = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiryStore must be used within an EnquiryProvider');
  }
  return context;
};
