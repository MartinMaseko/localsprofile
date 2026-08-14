import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { brandsContent } from '../content/brands';
import { buildOfferSchema } from '../content/schema';

const pricingSection = brandsContent.sections.find((s) => s.kind === 'pricing');

const Brands = () => {
  return (
    <>
      <SEO
        {...brandsContent.seo}
        jsonLd={pricingSection?.kind === 'pricing' ? buildOfferSchema(pricingSection.tiers) : undefined}
      />
      <Hero hero={brandsContent.hero} />
      <PageSections sections={brandsContent.sections} />
    </>
  );
};

export default Brands;
