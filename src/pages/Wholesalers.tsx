import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { wholesalersContent } from '../content/wholesalers';

const Wholesalers = () => {
  return (
    <>
      <SEO {...wholesalersContent.seo} />
      <Hero hero={wholesalersContent.hero} />
      <PageSections sections={wholesalersContent.sections} />
    </>
  );
};

export default Wholesalers;
