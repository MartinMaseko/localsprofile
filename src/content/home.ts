import type { PageContent } from './types';
import { SITE_URL } from './site';

export const homeContent: PageContent = {
  seo: {
    title: 'LocalsZA — Last-Mile Delivery for Ekurhuleni',
    description:
      "LocalsZA is the township's own delivery network in Ekurhuleni. Restock your shop, send a parcel, or move something big — same-day, local, and protected on every load.",
    path: '/',
  },
  hero: {
    title: 'Move anything, anywhere in Ekurhuleni.',
    subtitle:
      "LocalsZA is the Ekurhuleni's own delivery network — restock your shop, send a parcel, or move something big, with a local driver, live tracking and protection on every load. Built for Germiston, Alberton, Boksburg, Benoni and the communities around them.",
    variant: 'home',
    backgroundImage:
      'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/homeBanner.png?alt=media&token=87b0a108-fa59-449b-bf5c-405459e47fb6',
    ctas: [
      { label: 'Restock my shop', href: SITE_URL, variant: 'primary' },
      { label: 'Send a parcel', href: SITE_URL, variant: 'outline' },
      { label: 'Move something big', href: SITE_URL, variant: 'outline' },
    ],
  },
  sections: [
    {
      kind: 'trust-strip',
      heading: 'Serving Ekurhuleni',
      items: ['Germiston','Alberton','Boksburg' , 'Benoni', 'Brakpan', 'Edenvale', 'Kempton Park', 'Nigel', 'Springs'],
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
          body: "Same-day, point to point, including furniture and appliances.",
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
          title: "We're of the Ekurhuleni, not just in it.",
          body: 'Our drivers and reps live and trade where you do. That\'s how work actually gets done here.',
        },
        {
          title: 'Built for the Ekurhuleni.',
          body: "We're not a national giant — we're specialists in one region, and we know it better than anyone.",
        },
      ],
    },
  ],
};
