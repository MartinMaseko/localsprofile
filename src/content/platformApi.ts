import type { PageContent } from './types';
import { SITE_URL } from './site';

export const platformApiContent: PageContent = {
  seo: {
    title: 'Platform & API — LocalsZA Delivery Integrations',
    description:
      'Add live LocalsZA delivery rates to your Shopify, WooCommerce or Bob-Go checkout, or integrate directly with our Partner API — one honest price everywhere.',
    path: '/platform-api',
  },
  hero: {
    eyebrow: 'Platform & API',
    title: 'Add LocalsZA delivery to your checkout — or your whole business.',
    subtitle:
      'Sell online or run an ordering system? Show live LocalsZA delivery rates at checkout on Shopify, WooCommerce and Bob-Go, or plug straight into your own site with our Partner API.',
    variant: 'page',
    backgroundVideo:
      'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/API.mp4?alt=media&token=dcb730a5-0b19-4032-8035-6a605f1b47c9',
    ctas: [
      { label: 'Request API access', href: SITE_URL, variant: 'dark' },
    ],
  },
  sections: [
    {
      kind: 'feature-cards',
      cards: [
        {
          title: 'Carrier integrations',
          body: 'Live LocalsZA rates at checkout on Shopify, WooCommerce and Bob-Go.',
        },
        {
          title: 'Partner API',
          body: 'Get a quote, create an order, track it to the door, with webhooks for live status.',
        },
        {
          title: 'One price everywhere',
          body: 'A quote on Shopify, in our app, and via the API for the same trip always agree.',
        },
      ],
    },
    {
      kind: 'closing-cta',
      heading: 'Slot LocalsZA delivery into your business, not the other way around.',
      ctas: [{ label: 'Request API access', href: SITE_URL, variant: 'primary' }],
    },
  ],
};
