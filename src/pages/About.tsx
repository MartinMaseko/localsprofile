import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { aboutContent } from '../content/about';
import { buildOrganizationSchema, buildPersonSchema } from '../content/schema';

const teamSection = aboutContent.sections.find((s) => s.kind === 'team-grid');

const About = () => {
  return (
    <>
      <SEO
        {...aboutContent.seo}
        jsonLd={[
          buildOrganizationSchema(),
          ...(teamSection?.kind === 'team-grid' ? buildPersonSchema(teamSection.members) : []),
        ]}
      />
      <Hero hero={aboutContent.hero} />
      <PageSections sections={aboutContent.sections} />
    </>
  );
};

export default About;
