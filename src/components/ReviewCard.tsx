import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full overflow-hidden border`} style={{ borderColor: review.borderColor }}>
            <img alt={review.user} className="w-full h-full object-cover" src={review.avatar} />
          </div>
          <div>
            <p className="text-sm font-bold">{review.user}</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-3 h-3 ${i < review.rating ? 'text-secondary fill-current' : 'text-on-surface-variant'}`} 
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{review.time}</span>
      </div>
      <p className="text-sm text-on-surface/90 italic">{review.content}</p>
    </div>
  );
};
