import type { PageContent } from './types';

export const homeContent: PageContent = {
  seo: {
    title: 'LocalsZA — Last-Mile Delivery for eKhuruleni',
    description:
      "LocalsZA is the township's own delivery network in Ekurhuleni. Restock your shop, send a parcel, or move something big — same-day, local, and protected on every load.",
    path: '/',
  },
  hero: {
    title: 'Move anything, anywhere in the Ekhuruleni.',
    subtitle:
      "LocalsZA is the township's own delivery network — restock your shop, send a parcel, or move something big, with a local driver, live tracking and protection on every load. Built for Katlehong, Vosloorus, Thokoza and the communities around them.",
    variant: 'home',
    ctas: [
      { label: 'Restock my shop', to: '/wholesalers', variant: 'primary' },
      { label: 'Send a parcel', to: '/send-a-parcel', variant: 'outline' },
      { label: 'Move something big', to: '/send-a-parcel', variant: 'outline' },
    ],
  },
  sections: [
    {
      kind: 'trust-strip',
      heading: 'Serving the East Rand',
      items: ['Katlehong', 'Vosloorus', 'Thokoza & surrounds'],
    },
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'Township trade runs on hustle. We give it rails.' },
        {
          type: 'paragraph',
          content:
            "The spaza owner restocking three times a week still hunts for a bakkie on WhatsApp and pays cash with no protection. The person who just bought a couch has no way to get it home. The small brand that wants onto township shelves can't get in the door. LocalsZA connects all of it — one app, one local network, built for this market — so moving stock and sending parcels is as easy as booking a ride.",
        },
      ],
    },
    {
      kind: 'feature-cards',
      heading: 'What we do',
      cards: [
        {
          title: 'Restock & deliver',
          body: 'Book a delivery from any wholesaler, hardware store, furniture shop or supplier in minutes — light, medium or heavy loads.',
        },
        {
          title: 'Send a parcel — even the big stuff',
          body: "Same-day, point to point, including furniture and appliances the big apps won't touch.",
        },
        {
          title: 'Reach the township',
          body: 'Brands: get your product onto East Rand shelves with our community activation network — from R2,900.',
        },
      ],
    },
    {
      kind: 'why-us',
      heading: 'Why LocalsZA',
      points: [
        {
          title: 'Drivers keep 100% of the fare.',
          body: "We're not a commission business — our revenue is a clear, customer-paid Platform & Protection Fee, so the driver stays whole and you know exactly what you're paying for.",
        },
        {
          title: 'Every load is protected.',
          body: "Once it's in our hands, it's our responsibility — goods-in-transit protection is built in, not sold as an extra.",
        },
        {
          title: "We're of the township, not just in it.",
          body: 'Our drivers and reps live and trade where you do. That\'s how work actually gets done here.',
        },
        {
          title: 'Built for the East Rand.',
          body: "We're not a national giant stretched thin — we're specialists in one region, and we know it better than anyone.",
        },
      ],
    },
    {
      kind: 'closing-cta',
      heading: "Wherever you sit in the chain, there's a place for you on LocalsZA.",
      ctas: [
        { label: 'I want to restock', to: '/wholesalers', variant: 'dark' },
        { label: 'I want to send something', to: '/send-a-parcel', variant: 'dark' },
        { label: 'I want to reach the township', to: '/brands', variant: 'primary' },
        { label: 'I want to drive', to: '/drivers', variant: 'dark' },
      ],
    },
  ],
};
