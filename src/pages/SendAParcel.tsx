import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import PageSections from '../components/sections/PageSections';
import { sendAParcelContent } from '../content/sendAParcel';

const SendAParcel = () => {
  return (
    <>
      <SEO {...sendAParcelContent.seo} />
      <Hero hero={sendAParcelContent.hero} />
      <PageSections sections={sendAParcelContent.sections} />
    </>
  );
};

export default SendAParcel;
