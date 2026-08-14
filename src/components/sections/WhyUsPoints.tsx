import type { FeatureCardItem } from '../../content/types';
import './whyUsPointsStyle.css';

interface WhyUsPointsProps {
  heading?: string;
  points: FeatureCardItem[];
}

const WhyUsPoints = ({ heading, points }: WhyUsPointsProps) => {
  return (
    <section className="page-section why-us-section">
      <div className="page-container">
        {heading && <h2 className="section-heading">{heading}</h2>}
        <ul className="why-us-list">
          {points.map((point) => (
            <li key={point.title} className="why-us-item">
              <span className="why-us-check">✓</span>
              <span>
                <strong className="why-us-title">{point.title}</strong>{' '}
                <span className="why-us-body">{point.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUsPoints;
