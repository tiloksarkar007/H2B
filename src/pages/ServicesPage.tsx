import React from 'react';
import { Link } from '../context/RouterContext';
import { SERVICES } from '../data/content';
import { 
  Phone, 
  Search, 
  CheckSquare, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  HelpCircle,
  Briefcase
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'cold-calling':
        return <Phone className="w-6 h-6 text-[#087F8C]" />;
      case 'lead-research':
        return <Search className="w-6 h-6 text-[#087F8C]" />;
      case 'lead-qualification':
        return <CheckSquare className="w-6 h-6 text-[#087F8C]" />;
      case 'appointment-setting':
        return <Calendar className="w-6 h-6 text-[#087F8C]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#087F8C]" />;
    }
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header & Navigation Jump Bar */}
      <section className="pt-12 sm:pt-20 border-b border-[#E5E6DC] pb-12 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7F8] text-[#087F8C] text-xs font-bold tracking-wide uppercase">
              Our Capabilities
            </div>
            <h1 id="services-heading" className="text-3xl sm:text-5xl font-extrabold text-[#10243A] tracking-tight">
              B2B Sales Outreach Services
            </h1>
            <p className="text-base sm:text-xl text-[#475569] leading-relaxed">
              Targeted outreach solutions structured around your sales model. Deliverables and engagement scope are customized for each client partnership.
            </p>
          </div>

          {/* In-page jump navigation for the 4 service sections */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-[#FAFAF7] hover:bg-[#EBF7F8] text-[#10243A] hover:text-[#087F8C] border border-[#E5E6DC] transition-colors flex items-center gap-2"
              >
                <span>{s.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Four Substantive Service Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 bg-white rounded-2xl border border-[#E5E6DC] shadow-sm p-6 sm:p-10 lg:p-12 relative overflow-hidden"
            aria-labelledby={`service-title-${service.id}`}
          >
            {/* Top Indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E6DC] gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#EBF7F8] flex items-center justify-center shrink-0">
                  {getServiceIcon(service.id)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
                    Service 0{index + 1}
                  </span>
                  <h2 id={`service-title-${service.id}`} className="text-2xl sm:text-3xl font-extrabold text-[#10243A] tracking-tight">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Working Discuss Link */}
              <Link
                to={`/contact?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#087F8C] hover:bg-[#066570] transition-colors shrink-0 shadow-sm"
              >
                <span>Discuss This Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tagline & Summary */}
            <div className="pt-6 pb-8 space-y-3">
              <p className="text-lg font-semibold text-[#10243A]">
                {service.tagline}
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                {service.summary}
              </p>
            </div>

            {/* Detailed 4-Column Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* 1. What It Involves */}
              <div className="bg-[#FAFAF7] rounded-xl p-6 border border-[#E5E6DC] space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#10243A] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087F8C]" />
                  What It Involves
                </h3>
                <ul className="space-y-2.5 text-sm text-[#475569]">
                  {service.whatItInvolves.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C] shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Who It Suits */}
              <div className="bg-[#FAFAF7] rounded-xl p-6 border border-[#E5E6DC] space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#10243A] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#087F8C]" />
                  Who It Suits
                </h3>
                <ul className="space-y-2.5 text-sm text-[#475569]">
                  {service.whoItSuits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F28C45] shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Typical Activities & Deliverables */}
              <div className="bg-[#FAFAF7] rounded-xl p-6 border border-[#E5E6DC] space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#10243A] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#087F8C]" />
                  Typical Activities & Deliverables
                </h3>
                <ul className="space-y-2.5 text-sm text-[#475569]">
                  {service.activitiesAndDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C] shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. How Requirements Are Agreed */}
              <div className="bg-[#FAFAF7] rounded-xl p-6 border border-[#E5E6DC] space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#10243A] flex items-center gap-2 mb-3">
                    <HelpCircle className="w-4 h-4 text-[#087F8C]" />
                    How Requirements Are Agreed
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {service.howRequirementsAreAgreed}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E6DC] mt-4">
                  <div className="text-xs text-[#5B6B7C]">
                    All campaign parameters, ICP boundaries, and escalation protocols are documented in writing before execution begins.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section Link */}
            <div className="mt-8 pt-6 border-t border-[#E5E6DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Interested in combining {service.title.toLowerCase()} with our other outreach capabilities?
              </span>
              <Link
                to={`/contact?service=${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#087F8C] hover:text-[#066570]"
              >
                <span>Discuss {service.title} with our team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* 3. Closing Consultation Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" aria-label="Services consultation banner">
        <div className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#244161]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Not sure which service structure fits your current stage?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              We review your sales objectives, target market complexity, and internal team capacity to recommend an optimal outreach framework.
            </p>
          </div>
          <Link
            to="/contact?intent=consultation"
            className="shrink-0 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#087F8C] hover:bg-[#066570] transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
