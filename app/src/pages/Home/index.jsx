import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import RatingBar from '../../components/ui/RatingBar';
import OverlappedImages from '../../components/ui/OverlappedImages';
import DestinationCard from '../../components/ui/DestinationCard';
import FaqSection from '../../components/ui/FaqSection';

const Home = () => {
  const destinations = [
    {
      id: 1,
      image: '/images/Group 1000001918.png',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing.'
    },
    {
      id: 2,
      image: '/images/Group 1000001919.png',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing.'
    },
    {
      id: 3,
      image: '/images/Group 1000001920.png',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing.'
    }
  ];

  // Images data for the About section
  const aboutImages = [
    { src: '/images/img_image_5.png', alt: 'Travel Image 1' },
    { src: '/images/img_image_6.png', alt: 'Travel Image 2' },
    { src: '/images/img_image_49.png', alt: 'Travel Image 3' }
  ];

  const decorativeElement = {
    src: '/images/img_ellipse_5.svg',
    alt: 'Decorative Element'
  };

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-global-2">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full max-w-[1596px] mx-auto relative">
          {/* Background Images */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src="/images/img_map.png" 
              alt="Map Background" 
              className="absolute top-0 left-0 w-[36%] h-auto object-cover"
            />
            <img 
              src="/images/img_map_blue_200.png" 
              alt="Map Blue Background" 
              className="absolute top-0 right-0 w-[40%] h-auto object-cover"
            />
            <img 
              src="/images/img_map_blue_200_1276x474.png" 
              alt="Side Map" 
              className="absolute left-0 top-[178px] sm:top-[267px] lg:top-[356px] w-[24%] h-auto object-cover"
            />
          </div>

          {/* Responsive Hero Section */}
          <div className="flex flex-col-reverse md:flex-row w-full relative">
            {/* Left/Text Section (on desktop), below image on mobile */}
            <div className="z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-[56px] py-[40px] sm:py-[60px] lg:py-[80px]">
              {/* Header - hide logo on mobile, pass prop */}
              <div className="z-20 mb-6">
                <Header hideLogoOnMobile menuFullWidthOnMobile />
              </div>
              {/* Main Heading */}
              <h1 className="text-[25px] sm:text-[37px] md:text-[49px] lg:text-[61px] xl:text-[73px] font-quattrocento font-bold leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] text-left text-global-6 capitalize mb-[18px] sm:mb-[26px] lg:mb-[34px]">
                une orientation sur-mesure avec Komizi
              </h1>
              {/* Description Text */}
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-quattrocentosans font-normal leading-[18px] sm:leading-[20px] md:leading-[24px] lg:leading-[28px] text-left text-global-5 mb-[24px] sm:mb-[32px] lg:mb-[40px] pr-[20px] sm:pr-[40px] lg:pr-[60px]">
                KOMIZI (Come Easy) est une entreprise qui accompagne les voyageurs du monde entier pour faire les meilleurs choix, que ce soit pour visiter un nouveau pays pour la première fois ou pour immigrer durablement ailleurs.
                Le site fournit toutes les informations et conseils nécessaires pour une immigration réussie, dans tous les pays du monde, afin de faciliter le passage d'un pays à un autre en toute simplicité. C'est un réseau mondial de voyageurs connectés, pour découvrir les meilleures destinations et accéder librement au monde.
              </p>
              {/* Button and Get Started Row */}
              <div className="flex items-center justify-between gap-[24px] sm:gap-[32px] lg:gap-[40px] mb-[40px] sm:mb-[60px] lg:mb-[80px]">
                <Button 
                  variant="primary" 
                  className="flex-shrink-0"
                  size="large"
                >
                  Explorer le monde
                </Button>
                <div className="flex items-center gap-[12px] sm:gap-[16px] lg:gap-[20px]">
                  <img 
                    src="/images/img_group_6.svg" 
                    alt="Get Started Icon" 
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0"
                  />
                </div>
              </div>
            </div>
            {/* Hero Image - on top for mobile, right for desktop */}
            <div className="relative w-full md:w-[40%] h-[320px] md:h-auto flex-shrink-0">
              <img 
                src="/images/img_rectangle_32.png" 
                alt="Hero Image" 
                className="w-full h-full object-cover z-5 md:absolute md:top-0 md:right-0 md:w-[100%] md:h-[120vh]"
                style={{ minHeight: 200, maxHeight: 600 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-[1596px] mx-auto mt-[64px] sm:mt-[96px] lg:mt-[128px] overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-[56px]">
          {/* Responsive: image above text on small screens */}
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full">
            <div className="w-full lg:w-[90%]">
              <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-start w-full">
                {/* On small screens, show title, then image, then description */}
                <div className="block lg:hidden w-full mb-6">
                  <p className="text-[12px] sm:text-[21px] lg:text-[28px] font-quattrocento font-bold leading-[16px] sm:leading-[24px] lg:leading-[32px] text-left text-global-7 mb-2">
                    À propos
                  </p>
                  <h2 className="text-[18px] sm:text-[24px] font-quattrocento font-bold leading-[22px] sm:leading-[28px] text-left text-global-5 capitalize mb-4">
                    Komizi — le compagnon de vos décisions de voyage
                  </h2>
                  <OverlappedImages 
                    images={aboutImages}
                    decorativeElement={decorativeElement}
                    className="w-full mb-4"
                  />
                  <p className="text-[12px] sm:text-[16px] font-quattrocento font-normal leading-[18px] sm:leading-[24px] text-left text-global-4">
                    Komizi (Come Easy) C'est un guide de confiance, un conseiller indépendant qui accompagne celles et ceux qui souhaitent visiter un nouveau pays ou envisagent une immigration. Grâce à une information claire, des conseils pratiques et un accompagnement humain, Komizi aide les voyageurs du monde entier à faire les bons choix, éviter les pièges et franchir les frontières en toute sérénité.
                    <br /><br />
                    Notre mission : rendre chaque départ plus simple, plus sûr et plus conscient — d'un pays à l'autre, sans barrière.
                  </p>
                </div>
                {/* Desktop layout */}
                <div className="hidden lg:flex flex-col gap-[10px] w-full">
                  <p className="text-[12px] sm:text-[21px] lg:text-[28px] font-quattrocento font-bold leading-[16px] sm:leading-[24px] lg:leading-[32px] text-left text-global-7">
                    À propos
                  </p>
                  <div className="relative w-full flex flex-row justify-start items-start gap-8">
                    {/* Left Content - Images with heading above (desktop only) */}
                    <div className="w-full lg:w-[48%] lg:pr-8 order-2 lg:order-1">
                      <h2 className="text-[18px] sm:text-[24px] lg:text-[32px] font-quattrocento font-bold leading-[22px] sm:leading-[28px] lg:leading-[36px] text-left text-global-5 capitalize mb-[24px] sm:mb-[32px] lg:mb-[40px]">
                        Komizi — le compagnon de vos décisions de voyage
                      </h2>
                      <OverlappedImages 
                        images={aboutImages}
                        decorativeElement={decorativeElement}
                        className="w-full"
                      />
                    </div>
                    {/* Right Content - Description positioned next to img_image_6 */}
                    <div className="w-full lg:w-[52%] lg:pl-8 order-1 lg:order-2 flex flex-col items-start">
                      <div className="lg:mt-[25%]">
                        <p className="text-[12px] sm:text-[16px] lg:text-[20px] font-quattrocento font-normal leading-[18px] sm:leading-[24px] lg:leading-[30px] text-left text-global-4">
                          Komizi (Come Easy) C'est un guide de confiance, un conseiller indépendant qui accompagne celles et ceux qui souhaitent visiter un nouveau pays ou envisagent une immigration. Grâce à une information claire, des conseils pratiques et un accompagnement humain, Komizi aide les voyageurs du monde entier à faire les bons choix, éviter les pièges et franchir les frontières en toute sérénité.
                          <br /><br />
                          Notre mission : rendre chaque départ plus simple, plus sûr et plus conscient — d'un pays à l'autre, sans barrière.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Desktop layout */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="w-full max-w-[1596px] mx-auto mt-[64px] sm:mt-[96px] lg:mt-[128px] overflow-hidden">
        <div className="relative w-full">
          <div className="relative z-10 px-4 sm:px-6 lg:px-[162px]">
            {/* Section Header */}
            <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-start w-full mb-[24px] sm:mb-[32px] lg:mb-[40px]">
              <p className="text-[12px] sm:text-[18px] lg:text-[22px] font-quattrocento font-bold leading-[14px] sm:leading-[20px] lg:leading-[24px] text-left text-global-7">
                Destination Populaire
              </p>
              <h2 className="text-[18px] sm:text-[28px] lg:text-[36px] font-quattrocento font-bold leading-[24px] sm:leading-[36px] lg:leading-[48px] text-left text-global-6 capitalize w-full sm:w-[80%] lg:w-[70%]">
                Destination populaire de l'année pour vous
              </h2>
            </div>
            {/* Destination Cards */}
            <div className="flex flex-col lg:flex-row gap-[32px] sm:gap-[40px] lg:gap-[48px] w-full mb-[32px] sm:mb-[48px] lg:mb-[64px] justify-center items-center">
              {destinations.map((destination, index) => {
                const positions = ['left', 'center', 'right'];
                return (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    rating={destination.rating}
                    description={destination.description}
                    position={positions[index]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Teaser Section */}
      <div className="w-full max-w-[1596px] mx-auto mt-[48px] sm:mt-[72px] lg:mt-[96px] overflow-hidden">
        <div className="relative w-full">
          <div className="relative z-10 px-4 sm:px-6 lg:px-[162px]">
            {/* Section Header */}
            <div className="text-center mb-[32px] sm:mb-[48px] lg:mb-[64px]">
              <p className="text-[12px] sm:text-[18px] lg:text-[22px] font-quattrocento font-bold leading-[14px] sm:leading-[20px] lg:leading-[24px] text-global-7 mb-[8px]">
                Nos Services
              </p>
              <h2 className="text-[24px] sm:text-[36px] lg:text-[48px] font-quattrocento font-bold leading-[32px] sm:leading-[48px] lg:leading-[64px] text-global-6 capitalize mb-[16px] sm:mb-[24px]">
                Votre voyage commence ici
              </h2>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-quattrocento font-normal text-global-2 max-w-[600px] mx-auto mb-[32px] sm:mb-[48px]">
                Découvrez nos services personnalisés pour vous accompagner dans toutes vos démarches d'immigration et de voyage. De la consultation à l'installation, nous sommes à vos côtés.
              </p>
            </div>

            {/* Quick Services Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] mb-[32px] sm:mb-[48px]">
              <div className="flex flex-col items-center text-center p-[16px] sm:p-[24px] rounded-lg bg-white shadow-sm border border-gray-100">
                <div className="w-[48px] h-[48px] bg-button-1 rounded-full flex items-center justify-center mb-[16px]">
                  <span className="text-white text-[20px] font-bold">📋</span>
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-quattrocento font-bold text-global-6 mb-[8px]">
                  Consultation
                </h3>
                <p className="text-[12px] sm:text-[14px] font-quattrocento text-global-2">
                  Conseils personnalisés pour votre projet
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-[16px] sm:p-[24px] rounded-lg bg-white shadow-sm border border-gray-100">
                <div className="w-[48px] h-[48px] bg-button-1 rounded-full flex items-center justify-center mb-[16px]">
                  <span className="text-white text-[20px] font-bold">📄</span>
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-quattrocento font-bold text-global-6 mb-[8px]">
                  Documentation
                </h3>
                <p className="text-[12px] sm:text-[14px] font-quattrocento text-global-2">
                  Assistance pour vos démarches administratives
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-[16px] sm:p-[24px] rounded-lg bg-white shadow-sm border border-gray-100">
                <div className="w-[48px] h-[48px] bg-button-1 rounded-full flex items-center justify-center mb-[16px]">
                  <span className="text-white text-[20px] font-bold">🏠</span>
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-quattrocento font-bold text-global-6 mb-[8px]">
                  Installation
                </h3>
                <p className="text-[12px] sm:text-[14px] font-quattrocento text-global-2">
                  Support pour votre nouvelle vie
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-[16px] sm:p-[24px] rounded-lg bg-white shadow-sm border border-gray-100">
                <div className="w-[48px] h-[48px] bg-button-1 rounded-full flex items-center justify-center mb-[16px]">
                  <span className="text-white text-[20px] font-bold">✈️</span>
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-quattrocento font-bold text-global-6 mb-[8px]">
                  Voyage
                </h3>
                <p className="text-[12px] sm:text-[14px] font-quattrocento text-global-2">
                  Préparation complète de votre départ
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-[8px] bg-button-1 hover:bg-button-2 text-white font-quattrocento font-bold text-[14px] sm:text-[16px] lg:text-[18px] px-[24px] sm:px-[32px] lg:px-[40px] py-[12px] sm:py-[16px] lg:py-[20px] rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Découvrir tous nos services
                <span className="text-[16px]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full max-w-[1596px] mx-auto mt-[42px] sm:mt-[63px] lg:mt-[84px] overflow-hidden">
        <div className="relative w-full">
          {/* Background Images - moved from Destination section */}
          <img 
            src="/images/img_map_indigo_300.png" 
            alt="Map Background" 
            className="absolute bottom-0 left-0 w-[30%] h-auto object-cover"
          />
          <img 
            src="/images/img_map_indigo_300_804x710.png" 
            alt="Map Background Right" 
            className="absolute top-[100px] sm:top-[150px] lg:top-[200px] right-0 w-[36%] h-auto object-cover"
          />

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[56px]">
            <div className="flex flex-col gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-start items-center w-full">
              {/* Vision Section */}
              <div className="flex flex-col lg:flex-row justify-start items-center w-full lg:w-[90%] mb-[32px] sm:mb-[48px] lg:mb-[64px]">
                <div className="flex flex-col lg:flex-row justify-start items-start w-full">
                  <div className="flex flex-col gap-[15px] sm:gap-[22px] lg:gap-[30px] justify-start items-start w-full lg:w-auto mb-8 lg:mb-[38px]">
                    <p className="text-[12px] sm:text-[18px] lg:text-[24px] font-quattrocento font-bold leading-[14px] sm:leading-[20px] lg:leading-[27px] text-left text-global-2">
                      Vision
                    </p>
                    <h2 className="text-[36px] sm:text-[54px] lg:text-[72px] font-quattrocento font-bold leading-[40px] sm:leading-[60px] lg:leading-[80px] text-left text-global-6 capitalize">
                      Notre vision
                    </h2>
                  </div>
                  
                  <img 
                    src="/images/img_ellipse_6.svg" 
                    alt="Vision Decorative" 
                    className="w-[32%] lg:w-[498px] h-auto object-cover"
                  />
                </div>
              </div>

              {/* Vision & Mission Content */}
              <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[92%] gap-8 lg:gap-[22px]">
                {/* Vision Content */}
                <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full lg:w-[60%] px-4 sm:px-6 lg:px-[32px]">
                  <div className="w-full lg:w-[74%] ml-0 lg:ml-[80px]">
                    <p className="text-[9px] sm:text-[14px] lg:text-[18px] font-quattrocento font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-2 mb-[24px] sm:mb-[36px] lg:mb-[48px]">
                      <span>Créer une connexion mondiale entre voyageurs, rêveurs et nouveaux arrivants, où chaque frontière devient une passerelle. Nous aspirons à faire de KOMIZI la référence mondiale en matière de conseil pour la mobilité internationale, en ouvrant l'accès à tous les pays, pour que chacun puisse choisir librement sa destination, avec confiance et clarté.</span>
                      <br /><br />
                      <span>Notre mission est d'accompagner, informer et protéger chaque voyageur dans son parcours. Grâce à une approche personnalisée, des conseils honnêtes, des services fiables</span>
                    </p>
                  </div>
                  
                  <img 
                    src="/images/img_ellipse_5_amber_a400.svg" 
                    alt="Vision Decorative 2" 
                    className="w-[54%] lg:w-[498px] h-auto object-cover self-end"
                  />
                </div>

                {/* Mission Content */}
                <div className="flex flex-col justify-start items-start w-full lg:w-[40%] mt-[11px] sm:mt-[16px] lg:mt-[22px]">
                  <p className="text-[12px] sm:text-[18px] lg:text-[24px] font-quattrocento font-bold leading-[14px] sm:leading-[20px] lg:leading-[27px] text-left text-global-2 mb-[15px] sm:mb-[22px] lg:mb-[30px]">
                    Mission
                  </p>
                  <h2 className="text-[36px] sm:text-[54px] lg:text-[72px] font-quattrocento font-bold leading-[40px] sm:leading-[60px] lg:leading-[80px] text-left text-global-6 capitalize mb-[45px] sm:sm-[67px] lg:mb-[90px]">
                    Notre Mission
                  </h2>
                  
                  <div className="w-full lg:w-[92%] self-end">
                    <p className="text-[9px] sm:text-[14px] lg:text-[18px] font-quattrocento font-normal leading-[15px] sm:leading-[22px] lg:leading-[29px] text-left text-global-2">
                      <span>Chez KOMIZI (Come Easy), notre mission est d'accompagner chaque voyageur, explorateur ou futur expatrié à faire les meilleurs choix lorsqu'il découvre un nouveau pays ou projette d'y vivre. Nous fournissons des informations claires, à jour et accessibles sur les démarches, la vie locale, l'immigration et les opportunités à travers le monde, afin de faciliter chaque transition d'un pays à un autre – simplement, sereinement, efficacement.</span>
                      <br /><br />
                      <span>devenir une référence en matière d'accompagnement humain pour les voyageurs francophones, notamment ceux issus de contextes vulnérables, en leur ouvrant les portes de destinations de rêve avec confiance et sérénité.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conseil Section (was Notre blog) */}
      <div className="w-full max-w-[1596px] mx-auto mt-[64px] sm:mt-[96px] lg:mt-[128px] px-4 sm:px-6 lg:px-[162px] overflow-hidden">
        <div className="relative w-full max-w-[1100px] mx-auto">
          {/* Decorative Ellipses */}
          <div className="absolute top-[60px] left-[30px] w-[18%] h-auto z-0">
            <img src="/images/img_ellipse_8.svg" alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute top-0 right-[10px] w-[20%] h-auto z-0">
            <img src="/images/img_ellipse_7.svg" alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="relative z-10">
            {/* Section Header */}
            <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full mb-[24px] sm:mb-[32px] lg:mb-[40px]">
              <p className="text-[12px] sm:text-[18px] lg:text-[22px] font-quattrocento font-bold leading-[14px] sm:leading-[20px] lg:leading-[24px] text-left text-global-7">
                Conseil
              </p>
              <div className="flex flex-col md:flex-row md:items-center w-full gap-2">
                <h2 className="text-[18px] sm:text-[28px] lg:text-[36px] font-quattrocento font-bold leading-[24px] sm:leading-[36px] lg:leading-[48px] text-left text-global-6 capitalize">
                  Conseils & Inspirations d'immigrations
                </h2>
                <span className="ml-0 md:ml-6 text-[10px] sm:text-[12px] lg:text-[14px] text-black font-quattrocentosans font-normal max-w-[400px]">
                  Parce qu’un bon voyage commence par une bonne information, notre blog vous offre des conseils pratiques, des témoignages réels et des guides utiles pour voyager en toute sécurité et faire les bons choix dès le départ.
                </span>
              </div>
            </div>
            {/* Blog Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center w-full max-w-[1100px] mx-auto min-h-[220px] sm:min-h-[320px]">
              {/* Left Section */}
              <div className="flex flex-col justify-center items-start w-full lg:w-[33%] h-full mb-4 lg:mb-0">
                <div className="flex flex-col justify-center h-full my-auto" style={{ height: '100%' }}>
                  <h3 className="text-[11px] sm:text-[13px] lg:text-[15px] font-quattrocento font-bold text-global-1 mb-2 w-full text-left" dir="ltr">
                    Évitez les pièges : 5 arnaques fréquentes aux frontières
                  </h3>
                  <p className="text-[7px] sm:text-[9px] lg:text-[11px] font-quattrocento font-normal text-global-1 w-full text-left" dir="ltr">
                    Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Dis ipsum vitae ultrices.
                  </p>
                </div>
              </div>
              {/* Middle Section - Only image, hide on small screens */}
              <div className="hidden lg:flex flex-col justify-center items-center w-full lg:w-[33%] h-full mb-4 lg:mb-0">
                <img 
                  src="/images/img_image_28.png" 
                  alt="Blog Image" 
                  className="w-full h-[220px] sm:h-[320px] lg:h-[360px] object-cover  transform lg:rotate-6"
                  style={{ minHeight: '180px', maxHeight: '380px' }}
                />
              </div>
              {/* Right Section */}
              <div className="flex flex-col justify-center items-start w-full lg:w-[33%] h-full">
                <div className="flex flex-col justify-center h-full my-auto" style={{ height: '100%' }}>
                  <h3 className="text-[11px] sm:text-[13px] lg:text-[15px] font-quattrocento font-bold text-global-3 mb-2 w-full text-left" dir="ltr">
                    Immigrer au Canada : tout ce que vous devez savoir
                  </h3>
                  <p className="text-[7px] sm:text-[9px] lg:text-[11px] font-quattrocento font-normal text-global-3 w-full text-left" dir="ltr">
                    Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Dis ipsum vitae ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full mt-2 sm:mt-22 lg:mt-24">
        <div className="relative w-full">
          {/* Background Image with overlay */}
          <div className="w-full bg-cover bg-center relative" style={{ backgroundImage: "url('/images/Promotion.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 lg:px-[56px] py-[32px] sm:py-[48px] lg:py-[64px]">
              <h2 className="text-[16px] sm:text-[22px] lg:text-[28px] font-quattrocento font-bold leading-[22px] sm:leading-[32px] lg:leading-[40px] text-center text-global-8 capitalize mb-2">
                Le meilleur séjour pour vos envies d'évasion
              </h2>
              <p className="text-[8px] sm:text-[10px] lg:text-[12px] font-quattrocentosans font-normal leading-[10px] sm:leading-[14px] lg:leading-[16px] text-center text-global-8 w-full sm:w-[60%] lg:w-[42%]">
                Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Dis ipsum vitae ultrices vulputate sem quis dui eu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection isHomePage={true} maxQuestions={5} />

      {/* Testimonials Section */}
      <div className="w-full max-w-[1596px] mx-auto mt-[91px] sm:mt-[136px] lg:mt-[182px] mb-[48px] sm:mb-[64px] lg:mb-[80px] overflow-visible">
        <div className="relative w-full flex flex-col lg:flex-row-reverse items-center justify-between px-4 sm:px-6 lg:px-[56px]">
          {/* Right Images (desktop only) */}
          <div className="hidden lg:flex w-full lg:w-[55%] justify-end items-start overflow-visible relative">
            <div className="relative w-[60%]">
              <img 
                src="/images/img_image_24.png" 
                alt="Testimonial Image 2" 
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover transform rotate-3"
              />
              <img 
                src="/images/img_image_17.png" 
                alt="Testimonial Image 1" 
                className="absolute -top-[90px] left-[-80px] w-[65%] h-[170px] sm:h-[230px] lg:h-[290px] object-cover shadow-lg z-10 transform -rotate-6"
              />
            </div>
          </div>
          {/* md-only: Image left, text right */}
          <div className="hidden md:flex lg:hidden w-full flex-row items-center justify-center">
            {/* Image left */}
            <div className="w-[40%] flex justify-end pr-6">
              <img
                src="/images/img_image_24.png"
                alt="Testimonial Image 2"
                className="w-full max-w-xs h-[220px] sm:h-[320px] object-cover"
              />
            </div>
            {/* Text right */}
            <div className="w-[60%] flex flex-col gap-[14px] sm:gap-[18px] lg:gap-[22px] justify-center items-start">
              <p className="text-[10px] sm:text-[14px] lg:text-[16px] font-quattrocento font-bold leading-[12px] sm:leading-[18px] lg:leading-[22px] text-left text-global-2">
                Testimonials
              </p>
              <h2 className="text-[18px] sm:text-[22px] lg:text-[28px] font-quattrocento font-bold leading-[20px] sm:leading-[28px] lg:leading-[36px] text-left text-global-2 w-full">
                Ce qu'ils disent de nous ?
              </h2>
              <p className="text-[10px] sm:text-[13px] lg:text-[15px] font-quattrocentosans font-normal leading-[16px] sm:leading-[20px] lg:leading-[22px] text-left text-global-2 w-full max-w-[520px]">
                Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Dis ipsum vitae ultrices vulputate sem quis dui eu. Amet tincidunt est elementum fermentum tellus velit. Et dolor risus tempor dui velit. Eget aenean placerat ac feugiat amet ac risus mus. In phasellus dignissim sed diam praesent risus auctor gravida. Suspendisse varius id platea lectus quis enim sed morbi. Enim ut mauris id sed nam amet donec pulvinar. Et enim urna morbi est tellus pharetra. Et interdum massa sit purus est id hac ultricies ac. Facilisis eget vitae odio libero sit enim at donec ultrices.
              </p>
              <div className="flex items-center mt-1">
                <RatingBar rating={5} size="medium" />
                <p className="text-[10px] sm:text-[14px] lg:text-[16px] font-quattrocento font-bold leading-[12px] sm:leading-[18px] lg:leading-[22px] text-left text-global-2 ml-[12px] sm:ml-[18px] lg:ml-[24px]">
                  5/5
                </p>
              </div>
            </div>
          </div>
          {/* Left Content (default: mobile and lg+) */}
          <div className="flex flex-col gap-[14px] sm:gap-[18px] lg:gap-[22px] justify-center items-start w-full lg:w-[38%] md:hidden lg:flex">
            <p className="text-[10px] sm:text-[14px] lg:text-[16px] font-quattrocento font-bold leading-[12px] sm:leading-[18px] lg:leading-[22px] text-left text-global-2">
              Testimonials
            </p>
            <h2 className="text-[18px] sm:text-[22px] lg:text-[28px] font-quattrocento font-bold leading-[20px] sm:leading-[28px] lg:leading-[36px] text-left text-global-2 w-full">
              Ce qu'ils disent de nous ?
            </h2>
            <p className="text-[10px] sm:text-[13px] lg:text-[15px] font-quattrocentosans font-normal leading-[16px] sm:leading-[20px] lg:leading-[22px] text-left text-global-2 w-full max-w-[520px]">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing. Dis ipsum vitae ultrices vulputate sem quis dui eu. Amet tincidunt est elementum fermentum tellus velit. Et dolor risus tempor dui velit. Eget aenean placerat ac feugiat amet ac risus mus. In phasellus dignissim sed diam praesent risus auctor gravida. Suspendisse varius id platea lectus quis enim sed morbi. Enim ut mauris id sed nam amet donec pulvinar. Et enim urna morbi est tellus pharetra. Et interdum massa sit purus est id hac ultricies ac. Facilisis eget vitae odio libero sit enim at donec ultrices.
            </p>
            <div className="flex items-center mt-1">
              <RatingBar rating={5} size="medium" />
              <p className="text-[10px] sm:text-[14px] lg:text-[16px] font-quattrocento font-bold leading-[12px] sm:leading-[18px] lg:leading-[22px] text-left text-global-2 ml-[12px] sm:ml-[18px] lg:ml-[24px]">
                5/5
              </p>
            </div>
          </div>
        </div>
        {/* Mobile: show Testimonial Image 2 below text, hide Testimonial Image 1 */}
        <div className="flex md:hidden w-full justify-center mt-8">
          <img
            src="/images/img_image_24.png"
            alt="Testimonial Image 2"
            className="w-full max-w-xs mx-4 h-[220px] sm:h-[320px] object-cover"
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;