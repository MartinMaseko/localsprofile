import type { PageContent } from './types';
import { SITE_URL } from './site';

export const driversContent: PageContent = {
  seo: {
    title: 'Drive for LocalsZA — Keep 100% of Your Fare',
    description:
      'Join LocalsZA as a driver or courier partner in Ekurhuleni. Keep 100% of your fare, get steady protected jobs, and choose your own hours.',
    path: '/drivers',
  },
  hero: {
    eyebrow: 'For Drivers & Courier Partners',
    title: 'Keep 100% of your fare. Get the jobs. Get protected.',
    subtitle:
      "Whether you own one bakkie or run a small courier operation, LocalsZA brings you steady, protected delivery work across Ekurhuleni — without taking a cut of your fare. We're not your boss; we're your job feed.",
    variant: 'page',
    ctas: [
      { label: 'Apply to drive', href: `${SITE_URL}/driver-register`, variant: 'primary' },
      { label: 'Partner your courier business', href: 'mailto:martin@localsza.co.za', variant: 'dark' },
    ],
  },
  sections: [
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: 'For individual drivers' },
        {
          type: 'paragraph',
          content:
            "Apply, get vetted, and accept jobs in your zone from the app. Navigate, deliver, confirm with a photo and the customer's OTP, and keep 100% of what the job pays.",
        },
        { type: 'heading', level: 2, content: 'For courier businesses' },
        {
          type: 'paragraph',
          content:
            'Plug your fleet into our order flow and fill your idle capacity with local jobs — backed by our tracking, protection and payment system.',
        },
      ],
    },
    {
      kind: 'why-us',
      heading: 'Why work with LocalsZA',
      points: [
        { title: '100% of the fare is yours.', body: 'What the job pays, you keep.' },
        { title: 'Steady, real jobs.', body: 'Stop chasing work on WhatsApp.' },
        { title: 'Goods-in-transit protection', body: 'on every load.' },
        { title: 'You choose', body: 'your hours and your zone.' },
        { title: 'Build a rating', body: 'retailers ask for by name.' },
      ],
    },
    {
      kind: 'blocks',
      blocks: [
        { type: 'heading', level: 2, content: "What you'll need" },
        {
          type: 'paragraph',
          content:
            'A roadworthy bakkie or van, a valid licence, and the documents we verify during vetting (licence, proof of residence, roadworthy certificate, police clearance and insurance).',
        },
      ],
    },
    {
      kind: 'closing-cta',
      heading: 'Ready to start earning on your own terms?',
      ctas: [
        { label: 'Apply to drive', href: `${SITE_URL}/driver-register`, variant: 'primary' },
        { label: 'Partner your courier business', href: 'mailto:martin@localsza.co.za', variant: 'dark' },
      ],
    },
  ],
};
