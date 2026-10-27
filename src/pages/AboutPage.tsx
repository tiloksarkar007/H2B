import React from 'react';
import { Link } from '../context/RouterContext';
import { VALUES, COMPANY_INFO } from '../data/content';
import { 
  Users2, 
  Target, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Layers, 
  Clock 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Header Section */}
      <section className="pt-12 sm:pt-20 border-b border-[#E5E6DC] pb-16 bg-white" aria-labelledby="about-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7F8] text-[#087F8C] text-xs font-bold tracking-wide uppercase">
              About Hub2Biz
            </div>
            <h1 id="about-heading" className="text-3xl sm:text-5xl font-extrabold text-[#10243A] tracking-tight">
              Human-led B2B conversations, engineered with precision.
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
              We help businesses identify relevant prospects, connect with real decision-makers, qualify commercial interest, and arrange sales meetings through disciplined outreach.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What Hub2Biz Does */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="mission-heading">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
              What We Do
            </span>
            <h2 id="mission-heading" className="text-2xl sm:text-3xl font-extrabold text-[#10243A] tracking-tight">
              Bridging the gap between prospect research and closed deals
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {COMPANY_INFO.aboutMission}
            </p>
            <p className="text-base text-[#475569] leading-relaxed">
              We specialize in the top of the sales funnel—the time-intensive stage of researching accounts, uncovering accurate contact details, navigating switchboards, and having initial discovery dialogues. This leaves your internal sales leaders free to focus entirely on demonstrations, proposals, and closing revenue.
            </p>
          </div>

          <div className="md:col-span-6 bg-[#FAFAF7] rounded-2xl p-8 border border-[#E5E6DC] space-y-5 shadow-sm">
            <h3 className="text-lg font-bold text-[#10243A] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#087F8C]" />
              Core Operating Principles
            </h3>
            <ul className="space-y-4 text-sm text-[#475569]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span><strong>No unresearched list-blasting:</strong> Every outreach attempt is preceded by account-level verification.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span><strong>No synthetic conversation bots:</strong> Real, professional professionals handle your calls to ensure high brand dignity.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span><strong>Disciplined qualification:</strong> We only book meetings when prospects fulfill your agreed criteria matrix.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Our Approach to Targeted, Relevant Outreach */}
      <section className="bg-[#10243A] text-white py-20" aria-labelledby="approach-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F28C45]">
              Outreach Methodology
            </span>
            <h2 id="approach-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Our approach to targeted, relevant outreach
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Effective cold calling is never about reading a rigid script to an arbitrary phone directory. It is an informed business dialogue focused on timing, pain points, and commercial fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#173250] rounded-xl p-6 border border-[#244161]">
              <div className="w-10 h-10 rounded-lg bg-[#10243A] text-[#087F8C] flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contextual Intelligence</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Before dialing, our callers review company size, market developments, and relevant operational challenges to frame the conversation around the prospect's world.
              </p>
            </div>

            <div className="bg-[#173250] rounded-xl p-6 border border-[#244161]">
              <div className="w-10 h-10 rounded-lg bg-[#10243A] text-[#F28C45] flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Peer-to-Peer Dialogue</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We speak to directors and executives as business peers. We listen actively, acknowledge current vendor situations, and respect their time.
              </p>
            </div>

            <div className="bg-[#173250] rounded-xl p-6 border border-[#244161]">
              <div className="w-10 h-10 rounded-lg bg-[#10243A] text-[#087F8C] flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Objective Verification</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than rushing to force a meeting, we probe for real willingness to evaluate, upcoming procurement timelines, and decision structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Hub2Biz Works Alongside Your Sales Team */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="collaboration-heading">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E5E6DC] shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
              Seamless Integration
            </span>
            <h2 id="collaboration-heading" className="text-2xl sm:text-3xl font-extrabold text-[#10243A] tracking-tight mt-1">
              How we work alongside your sales team
            </h2>
            <p className="text-base text-[#475569] mt-3 leading-relaxed">
              Hub2Biz functions as an external business development unit aligned directly with your internal workflows, calendars, and reporting cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#10243A] flex items-center gap-2">
                <Users2 className="w-5 h-5 text-[#087F8C]" />
                Direct Handoff to Your Closers
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                When an opportunity is qualified, we place the introductory meeting directly into your designated account executive’s calendar. Each calendar entry includes full background notes, pain points identified, and confirmed attendees.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#10243A] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#087F8C]" />
                Continuous Feedback Loops
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                During regular review checkpoints, we examine feedback from completed sales meetings. If targeting parameters or qualification criteria need refinement, we adjust campaign targeting dynamically.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#10243A] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#087F8C]" />
                Clean Data & CRM Delivery
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Every call disposition, updated direct dial, and intelligence note is captured systematically. We deliver standardized export data formatted to import cleanly into your CRM without mess.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#10243A] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#087F8C]" />
                Predictable Outreach Cadence
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Outreach velocity is maintained consistently week in and week out, shielding your sales pipeline from the peaks and troughs common when closers attempt to juggle calling and closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Core Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
            Guiding Standards
          </span>
          <h2 id="values-heading" className="text-3xl font-extrabold text-[#10243A] tracking-tight mt-1">
            Our Core Values
          </h2>
          <p className="text-base text-[#475569] mt-3">
            The fundamental commitments that govern how we represent our clients and engage prospects every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VALUES.map((val, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-[#E5E6DC] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#10243A] mb-3 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#087F8C]" />
                  <span>{val.title}</span>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {val.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F3ED] text-xs text-[#5B6B7C]">
                <strong className="text-[#10243A] block mb-1">In Practice:</strong>
                {val.application}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Closing Consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="About page CTA">
        <div className="bg-[#10243A] rounded-2xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">
              Discuss your outreach objectives
            </h2>
            <p className="text-sm text-slate-300">
              Schedule an introductory conversation to evaluate targeting feasibility and scope.
            </p>
          </div>

          <Link
            to="/contact?intent=consultation"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#087F8C] hover:bg-[#066570] transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request a Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
