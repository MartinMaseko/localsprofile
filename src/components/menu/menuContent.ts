// Content block types for rich content structure
export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'image' | 'list' | 'highlight-list' | 'clickable-image' | 'team-member-profile' | 'contact-row';
  content: string | string[];
  level?: 1 | 2 | 3 | 4 | 5 | 6; // For headings
  alt?: string; // For images
  className?: string; // For custom styling
  url?: string; // For clickable images
  overlayText?: string; // For clickable image overlay text
  profileImage?: string; // For team member profile images
  role?: string; // For team member roles
  iconUrl?: string; // For contact rows
  contactType?: 'whatsapp' | 'email' | 'phone'; // For contact rows
}

export interface MenuSection {
  id: string;
  title: string;
  content: ContentBlock[];
}

export const menuContent: Record<string, MenuSection> = {
  'what-we-do': {
    id: 'what-we-do',
    title: 'What we do',
    content: [
      {
        type: 'paragraph',
        content: 'Locals ZA is a specialized e-commerce buyer service and last-mile delivery provider built specifically for the South African township economy. We simplify how micro-enterprises—like spaza shops, hair salons, and fast-food outlets—stock their businesses.'
      },
      {
        type: 'image',
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/whatwedo.jpg?alt=media&token=cb2d21b2-b659-486d-90b2-c6bd8fb526de',
        alt: 'South African township businesses',
        className: 'content-image'
      },
      {
        type: 'heading',
        content: 'Our Approach',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'By aggregating the buying power of hundreds of local traders, we secure bulk-buy prices that were previously out of reach for individual owners. We don\'t just offer an app; we provide a "feet-to-street" network of dedicated sales agents who offer personal support directly to your doorstep.'
      },
      {
        type: 'highlight-list',
        content: [
          'Specialized for SA township economy',
          'Aggregated buying power for bulk-buy prices',
          'Feet-to-street sales agent network'
        ]
      },
      {
        type: 'heading',
        content: 'Our Store App',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Experience our platform firsthand. Click below to visit our live store and see how we\'re transforming township commerce.'
      },
      {
        type: 'clickable-image',
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/LocalsHandgif.gif?alt=media&token=0a001719-272b-4da8-9660-123f8a97fb74',
        alt: 'Locals ZA Store App - Click to visit',
        className: 'store-app-image',
        url: 'https://locals-za.co.za/',
        overlayText: 'Click Me!'
      }
    ]
  },
  'our-solution': {
    id: 'our-solution',
    title: 'Our Solution',
    content: [
      {
        type: 'paragraph',
        content: 'Our solution professionalizes the informal supply chain through a powerful, integrated digital ecosystem.'
      },
      {
        type: 'image',
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/techeco.png?alt=media&token=b288215a-b707-4e3c-af65-724668329411',
        alt: '75/25 Discount Engine visualization',
        className: 'content-image'
      },
      {
        type: 'heading',
        content: 'For Traders',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'Our 75/25 Discount Engine automatically calculates procurement savings, giving 75% back to the customer as instant cash back.'
      },
      {
        type: 'heading',
        content: 'For Suppliers',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'We provide fully managed API services that handle product catalogs, inventory, and orders in real-time.'
      },
      {
        type: 'heading',
        content: 'The Intelligence',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'We turn cash-based transactions into digital data points, providing granular insights into township buying habits.'
      },
      {
        type: 'highlight-list',
        content: [
          '75/25 Discount Engine with instant cash back',
          'Fully managed API services for suppliers',
          'Intelligent driver network for next-day delivery'
        ]
      }
    ]
  },
  'the-team': {
    id: 'the-team',
    title: 'The Team',
    content: [
      {
        type: 'paragraph',
        content: 'Locals ZA is led by a team that combines first contact sales, deep marketing, data analytics and advanced technical expertise.'
      },
      {
        type: 'image',
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/teamBanner.png?alt=media&token=8dd45e55-3107-41cc-90f8-a1ab1a92482e',
        alt: 'Locals ZA team photo',
        className: 'team-image'
      },
      {
        type: 'team-member-profile',
        content: 'Lehlohonolo Lebea',
        role: 'CEO & Management Lead - Business',
        profileImage: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/lebea.jpg?alt=media&token=9c1dff47-3ba5-49cc-b4fc-9107defe837d',
        alt: 'Lehlohonolo Lebea profile photo',
        className: 'team-member-profile'
      },
      {
        type: 'paragraph',
        content: 'With a B.Com in Marketing and Business Management, Lehlohonolo manages our business communications, extensive sales representative network and drives the relationship-led growth that defines our community approach.'
      },
      {
        type: 'contact-row',
        content: ['lehlohonolo@locals-za.co.za'],
        iconUrl: 'https://img.icons8.com/ffb803/48/email.png',
        contactType: 'email',
        className: 'contact-email'
      },
      {
        type: 'team-member-profile',
        content: 'Martin Maseko',
        role: 'Lead Developer & COO | Founder - Digital',
        profileImage: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/martin.jpg?alt=media&token=86959307-360a-4158-a851-b8870e7c7960',
        alt: 'Martin Maseko profile photo',
        className: 'team-member-profile'
      },
      {
        type: 'paragraph',
        content: 'Full-Stack developer proficient in ASP.NET, React.js, and API design, Martin directs the technical architecture and digital strategy of the entire Locals ZA ecosystem, ensuring our tech remains robust, scalable, and user-friendly for everyone in the supply chain.'
      },
      {
        type: 'contact-row',
        content: ['martin@locals-za.co.za'],
        iconUrl: 'https://img.icons8.com/ffb803/48/email.png',
        contactType: 'email',
        className: 'contact-email'
      }
    ]
  },
  'contact-us': {
    id: 'contact-us',
    title: 'Get In Touch',
    content: [
      {
        type: 'heading',
        content: 'Ready to Transform Your Business?',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Got questions or want to partner with us? Reach out — we\'d love to hear from you.'
      },
      {
        type: 'heading',
        content: 'Contact Information',
        level: 3
      },
      {
        type: 'contact-row',
        content: 'LocalsZA - 068 285 8930',
        iconUrl: 'https://img.icons8.com/color/48/whatsapp--v1.png',
        contactType: 'whatsapp',
        className: 'contact-whatsapp',
        url: 'https://wa.me/27682858930'
      },
      {
        type: 'contact-row',
        content: 'Lehlohonolo - 063 191 6693',
        iconUrl: 'https://img.icons8.com/color/48/whatsapp--v1.png',
        contactType: 'whatsapp',
        className: 'contact-whatsapp',
        url: 'https://wa.me/27631916693'
      },
      {
        type: 'contact-row',
        content: 'Martin - 062 997 3007',
        iconUrl: 'https://img.icons8.com/color/48/whatsapp--v1.png',
        contactType: 'whatsapp',
        className: 'contact-whatsapp',
        url: 'https://wa.me/27629973007'
      },
      {
        type: 'contact-row',
        content: ['admin@locals-za.co.za'],
        iconUrl: 'https://img.icons8.com/ffb803/48/email.png',
        contactType: 'email',
        className: 'contact-email'
      },
      {
        type: 'heading',
        content: 'Partnership Opportunities',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'We\'re always looking for strategic partnerships with suppliers, logistics providers, and technology partners who share our vision of empowering township economies.'
      },
      {
        type: 'highlight-list',
        content: [
          'Supplier partnerships welcome',
          'Technology integration opportunities',
          'Community development initiatives'
        ]
      }
    ]
  }
};
