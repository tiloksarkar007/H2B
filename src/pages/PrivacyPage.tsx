import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/content';
import { 
  ShieldAlert, 
  FileCheck, 
  Server, 
  Lock, 
  CheckCircle2, 
  AlertTriangle,
  FileCode,
  Globe
} from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'deployment'>('privacy');

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          Preview Draft Document
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10243A] tracking-tight">
          Privacy Policy & Production Notes
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Draft policy formulated for the Hub2Biz preview build, along with technical deployment instructions for hosting on OpenLiteSpeed / CyberPanel VPS.
        </p>

        {/* View Toggle */}
        <div className="inline-flex p-1 bg-[#F3F3ED] rounded-xl border border-[#E5E6DC] mt-4">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'privacy'
                ? 'bg-white text-[#10243A] shadow-xs'
                : 'text-[#5B6B7C] hover:text-[#10243A]'
            }`}
          >
            Draft Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('deployment')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'deployment'
                ? 'bg-white text-[#10243A] shadow-xs'
                : 'text-[#5B6B7C] hover:text-[#10243A]'
            }`}
          >
            CyberPanel / OpenLiteSpeed Deployment Guide
          </button>
        </div>
      </div>

      {activeTab === 'privacy' ? (
        /* DRAFT PRIVACY POLICY SECTION */
        <article className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E6DC] shadow-sm space-y-8 text-[#334155] leading-relaxed text-sm sm:text-base">
          {/* NOTICE OF DRAFT STATUS */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-950">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>DRAFT STATUS — Legal Review Required Prior to Launch</span>
            </div>
            <p>
              This document is a placeholder draft reflecting current preview behavior. It has not been reviewed by legal counsel and does not constitute a certified GDPR, CCPA, or UK DPA compliance declaration. The production entity must customize and approve these clauses before public launch on {COMPANY_INFO.domain}.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#10243A]">
              1. Preview Environment Data Handling
            </h2>
            <p>
              In this development and preview version of the Hub2Biz website:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
              <li>
                <strong>No Transmission or Storage:</strong> Information entered into the contact or consultation forms is processed entirely within your client-side browser session for form validation testing. Submissions are neither persisted in a database nor transmitted via email.
              </li>
              <li>
                <strong>No Tracking or Nonessential Cookies:</strong> This preview does not utilize third-party marketing pixels, session replay software, advertising cookies, or behavioral trackers.
              </li>
              <li>
                <strong>No Third-Party Sharing:</strong> No prospect or visitor data is syndicated, sold, or shared with external data brokers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#10243A]">
              2. Intended Production Handling (Post-Launch)
            </h2>
            <p>
              Once deployed to production at <strong>{COMPANY_INFO.domain}</strong>, data submitted via the consultation form will be processed strictly for legitimate commercial communication:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
              <li>
                <strong>Purpose of Processing:</strong> Evaluating incoming business development requests, verifying ideal customer fit, and arranging scheduled introductory consultations.
              </li>
              <li>
                <strong>Categories of Data Collected:</strong> Contact name, business email address, company name, optional telephone number, optional website domain, and stated project objectives.
              </li>
              <li>
                <strong>Transmission Security:</strong> All production form transmissions will be secured via TLS/SSL encryption and routed via an authenticated SMTP mail gateway to Hub2Biz authorized commercial staff.
              </li>
              <li>
                <strong>Retention & Erasure:</strong> Commercial enquiry records will be retained only as long as necessary to conduct business discussions or fulfill contractual recordkeeping. Prospective clients may request removal or record review at any time upon formal launch.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#10243A]">
              3. Telemarketing Compliance & Outreach Standards
            </h2>
            <p>
              Hub2Biz conducts outbound telephone conversations exclusively in a B2B context. Outbound operational standards include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
              <li>Screening against applicable jurisdiction telemarketing opt-out registries.</li>
              <li>Immediate honoring of any prospect's request to be removed from future call lists (internal suppression list).</li>
              <li>Identification of our calling identity and client representation at the beginning of conversations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#10243A]">
              4. Production Items Requiring Legal Confirmation
            </h2>
            <p>
              The following operational items are deliberately documented as pending confirmation prior to public launch:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#475569]">
              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
                <strong>Registered Entity Name & Number:</strong> Legal entity details to be finalized upon domain registration.
              </div>
              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
                <strong>Physical Service Address:</strong> Official registered office location to be added to footer and privacy notice.
              </div>
              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
                <strong>Data Protection Officer (DPO):</strong> Designated contact address for privacy inquiries.
              </div>
              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#E5E6DC]">
                <strong>Jurisdiction & Governing Law:</strong> Specific governing jurisdiction clause to be defined.
              </div>
            </div>
          </section>

          <div className="pt-6 border-t border-[#E5E6DC] flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Draft Version 1.0 (Pre-Launch Preview)
            </span>
            <Link to="/contact" className="text-xs font-bold text-[#087F8C] hover:text-[#066570]">
              Return to Consultation Form &rarr;
            </Link>
          </div>
        </article>
      ) : (
        /* OPENLITESPEED / CYBERPANEL VPS DEPLOYMENT GUIDE */
        <article className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E6DC] shadow-sm space-y-8 text-[#334155] leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-[#EBF7F8] border border-[#087F8C]/30 text-[#066570] text-xs sm:text-sm flex items-start gap-3">
            <Server className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#10243A] block">
                CyberPanel & OpenLiteSpeed Architecture Notes
              </strong>
              <span>
                These notes explain how to build and host this Single Page Application (SPA) on a CyberPanel VPS running OpenLiteSpeed web server so that direct route navigation (e.g., <code>/services</code>, <code>/contact</code>, <code>/about</code>) works smoothly without 404 errors.
              </span>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#10243A] flex items-center gap-2">
              <FileCode className="w-5 h-5 text-[#087F8C]" />
              1. OpenLiteSpeed Rewrite Rule (.htaccess)
            </h2>
            <p>
              Because this website uses real HTML5 client-side routing, direct navigation or page refreshes on nested paths like <code>/about</code> or <code>/services</code> must fall back to <code>/index.html</code>. In CyberPanel / OpenLiteSpeed, add this rewrite rule to the website's <code>.htaccess</code> file via <em>CyberPanel &rarr; Websites &rarr; Manage &rarr; Rewrite Rules</em>:
            </p>

            <div className="p-4 rounded-xl bg-[#10243A] text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-[#173250]">
              <pre>{`# OpenLiteSpeed / CyberPanel SPA Fallback Rule for Hub2Biz
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]`}</pre>
            </div>
            <p className="text-xs text-[#5B6B7C]">
              Note: After saving Rewrite Rules in CyberPanel, restart OpenLiteSpeed (or run <code>systemctl restart lsws</code>) to ensure the changes take effect immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#10243A] flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#087F8C]" />
              2. Production Build & Deployment Steps
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-[#475569]">
              <li>
                <strong>Build the production bundle:</strong> Run <code>npm run build</code>. This generates highly optimized HTML, CSS, and JS in the <code>dist/</code> directory.
              </li>
              <li>
                <strong>Upload to CyberPanel:</strong> Upload the contents of <code>dist/</code> into your website document root: <code>/home/hub2biz.com/public_html/</code>.
              </li>
              <li>
                <strong>Set File Permissions:</strong> Ensure files are owned by the virtual host user (e.g. <code>chown -R hub2biz:hub2biz /home/hub2biz.com/public_html/</code>) with 644 for files and 755 for directories.
              </li>
              <li>
                <strong>Issue Free Let's Encrypt SSL:</strong> In CyberPanel, navigate to <em>SSL &rarr; Manage SSL</em>, select <code>hub2biz.com</code>, and click <em>Issue SSL</em>. Enable HTTP to HTTPS redirection in rewrite rules.
              </li>
              <li>
                <strong>Connect SMTP Endpoint:</strong> Create an Express or PHP micro-endpoint (e.g. <code>/api/contact.php</code> or Node service) that receives the validated contact form payload and sends it via authenticated SMTP (e.g. Amazon SES, Postmark, or CyberPanel local Postfix).
              </li>
            </ol>
          </section>

          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-[#10243A]">
              3. Portability & Self-Containment
            </h2>
            <p className="text-sm text-[#475569]">
              The application contains zero proprietary cloud locks, no vendor telemetry, and no mandatory external databases. It compiles into standard, lightning-fast static assets that can be hosted on any LiteSpeed, Nginx, Apache, or Cloudflare Pages infrastructure.
            </p>
          </section>
        </article>
      )}
    </div>
  );
};
