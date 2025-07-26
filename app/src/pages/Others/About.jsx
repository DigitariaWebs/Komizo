import React from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';
import OverlappedImages from '../../components/ui/OverlappedImages';

const aboutImages = [
  { src: '/images/img_image_5.png', alt: 'Voyage 1' },
  { src: '/images/img_image_6.png', alt: 'Voyage 2' },
  { src: '/images/img_image_49.png', alt: 'Voyage 3' }
];
const decorativeElement = {
  src: '/images/img_ellipse_5.svg',
  alt: 'Décoratif'
};

const guideImages = [
  { src: '/images/img_image_24.png', alt: 'Guide 1' },
  { src: '/images/img_image_17.png', alt: 'Guide 2' },
  { src: '/images/img_image_28.png', alt: 'Guide 3' }
];

const stats = [
  { label: 'Tour Guide', value: '+220' },
  { label: 'Déstinations', value: '+880' },
  { label: 'Bon review', value: '+122K' }
];

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-global-2">
      <HeroSection />

      {/* Section 1 */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Mobile layout: title, subtitle, image, description */}
        <div className="block lg:hidden w-full">
          <span className="text-[18px] font-quattrocento font-bold text-global-7 mb-2 block">À propos</span>
          <h2 className="text-[20px] font-quattrocento font-bold text-global-6 mb-4 block">
            Komizi — le Guide & compagnon de décisions de voyage
          </h2>
          <div className="w-full flex justify-center mb-4">
            <OverlappedImages images={aboutImages} decorativeElement={decorativeElement} className="max-w-xs w-full" />
          </div>
          <p className="text-[14px] font-barlow text-global-4 mb-4">
            Chez KOMIZI, nous croyons que voyager ou s’installer ailleurs ne devrait jamais être un saut dans l’inconnu. Spécialisés dans l’accompagnement des voyageurs et futurs expatriés, nous vous guidons pas à pas pour faire les bons choix au bon moment.<br />
            Que vous envisagiez de visiter un pays pour la première fois ou d’y commencer une nouvelle vie, nous vous offrons des conseils fiables, des informations actualisées et une vision claire de chaque destination.
          </p>
          {/* Stats Row */}
          <div className="flex flex-row w-full justify-between mt-2 gap-2">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[18px] font-quattrocento font-bold text-global-6">{stat.value}</span>
                <span className="text-[11px] font-barlow text-global-4">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop layout */}
        <div className="hidden lg:flex flex-row items-center gap-8 sm:gap-12">
          {/* Overlapped Images Left */}
          <div className="w-1/2 flex justify-center mb-8 lg:mb-0">
            <OverlappedImages images={aboutImages} decorativeElement={decorativeElement} className="max-w-xs sm:max-w-md w-full" />
          </div>
          {/* Texts & Stats Right */}
          <div className="w-1/2 flex flex-col items-start gap-4 sm:gap-6">
            <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-quattrocento font-bold text-global-7 mb-1 sm:mb-2">À propos</span>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-quattrocento font-bold text-global-6 mb-2 sm:mb-4">
              Komizi — le Guide & compagnon de décisions de voyage
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-barlow text-global-4 mb-4 sm:mb-6">
              Chez KOMIZI, nous croyons que voyager ou s’installer ailleurs ne devrait jamais être un saut dans l’inconnu. Spécialisés dans l’accompagnement des voyageurs et futurs expatriés, nous vous guidons pas à pas pour faire les bons choix au bon moment.<br />
              Que vous envisagiez de visiter un pays pour la première fois ou d’y commencer une nouvelle vie, nous vous offrons des conseils fiables, des informations actualisées et une vision claire de chaque destination.
            </p>
            {/* Stats Row - full width, spaced */}
            <div className="flex flex-row w-full justify-between mt-2 gap-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-quattrocento font-bold text-global-6">{stat.value}</span>
                  <span className="text-[11px] sm:text-[13px] lg:text-[15px] font-barlow text-global-4">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-16 flex flex-col items-start">
        {/* Yellow Section Title */}
        <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-quattrocento font-bold text-global-7 mb-1 sm:mb-2">Tour Guide</span>
        {/* Main Heading */}
        <div className="w-full flex flex-col items-start mb-4 sm:mb-8">
          <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-quattrocento font-bold text-global-6 mb-1 sm:mb-2 text-left">
            Guide Professionel Prêt à guider votre voyage
          </h2>
        </div>
        {/* 3 Inclined Images with more space */}
        <div className="flex flex-col sm:flex-row w-full justify-between items-center sm:items-end gap-6 sm:gap-12 mt-2 sm:mt-4 mb-4 sm:mb-6">
          <img
            src={guideImages[0].src}
            alt={guideImages[0].alt}
            className="w-[100px] sm:w-[140px] lg:w-[220px] h-[100px] sm:h-[160px] lg:h-[260px] object-cover rounded-xl shadow-lg transform -rotate-6"
            style={{ zIndex: 1 }}
          />
          <img
            src={guideImages[1].src}
            alt={guideImages[1].alt}
            className="w-[110px] sm:w-[160px] lg:w-[260px] h-[110px] sm:h-[180px] lg:h-[300px] object-cover rounded-xl shadow-2xl transform rotate-3 scale-110"
            style={{ zIndex: 2 }}
          />
          <img
            src={guideImages[2].src}
            alt={guideImages[2].alt}
            className="w-[100px] sm:w-[140px] lg:w-[220px] h-[100px] sm:h-[160px] lg:h-[260px] object-cover rounded-xl shadow-lg transform rotate-6"
            style={{ zIndex: 1 }}
          />
        </div>
        {/* Pagination */}
        <div className="flex flex-row items-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          <span className="text-[#4974A0] font-barlow cursor-pointer text-sm sm:text-base">Premier</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer text-sm sm:text-base">{'<'}</span>
          <span className="text-black font-barlow font-bold px-2 text-sm sm:text-base">1</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer px-2 text-sm sm:text-base">2</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer px-2 text-sm sm:text-base">3</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer text-sm sm:text-base">{'>'}</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer text-sm sm:text-base">Dernier</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;