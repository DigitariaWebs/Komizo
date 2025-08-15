import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { text: 'Accueil', path: '/' },
  { text: 'À propos', path: '/about' },
  { text: 'Services', path: '/services' },
  { text: 'Destination', path: '/destination' },
  { text: 'Conseil', path: '/news' },
  { text: 'Faq', path: '/faq' },
  { text: 'Contact', path: '/contact' }
];

const PAGE_INFO = {
  '/about': {
    title: 'À propos',
    description: "Découvrez qui nous sommes et notre mission pour faciliter vos voyages et projets d'immigration."
  },
  '/services': {
    title: 'Services',
    description: "Découvrez nos services personnalisés pour vous accompagner dans toutes vos démarches d'immigration."
  },
  '/destination': {
    title: 'Destination',
    description: "Explorez nos destinations populaires et trouvez celle qui correspond à vos envies d'évasion."
  },
  '/news': {
    title: 'Conseil',
    description: "Restez informé avec nos conseils, actualités et inspirations pour voyager en toute sécurité."
  },
  '/faq': {
    title: 'FAQ',
    description: "Trouvez les réponses à vos questions fréquentes sur nos services et l'immigration."
  },
  '/contact': {
    title: 'Contact',
    description: "Contactez-nous pour toute demande d'information ou d'accompagnement personnalisé."
  }
};

const HeroSection = ({ customTitle, customDescription }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const info = PAGE_INFO[path] || { title: '', description: '' };

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-[180px] sm:h-[300px] md:h-[360px] lg:h-[480px] flex items-end">
      {/* Hero Image */}
      <img
        src="/images/about.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-start px-2 sm:px-4 md:px-8 py-3 sm:py-6 z-10">
        <div className="flex gap-2 md:ml-2 md:mt-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
          {NAV_LINKS.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`font-barlow transition-colors duration-150 ${
                path === link.path ? 'font-semibold text-white' : 'text-white font-normal'
              } text-[8px] xs:text-xs sm:text-base`}
              style={{ background: 'none', border: 'none', outline: 'none', padding: 0, cursor: 'pointer' }}
            >
              {link.text}
            </button>
          ))}
        </div>
      </nav>
      {/* Overlay for title/description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="px-2 sm:px-8 py-4 sm:py-6 max-w-xs sm:max-w-xl w-full text-center">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-quattrocento font-bold text-white mb-2">
            {customTitle || info.title}
          </h1>
          <p className="text-xs sm:text-base md:text-lg font-barlow text-white">
            {customDescription || info.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
           