/**
 * Hub2Biz - Central Company Content & Configuration
 * 
 * Defines services, core workflow steps, audience profiles, FAQs,
 * and company values. No invented stats, staff profiles, or guarantees.
 */

export interface ServiceItem {
  id: string; // Used for anchor tags: cold-calling, lead-research, lead-qualification, appointment-setting
  slug: string; // Used for URL query param
  title: string;
  tagline: string;
  summary: string;
  whatItInvolves: string[];
  whoItSuits: string[];
  activitiesAndDeliverables: string[];
  howRequirementsAreAgreed: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'methodology' | 'qualification' | 'collaboration' | 'compliance';
}

export interface ValueItem {
  title: string;
  description: string;
  application: string;
}

export const COMPANY_INFO = {
  name: 'Hub2Biz',
  tagline: 'Better conversations. Stronger sales opportunities.',
  domain: 'hub2biz.com',
  shortDescription: 'Hub2Biz helps B2B companies identify relevant prospects, connect with decision-makers, qualify opportunities, and arrange sales meetings through targeted outreach.',
  heroDescription: 'Targeted B2B cold calling, prospect research, and rigorous sales qualification that connect your team directly with verified decision-makers.',
  aboutMission: 'Hub2Biz was founded to replace impersonal, automated blast outreach with focused, human-led B2B conversations. We operate as a dedicated extension of your sales team, engaging key stakeholders with contextual intelligence and respectful persistence.',
  intendedScopeNotice: 'Service deliverables depend on the scope agreed with each client. We do not provide blanket guarantees or artificial sales quotas; rather, we focus on verified qualification criteria and consistent outreach rigor.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'cold-calling',
    slug: 'cold-calling',
    title: 'B2B Cold Calling',
    tagline: 'Direct, professional phone conversations with verified enterprise decision-makers.',
    summary: 'Human-to-human telephone outreach designed to break through cluttered inboxes, engage senior buyers, and introduce your value proposition with professionalism.',
    whatItInvolves: [
      'Multi-touch telephone outreach campaigns targeted at defined account lists.',
      'Conversational, problem-led dialogues rather than rigid scripted recitation.',
      'Effective gatekeeper navigation and verified direct-line/mobile discovery.',
      'Professional objection handling aligned with your positioning and market dynamics.',
      'Immediate capture of prospect sentiment, current tech stack, and pain points.'
    ],
    whoItSuits: [
      'B2B companies selling high-consideration or complex technical solutions.',
      'Founders and sales leaders who need proactive pipeline building without pulling senior account executives away from closing.',
      'Businesses experiencing diminishing returns or spam filtering from purely automated email sequences.',
      'Enterprises entering new vertical markets or launching new enterprise propositions.'
    ],
    activitiesAndDeliverables: [
      'Custom campaign briefing document and outreach playbook.',
      'Structured call disposition logs (connected, gatekeeper, wrong contact, interested, not a fit).',
      'Verbatim feedback notes detailing competitor presence, timing, and budget cycles.',
      'Weekly pipeline review meetings and continuous message refinement.'
    ],
    howRequirementsAreAgreed: 'Outreach parameters are defined in a structured campaign brief before calling commences. This covers ideal customer profile (ICP) boundaries, positioning angles, permissible rebuttal strategies, and escalation thresholds for sales-ready handoffs.'
  },
  {
    id: 'lead-research',
    slug: 'lead-research',
    title: 'Lead Research & Prospect Identification',
    tagline: 'Clean, verified prospect lists built to your exact ideal customer profile.',
    summary: 'In-depth account mapping and prospect intelligence that ensure outreach efforts are directed exclusively toward real stakeholders with buying influence.',
    whatItInvolves: [
      'Account-level qualification against firmographic criteria (industry, employee count, geography, revenue band).',
      'Stakeholder mapping across buying committees (economic buyers, technical leads, champions, end-users).',
      'Multi-source contact verification to eliminate outdated emails, non-working switchboards, and departed staff.',
      'Signal-based intelligence gathering (recent funding, hiring trends, technology adoption, leadership changes).'
    ],
    whoItSuits: [
      'Sales teams struggling with dirty, stale, or purchased contact databases.',
      'Organizations targeting niche or specialized industries where standard list vendors offer poor coverage.',
      'Companies wanting to focus outreach on specific named accounts (account-based marketing and sales).'
    ],
    activitiesAndDeliverables: [
      'Custom prospect research spreadsheets or direct CRM-ready export files.',
      'Verified direct dials, corporate switchboards, and verified work email addresses.',
      'Contextual intelligence notes on each target account to inform conversational hooks.',
      'Data verification logs demonstrating source validity and contact freshness.'
    ],
    howRequirementsAreAgreed: 'Targeting criteria are established during onboarding through an ICP discovery workshop. We define acceptable job titles, exclusions, geographic focus, and validation rules before list compilation begins.'
  },
  {
    id: 'lead-qualification',
    slug: 'lead-qualification',
    title: 'Lead Qualification',
    tagline: 'Filtering early interest through structured, agreed criteria before your team steps in.',
    summary: 'A disciplined qualification framework that separates polite curiosity from genuine commercial readiness, protecting your closers’ calendars.',
    whatItInvolves: [
      'Deep qualifying questions tailored to your sales process (e.g., BANT, MEDDIC, or custom frameworks).',
      'Probing current pain points, incumbent vendor contracts, and contract renewal timelines.',
      'Confirming budget authority, evaluation committees, and projected deployment horizons.',
      'Disqualifying non-viable prospects early to avoid wasted executive demonstration time.'
    ],
    whoItSuits: [
      'Account Executives who spend too much time on discovery calls that go nowhere.',
      'Companies with strict prerequisites for technical feasibility or minimum account size.',
      'Sales organizations requiring high-fidelity prospect data before scheduling product demonstrations.'
    ],
    activitiesAndDeliverables: [
      'Detailed qualification summaries for each prospect with answers to agreed qualifying criteria.',
      'Contextual meeting briefing sheets highlighting confirmed needs, risks, and next steps.',
      'Disqualification analysis reports helping your product and marketing teams spot market trends.'
    ],
    howRequirementsAreAgreed: 'Qualification criteria are codified into a Qualification Matrix co-authored with your sales leadership. Every handoff must satisfy these agreed thresholds before being routed to your team.'
  },
  {
    id: 'appointment-setting',
    slug: 'appointment-setting',
    title: 'Appointment Setting',
    tagline: 'Coordinating introductory sales meetings directly onto your account executives’ schedules.',
    summary: 'Seamless scheduling that turns qualified interest into confirmed calendar discussions, complete with calendar invitations and pre-call context.',
    whatItInvolves: [
      'Managing scheduling logistics across time zones without friction.',
      'Issuing calendar invitations with meeting objectives and conference links.',
      'Pre-meeting reminder communication to minimize no-shows and cancellations.',
      'Rescheduling support when calendar conflicts arise for either party.'
    ],
    whoItSuits: [
      'Sales teams wanting a full end-to-end bridge from initial prospect research to qualified meeting.',
      'Businesses expanding into new geographic territories requiring local business-hours scheduling.',
      'Consultancies and agency founders who want their calendars populated with relevant prospective clients.'
    ],
    activitiesAndDeliverables: [
      'Confirmed calendar events populated directly into your team’s scheduling workflow.',
      'Pre-meeting briefing pack attached to each appointment containing prospect background and qualifying answers.',
      'Attendance tracking and proactive follow-up for any rescheduled sessions.'
    ],
    howRequirementsAreAgreed: 'Calendar availability, meeting duration, team routing rules (e.g. round-robin or territory-based), and notice period requirements are established and tested prior to campaign go-live.'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Understand Your Offer',
    description: 'We immerse ourselves in your value proposition, customer pain points, competitive differentiators, and deal criteria.',
    deliverable: 'Campaign Blueprint & Messaging Brief'
  },
  {
    number: '02',
    title: 'Define Your Target Audience',
    description: 'We establish clear boundaries for your Ideal Customer Profile (ICP), including company size, verticals, decision-maker roles, and exclusions.',
    deliverable: 'Targeting Criteria & Persona Definitions'
  },
  {
    number: '03',
    title: 'Research Prospects',
    description: 'We identify specific accounts and individual stakeholders, verifying phone numbers, roles, and relevance before outreach begins.',
    deliverable: 'Verified Prospect Database'
  },
  {
    number: '04',
    title: 'Start Conversations',
    description: 'Our team conducts direct, professional phone outreach, engaging decision-makers in meaningful peer conversations.',
    deliverable: 'Structured Call Activity Logs'
  },
  {
    number: '05',
    title: 'Qualify Opportunities',
    description: 'We test prospect interest against your agreed qualification matrix to confirm relevance, need, and decision authority.',
    deliverable: 'Prospect Qualification Briefings'
  },
  {
    number: '06',
    title: 'Report Results',
    description: 'We provide transparent activity reporting, market feedback, and seamless meeting handovers to your sales executives.',
    deliverable: 'Weekly Performance & Market Insights Report'
  }
];

export const VALUES: ValueItem[] = [
  {
    title: 'Clear Communication',
    description: 'We communicate transparently with you and your prospects. No hidden activity, no vague reporting, and no inflated promises.',
    application: 'Detailed call dispositions, direct access to campaign notes, and regular alignment sessions.'
  },
  {
    title: 'Relevant Targeting',
    description: 'We believe outreach is only effective when it is relevant to the recipient. We do not blast generic scripts to unqualified lists.',
    application: 'Strict account vetting and research before any contact attempt is initiated.'
  },
  {
    title: 'Accountability',
    description: 'We take ownership of the agreed process, maintaining steady outreach cadence, thorough documentation, and rigorous standards.',
    application: 'Weekly tracking against agreed workflow milestones and handoff criteria.'
  },
  {
    title: 'Respectful Outreach',
    description: 'We represent your brand with professionalism. Every phone interaction is courteous, respectful of prospects’ time, and conducted appropriately.',
    application: 'Observing do-not-call preferences, polite objection handling, and prompt removal upon request.'
  }
];

export const TARGET_AUDIENCES = [
  {
    title: 'B2B Software & SaaS Providers',
    description: 'Selling complex, subscription-based solutions where discovery conversations are required to uncover existing tech stack friction and procurement cycles.'
  },
  {
    title: 'Professional & Technical Consultancies',
    description: 'High-value advisory, engineering, and consulting firms seeking meetings with corporate leadership who rarely respond to generic automated emails.'
  },
  {
    title: 'Specialized Agencies & Marketing Firms',
    description: 'Growth, creative, and performance agencies looking to connect with enterprise marketing directors and CMOs actively evaluating agency partners.'
  },
  {
    title: 'Commercial & Industrial Suppliers',
    description: 'Suppliers of equipment, facilities services, logistics, and industrial solutions who need direct access to operations and procurement heads.'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Human-Led Outreach',
    description: 'Real phone conversations cut through inbox fatigue. Our callers listen, adapt, and build genuine rapport with enterprise leaders.'
  },
  {
    title: 'Protect Your Closing Time',
    description: 'Your account executives should focus on presenting and closing, not spending hours navigating switchboards and chasing unverified leads.'
  },
  {
    title: 'Agreed Quality Thresholds',
    description: 'We never pass vague curiosity as a sales meeting. Handoffs adhere strictly to the qualification matrix co-developed with your leadership.'
  },
  {
    title: 'Actionable Market Feedback',
    description: 'Every conversation produces intelligence—objections, competitor contracts, and buyer priorities that sharpen your commercial positioning.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-different',
    category: 'methodology',
    question: 'How is Hub2Biz different from high-volume automated outreach agencies?',
    answer: 'Rather than blasting unresearched mass emails or using automated diallers, Hub2Biz focuses on research-driven, human-to-human phone outreach. Prospects are reviewed for relevance before we call, and our representatives engage in conversational, consultative dialogues that represent your brand professionally.'
  },
  {
    id: 'faq-guarantees',
    category: 'methodology',
    question: 'Do you guarantee a specific number of sales or meetings?',
    answer: 'No. Service deliverables and engagement scopes depend on the agreement with each client. We do not promise guaranteed sales, guaranteed meetings, or specific financial results. Instead, we focus on verified prospect research, agreed outreach cadence, and structured qualification before introductory discussions are arranged.'
  },
  {
    id: 'faq-qualification',
    category: 'qualification',
    question: 'How do you ensure leads match our ideal customer criteria?',
    answer: 'During campaign onboarding, we work with your sales team to establish a Qualification Matrix. This outlines firmographic boundaries (industry, company size, geography), acceptable decision-maker titles, and key discovery questions (such as current tooling or timeline). Prospects who do not meet these agreed thresholds are not passed to your team.'
  },
  {
    id: 'faq-team-integration',
    category: 'collaboration',
    question: 'How does Hub2Biz work alongside our existing internal sales team?',
    answer: 'We operate as a top-of-funnel partner. We handle prospect research, switchboard navigation, and initial qualification. Once an opportunity meets your agreed criteria, we coordinate the introductory discussion directly onto your account executives’ calendars along with conversation briefing notes.'
  },
  {
    id: 'faq-scripting',
    category: 'collaboration',
    question: 'Do your callers follow a rigid, robotic script?',
    answer: 'No. While we prepare a campaign brief with approved positioning angles, key questions, and rebuttal guidelines, outreach is conversational. We treat decision-makers as peers, actively listening to their operational challenges rather than reciting a canned script.'
  },
  {
    id: 'faq-onboarding',
    category: 'methodology',
    question: 'What is the typical timeline to prepare and launch an outreach campaign?',
    answer: 'Campaign onboarding and preparation timelines depend on the scope agreed with each client, target market complexity, and data availability. During onboarding, we define targeting parameters, review your offer, curate prospect accounts, and agree on handoff criteria before outreach starts.'
  },
  {
    id: 'faq-compliance',
    category: 'compliance',
    question: 'How do you handle compliance and do-not-call regulations?',
    answer: 'Hub2Biz observes telephone preference registries and relevant telemarketing regulations for B2B communications. We honor opt-out and do-not-contact requests promptly and maintain suppression records to ensure respectful, professional outreach.'
  }
];
