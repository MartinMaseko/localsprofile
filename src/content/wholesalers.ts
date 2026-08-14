import type { PageContent } from './types';

export const wholesalersContent: PageContent = {
  seo: {
    title: 'For Wholesalers & Suppliers — Delivery Without a Fleet',
    description:
      'Add a professional last-mile delivery service to your wholesale, cash-and-carry, hardware or furniture business — without buying a bakkie.',
    path: '/wholesalers',
  },
  hero: {
    eyebrow: 'For Wholesalers & Suppliers',
    title: 'Turn your counter into a delivery business — without buying a bakkie.',
    subtitle:
      "LocalsZA adds a professional last-mile service to your wholesale, cash-and-carry, hardware or furniture business — so customers can order, pay and have it delivered, while you focus on moving volume.",
    variant: 'page',
    backgroundImage:
      'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/wholesaler.png?alt=media&token=b449d945-e75d-46cd-bac2-99f406ca58d1',
    ctas: [{ label: 'Become a supply partner', href: 'mailto:martin@localsza.co.za', variant: 'primary' }],
  },
  sections: [
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'How it works' },
        {
          type: 'paragraph',
          content:
            "A customer chooses LocalsZA delivery → we handle dispatch, the driver, tracking and proof of delivery → once it's in our hands, it's protected → you keep the sale and the loyalty.",
        },
      ],
    },
    {
      kind: 'feature-cards',
      heading: 'Why partner with us',
      cards: [
        {
          title: 'We fit how you already trade',
          body: "We don't touch your pricing, and we don't disrupt the drivers in your yard — we work with them.",
        },
        {
          title: 'No fleet risk',
          body: 'Asset-light for you, professionally run by us.',
        },
        {
          title: 'Your customers restock more often',
          body: 'When delivery is easy — more trips, bigger baskets, more volume through your doors.',
        },
        {
          title: 'Frictionless integration',
          body: 'We slot into your checkout and your flow, from a single counter to a full cash-and-carry operation.',
        },
      ],
    },
  ],
};
