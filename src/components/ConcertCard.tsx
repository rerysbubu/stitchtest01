import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Concert } from '../types';

interface ConcertCardProps {
  concert: Concert;
  featured?: boolean;
}

export const ConcertCard: React.FC<ConcertCardProps> = ({ concert, featured }) => {
  if (featured) {
    return (
      <div className="md:col-span-2 group relative bg-surface-container rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:translate-y-[-4px]">
        <div className="aspect-[16/9] md:aspect-[21/9] relative">
          <img 
            alt={concert.title} 
            className="w-full h-full object-cover" 
            src={concert.image} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-primary text-on-primary font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest shadow-lg">Trending</span>
          </div>
        </div>
        <div className="p-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-1">{concert.title}</h3>
            <p className="text-primary font-bold text-lg mb-4">{concert.artist}</p>
            <div className="flex items-center gap-6 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="font-medium text-sm">{concert.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-medium text-sm">{concert.location}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col items-end gap-3">
            <div className="flex -space-x-3 mb-1">
              {[1, 2, 3].map(i => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-surface-container" 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="User"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface-container flex items-center justify-center text-[10px] font-bold">+{concert.attendees - 3}</div>
            </div>
            <p className="text-xs font-bold text-outline-variant uppercase tracking-tighter">{concert.attendees} buddies attending</p>
            <button className="w-full md:w-auto bg-primary text-on-primary font-bold px-8 py-3 rounded-full hover:scale-95 transition-transform active:scale-98 shadow-[0_10px_20px_rgba(255,131,213,0.3)]">
              Find Friends
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-surface-container-low rounded-lg overflow-hidden shadow-xl transition-all hover:bg-surface-container">
      <div className="aspect-square relative">
        <img 
          alt={concert.artist} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
          src={concert.image} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4">
          <h4 className="font-headline text-2xl font-bold text-on-surface">{concert.title}</h4>
          <p className="text-secondary font-bold uppercase tracking-widest text-sm">{concert.artist}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-xs font-bold">DATE</span>
            <span className="text-on-surface font-medium">{concert.date}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-on-surface-variant text-xs font-bold">CITY</span>
            <span className="text-on-surface font-medium">{concert.location.split(',')[0]}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-secondary fill-current" />
            <span className="text-xs font-bold">{concert.attendees > 1000 ? (concert.attendees/1000).toFixed(1) + 'k' : concert.attendees} Buddies</span>
          </div>
          <button className="bg-surface-bright/40 text-on-surface px-4 py-2 rounded-full border border-outline/20 font-bold text-sm hover:bg-surface-bright transition-colors">
            Find Friends
          </button>
        </div>
      </div>
    </div>
  );
};
