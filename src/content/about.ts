import type { PageContent } from './types';

export const aboutContent: PageContent = {
  seo: {
    title: 'About LocalsZA — Township Delivery Infrastructure',
    description:
      'LocalsZA is an asset-light delivery network hyper-specialised for Ekurhuleni. Meet the team building last-mile logistics, courier and brand activation for the township economy.',
    path: '/about',
  },
  hero: {
    eyebrow: 'About',
    title: "We're building the infrastructure the township economy was never given.",
    subtitle:
      'Our home is the East Rand — starting in Katlehong, Vosloorus and Thokoza, and growing across Ekurhuleni.',
    variant: 'page',
    ctas: [],
  },
  sections: [
    {
      kind: 'blocks',
      blocks: [
        {
          type: 'paragraph',
          content:
            'LocalsZA started as a consumer buying service with 500+ products listed. Working with wholesalers and retailers taught us where the real friction was — not in choosing products, but in moving them and getting them onto township shelves. So we rebuilt around that problem.',
        },
        {
          type: 'paragraph',
          content:
            "Today we're an asset-light, tech-enabled delivery network, hyper-specialised for Ekurhuleni: last-mile logistics, parcel and bulky-item courier, and brand activation — all on one platform. We don't want to replace the local driver or the spaza owner's way of doing business. We want to give it rails, protection and reach.",
        },
        {
          type: 'paragraph',
          content: 'Our model in one line: we move the stock, we build the demand, and we keep the local driver whole.',
        },
      ],
    },
    {
      kind: 'team-grid',
      heading: 'The team',
      members: [
        {
          name: 'Lehlohonolo Lebea',
          role: 'CEO & Head of Sales',
          bio: 'B.Com in Marketing & Business Management. Leads sales, the community rep network, partner relationships and campaign performance.',
          email: 'lehlohonolo@locals-za.co.za',
        },
        {
          name: 'Martin Maseko',
          role: 'COO & Lead Developer',
          bio: 'Full-stack developer and Azure data engineer. Architects and runs the LocalsZA technology ecosystem, from the delivery platform to the analytics that keep it accountable.',
          email: 'martin@locals-za.co.za',
        },
      ],
    },
    {
      kind: 'closing-cta',
      heading: 'What we believe',
      body: "Township trade doesn't need saving — it needs infrastructure, and it deserves to be treated as the R900-billion economy it already is.",
      ctas: [{ label: 'Get in touch', href: 'https://wa.me/27682858930', variant: 'primary' }],
    },
  ],
};
