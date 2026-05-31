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
        content: 'Locals ZA is an Integrated Route to Market Solutions Provider for the Informal Economy — digitizing the informal mile.'
      },
      {
        type: 'paragraph',
        content: 'We bridge the gap between large-scale wholesalers and the high-frequency, "small-basket" requirements of micro-enterprises like spaza shops, food outlets, and hair salons, driving digital migration of cash-based micro-retail businesses and professionalizing the Informal Supply Chain through a community-based approach.'
      },
      {
        type: 'image',
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/whatwedo.jpg?alt=media&token=cb2d21b2-b659-486d-90b2-c6bd8fb526de',
        alt: 'South African township businesses',
        className: 'content-image'
      },
      {
        type: 'heading',
        content: 'Who We Serve',
        level: 3
      },
      {
        type: 'paragraph',
        content: 'Our customers are mobile-savvy micro-retailers who restock frequently at low to moderate quantities, driven by customer demand — and who need to outsource transport because they have no vehicle and limited capital.'
      },
      {
        type: 'highlight-list',
        content: [
          'No vehicle — outsource transport for restocking',
          'Low cash flow — limited stock capacity or start-up capital',
          'Mobile-savvy — mobile is their primary digital device',
          'High frequency — small, regular orders at low to moderate quantities',
          'Just-in-time — restocking driven by customer demand'
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
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/LocalsHandpng.png?alt=media&token=fc37cb73-445b-46d6-8dc3-f65e55fc0b34',
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
        content: 'We offer an integrated B2B delivery ecosystem that requires zero operational changes for your business. Your customers buy from you as normal — at checkout, they choose LocalsZA as their delivery method via our app.'
      },
      {
        type: 'image',
        content: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/ourSolution.png?alt=media&token=fd8c3621-62ef-45a3-8e7c-a3a7b828f3ab',
        alt: 'The Locals ZA Ecosystem',
        className: 'content-image'
      },
      {
        type: 'heading',
        content: 'Seamless In-Store Protocol Compliance',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'Our verified driver network operates within your designated loading bays and collection rules, checking in using your required order reference numbers.'
      },
      {
        type: 'heading',
        content: 'Zero Disruption Integration',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'You focus on moving inventory and managing your floors. We handle dispatch, routing, and last-mile delivery.'
      },
      {
        type: 'heading',
        content: 'GMV Growth',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'By removing transport barriers, we unlock high-frequency, smaller-basket orders from micro-enterprises that previously couldn\'t reach you.'
      },
      {
        type: 'heading',
        content: 'Next-Generation API Integration',
        level: 2,
        className: 'feature-heading'
      },
      {
        type: 'paragraph',
        content: 'For wholesale operations looking to streamline digital sales, our platform offers an e-commerce API plug-in — pushing fulfillment requests directly to our network and automating driver dispatch the moment an order is ready for pickup.'
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
        role: 'Solutions Architect & COO | Founder - Digital',
        profileImage: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/martin.jpg?alt=media&token=86959307-360a-4158-a851-b8870e7c7960',
        alt: 'Martin Maseko profile photo',
        className: 'team-member-profile'
      },
      {
        type: 'paragraph',
        content: 'Solutions Architect & Full-Stack Developer proficient in ASP.NET, React.js, and API design, Martin directs the technical architecture and digital strategy of the entire Locals ZA ecosystem, ensuring our tech remains robust, scalable, and user-friendly for everyone in the supply chain.'
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
