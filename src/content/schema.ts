import { SITE_URL, SITE_NAME, contactInfo, coverageAreas } from './site';
import type { PricingTier, TeamMember } from './types';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/locals-favicon.svg`,
    image: `${SITE_URL}/locals-favicon.svg`,
    description: 'LocalsZA is a last-mile delivery network hyper-specialised for Ekurhuleni — restocking, parcels and bulky-item courier, and brand activation for townships in the East Rand.',
    areaServed: coverageAreas.map((area) => ({ '@type': 'Place', name: area })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ekurhuleni',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+27${contactInfo.whatsappGeneral.number.replace(/\s/g, '').slice(1)}`,
        email: contactInfo.email,
        areaServed: 'ZA',
      },
    ],
    sameAs: [],
  };
}

export function buildPersonSchema(members: TeamMember[]) {
  return members.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    email: member.email,
  }));
}

export function buildOfferSchema(tiers: PricingTier[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Township Sales Promotion Packages',
    itemListElement: tiers.map((tier) => ({
      '@type': 'Offer',
      name: `${tier.name} — ${tier.storeCount} stores`,
      priceCurrency: 'ZAR',
      price: tier.price.replace(/[^0-9]/g, ''),
      description: tier.bestFor,
    })),
  };
}
