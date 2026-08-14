import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { driversContent } from '../content/drivers';

const Drivers = () => {
  return (
    <>
      <SEO {...driversContent.seo} />
      <Hero hero={driversContent.hero} />
      <PageSections sections={driversContent.sections} />
    </>
  );
};

export default Drivers;
