import React from 'react';
import { Search, Filter, MapPin, Plus } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { ConcertCard } from '../components/ConcertCard';
import { CONCERTS } from '../constants';
import { Screen } from '../types';

interface DiscoveryProps {
  onScreenChange: (screen: Screen) => void;
}

export const Discovery: React.FC<DiscoveryProps> = ({ onScreenChange }) => {
  return (
    <div className="min-h-screen pb-32">
      <Header screen="discovery" />
      
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <section className="mb-10">
          <div className="flex flex-col gap-2">
            <span className="font-label text-secondary text-sm font-bold tracking-[0.2em] uppercase">Upcoming Events</span>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface leading-tight">World Tours</h2>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                className="w-full bg-surface-container border-none rounded-full py-4 pl-12 pr-6 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all" 
                placeholder="Search artists or tours..." 
                type="text"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              <button className="bg-secondary-container text-on-secondary px-6 py-2 rounded-full font-bold whitespace-nowrap flex items-center gap-2 hover:scale-95 transition-transform">
                <Filter className="w-4 h-4" />
                Fandom
              </button>
              <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full font-bold whitespace-nowrap flex items-center gap-2 hover:scale-95 transition-transform">
                <MapPin className="w-4 h-4" />
                Location
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONCERTS.map((concert, index) => (
            <ConcertCard 
              key={concert.id} 
              concert={concert} 
              featured={index === 0}
            />
          ))}
        </div>
      </main>

      <button className="fixed right-6 bottom-28 w-14 h-14 bg-gradient-to-tr from-primary to-tertiary rounded-2xl flex items-center justify-center shadow-2xl z-40 active:scale-90 transition-transform">
        <Plus className="w-8 h-8 text-on-primary" />
      </button>

      <BottomNav activeScreen="discovery" onScreenChange={onScreenChange} />
    </div>
  );
};
