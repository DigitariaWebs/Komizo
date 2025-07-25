import React from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';

const images = [
  '/images/img_image_5.png',
  '/images/img_image_6.png'
];

const underlineStyle = {
  borderBottom: '1.5px solid #4974A09E'
};

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-global-2">
      {/* Custom HeroSection text */}
      <HeroSection
        customTitle="Nos Contact"
        customDescription="Vous souhaitez nous contacter ? Remplissez le formulaire ou retrouvez-nous sur nos réseaux. Nous sommes à votre écoute pour toute question ou demande d'information."
      />

      {/* Main Section with map images on sides */}
      <div className="relative w-full flex flex-col lg:flex-row items-stretch justify-center py-16 px-4 sm:px-8 mb-16">
        {/* Left map image */}
        <img
          src="/images/img_map.png"
          alt="Map Left"
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[180px] opacity-60 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        {/* Right map image */}
        <img
          src="/images/img_map.png"
          alt="Map Right"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[180px] opacity-60 pointer-events-none"
          style={{ zIndex: 0, transform: 'translateY(-50%) scaleX(-1)' }}
        />
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center z-10 mb-12">
          <form className="w-full max-w-md flex flex-col gap-8">
            <input
              type="text"
              placeholder="Nom & Prénom"
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none py-3 text-global-2 font-barlow placeholder:text-global-4"
              style={underlineStyle}
            />
            <input
              type="email"
              placeholder="Adresse Email"
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none py-3 text-global-2 font-barlow placeholder:text-global-4"
              style={underlineStyle}
            />
            <input
              type="tel"
              placeholder="Num téléphone"
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none py-3 text-global-2 font-barlow placeholder:text-global-4"
              style={underlineStyle}
            />
            <input
              type="text"
              placeholder="Objet"
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none py-3 text-global-2 font-barlow placeholder:text-global-4"
              style={underlineStyle}
            />
            <input
              type="text"
              placeholder="Ajouter"
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none py-3 text-global-2 font-barlow placeholder:text-global-4"
              style={underlineStyle}
            />
            <button
              type="submit"
              className="mt-4 bg-button-1 text-global-8 font-barlow font-semibold py-2 px-6 rounded hover:bg-button-2 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
        {/* Images Right */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-8 mt-4 lg:mt-0 z-10">
          <div className="relative w-full flex justify-center items-center" style={{ minHeight: 400 }}>
            <img
              src={images[0]}
              alt="Contact illustration 1"
              className="w-[240px] h-[320px] object-cover shadow-2xl absolute left-1/2 -translate-x-1/2 z-10"
              style={{ top: -40, transform: 'translateX(-60%) rotate(-7deg)' }}
            />
            <img
              src={images[1]}
              alt="Contact illustration 2"
              className="w-[240px] h-[320px] object-cover shadow-xl absolute left-1/2 -translate-x-1/2 z-0"
              style={{ top: 50, left: '65%', transform: 'translateX(-40%) rotate(7deg)' }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
