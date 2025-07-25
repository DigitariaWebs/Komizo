import React, { useState } from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';
import RatingBar from '../../components/ui/RatingBar';
import { useNavigate } from 'react-router-dom';

// DestinationCard2: Inclined image, destination, rating, description, button
const DestinationCard2 = ({ destination, onClick, incline = 'left' }) => (
  <div
    className="flex flex-col items-start p-4 cursor-pointer transition h-[600px] min-h-[600px] max-h-[600px] w-full"
    onClick={onClick}
    style={{ boxSizing: 'border-box' }}
  >
    <div className={`w-full h-[400px] rounded-lg overflow-hidden mb-4 ${incline === 'left' ? 'transform -rotate-3' : 'transform rotate-3'}`}>
      <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
    </div>
    {/* Fixed content height and flex to align all titles at the same level */}
    <div className="flex flex-col w-full flex-1 justify-start" style={{ minHeight: 180, height: 180 }}>
      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 truncate">{destination.title}</h3>
      <div className="flex items-center mb-2">
        <RatingBar rating={destination.rating} size="medium" />
        <span className="ml-2 text-sm text-[#1A1A1A] font-semibold">{destination.rating}/5</span>
      </div>
      <p className="text-sm text-[#1A1A1A] mb-3 mt-2 flex-1 line-clamp-3">{destination.description}</p>
      <button className="bg-[#1A1A1A] w-[70%] text-global-8 font-barlow font-semibold py-2 px-8 mt-2 hover:bg-button-2 transition text-sm">
        Voir détails
      </button>
    </div>
  </div>
);

// Sample data
const DESTINATIONS = [
  {
    id: 1,
    image: '/images/Group 1000001918.png',
    title: 'Canada',
    rating: 4,
    description: 'Découvrez les vastes paysages, la diversité culturelle et les opportunités uniques du Canada.',
    localisation: 'Ottawa, Canada',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=-76.0,45.0,-75.0,46.0&layer=mapnik',
    guide: '/images/img_image_24.png',
    place: '/images/img_image_5.png',
  },
  {
    id: 2,
    image: '/images/Group 1000001919.png',
    title: 'États-Unis',
    rating: 4,
    description: 'Explorez les grandes villes dynamiques, les parcs nationaux emblématiques et la multitude de possibilités.',
    localisation: 'Washington, USA',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=-78.0,38.0,-76.0,40.0&layer=mapnik',
    guide: '/images/img_image_17.png',
    place: '/images/img_image_6.png',
  },
  {
    id: 3,
    image: '/images/Group 1000001920.png',
    title: 'France',
    rating: 5,
    description: 'Profitez de la richesse historique, de la gastronomie et de l’art de vivre à la française.',
    localisation: 'Paris, France',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=2.2,48.7,2.5,48.9&layer=mapnik',
    guide: '/images/img_image_28.png',
    place: '/images/img_image_49.png',
  },
  {
    id: 4,
    image: '/images/news_canada_1.jpg',
    title: 'Québec',
    rating: 4,
    description: 'Ville francophone, riche en histoire et en culture, idéale pour les nouveaux arrivants.',
    localisation: 'Québec, Canada',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=-71.4,46.7,-71.1,46.9&layer=mapnik',
    guide: '/images/img_image_24.png',
    place: '/images/img_image_5.png',
  },
  {
    id: 5,
    image: '/images/news_usa_1.jpg',
    title: 'New York',
    rating: 5,
    description: 'La ville qui ne dort jamais, centre mondial de la culture, des affaires et des opportunités.',
    localisation: 'New York, USA',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.1,40.6,-73.7,40.9&layer=mapnik',
    guide: '/images/img_image_17.png',
    place: '/images/img_image_6.png',
  },
  {
    id: 6,
    image: '/images/news_canada_2.jpg',
    title: 'Montréal',
    rating: 4,
    description: 'Ville cosmopolite, mélange unique de cultures, festivals et gastronomie.',
    localisation: 'Montréal, Canada',
    map: 'https://www.openstreetmap.org/export/embed.html?bbox=-73.7,45.4,-73.4,45.7&layer=mapnik',
    guide: '/images/img_image_28.png',
    place: '/images/img_image_49.png',
  },
];

const REVIEWS = [
  {
    id: 1,
    image: '/images/img_image_24.png',
    name: 'Sophie Martin',
    rating: 5,
    review: "Komizi m'a permis de préparer mon voyage au Canada en toute sérénité. Les conseils étaient précis et adaptés à ma situation.",
  },
  {
    id: 2,
    image: '/images/img_image_17.png',
    name: 'Jean Dupont',
    rating: 4,
    review: "Grâce à Komizi, j'ai évité de nombreux pièges lors de mon installation aux États-Unis. Je recommande vivement !",
  },
  {
    id: 3,
    image: '/images/img_image_28.png',
    name: 'Fatima Zahra',
    rating: 5,
    review: "Un accompagnement humain et professionnel. J'ai trouvé toutes les informations nécessaires pour immigrer en France.",
  },
];

const PAGE_SIZE = 6;

const Destination = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(DESTINATIONS.length / PAGE_SIZE);
  const paginated = DESTINATIONS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const selected = DESTINATIONS.find(d => d.id === selectedId);

  // Pagination handlers
  const goToPage = (p) => setPage(p);
  const prevPage = () => setPage(p => Math.max(1, p - 1));
  const nextPage = () => setPage(p => Math.min(totalPages, p + 1));

  return (
    <div className="w-full min-h-screen flex flex-col bg-global-2">
      <HeroSection />
      {/* Main Section */}
      {!selected && (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
            <div>
              <span className="text-sm font-bold text-[#1A1A1A] mb-1 block">Destination populaires</span>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-0">Destination Populaire de l'année pour vous</h2>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-12">
            {paginated.map((dest, idx) => (
              <DestinationCard2
                key={dest.id}
                destination={dest}
                onClick={() => setSelectedId(dest.id)}
                incline={idx % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
          {/* Pagination */}
        <div className="flex flex-row items-center justify-center gap-3 mt-12">
          <span className="text-[#4974A0] font-barlow cursor-pointer">Premier</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer">{'<'}</span>
          <span className="text-black font-barlow font-bold px-2">1</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer px-2">2</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer px-2">3</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer">{'>'}</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer">Dernier</span>
        </div>
          
        </div>
      )}

      {/* Destination Details */}
      {selected && (
        <div className="w-full max-w-6xl mx-auto px-4 py-12 relative overflow-x-visible">
          {/* Background map images */}
          <img
            src="/images/map.svg"
            alt=""
            className="hidden md:block absolute left-[-320px] top-[-100px] h-[110%] opacity-40 pointer-events-none z-0"
            style={{ minWidth: 320, maxWidth: 440 }}
          />
          <img
            src="/images/map.svg"
            alt=""
            className="hidden md:block absolute right-[-320px] bottom-[-100px] h-[110%] opacity-40 pointer-events-none z-0"
            style={{ minWidth: 320, maxWidth: 440, transform: 'scaleX(-1)' }}
          />
          {/* Big image */}
          <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-8 mx-4 relative z-10">
            <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
          </div>
          {/* Details section with margin */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 mx-4 relative z-10">
            {/* Left: title, desc, rating */}
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">{selected.title}</h2>
              <p className="text-base text-[#1A1A1A]">{selected.description}</p>
              <div className="flex items-center">
                <RatingBar rating={selected.rating} size="large" />
                <span className="ml-3 text-lg font-semibold text-[#1A1A1A]">{selected.rating}/5</span>
              </div>
              <button
                className="mt-2 bg-[#1A1A1A] text-white font-barlow font-semibold py-2 px-10  hover:bg-[#222] transition text-sm w-max"
                onClick={() => navigate('/contact')}
              >
                Contacter Nous
              </button>
            </div>
            {/* Right: map only */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full h-56 rounded overflow-hidden border">
                <iframe
                  src={selected.map}
                  title="Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Guide touristique section */}
          <div className="w-full flex flex-col items-center mb-16 mx-4 relative z-10">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] text-center mb-2">Guide touristique vous accompagnant</h3>
            <p className="text-base text-[#1A1A1A] text-center mb-6 max-w-2xl">
              Nos guides expérimentés vous accompagnent à chaque étape de votre voyage pour une expérience inoubliable et sécurisée.
            </p>
            <div className="flex flex-row gap-12 justify-center my-7 items-center">
              <img src={selected.guide} alt="Guide" className="w-72 h-96 object-cover shadow-lg -rotate-6" />
              <img src={selected.place} alt="Place" className="w-72 h-96 object-cover shadow-lg ml-5 rotate-6" />
            </div>
          </div>
          {/* Avis section */}
          <div className="w-full flex flex-col mb-8 mx-4 relative z-10">
            <div className='flex flex-row justify-between gap-2 items-center mb-8'>
                <div className='w-[50%]'>
                    <span className="text-sm font-barlow text-[#1A1A1A]">Informations clés, conseils pratiques</span>
                     <h3 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-10">Avis vérifiés pour bien préparer votre voyage</h3>
                </div>
                <p className='text-sm font-barlow w-[30%] text-[#1A1A1A]'>Découvrez les expériences authentiques de voyageurs qui ont déjà franchi le pas .
                Parce que rien ne vaut l’avis de ceux qui ont déjà vécu l’aventure, nous avons rassemblé les témoignages de voyageurs qui ont exploré cette destination avant vous.</p>
            </div>

            {REVIEWS.map((r, idx) => (
              <div
                key={r.id}
                className={`flex flex-col md:flex-row md:gap-14 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
              >
                <div className={`w-full md:w-[260px] h-[400px] overflow-hidden ${idx % 2 === 1 ? 'transform -rotate-3' : 'transform rotate-3'}`}>
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover rounded-none"
                    style={{ borderRadius: 0 }}
                  />
                </div>
                <div className="flex flex-col items-start w-full md:flex-1">
                  <span className="text-lg font-semibold text-[#1A1A1A]">{r.name}</span>
                  <div className="flex items-center mb-2">
                    <RatingBar rating={r.rating} size="medium" />
                    <span className="ml-2 text-sm text-[#1A1A1A] font-semibold">{r.rating}/5</span>
                  </div>
                  <p className="text-base text-[#1A1A1A]">{r.review}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Back button */}
          <div className="flex justify-center mt-8 mx-4 relative z-10">
            <button
              className="text-[#1A1A1A] font-barlow font-semibold text-base hover:underline flex items-center gap-2"
              onClick={() => setSelectedId(null)}
            >
              <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à la liste des destinations
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Destination;
