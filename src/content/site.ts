export const SITE_URL = 'https://locals-za.co.za';
export const SITE_NAME = 'LocalsZA';
export const SITE_TAGLINE = 'Last-mile delivery, hyper-specialised for Ekurhuleni. Move anything, anywhere in the East Rand.';

export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Send a Parcel', to: '/send-a-parcel' },
  { label: 'For Wholesalers', to: '/wholesalers' },
  { label: 'For Brands', to: '/brands' },
  { label: 'For Drivers & Partners', to: '/drivers' },
  { label: 'Platform & API', to: '/platform-api' },
  { label: 'About', to: '/about' },
];

export const getStartedCTA = { label: 'Go to App', href: SITE_URL };

export interface FooterLink {
  label: string;
  to?: string;
  href?: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Coverage areas', to: '/about' },
      { label: 'Contact', href: 'https://wa.me/27682858930' },
      { label: 'Careers', href: 'https://wa.me/27682858930' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Restock & deliver', to: '/wholesalers' },
      { label: 'Send a parcel', to: '/send-a-parcel' },
      { label: 'For wholesalers', to: '/wholesalers' },
      { label: 'For brands', to: '/brands' },
      { label: 'Platform & API', to: '/platform-api' },
    ],
  },
  {
    heading: 'Get started',
    links: [
      { label: 'Apply to drive', to: '/drivers' },
      { label: 'Become a partner', to: '/wholesalers' },
      { label: 'Reach the township', to: '/brands' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy (POPIA)', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Driver terms', href: '#' },
      { label: 'Protection policy', href: '#' },
    ],
  },
];

export const contactInfo = {
  whatsappGeneral: { label: 'LocalsZA', number: '068 285 8930', href: 'https://wa.me/27682858930' },
  whatsappLehlohonolo: { label: 'Lehlohonolo', number: '063 191 6693', href: 'https://wa.me/27631916693' },
  whatsappMartin: { label: 'Martin', number: '062 997 3007', href: 'https://wa.me/27629973007' },
  email: 'admin@locals-za.co.za',
  domain: 'locals-za.co.za',
};

export const coverageAreas = ['Katlehong', 'Vosloorus', 'Thokoza'];
