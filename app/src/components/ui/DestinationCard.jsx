import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import RatingBar from './RatingBar';

const DestinationCard = ({ 
  image, 
  rating = 4, 
  description, 
  position = 'center',
  className = '' 
}) => {
  const getInclineClass = () => {
    switch (position) {
      case 'left':
        return 'transform rotate-2';
      case 'right':
        return 'transform -rotate-2';
      default:
        return '';
    }
  };

  const getButtonColor = () => {
    return position === 'center' ? 'bg-button-1' : 'bg-button-2';
  };

  return (
    <div className={`flex flex-col justify-start items-center ${getInclineClass()} ${className}`}>
      <div className="flex flex-col gap-3 justify-start items-center w-[90%] max-w-[340px]">
        <div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src={image} 
            alt="Destination" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 justify-start items-start w-full">
          <div className="w-full bg-white p-2 rounded">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex items-center mb-1">
                <RatingBar rating={rating} size="medium" />
                <span className="text-[11px] sm:text-[13px] lg:text-[15px] font-barlow font-normal text-global-6 ml-2">{rating}/5</span>
              </div>
              <p className="text-[8px] sm:text-[10px] lg:text-[12px] font-barlow font-normal text-global-2 w-full mb-1">
                {description}
              </p>
            </div>
          </div>
          <Button 
            variant="primary" 
            className={`w-full max-w-[220px] ${getButtonColor()} py-2 text-xs sm:text-sm`}
          >
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  description: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default DestinationCard;
