import './trustStripStyle.css';

interface TrustStripProps {
  heading?: string;
  items: string[];
}

const TrustStrip = ({ heading, items }: TrustStripProps) => {
  return (
    <section className="trust-strip">
      <div className="page-container trust-strip-inner">
        {heading && <span className="trust-strip-heading">{heading}</span>}
        <div className="trust-strip-items">
          {items.map((item) => (
            <span key={item} className="trust-strip-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
