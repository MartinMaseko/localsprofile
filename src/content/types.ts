export type CTAVariant = 'primary' | 'whatsapp' | 'outline' | 'dark';

export interface CTA {
  label: string;
  to?: string;
  href?: string;
  variant: CTAVariant;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctas: CTA[];
  variant?: 'home' | 'page';
  backgroundImage?: string;
  backgroundVideo?: string;
  designerNote?: string;
}

export interface ContentBlockItem {
  type: 'heading' | 'paragraph' | 'list' | 'highlight-list';
  content: string | string[];
  level?: 2 | 3 | 4;
}

export interface FeatureCardItem {
  title: string;
  body: string;
}

export interface PricingTier {
  name: string;
  price: string;
  storeCount: number;
  bestFor: string;
  features?: string[];
  highlighted?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
}

export type PageSection =
  | { kind: 'blocks'; blocks: ContentBlockItem[] }
  | { kind: 'trust-strip'; heading?: string; items: string[] }
  | { kind: 'feature-cards'; heading?: string; cards: FeatureCardItem[] }
  | { kind: 'why-us'; heading?: string; points: FeatureCardItem[] }
  | { kind: 'pricing'; heading?: string; subheading?: string; tiers: PricingTier[]; note?: string }
  | { kind: 'team-grid'; heading?: string; members: TeamMember[] }
  | { kind: 'closing-cta'; heading: string; body?: string; ctas: CTA[] };

export interface PageContent {
  seo: SeoMeta;
  hero: HeroContent;
  sections: PageSection[];
}
