import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'À propos', path: '/about' },
    { text: 'Destination', path: '/destination' },
    { text: 'Actualité', path: '/news' },
    { text: 'Faq', path: '/faq' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <header className="w-full relative z-10 py-4">
      <div className="w-full max-w-[50%] lg:max-w-[60%] px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center w-full gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/img_header_logo.png" 
              alt="Komizi Logo" 
              className="w-[39px] h-[39px] sm:w-[58px] sm:h-[58px] md:w-[78px] md:h-[78px]"
            />
          </div>
          
          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex">
            <div className="flex gap-[24px] xl:gap-[32px] justify-start items-center flex-wrap">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  onClick={() => navigate(item.path)}
                  className={`text-[18px] xl:text-[20px] font-barlow leading-[22px] xl:leading-[24px] text-header-1 transition-colors duration-200 hover:opacity-80 whitespace-nowrap font-normal`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </nav>

          {/* Hamburger Menu Icon (Mobile/Tablet) */}
          <button 
            className="block lg:hidden p-2 self-start" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-header-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(item.path);
                  }}
                  className={`text-[16px] font-barlow leading-[20px] text-left text-header-1 transition-colors duration-200 hover:opacity-80 font-normal`}
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