import type { PageContent } from './types';
import { SITE_URL } from './site';

export const sendAParcelContent: PageContent = {
  seo: {
    title: 'Send a Parcel — Same-Day Courier Ekurhuleni',
    description:
      "We move the big stuff other courier apps refuse — furniture, appliances and bulky loads — same-day, point to point, across the township.",
    path: '/send-a-parcel',
  },
  hero: {
    eyebrow: 'Send a Parcel | Courier services',
    title: 'From a small parcel to a fridge — we move it.',
    subtitle:
      "Need to send something across Ekurhuleni, today? LocalsZA collects and delivers same-day, point to point , we handle the big stuff too: furniture, appliances, multi-box loads, building supplies.",
    variant: 'page',
    backgroundImage:
      'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/sendParcel.png?alt=media&token=f4ad5497-9b2f-4ab3-ab49-2f236a53fe44',
    ctas: [{ label: 'Get a parcel quote', href: `${SITE_URL}/calculator`, variant: 'primary' }],
  },
  sections: [
    {
      kind: 'feature-cards',
      heading: 'What you can send',
      cards: [
        {
          title: 'Small parcels',
          body: 'Documents, clothing, online-order deliveries, up to bakkie size.',
        },
        {
          title: 'Large & bulky items',
          body: 'Couches, fridges, stoves, beds — the loads normal couriers refuse.',
        },
        {
          title: 'Business deliveries',
          body: 'Get your stock to your customers across the East Rand.',
        },
      ],
    },
    {
      kind: 'why-us',
      heading: 'Why LocalsZA',
      points: [
        {
          title: 'Same-day, local, affordable.',
          body: 'A driver already in your area, no waiting on a national network.',
        },
        {
          title: 'Protection on every load.',
          body: 'Goods-in-transit cover built in, even for the big items.',
        },
        {
          title: 'Live tracking & proof of delivery.',
          body: 'Photo and OTP confirmation on drop-off.',
        },
        {
          title: "We go where the big apps don't.",
          body: 'Deep into the townships, reliably.',
        },
      ],
    },
  ],
};
