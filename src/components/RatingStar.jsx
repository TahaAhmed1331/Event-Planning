import { Star, StarHalf } from 'lucide-react';

const RatingStar = ({ rating, className }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className='text-yellow-400 fill-yellow-400'
          size={18}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key='half'
          className='text-yellow-400 fill-yellow-400'
          size={18}
        />
      );
    }
    const remaining = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className='text-yellow-400'
          size={18}
        />
      );
    }

    return stars;
  };
  return <div className={`flex ${className}`}>{renderStars(rating)}</div>;
};

export default RatingStar;
