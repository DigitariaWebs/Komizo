import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 0, 
  maxRating = 5, 
  size = 'medium',
  color = '#fbbf24',
  emptyColor = '#d1d5db',
  readonly = true,
  onRatingChange,
  className = '',
  ...props 
}) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const handleStarClick = (starIndex) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  const renderStar = (index) => {
    const isFilled = index < rating;
    const starColor = isFilled ? color : emptyColor;
    
    return (
      <button
        key={index}
        type="button"
        className={`${sizes[size]} ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform duration-150 focus:outline-none`}
        onClick={() => handleStarClick(index)}
        disabled={readonly}
        aria-label={`Rate ${index + 1} out of ${maxRating} stars`}
      >
        <svg
          fill={starColor}
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </button>
    );
  };

  return (
    <div 
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}
    >
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  emptyColor: PropTypes.string,
  readonly: PropTypes.bool,
  onRatingChange: PropTypes.func,
  className: PropTypes.string,
};

export default RatingBar;