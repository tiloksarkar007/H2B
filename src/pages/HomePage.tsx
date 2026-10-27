import React from 'react';
import { Link } from '../context/RouterContext';
import { HeroIllustration } from '../components/HeroIllustration';
import { FaqAccordion } from '../components/FaqAccordion';
import { 
  SERVICES, 
  WORKFLOW_STEPS, 
  VALUE_PROPOSITIONS, 
  TARGET_AUDIENCES, 
  FAQS, 
  COMPANY_INFO 
} from '../data/content';
import { 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Target, 
  Users, 
  ShieldCheck, 
  FileCheck, 
  BarChart3,
  CalendarCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F8] border border-[#087F8C]/20 text-[#087F8C] text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#087F8C]"></span>
                Targeted B2B Sales Outreach
              </div>

              <h1 
                id="hero-heading" 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10243A] leading-[1.12]"
              >
                Better conversations. <br className="hidden sm:inline" />
                <span className="text-[#087F8C]">Stronger sales opportunities.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl font-normal">
                Hub2Biz helps B2B companies identify relevant prospects, connect with decision-makers, qualify opportunities, and arrange sales meetings through disciplined, human-to-human phone outreach.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/contact?intent=consultation"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-[#087F8C] hover:bg-[#066570] shadow-md hover:shadow-lg transition-all active:scale-[0.99] text-center"
                >
                  <PhoneCall className="w-5 h-5 text-white/90" />
                  <span>Request a Consultation</span>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-[#10243A] bg-white border border-[#E5E6DC] hover:bg-[#F3F3ED] hover:border-slate-300 transition-all text-center"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#087F8C]" />
                </Link>
              </div>

              {/* Trust assurances */}
              <div className="pt-4 border-t border-[#E5E6DC] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#5B6B7C]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087F8C]" />
                  No robotic scripts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087F8C]" />
                  Agreed ICP boundaries
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087F8C]" />
                  Transparent call logs
                </span>
              </div>
            </div>

            {/* Right Column: Code-Native Pipeline Illustration */}
            <div className="lg:col-span-5 w-full">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="value-prop-heading">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#087F8C] mb-3">
            Why Targeted Outreach Works
          </h2>
          <h3 id="value-prop-heading" className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Conversations that protect your brand and fill your pipeline
          </h3>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            In an era of mass-automated email spam, genuine phone conversations stand out. We provide the rigor, research, and respect required to reach senior leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-6 border border-[#E5E6DC] shadow-sm hover:border-[#087F8C]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#EBF7F8] text-[#087F8C] flex items-center justify-center font-bold text-lg mb-5">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-[#10243A] mb-2">{prop.title}</h4>
                <p className="text-sm text-[#475569] leading-relaxed">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUR CORE SERVICES SUMMARY */}
      <section className="bg-white py-20 border-y border-[#E5E6DC]" aria-labelledby="services-summary-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#087F8C] mb-2">
                Core Capabilities
              </h2>
              <h3 id="services-summary-heading" className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
                End-to-end B2B prospecting solutions
              </h3>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#087F8C] hover:text-[#066570] group"
            >
              <span>View full service details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#FAFAF7] rounded-xl p-8 border border-[#E5E6DC] hover:border-[#087F8C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#087F8C] bg-[#EBF7F8] px-2.5 py-1 rounded">
                      Core Service
                    </span>
                    <span className="text-xs text-slate-500 font-medium">B2B Focused</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#10243A] mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wide text-[#10243A]">
                      Key Focus:
                    </div>
                    {service.whatItInvolves.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#5B6B7C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5E6DC] flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#087F8C] hover:text-[#066570]"
                  >
                    <span>Read full specification</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={`/contact?service=${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded bg-white border border-[#E5E6DC] text-[#10243A] hover:bg-[#10243A] hover:text-white transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (6-Step Structured Workflow) */}
      <section id="how-we-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="workflow-heading">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#087F8C] mb-3">
            Our Systematic Methodology
          </h2>
          <h3 id="workflow-heading" className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            How we prepare, execute, and report campaigns
          </h3>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Every client engagement follows a proven, transparent six-stage roadmap designed to eliminate ambiguity and build steady outreach momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKFLOW_STEPS.map((step) => (
            <div 
              key={step.number} 
              className="bg-white rounded-xl p-7 border border-[#E5E6DC] shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#087F8C] font-mono">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#5B6B7C] uppercase tracking-wider bg-[#F3F3ED] px-2 py-0.5 rounded">
                    Phase {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#10243A] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F3ED] bg-[#FAFAF7] -mx-7 -mb-7 p-4 rounded-b-xl">
                <span className="text-[11px] font-bold text-[#10243A] block uppercase tracking-wide">
                  Deliverable:
                </span>
                <span className="text-xs text-[#087F8C] font-medium">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHO HUB2BIZ HELPS */}
      <section className="bg-[#10243A] text-white py-20 rounded-3xl max-w-7xl mx-4 sm:mx-6 lg:mx-auto px-6 sm:px-12" aria-labelledby="who-we-help-heading">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F28C45] mb-2 block">
            Target Client Profile
          </span>
          <h2 id="who-we-help-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who Hub2Biz helps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We partner with B2B organizations whose products or services require discovery conversations with decision-makers who do not respond to generic mass marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TARGET_AUDIENCES.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#173250] rounded-xl p-7 border border-[#244161] hover:border-[#087F8C] transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#F28C45] shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#244161] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-300">
            Unsure if cold calling matches your sales model? We evaluate fit honestly during an introductory consultation.
          </p>
          <Link
            to="/contact?intent=consultation"
            className="shrink-0 px-6 py-3 rounded-lg text-sm font-bold bg-[#F28C45] hover:bg-[#E07831] text-white transition-colors"
          >
            Assess Your Market Fit
          </Link>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#087F8C] mb-2">
            Common Questions
          </h2>
          <h3 id="faq-heading" className="text-3xl font-extrabold text-[#10243A] tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-base text-[#475569]">
            Direct answers on our outreach methodology, lead qualification, and engagement process.
          </p>
        </div>

        <FaqAccordion items={FAQS} />
      </section>

      {/* 7. CLOSING CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Consultation callout">
        <div className="bg-gradient-to-br from-[#10243A] via-[#173250] to-[#10243A] rounded-2xl p-8 sm:p-14 text-white text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#244161] shadow-xl">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to start meaningful sales conversations?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us about your offer and ideal accounts. We will review your target audience and discuss how a structured B2B outreach campaign can support your pipeline.
            </p>
            <div className="text-xs text-slate-400 pt-1">
              Service deliverables are tailored to each client agreement. No generic sales quotas.
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/contact?intent=consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#087F8C] hover:bg-[#066570] transition-colors shadow-md text-center"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Request a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
