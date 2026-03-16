import { JSX, useState } from 'react';
import type { MenuSection, ContentBlock } from './menuContent';
import { getImageWithFallback } from '../../utils/imageHelper';
import './overlayStyle.css';

interface OverlayProps {
  section: MenuSection;
  onClose: () => void;
}

const Overlay = ({ section, onClose }: OverlayProps) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 250);
  };

  const renderContentBlock = (block: ContentBlock, index: number) => {
    const { type, content, level, alt, className, url, overlayText, iconUrl, contactType } = block;

    switch (type) {
      case 'heading':
        const HeadingTag = `h${level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={index} className={`overlay-heading ${className || ''}`}>
            {content as string}
          </HeadingTag>
        );

      case 'paragraph':
        return (
          <p key={index} className={`overlay-paragraph ${className || ''}`}>
            {content as string}
          </p>
        );

      case 'image':
        // Extract filename to use as fallback key
        const filename = (content as string).split('/').pop()?.split('.')[0] || '';
        const imageSrc = getImageWithFallback(content as string, filename);
        
        return (
          <div key={index} className={`overlay-image-container ${className || ''}`}>
            <img 
              src={imageSrc} 
              alt={alt || 'Content image'} 
              className="overlay-image"
            />
          </div>
        );

      case 'list':
        return (
          <ul key={index} className={`overlay-list ${className || ''}`}>
            {(content as string[]).map((item, itemIndex) => (
              <li key={itemIndex} className="overlay-list-item">
                {item}
              </li>
            ))}
          </ul>
        );

      case 'highlight-list':
        return (
          <ul key={index} className={`overlay-highlights ${className || ''}`}>
            {(content as string[]).map((item, itemIndex) => (
              <li key={itemIndex} className="overlay-highlight">
                {item}
              </li>
            ))}
          </ul>
        );

      case 'clickable-image':
        const clickableFilename = (content as string).split('/').pop()?.split('.')[0] || '';
        const clickableImageSrc = getImageWithFallback(content as string, clickableFilename);
        
        return (
          <div key={index} className={`overlay-clickable-image-container ${className || ''}`}>
            <div 
              className="overlay-clickable-image-wrapper"
              onClick={() => url && window.open(url, '_blank')}
              style={{ cursor: url ? 'pointer' : 'default' }}
            >
              <img 
                src={clickableImageSrc} 
                alt={alt || 'Clickable image'} 
                className="overlay-clickable-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2xpY2thYmxlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                  target.style.opacity = '0.5';
                }}
              />
              {overlayText && (
                <div className="overlay-click-overlay">
                  <span className="overlay-click-text">{overlayText}</span>
                </div>
              )}
            </div>
          </div>
        );

      case 'team-member-profile':
        const { profileImage, role } = block;
        const profileFilename = profileImage?.split('/').pop()?.split('.')[0] || '';
        const profileImageSrc = profileImage ? getImageWithFallback(profileImage, profileFilename) : '';
        
        return (
          <div key={index} className={`overlay-team-member-profile ${className || ''}`}>
            <div className="team-member-profile-content">
              {profileImage && (
                <div className="team-member-profile-image-container">
                  <img 
                    src={profileImageSrc}
                    alt={alt || `${content} profile photo`}
                    className="team-member-profile-image"
                  />
                </div>
              )}
              <div className="team-member-info">
                <h2 className="team-member-name">{content as string}</h2>
                {role && <h3 className="team-member-role-inline">{role}</h3>}
              </div>
            </div>
          </div>
        );

      case 'contact-row':
        const isArray = Array.isArray(content);
        const contactContent = isArray ? content as string[] : [content as string];
        
        return (
          <div key={index} className={`overlay-contact-row ${className || ''}`}>
            <div className="contact-row-content">
              {iconUrl && (
                <div className="contact-icon-container">
                  <img 
                    src={iconUrl}
                    alt={`${contactType} icon`}
                    className="contact-icon"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="contact-info">
                {contactContent.map((item, itemIndex) => (
                  <div key={itemIndex} className="contact-item">
                    {contactType === 'whatsapp' && url ? (
                      <a href={url} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {item}
                      </a>
                    ) : contactType === 'email' ? (
                      <a href={`mailto:${item}`} className="contact-link">
                        {item}
                      </a>
                    ) : (
                      <span className="contact-text">{item}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );



      default:
        return null;
    }
  };

  return (
    <div className={`overlay-panel${closing ? ' closing' : ''}`}>
      <button className="overlay-close" onClick={handleClose} aria-label="Close">
        ✕
      </button>
      <h1 className="overlay-title">{section.title}</h1>
      <div className="overlay-content">
        {section.content.map((block, index) => renderContentBlock(block, index))}
      </div>
    </div>
  );
};

export default Overlay;
