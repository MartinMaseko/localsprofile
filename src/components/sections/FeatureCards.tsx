import type { FeatureCardItem } from '../../content/types';
import './featureCardsStyle.css';

interface FeatureCardsProps {
  heading?: string;
  cards: FeatureCardItem[];
}

const FeatureCards = ({ heading, cards }: FeatureCardsProps) => {
  return (
    <section className="page-section feature-cards-section">
      <div className="page-container">
        {heading && <h2 className="section-heading">{heading}</h2>}
        <div className="feature-cards-grid">
          {cards.map((card) => (
            <div key={card.title} className="feature-card">
              <h3 className="feature-card-title">{card.title}</h3>
              <p className="feature-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
