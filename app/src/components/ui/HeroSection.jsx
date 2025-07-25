import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { text: 'Accueil', path: '/' },
  { text: 'À propos', path: '/about' },
  { text: 'Destination', path: '/destination' },
  { text: 'Actualité', path: '/news' },
  { text: 'Faq', path: '/faq' },
  { text: 'Contact', path: '/contact' }
];

const PAGE_INFO = {
  '/about': {
    title: 'À propos',
    description: "Découvrez qui nous sommes et notre mission pour faciliter vos voyages et projets d'immigration."
  },
  '/destination': {
    title: 'Destination',
    description: "Explorez nos destinations populaires et trouvez celle qui correspond à vos envies d'évasion."
  },
  '/news': {
    title: 'Actualité',
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
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-[320px] sm:h-[400px] lg:h-[480px] flex items-end">
      {/* Hero Image */}
      <img
        src="/images/about.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-start px-8 py-6 z-10">
        <div className="flex gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`text-lg font-barlow transition-colors duration-150 ${
                path === link.path ? 'font-semibold text-white' : 'text-white font-normal'
              }`}
              style={{ background: 'none', border: 'none', outline: 'none', padding: 0, cursor: 'pointer' }}
            >
              {link.text}
            </button>
          ))}
        </div>
      </nav>
      {/* Overlay for title/description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="px-8 py-6 max-w-xl w-full text-center">
          <h1 className="text-3xl font-quattrocento font-bold text-white mb-2">
            {customTitle || info.title}
          </h1>
          <p className="text-base font-barlow text-white">
            {customDescription || info.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
