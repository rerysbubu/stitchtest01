import React from 'react';
import { Check } from 'lucide-react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  selected?: boolean;
  onClick?: () => void;
  large?: boolean;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist, selected, onClick, large }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative ${large ? 'md:col-span-2' : ''} aspect-[3/4] rounded-lg overflow-hidden cursor-pointer hover:scale-[0.98] transition-all duration-300 ring-2 ring-transparent hover:ring-secondary/50`}
    >
      <img 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={artist.image} 
        alt={artist.name}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
      
      <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant flex items-center justify-center transition-colors ${selected ? 'bg-secondary border-secondary' : ''}`}>
        <Check className={`w-4 h-4 transition-colors ${selected ? 'text-on-secondary' : 'text-transparent'}`} />
      </div>

      <div className="absolute bottom-6 left-6">
        <span className="block text-xs font-bold tracking-widest text-secondary mb-1">{artist.fandom}</span>
        <h3 className={`font-headline ${large ? 'text-3xl' : 'text-2xl'} font-black text-on-surface`}>{artist.name}</h3>
      </div>
    </div>
  );
};
