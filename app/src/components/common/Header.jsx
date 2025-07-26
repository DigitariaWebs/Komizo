import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ hideLogoOnMobile = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'À propos', path: '/about' },
    { text: 'Destination', path: '/destination' },
    { text: 'Actualité', path: '/news' },
    { text: 'Faq', path: '/faq' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-10 py-4">
      {/* Flex row for logo and nav on desktop, stacked on mobile */}
      <div className="flex items-center gap-4 px-4 sm:px-6 lg:px-[56px]">
        {/* Logo (show only on lg and up) */}
        <div className="hidden lg:block">
          <img
            src="/images/img_header_logo.png"
            alt="Komizi Logo"
            className="w-[39px] h-[39px] sm:w-[58px] sm:h-[58px] md:w-[78px] md:h-[78px]"
          />
        </div>
        {/* Hamburger Menu Icon (mobile only) */}
        <button
          ref={menuBtnRef}
          className="block lg:hidden bg-white/80 rounded-full shadow-sm p-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="w-7 h-7 text-header-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Desktop nav next to logo */}
        <nav className="hidden lg:flex flex-1">
          <div className="flex gap-[24px] xl:gap-[32px] items-center flex-wrap">
            {[
              { text: 'Accueil', path: '/' },
              { text: 'À propos', path: '/about' },
              { text: 'Destination', path: '/destination' },
              { text: 'Actualité', path: '/news' },
              { text: 'Faq', path: '/faq' },
              { text: 'Contact', path: '/contact' }
            ].map((item, index) => (
              <button
                key={index}
                role="menuitem"
                onClick={() => navigate(item.path)}
                className="text-[18px] xl:text-[20px] font-barlow leading-[22px] xl:leading-[24px] text-header-1 transition-colors duration-200 hover:opacity-80 whitespace-nowrap font-normal"
              >
                {item.text}
              </button>
            ))}
          </div>
        </nav>
        {/* Dropdown menu (mobile only) */}
        {menuOpen && (
          <nav
            ref={menuRef}
            className="absolute top-[-20px] left-0 right-0 w-full max-w-none bg-white rounded-none shadow-lg z-[103] border-b animate-dropdown"
            style={{
              marginTop: 0,
              width: '100vw',
              left: 0,
              right: 0,
            }}
          >
            <button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition"
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-6 h-6 text-header-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col gap-2 py-6 px-6 items-center">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(item.path);
                  }}
                  className="text-lg font-barlow leading-[28px] text-header-1 transition-colors duration-200 hover:opacity-80 font-normal py-3 w-full text-center"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;