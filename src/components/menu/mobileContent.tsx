import React, { JSX } from 'react';
import { MenuSection, ContentBlock } from './menuContent';
import { getImagePath } from '../../utils/imageHelper';
import './mobileContentStyle.css';

interface MobileContentProps {
  section: MenuSection;
}

const MobileContent: React.FC<MobileContentProps> = ({ section }) => {
  const renderContentBlock = (block: ContentBlock): React.ReactNode => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level || 1}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag className={`mobile-content-${block.type} ${block.className || ''}`}>
            {block.content as string}
          </HeadingTag>
        );

      case 'paragraph':
        return (
          <p className={`mobile-content-${block.type} ${block.className || ''}`}>
            {block.content as string}
          </p>
        );

      case 'image':
        return (
          <img
            src={getImagePath(block.content as string)}
            alt={block.alt || ''}
            className={`mobile-content-${block.type} ${block.className || ''}`}
          />
        );

      case 'list':
        return (
          <ul className={`mobile-content-${block.type} ${block.className || ''}`}>
            {(block.content as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );

      case 'highlight-list':
        return (
          <ul className={`mobile-content-${block.type} ${block.className || ''}`}>
            {(block.content as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );

      case 'clickable-image':
        return (
          <div className={`mobile-content-${block.type} ${block.className || ''}`}>
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-image-container"
            >
              <img
                src={getImagePath(block.content as string)}
                alt={block.alt || ''}
                className="clickable-image"
              />
              {block.overlayText && (
                <div className="overlay-text">
                  {block.overlayText}
                </div>
              )}
            </a>
          </div>
        );

      case 'team-member-profile':
        return (
          <div className={`mobile-content-${block.type} ${block.className || ''}`}>
            {block.profileImage && (
              <img
                src={getImagePath(block.profileImage)}
                alt={block.alt || ''}
                className="team-member-image"
              />
            )}
            <div className="team-member-info">
              <h3 className="team-member-name">{block.content as string}</h3>
              {block.role && <p className="team-member-role">{block.role}</p>}
            </div>
          </div>
        );

      case 'contact-row':
        const content = Array.isArray(block.content) ? block.content[0] : block.content as string;
        const isWhatsApp = block.contactType === 'whatsapp';
        const isEmail = block.contactType === 'email';
        
        return (
          <div className={`mobile-content-${block.type} ${block.className || ''}`}>
            {block.iconUrl && (
              <img src={block.iconUrl} alt={block.contactType} className="contact-icon" />
            )}
            {isWhatsApp ? (
              <a
                href={block.url || `https://wa.me/${content.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {content}
              </a>
            ) : isEmail ? (
              <a href={`mailto:${content}`} className="contact-link">
                {content}
              </a>
            ) : (
              <span className="contact-text">{content}</span>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mobile-content">
      <h2 className="mobile-content-title animate-fade-in">{section.title}</h2>
      <div className="mobile-content-body">
        {section.content.map((block, index) => (
          <div 
            key={index} 
            className={`mobile-content-block animate-slide-up`}
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            {renderContentBlock(block)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileContent;