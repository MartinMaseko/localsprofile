import type { PageContent } from './types';

export const brandsContent: PageContent = {
  seo: {
    title: 'Township Brand Activation — From R2,900',
    description:
      'Get your brand into township shops from R2,900. Community reps place your product in real stores, with photo proof, GPS check-ins and a campaign report.',
    path: '/brands',
  },
  hero: {
    eyebrow: 'For Brands — Township Sales Promotion',
    title: 'Get your brand into township shops — from R2,900.',
    subtitle:
      "The township economy is worth an estimated R900 billion, and informal retail moves close to a third of South Africa's FMCG. But most spaza owners can't buy directly from big brands — they lack transport and storage — so your product either isn't on the shelf or isn't top of mind. LocalsZA is the way in: our community reps put your brand physically inside stores that owners already trust, at a price a growing brand can actually afford.",
    variant: 'page',
    ctas: [
      { label: 'See packages — from R2,900', href: '#packages', variant: 'primary' },
      { label: 'Book a brand call', href: 'https://wa.me/27682858930', variant: 'dark' },
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
            "You don't need a R200,000 agency budget to test the township market. Start with 15 stores, prove your product moves, then scale — we grow the footprint as you grow.",
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
        { name: 'Builder', price: 'R4,900', storeCount: 30, bestFor: 'Building early traction' },
        { name: 'Growth', price: 'R8,900', storeCount: 60, bestFor: 'Scaling a proven product' },
        { name: 'Reach', price: 'R13,900', storeCount: 100, bestFor: 'Full zone saturation' },
      ],
      note: 'Established FMCG brand wanting dedicated reps at every store and a bespoke dashboard? Enterprise campaigns by quotation.',
    },
    {
      kind: 'closing-cta',
      heading: 'Ready to get your brand onto East Rand shelves?',
      ctas: [{ label: 'Book a brand call', href: 'https://wa.me/27682858930', variant: 'primary' }],
    },
  ],
};
