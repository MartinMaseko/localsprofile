import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { platformApiContent } from '../content/platformApi';

const PlatformApi = () => {
  return (
    <>
      <SEO {...platformApiContent.seo} />
      <Hero hero={platformApiContent.hero} />
      <PageSections sections={platformApiContent.sections} />
    </>
  );
};

export default PlatformApi;
