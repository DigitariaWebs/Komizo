import React from 'react';

const Footer = () => {
  const pageLinks = [
    { text: 'Accueil', href: '#' },
    { text: 'À propos', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Testimonials', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'FAQ', href: '#' }
  ];

  const legalLinks = [
    { text: 'Term Of Use', href: '#' },
    { text: 'Privacy Policy', href: '#' }
  ];

  const socialIcons = [
    { src: '/images/img_akar_icons_linkedin_box_fill.svg', alt: 'LinkedIn', href: '#' },
    { src: '/images/img_vector.svg', alt: 'Facebook', href: '#' },
    { src: '/images/img_akar_icons_twitter_fill.svg', alt: 'Twitter', href: '#' },
    { src: '/images/img_ant_design_instagram_filled.svg', alt: 'Instagram', href: '#' }
  ];

  const contactInfo = [
    { icon: '/images/img_call.svg', text: '+1 27181 9281', alt: 'Phone' },
    { icon: '/images/img_message.svg', text: 'komizi@domain.com', alt: 'Email' },
    { icon: '/images/img_location.svg', text: 'Court Tower 432, Burn - Canada', alt: 'Address' }
  ];

  return (
    <footer className="w-full bg-footer-1 relative pt-10 pb-4">
      {/* White map image under text */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-end">
        <img 
          src="/images/img_map_white_a700_550x1616.png" 
          alt="World Map Background" 
          className="w-full h-[80%] object-cover opacity-80"
        />
      </div>
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {/* Komizi Brand & Social */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="/images/img_footer_logo.png"
              alt="Komizi Logo"
              className="w-[36px] h-[36px] mb-1"
            />
            <span className="text-[22px] font-quattrocento font-bold text-global-8 tracking-wide">Komizi</span>
            <p className="text-[12px] font-quattrocentosans text-footer-1 leading-[18px] max-w-[220px]">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant Porttitor augue enim.
            </p>
            <div className="flex gap-3 mt-2">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="transition-transform duration-200 hover:scale-110"
                  aria-label={social.alt}
                >
                  <img src={social.src} alt={social.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          {/* Page Navigation */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-[15px] font-quattrocento font-bold text-global-8 mb-2">Page</span>
            <ul className="flex flex-col gap-1">
              {pageLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[13px] font-barlow text-footer-1 hover:underline hover:text-global-8 transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-[15px] font-quattrocento font-bold text-global-8 mb-2">Links</span>
            <ul className="flex flex-col gap-1">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[12px] font-barlow text-footer-1 hover:underline hover:text-global-8 transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-[15px] font-quattrocento font-bold text-global-8 mb-2">Contact</span>
            <ul className="flex flex-col gap-2">
              {contactInfo.map((contact, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <img src={contact.icon} alt={contact.alt} className="w-4 h-4" />
                  <span className="text-[13px] font-barlow text-footer-1">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-4 pt-3 text-center">
          <span className="text-[12px] text-footer-1 font-barlow">
            ©2022 Komizi. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;