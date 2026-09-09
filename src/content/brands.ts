import type { PageContent } from './types';

export const brandsContent: PageContent = {
  seo: {
    title: 'Township Brand Activation — Monthly Campaigns from R22,500',
    description:
      'Put your brand physically on township shelves. Community reps place your product in real stores, with photo + GPS proof from every visit and a velocity, repeat-rate and zone-resonance report every cycle.',
    path: '/brands',
  },
  hero: {
    eyebrow: 'For Brands — Product Activation in the Informal Market',
    title: 'Get your brand into the informal market from R22 500',
    subtitle:
      "Start small, prove your product moves, and scale as you grow.",
    variant: 'page',
    backgroundImage:
      'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/Brand%20Activations.png?alt=media&token=59aac20d-bf64-41be-875a-0281ee3f2b90',
    ctas: [
      { label: 'Book a brand call', href: 'mailto:martin@localsza.co.za', variant: 'dark' },
    ],
  },
  sections: [
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'Get your brand onto township shelves' },
        {
          type: 'paragraph',
          content:
            "The township market is enormous, but most spaza and retail owners can't buy directly from big brands at the scale required — they rely on wholesalers and micro-bulk resellers to access products. So your product either isn't on the shelf, or isn't top of mind. LocalsZA is the way in. Our main service is demand generation and driving engagement: our community reps place your brand physically inside real township stores, brief the owners, drive word-of-mouth and poster placements, and send you photo-verified proof from every shop. You don't need an agency budget to test the township market — you start small, prove your product moves, and scale as you grow.",
        },
      ],
    },
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'What every activation delivers' },
        {
          type: 'highlight-list',
          content: [
            'Real shelf presence inside stores owners already trust',
            'Community reps who live and trade in the same streets',
            'Point-of-sale material placed in-store, plus owner briefing and word-of-mouth push',
            "A route into stores that can't buy direct from big brands — shelves you otherwise can't reach",
            'Photo proof and GPS check-in from every single store — you see exactly where your money went',
            'An investor-ready report after every cycle — proof you can show management or funders',
            'Hyper-local targeting — the right stores, in the right zones, on the right days',
            'Scales with you — step up as your product proves itself; we grow the footprint as you grow',
            'Recurring presence — monthly cycles keep you top-of-mind, not a once-off drop that fades',
            'Optional delivery pairing — bundle LocalsZA delivery so your stock actually reaches the shelf',
          ],
        },
      ],
    },
    {
      kind: 'pricing',
      heading: 'Monthly activation, priced for momentum',
      tiers: [
        {
          name: 'Launch',
          price: 'R22,500/mo',
          storeCount: 50,
          bestFor: 'A first real campaign, single zone',
          features: [
            '50 stores · single zone',
            'Fortnightly detailed visits',
            'Full 6-section dashboard',
            'Weekly & monthly reports',
            'Photo + GPS proof',
            'Objection tracking',
          ],
        },
        {
          name: 'Growth',
          price: 'R44,000/mo',
          storeCount: 100,
          bestFor: 'Multi-suburb reach',
          features: [
            '100 stores · multi-suburb',
            'Everything in Launch',
            'Zone resonance mapping',
            'Priority rep scheduling',
            'Multi-suburb reach',
          ],
          highlighted: true,
        },
        {
          name: 'Scale',
          price: 'R105,000/mo',
          storeCount: 250,
          bestFor: 'Owning multiple zones',
          features: [
            '250 stores · multi-zone',
            'Everything in Growth',
            'Dedicated analyst',
            'Monthly strategy call',
            'Last-mile restock built in',
          ],
        },
        {
          name: 'Dominate',
          price: 'From R200,000/mo',
          storeCount: 500,
          bestFor: 'Best for owning a zone',
          features: [
            '500 stores/month',
            'Everything in Scale',
            'Custom KPIs',
            'Priority last-mile',
            'Quarterly exec review',
          ],
        },
      ],
      note: 'Established FMCG brand? For dedicated reps at every store, custom zones and a bespoke live dashboard, we build enterprise campaigns by quotation — talk to us about a footprint that matches your national ambitions in the East Rand.',
    },
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'Every rand accounted for, with proof, not promises' },
        {
          type: 'paragraph',
          content:
            'There is no Nielsen for the township and informal market. Brands are flying blind in the market that matters most — we turn that blind spot into your dashboard.',
        },
      ],
    },
    {
      kind: 'why-us',
      points: [
        {
          title: 'Velocity',
          body: 'How fast it sells, per store per week — trended and benchmarked.',
        },
        {
          title: 'Consumer pull',
          body: 'Where customers ask for your brand by name.',
        },
        {
          title: 'Repeat rate',
          body: 'Do stores reorder? The truest signal of product-market fit.',
        },
        {
          title: 'Zone resonance',
          body: 'A heatmap of where your brand wins, by zone and outlet.',
        },
      ],
    },
    {
      kind: 'blocks',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Proof, not promises. Every activation carries a photo, a GPS pin and a timestamp from every single store. Every cycle produces an investor- and buyer-ready report you can put in front of management, a retailer, or a funder. You see exactly where your money went — store by store, rand by rand.',
        },
      ],
    },
    {
      kind: 'closing-cta',
      heading: 'Ready to get your brand onto East Rand shelves?',
      body: 'Want to see it before you commit? Ask us for live demo access to a real brand dashboard and rep app.',
      ctas: [
        { label: 'Book a brand call', href: 'mailto:martin@localsza.co.za', variant: 'primary' },
        {
          label: 'Request live demo access',
          href: 'mailto:martin@localsza.co.za?subject=Live%20demo%20access%20request',
          variant: 'outline',
        },
      ],
    },
  ],
};
