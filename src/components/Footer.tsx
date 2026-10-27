import React from 'react';
import { Link } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/content';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10243A] text-white pt-16 pb-12 border-t border-[#173250]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#244161]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 group"
              aria-label="Hub2Biz homepage"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#087F8C] text-white font-bold text-base tracking-tight">
                H<span className="text-[#F28C45]">2</span>B
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Hub<span className="text-[#087F8C]">2</span>Biz
              </span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Targeted B2B cold calling, prospect research, and sales qualification that connect your team directly with verified decision-makers.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="inline-block px-2.5 py-1 rounded bg-[#173250] text-slate-300 border border-[#244161]">
                Production domain: {COMPANY_INFO.domain}
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#087F8C] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services#cold-calling" className="hover:text-white transition-colors">
                  B2B Cold Calling
                </Link>
              </li>
              <li>
                <Link to="/services#lead-research" className="hover:text-white transition-colors">
                  Lead Research & Prospecting
                </Link>
              </li>
              <li>
                <Link to="/services#lead-qualification" className="hover:text-white transition-colors">
                  Lead Qualification
                </Link>
              </li>
              <li>
                <Link to="/services#appointment-setting" className="hover:text-white transition-colors">
                  Appointment Setting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#087F8C] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Hub2Biz
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Privacy Policy (Draft)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Consultation CTA Block */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F28C45] mb-4">
              Get Started
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Have a target account list or looking to establish outreach in a new sector?
            </p>
            <Link
              to="/contact?intent=consultation"
              className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#087F8C] hover:bg-[#066570] transition-colors"
            >
              <span>Consultation Form</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Hub2Biz. All rights reserved. Professional B2B Outreach.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <span>Intended domain: {COMPANY_INFO.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
