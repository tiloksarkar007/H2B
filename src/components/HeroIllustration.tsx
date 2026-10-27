import React from 'react';
import { Search, Phone, CheckCircle, Calendar, ArrowRight, Shield, Database, Users } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  return (
    <div 
      className="relative w-full max-w-xl mx-auto rounded-2xl bg-[#10243A] p-6 sm:p-8 text-white shadow-xl border border-[#173250] overflow-hidden"
      aria-label="Diagram showing Hub2Biz workflow: Prospect Research connects to B2B Conversations, followed by Structured Qualification and Confirmed Sales Meetings."
      role="region"
    >
      {/* Background architectural grid pattern (subtle, non-distracting) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative workflow header */}
      <div className="relative flex items-center justify-between pb-6 border-b border-[#244161]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#087F8C]"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Targeted Outreach Pipeline
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-[#173250] px-2.5 py-1 rounded">
          Human-Led Process
        </span>
      </div>

      {/* The 4 Connected Stages */}
      <div className="relative pt-6 space-y-4">
        {/* Stage 1: Prospect Research */}
        <div className="group rounded-xl bg-[#173250]/70 p-4 border border-[#244161] hover:border-[#087F8C] transition-all">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#10243A] border border-[#244161] flex items-center justify-center text-[#087F8C] shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#087F8C] uppercase tracking-wide">Stage 01</span>
                <span className="text-[11px] text-slate-400">ICP Verification</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">Prospect Research & Mapping</h4>
              <p className="text-xs text-slate-300 mt-1">
                Pinpointing verified economic decision-makers and key stakeholders within your target accounts.
              </p>
            </div>
          </div>
        </div>

        {/* Connector 1 */}
        <div className="flex justify-center -my-2" aria-hidden="true">
          <div className="w-0.5 h-5 bg-[#244161] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#087F8C]"></div>
          </div>
        </div>

        {/* Stage 2: Direct Conversations */}
        <div className="group rounded-xl bg-[#173250]/70 p-4 border border-[#244161] hover:border-[#087F8C] transition-all">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#10243A] border border-[#244161] flex items-center justify-center text-[#F28C45] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F28C45] uppercase tracking-wide">Stage 02</span>
                <span className="text-[11px] text-slate-400">Phone-First</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">Consultative Conversations</h4>
              <p className="text-xs text-slate-300 mt-1">
                Respectful peer-to-peer phone dialogue addressing real operational pain points without robotic scripts.
              </p>
            </div>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="flex justify-center -my-2" aria-hidden="true">
          <div className="w-0.5 h-5 bg-[#244161] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#F28C45]"></div>
          </div>
        </div>

        {/* Stage 3: Lead Qualification */}
        <div className="group rounded-xl bg-[#173250]/70 p-4 border border-[#244161] hover:border-[#087F8C] transition-all">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#10243A] border border-[#244161] flex items-center justify-center text-[#087F8C] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#087F8C] uppercase tracking-wide">Stage 03</span>
                <span className="text-[11px] text-slate-400">Matrix Check</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">Opportunity Qualification</h4>
              <p className="text-xs text-slate-300 mt-1">
                Evaluating confirmed timeline, current systems, and buying authority against agreed criteria.
              </p>
            </div>
          </div>
        </div>

        {/* Connector 3 */}
        <div className="flex justify-center -my-2" aria-hidden="true">
          <div className="w-0.5 h-5 bg-[#244161] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#087F8C]"></div>
          </div>
        </div>

        {/* Stage 4: Appointment Setting */}
        <div className="group rounded-xl bg-gradient-to-r from-[#173250] to-[#1a385b] p-4 border border-[#087F8C] transition-all">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#087F8C] text-white flex items-center justify-center shrink-0 shadow">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Final Stage</span>
                <span className="text-[11px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">Sales-Ready</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">Confirmed Sales Meetings</h4>
              <p className="text-xs text-slate-200 mt-1">
                Introductions scheduled onto your calendar with complete conversation briefing notes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Discipline Footer */}
      <div className="relative mt-6 pt-4 border-t border-[#244161] flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-[#087F8C]" />
          Agreed qualification criteria
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-[#F28C45]" />
          Transparent disposition logs
        </span>
      </div>
    </div>
  );
};
