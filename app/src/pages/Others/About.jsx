import React, { useState } from 'react';
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

// Team/Leadership profiles
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Komizi",
    role: "CEO & Fondatrice",
    location: "Montréal, Canada",
    specialty: "Immigration Canada",
    image: "/images/img_image_5.png",
    description: "Experte en immigration canadienne avec plus de 15 ans d'expérience. Docteure en droit international.",
    credentials: ["Consultante Réglementée", "Membre ICCRC", "Avocate Agréée"],
    languages: ["Français", "Anglais", "Arabe"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Directeur États-Unis",
    location: "New York, USA",
    specialty: "Visa US & Green Card",
    image: "/images/img_image_6.png",
    description: "Spécialiste des procédures d'immigration américaines, ancien agent consulaire américain.",
    credentials: ["Attorney at Law", "AILA Member", "US Immigration Expert"],
    languages: ["English", "French", "Mandarin"]
  },
  {
    id: 3,
    name: "Emma Dubois",
    role: "Responsable Europe",
    location: "Paris, France",
    specialty: "Union Européenne",
    image: "/images/img_image_49.png",
    description: "Coordinatrice pour les programmes de mobilité européenne et les visas Schengen.",
    credentials: ["Juriste Européen", "Expert Visa Schengen", "Consultant Agréé"],
    languages: ["Français", "Anglais", "Allemand"]
  }
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showTikTokVideo, setShowTikTokVideo] = useState(false);

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

      {/* Intro Video Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-global-2 to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-global-5/10 to-global-7/10 rounded-full mb-4">
              <span className="text-sm font-medium text-global-6">Présentation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4 leading-tight">
              Découvrez <span className="text-global-5">KOMIZI</span>
            </h2>
            <p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto leading-relaxed">
              Une présentation de 45 secondes de notre équipe et de notre mission pour vous accompagner dans vos projets d'immigration.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Video Container */}
            <div className="w-full lg:w-2/3">
              <div className="relative bg-gradient-to-br from-global-5/10 to-global-6/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gray-100 flex items-center justify-center relative group cursor-pointer"
                  onClick={() => setShowTikTokVideo(true)}>
                  {/* Video Thumbnail */}
                  <img
                    src="/images/img_image_24.png"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>

                  {/* Play Button */}
                  <div className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 text-global-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>

                  {/* Video Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    0:45
                  </div>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">Introduction KOMIZI</h3>
                    <p className="text-sm opacity-90">Votre partenaire pour l'immigration</p>
                  </div>
                </div>

                {/* TikTok Integration Note */}
                <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">T</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Aussi disponible sur TikTok</p>
                        <p className="text-xs text-gray-500">Version optimisée pour les réseaux sociaux</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                      Voir sur TikTok
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-global-5/10">
                <h3 className="text-xl font-quattrocento font-bold text-global-6 mb-3">Contenu Vidéo</h3>
                <ul className="space-y-2 text-global-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-global-5 rounded-full mr-3"></div>
                    Présentation de l'équipe dirigeante
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-global-5 rounded-full mr-3"></div>
                    Notre mission et vision
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-global-5 rounded-full mr-3"></div>
                    Services d'accompagnement
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-global-5 rounded-full mr-3"></div>
                    Témoignages clients
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-global-5/10">
                <h3 className="text-xl font-quattrocento font-bold text-global-6 mb-3">Réseaux Sociaux</h3>
                <p className="text-global-4 text-sm mb-4">
                  Suivez-nous pour des conseils quotidiens sur l'immigration et des témoignages inspirants.
                </p>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">F</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">I</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team/Leadership Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-global-5/8 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-global-7/12 to-transparent rounded-full opacity-60"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-global-5/10 to-global-7/10 rounded-full mb-4">
              <svg className="w-5 h-5 text-global-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-global-6">Notre Équipe</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4 leading-tight">
              Experts en <span className="text-global-5">Immigration</span>
            </h2>
            <p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto leading-relaxed">
              Rencontrez notre équipe de professionnels dédiés à votre réussite, basés dans les principales destinations d'immigration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-global-5/10 hover:shadow-lg hover:border-global-5/20 transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm opacity-90">{member.location}</span>
                    </div>
                    <h3 className="text-xl font-quattrocento font-bold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-global-5 bg-global-5/10 px-2 py-1 rounded-full">
                        {member.specialty}
                      </span>
                    </div>
                    <p className="text-global-4 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Expandable Details */}
                  {selectedMember === member.id && (
                    <div className="border-t border-gray-200 pt-4 animate-fadeIn">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-global-6 mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.credentials.map((credential, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {credential}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-global-6 mb-2">Langues</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.languages.map((language, idx) => (
                            <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* View More Button */}
                  <button className="w-full mt-4 bg-button-1 hover:bg-button-2 text-white text-sm font-medium font-quattrocento transition-colors duration-200 flex items-center justify-center py-2 px-4 rounded-md">
                    {selectedMember === member.id ? (
                      <>
                        Voir moins
                        <svg className="w-4 h-4 ml-1 transform rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Voir plus
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-global-5/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-quattrocento font-bold text-global-6 mb-4">
                Prêt à commencer votre projet ?
              </h3>
              <p className="text-global-4 mb-6">
                Contactez directement l'expert de votre région pour une consultation personnalisée.
              </p>
              <button className="px-8 py-4 bg-button-1 hover:bg-button-2 text-white font-quattrocento font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Consultation Gratuite
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;