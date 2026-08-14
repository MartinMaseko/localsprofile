import SEO from '../components/seo/SEO';
import Button from '../components/common/Button';
import { SITE_URL } from '../content/site';
import './notFoundStyle.css';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="This page doesn't exist on LocalsZA — head back home to find your way around."
        path="/404"
      />
      <section className="not-found page-container">
        <h1 className="not-found-title">This street doesn't exist.</h1>
        <p className="not-found-body">The page you're looking for has moved or never existed. Let's get you back on route.</p>
        <Button label="Back to Home" href={SITE_URL} variant="primary" />
      </section>
    </>
  );
};

export default NotFound;
