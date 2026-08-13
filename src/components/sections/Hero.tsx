import type { HeroContent } from '../../content/types';
import Button from '../common/Button';
import './heroStyle.css';

interface HeroProps {
  hero: HeroContent;
}

const Hero = ({ hero }: HeroProps) => {
  return (
    <section className={`hero hero-${hero.variant ?? 'page'}`}>
      <div className="page-container hero-container">
        {hero.eyebrow && <span className="hero-eyebrow">{hero.eyebrow}</span>}
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
        {hero.ctas.length > 0 && (
          <div className="btn-group hero-ctas">
            {hero.ctas.map((cta) => (
              <Button key={cta.label} {...cta} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
