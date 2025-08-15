import React from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';
import OverlappedImages from '../../components/ui/OverlappedImages';

const servicesImages = [
  { src: '/images/img_image_5.png', alt: 'Service 1' },
  { src: '/images/img_image_6.png', alt: 'Service 2' },
  { src: '/images/img_image_49.png', alt: 'Service 3' }
];

const visionImages = [
  { src: '/images/img_image_24.png', alt: 'Vision 1' },
  { src: '/images/img_image_17.png', alt: 'Vision 2' },
  { src: '/images/img_image_28.png', alt: 'Vision 3' }
];

const services = [
  {
    icon: "🎯",
    title: "Conseil en Immigration",
    description: "Accompagnement personnalisé pour vos démarches d'immigration vers le Canada, les États-Unis et l'Europe.",
    features: ["Évaluation de dossier", "Préparation documents", "Suivi complet"]
  },
  {
    icon: "✈️",
    title: "Planification de Voyage",
    description: "Organisation complète de vos voyages d'affaires ou de loisirs avec expertise locale.",
    features: ["Itinéraires sur mesure", "Réservations", "Support 24/7"]
  },
  {
    icon: "🎓",
    title: "Études à l'Étranger",
    description: "Guidance complète pour vos projets d'études dans les meilleures universités internationales.",
    features: ["Choix d'université", "Demandes de visa étudiant", "Logement étudiant"]
  },
  {
    icon: "💼",
    title: "Opportunités Professionnelles",
    description: "Identification et accompagnement vers les meilleures opportunités de carrière à l'international.",
    features: ["Recherche d'emploi", "CV international", "Préparation entretiens"]
  }
];

const goals = [
  {
    year: "2025",
    title: "Expansion Numérique",
    description: "Lancement de notre plateforme digitale complète avec IA intégrée pour des conseils personnalisés.",
    status: "En cours"
  },
  {
    year: "2026",
    title: "Réseau International",
    description: "Ouverture de bureaux partenaires dans 5 pays clés : Canada, États-Unis, France, Allemagne, Australie.",
    status: "Planifié"
  },
  {
    year: "2027",
    title: "Centre de Formation",
    description: "Création d'un centre de formation pour préparer les candidats aux entretiens et à l'intégration culturelle.",
    status: "Vision"
  },
  {
    year: "2028",
    title: "Impact Global",
    description: "Devenir la référence mondiale pour l'accompagnement des migrants francophones avec 100,000+ clients accompagnés.",
    status: "Objectif"
  }
];

const Services = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-global-2">
      <HeroSection
        customTitle="Services & Vision"
        customDescription="Découvrez nos services d'accompagnement et notre vision pour révolutionner l'expérience de l'immigration et du voyage international."
      />

      {/* Services Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-global-2 via-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-global-5/8 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-global-7/12 to-transparent rounded-full opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-global-5/10 to-global-7/10 rounded-full mb-4">
              <span className="text-sm font-medium text-global-6">Nos Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4 leading-tight">
              Services d'<span className="text-global-5">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto leading-relaxed">
              Une gamme complète de services pour vous accompagner dans tous vos projets de mobilité internationale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-global-5/10 hover:shadow-lg hover:border-global-5/20 transition-all duration-300 overflow-hidden group p-6 sm:p-8"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-global-5 to-global-6 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-quattrocento font-bold text-global-6 group-hover:text-global-5 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-global-4 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-sm text-global-2">
                      <div className="w-2 h-2 bg-global-5 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Service Images */}
          <div className="flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-global-5/5 to-global-6/5 rounded-2xl"></div>
              <div className="relative">
                <OverlappedImages images={servicesImages} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Future Goals Section */}
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-global-2 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-global-7 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-global-5 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-global-7/10 to-global-5/10 rounded-full mb-4">
              <span className="text-sm font-medium text-global-6">Notre Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4 leading-tight">
              Objectifs <span className="text-global-7">Futurs</span>
            </h2>
            <p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto leading-relaxed">
              Notre roadmap ambitieuse pour révolutionner l'accompagnement des voyageurs et immigrants francophones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Timeline */}
            <div className="space-y-6 sm:space-y-8">
              {goals.map((goal, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Line */}
                  {idx !== goals.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-global-5 to-global-6 opacity-30"></div>
                  )}
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-global-5 to-global-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {goal.year.slice(-2)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg sm:text-xl font-quattrocento font-bold text-global-6 mr-3">
                          {goal.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          goal.status === 'En cours' ? 'bg-green-100 text-green-700' :
                          goal.status === 'Planifié' ? 'bg-blue-100 text-blue-700' :
                          goal.status === 'Vision' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {goal.status}
                        </span>
                      </div>
                      <p className="text-global-4 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision Images */}
            <div className="flex justify-center">
              <div className="w-full max-w-md relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-global-7/5 to-global-5/5 rounded-2xl"></div>
                <div className="relative">
                  <OverlappedImages images={visionImages} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
