import { Link } from 'react-router-dom';
import { footerColumns, contactInfo, SITE_TAGLINE, SITE_NAME } from '../../content/site';
import './footerStyle.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="page-container">
                <div className="footer-columns">
                    {footerColumns.map((column) => (
                        <div key={column.heading} className="footer-column">
                            <h3 className="footer-column-heading">{column.heading}</h3>
                            <ul className="footer-column-links">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        {link.to ? (
                                            <Link to={link.to} className="footer-link">
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="footer-link"
                                                target={link.href?.startsWith('http') ? '_blank' : undefined}
                                                rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="footer-tagline">
                    <strong>{SITE_NAME}</strong> — {SITE_TAGLINE}
                </p>

                <div className="footer-contact">
                    <a href={contactInfo.whatsappGeneral.href} target="_blank" rel="noopener noreferrer">
                        WhatsApp: {contactInfo.whatsappGeneral.number}
                    </a>
                    <span className="footer-contact-sep">·</span>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    <span className="footer-contact-sep">·</span>
                    <span>{contactInfo.domain}</span>
                </div>

                <p className="footer-copyright">© {year} {SITE_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
