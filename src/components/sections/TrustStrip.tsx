import './trustStripStyle.css';

interface TrustStripProps {
  heading?: string;
  items: string[];
}

const TrustStrip = ({ heading, items }: TrustStripProps) => {
  const loopItems = [...items, ...items];

  return (
    <section className="trust-strip">
      <div className="page-container trust-strip-inner">
        {heading && <span className="trust-strip-heading">{heading}</span>}
        <div className="trust-strip-viewport">
          <div className="trust-strip-track">
            {loopItems.map((item, i) => (
              <span key={`${item}-${i}`} className="trust-strip-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
