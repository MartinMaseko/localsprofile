import type { CTA } from '../../content/types';
import Button from '../common/Button';
import './closingCTABandStyle.css';

interface ClosingCTABandProps {
  heading: string;
  body?: string;
  ctas: CTA[];
}

const ClosingCTABand = ({ heading, body, ctas }: ClosingCTABandProps) => {
  return (
    <section className="closing-cta-band">
      <div className="page-container">
        <h2 className="closing-cta-heading">{heading}</h2>
        {body && <p className="closing-cta-body">{body}</p>}
        <div className="btn-group">
          {ctas.map((cta) => (
            <Button key={cta.label} {...cta} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClosingCTABand;
