// Global site metadata. Single source of truth.
// Update here; every page reads from this file.

export const site = {
  name: 'Battleborn Advisory',
  url: 'https://battlebornadvisorygroup.com',
  tagline: 'Senior marketing leadership and candid AI guidance for founder-led, multi-location, and PE-backed operators.',
  essence: 'Born in the trenches. Built for the boardroom.',
  description:
    'Battleborn Advisory is a senior marketing practice for founder-led, multi-location, and PE-backed operators who need senior leadership without committing to a full-time hire. Fractional CMO, marketing audits, AI implementation, and pre-sale marketing readiness — focused on system design that actually moves revenue.',
  founder: {
    name: 'Christina Johnson',
    role: 'Founder',
    email: 'christina@battlebornadvisorygroup.com',
    location: 'Atlanta, Georgia, United States',
    linkedin: 'https://linkedin.com/in/johnsonchristina',
    yearsExperience: 22,
    headline:
      'A 22-year marketing executive with 8 years operating inside PE-backed, franchise, and home services businesses.'
  },
  contact: {
    email: 'christina@battlebornadvisorygroup.com',
    linkedin: 'https://linkedin.com/company/battleborn-advisory',
    speakingEmail: 'christina@battlebornadvisorygroup.com'
  },
  services: [
    {
      slug: 'fractional-cmo',
      name: 'Fractional CMO',
      short: 'Embedded senior marketing leadership on a defined engagement.',
      description:
        'Embedded marketing leadership for companies that need a CMO’s judgment without the headcount commitment. Christina steps into the seat — sets the strategy, builds the team, owns the metrics, runs the rooms — for a defined engagement, typically 3 to 12 months. Includes project-shaped GTM rebuilds when the work is bounded. Best for PE-backed operators, multi-brand portfolios, and growth-stage companies whose marketing has outgrown founder-led execution.'
    },
    {
      slug: 'strategic-advisory',
      name: 'Strategic Advisory',
      short: 'Standing advisor relationship for CEOs, founders, and PE operating partners.',
      description:
        'A standing advisor relationship for CEOs, founders, and PE operating partners who want senior marketing judgment on tap — board prep, quarterly reviews, vendor decisions, hiring choices, M&A diligence on marketing assets. Counsel and accountability, not hands-on operating. Monthly retainer.'
    },
    {
      slug: 'pre-sale-marketing-readiness',
      name: 'Pre-Sale Marketing Readiness',
      short: 'Pre-acquisition diagnostic for owners considering a sale or recap.',
      description:
        'A pre-acquisition diagnostic for owners considering a sale, a recapitalization, or a strategic transition in the next 12 to 24 months. Most companies don’t fail at the table because the business is bad. They fail because no one ever cleaned up the marketing infrastructure — platform ownership, data integrity, brand discipline. We get the marketing house in order before a buyer asks.'
    },
    {
      slug: 'marketing-audit',
      name: 'Marketing Audit & Diagnostic',
      short: '30-day examination of your marketing system with a 90-day action plan.',
      description:
        'A 30-day examination of your full marketing system — channels, attribution, vendor stack, team structure, spend — delivered as a written diagnostic and a prioritized 90-day action plan. For operators inheriting fragmented marketing, scaling past founder-led growth, or needing an outside read on what’s actually working and what’s not.'
    },
    {
      slug: 'ai-implementation',
      name: 'AI Implementation Strategy',
      short: 'Practical AI roadmap for a marketing function that has to deliver.',
      description:
        'A practical roadmap for where AI actually moves the needle inside your marketing function — and where it doesn’t. No theater, no shopping list, no chasing every new tool. Built from real experience using AI to consolidate fragmented data, automate reporting, and sharpen decision-making inside a multi-brand operating environment.'
    },
    {
      slug: 'creative-brand-audit',
      name: 'Creative & Brand Audit',
      short: 'Honest read on whether your creative is doing its job.',
      description:
        'An honest read on whether your creative is doing its job. Ad blindness is real. Brand consistency across markets matters. Your messaging should make buyers act, not skim past. I assess what you’re putting in market, name what’s broken, and give you direction your designers and agency can execute against.'
    }
  ],
  speakingAppearances: [
    {
      event: 'LeadsCon',
      year: 2026,
      location: 'Las Vegas, NV',
      role: 'Speaker',
      topics: ['AI Implementation', 'Lead Generation', 'Attribution']
    },
    {
      event: 'Affiliate Summit East',
      year: 2026,
      location: 'New York, NY',
      role: 'Speaker',
      topics: ['AI in Marketing', 'Performance Marketing']
    },
    {
      event: 'Affiliate Summit West',
      year: 2026,
      location: 'Las Vegas, NV',
      role: 'Speaker',
      topics: ['AI in Marketing', 'Performance Marketing']
    },
    {
      event: 'LeadsCon Connect',
      year: 2025,
      location: 'Chicago, IL',
      role: 'Speaker',
      topics: ['AI Implementation', 'Lead Generation']
    }
  ]
} as const;

export type SiteConfig = typeof site;
