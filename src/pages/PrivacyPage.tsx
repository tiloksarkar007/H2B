import React from 'react';
import { Link } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/content';
import { ShieldAlert, AlertTriangle, ArrowRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          Draft Privacy Notice — Pending Business Review
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10243A] tracking-tight">
          Privacy Policy (Draft)
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Draft policy formulated for the Hub2Biz preview build. This document describes current preview handling and planned commercial data practices.
        </p>
      </div>

      {/* DRAFT PRIVACY POLICY ARTICLE */}
      <article className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E6DC] shadow-sm space-y-8 text-[#334155] leading-relaxed text-sm sm:text-base">
        {/* Prominent Notice of Draft Status */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm space-y-1.5">
          <div className="font-bold flex items-center gap-2 text-amber-950 text-sm">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>DRAFT POLICY — Subject to Business and Legal Confirmation Prior to Launch</span>
          </div>
          <p className="text-amber-800 leading-relaxed">
            This document is a preview draft reflecting initial website requirements. It has not been reviewed or certified by legal counsel and does not claim official regulatory certifications. Hub2Biz leadership must review, adapt, and formally adopt these terms prior to public launch on {COMPANY_INFO.domain}.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10243A]">
            1. Preview Environment Data Handling
          </h2>
          <p>
            In this demonstration and development build of the Hub2Biz website:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
            <li>
              <strong>No Transmission or External Storage:</strong> Any information entered into the consultation form is processed strictly in local browser memory for interactive validation testing. Form entries are not sent via email, not written to disk, and not stored in a database.
            </li>
            <li>
              <strong>No Tracking or Marketing Cookies:</strong> This preview does not load third-party advertising cookies, session recorders, tracking pixels, or telemetry scripts.
            </li>
            <li>
              <strong>No Third-Party Data Sharing:</strong> Personal contact information is not shared, rented, or distributed to any third party.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10243A]">
            2. Intended Commercial Data Handling (Post-Launch)
          </h2>
          <p>
            Upon commercial launch on <strong>{COMPANY_INFO.domain}</strong>, information submitted through the website will be processed solely to facilitate direct B2B sales conversations and evaluate project suitability:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
            <li>
              <strong>Purpose of Collection:</strong> Responding to inbound commercial enquiries, verifying target account fit, and coordinating agreed sales consultations.
            </li>
            <li>
              <strong>Collected Information:</strong> Name, work email address, company name, optional telephone number, optional website address, and project notes provided by the submitter.
            </li>
            <li>
              <strong>Data Security:</strong> Production submissions will be transmitted over encrypted connections (HTTPS/TLS) directly to designated commercial representatives.
            </li>
            <li>
              <strong>Retention:</strong> Business correspondence records will be kept only for the duration of the commercial relationship or as required by applicable administrative standards.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10243A]">
            3. Outbound Outreach & Telephone Standards
          </h2>
          <p>
            Hub2Biz conducts outbound telephone conversations exclusively within a business-to-business (B2B) context:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
            <li>We respect applicable telephone preference registries and national telemarketing lists.</li>
            <li>We promptly honor opt-out or removal requests and maintain suppression records to prevent unwanted contact.</li>
            <li>Outreach representatives introduce themselves and state the commercial purpose of the conversation clearly and courteously.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#10243A]">
            4. Details Pending Final Confirmation Before Launch
          </h2>
          <p>
            The following corporate and operational items must be confirmed and inserted by the business before public launch:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#475569]">
            <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
              <strong className="text-[#10243A] block mb-0.5">Registered Business Entity:</strong> Full legal company name, jurisdiction, and official registration number.
            </div>
            <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
              <strong className="text-[#10243A] block mb-0.5">Physical Registered Office:</strong> Official postal and operational address.
            </div>
            <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
              <strong className="text-[#10243A] block mb-0.5">Privacy Contact Point:</strong> Designated email address for privacy and data removal enquiries.
            </div>
            <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
              <strong className="text-[#10243A] block mb-0.5">Governing Law:</strong> Specification of the governing jurisdiction and applicable local statutory standards.
            </div>
          </div>
        </section>

        <div className="pt-6 border-t border-[#E5E6DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Draft Version 1.1 (Pre-Launch Design Preview)
          </span>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087F8C] hover:text-[#066570]"
          >
            <span>Return to Consultation Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>
    </div>
  );
};
