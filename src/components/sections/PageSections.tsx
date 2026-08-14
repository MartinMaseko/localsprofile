import type { PageSection } from '../../content/types';
import SectionBlocks from './SectionBlocks';
import TrustStrip from './TrustStrip';
import FeatureCards from './FeatureCards';
import WhyUsPoints from './WhyUsPoints';
import PricingCards from './PricingCards';
import TeamMemberCard from './TeamMemberCard';
import ClosingCTABand from './ClosingCTABand';

interface PageSectionsProps {
  sections: PageSection[];
}

const PageSections = ({ sections }: PageSectionsProps) => {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.kind) {
          case 'blocks':
            return <SectionBlocks key={i} blocks={section.blocks} />;
          case 'trust-strip':
            return <TrustStrip key={i} heading={section.heading} items={section.items} />;
          case 'feature-cards':
            return <FeatureCards key={i} heading={section.heading} cards={section.cards} />;
          case 'why-us':
            return <WhyUsPoints key={i} heading={section.heading} points={section.points} />;
          case 'pricing':
            return (
              <PricingCards
                key={i}
                heading={section.heading}
                subheading={section.subheading}
                tiers={section.tiers}
                note={section.note}
              />
            );
          case 'team-grid':
            return <TeamMemberCard key={i} heading={section.heading} members={section.members} />;
          case 'closing-cta':
            return <ClosingCTABand key={i} heading={section.heading} body={section.body} ctas={section.ctas} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default PageSections;
