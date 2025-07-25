import React from 'react';
import PropTypes from 'prop-types';

const OverlappedImages = ({ 
  images = [], 
  className = '',
  decorativeElement = null 
}) => {
  if (images.length < 3) {
    console.warn('OverlappedImages component requires at least 3 images');
    return null;
  }

  return (
    <div className={`relative w-full h-[220px] sm:h-[400px] md:h-[500px] lg:h-[600px] ${className}`}>
      {/* Show only first image on screens <= 1024px (lg breakpoint) */}
      <img 
        src={images[0].src} 
        alt={images[0].alt} 
        className="block lg:hidden w-full h-full object-cover"
      />
      {/* Desktop: overlapped images (lg and up) */}
      <div className="hidden lg:block w-full h-full relative">
        {/* First image - reduced incline */}
        <img 
          src={images[0].src} 
          alt={images[0].alt} 
          className="absolute top-0 left-0 w-[60%] sm:w-[65%] lg:w-[70%] h-auto object-cover transform -rotate-3 z-10"
        />
        
        {/* Second image - overlapped on right bottom */}
        <img 
          src={images[1].src} 
          alt={images[1].alt} 
          className="absolute top-[25%] right-[5%] w-[50%] sm:w-[55%] lg:w-[60%] h-auto object-cover transform rotate-3 z-20"
        />
        
        {/* Third image - overlapped center bottom */}
        <img 
          src={images[2].src} 
          alt={images[2].alt} 
          className="absolute bottom-[10%] left-[20%] w-[40%] sm:w-[45%] lg:w-[50%] h-auto object-cover transform -rotate-2 z-30"
        />

        {/* Decorative element */}
        {decorativeElement && (
          <div className="absolute bottom-0 right-0 w-[30%] lg:w-[40%] h-auto z-5">
            <img 
              src={decorativeElement.src} 
              alt={decorativeElement.alt} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

OverlappedImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  decorativeElement: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default OverlappedImages;
