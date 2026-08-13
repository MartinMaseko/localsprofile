import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { homeContent } from '../content/home';
import { buildOrganizationSchema } from '../content/schema';

const Home = () => {
  return (
    <>
      <SEO {...homeContent.seo} jsonLd={buildOrganizationSchema()} />
      <Hero hero={homeContent.hero} />
      <PageSections sections={homeContent.sections} />
    </>
  );
};

export default Home;
