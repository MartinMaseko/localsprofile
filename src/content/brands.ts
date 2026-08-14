import type { PageContent } from './types';

export const brandsContent: PageContent = {
  seo: {
    title: 'Township Brand Activation — Starting from R2,900',
    description:
      'Get your brand into township shops from R2,900. Community reps place your product in real stores, with photo proof, GPS check-ins and a campaign report.',
    path: '/brands',
  },
  hero: {
    eyebrow: 'For Brands — Township Sales Promotion',
    title: 'Get your brand into township shops — from R2,900.',
    subtitle:
      "",
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
        { type: 'heading', level: 2, content: 'Built for emerging brands' },
        {
          type: 'paragraph',
          content:
            "The township economy is worth an estimated R900 billion, and informal retail moves close to a third of South Africa's FMCG. But most Brand owners can't effectively access the fragmented informal retail market — so your product either isn't on the shelf or isn't top of mind. LocalsZA is the way in: our community reps put your brand physically inside stores that owners already trust, at a price a growing brand can actually afford.",
        },
      ],
    },
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'Every activation includes' },
        {
          type: 'highlight-list',
          content: [
            'Local reps placing your brand inside real township stores',
            'Point-of-sale material, shelf presence and owner word-of-mouth',
            'Photo proof and GPS check-in from every store',
            'A simple campaign report you can show your investors',
            'Optional: pair with LocalsZA delivery so your stock reaches the shelf',
          ],
        },
      ],
    },
    {
      kind: 'pricing',
      heading: 'Packages',
      tiers: [
        { name: 'Starter', price: 'R2,900', storeCount: 15, bestFor: 'First market test' },
        {
          name: 'Launch',
          price: 'R4,900/mo',
          storeCount: 25,
          bestFor: 'A first market test',
          features: [
            '25 store activations monthly',
            'POS placement + owner brief',
            'Photo proof & GPS from every store',
            'Monthly campaign report',
            'Single East Rand zone',
          ],
        },
        {
          name: 'Momentum',
          price: 'R8,900/mo',
          storeCount: 50,
          bestFor: 'Building real traction',
          features: [
            '50 store activations monthly',
            'Everything in Launch, plus:',
            'Priority rep scheduling',
            'Zone coverage map in report',
            'Multi-suburb reach',
          ],
        },
        {
          name: 'Saturation',
          price: 'R14,900/mo',
          storeCount: 100,
          bestFor: 'Owning a zone',
          features: [
            '100 store activations monthly',
            'Everything in Momentum, plus:',
            'Full-zone saturation strategy',
            'Visit-over-visit tracking',
            'Priority delivery-bundle rates',
          ],
        },
      ],
      note: 'Established FMCG brand wanting dedicated reps at every store and a bespoke dashboard? Enterprise campaigns by quotation.',
    },
    {
      kind: 'closing-cta',
      heading: 'Ready to get your brand onto East Rand shelves?',
      ctas: [{ label: 'Book a brand call', href: 'mailto:martin@localsza.co.za', variant: 'primary' }],
    },
  ],
};
