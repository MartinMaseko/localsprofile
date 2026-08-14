import type { PricingTier } from '../../content/types';
import Button from '../common/Button';
import './pricingCardsStyle.css';

interface PricingCardsProps {
  heading?: string;
  subheading?: string;
  tiers: PricingTier[];
  note?: string;
}

const PricingCards = ({ heading, subheading, tiers, note }: PricingCardsProps) => {
  return (
    <section id="packages" className="page-section pricing-section">
      <div className="page-container">
        {heading && <h2 className="section-heading">{heading}</h2>}
        {subheading && <p className="pricing-subheading">{subheading}</p>}
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div key={tier.name} className={`pricing-card${tier.highlighted ? ' pricing-card-highlighted' : ''}`}>
              <h3 className="pricing-card-name">{tier.name}</h3>
              <div className="pricing-card-price">{tier.price}</div>
              <div className="pricing-card-stores">{tier.storeCount} stores</div>
              <p className="pricing-card-best-for">{tier.bestFor}</p>
              {tier.features && tier.features.length > 0 && (
                <ul className="pricing-card-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              <Button label="Book a brand call" href="mailto:martin@localsza.co.za" variant={tier.highlighted ? 'primary' : 'outline'} />
            </div>
          ))}
        </div>
        {note && <p className="pricing-note">{note}</p>}
      </div>
    </section>
  );
};

export default PricingCards;
