import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Header } from '../components/Header';
import { ArtistCard } from '../components/ArtistCard';
import { ARTISTS } from '../constants';

interface FandomSelectionProps {
  onContinue: () => void;
}

export const FandomSelection: React.FC<FandomSelectionProps> = ({ onContinue }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleArtist = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Header screen="fandom" />
      
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
        <section className="mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4">
            CHOOSE YOUR <br/>
            <span className="text-gradient">FANDOM</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md">
            Select the artists you support to personalize your backstage experience and join exclusive fan circles.
          </p>
        </section>

        <section className="mb-10 sticky top-24 z-40">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors" />
            <input 
              className="w-full bg-surface-container-high border-none rounded-full py-5 pl-14 pr-6 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/50 transition-all text-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]" 
              placeholder="Search for your bias..." 
              type="text"
            />
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {ARTISTS.map((artist, index) => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              selected={selected.includes(artist.id)}
              onClick={() => toggleArtist(artist.id)}
              large={index === 2} // Mimic the NewJeans large card from image
            />
          ))}
          
          <div className="group relative aspect-[3/4] rounded-lg border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-sm tracking-widest uppercase">Explore More</span>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent z-50">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-background overflow-hidden ${i === 2 ? 'ring-2 ring-secondary' : ''}`}>
                  <img className="w-full h-full object-cover" src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-on-surface-variant">2.4k fans joined today</p>
          </div>
          <button 
            onClick={onContinue}
            className="w-full py-5 rounded-full bg-primary text-on-primary font-headline font-black text-xl shadow-[0_10px_30px_rgba(255,131,213,0.3)] hover:scale-[0.98] active:scale-95 transition-all"
          >
            CONTINUE
          </button>
          <p className="text-center text-[10px] uppercase tracking-widest text-outline-variant font-bold">
            By continuing you agree to the fandom code of conduct
          </p>
        </div>
      </footer>

      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] -z-10 rounded-full"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/10 blur-[100px] -z-10 rounded-full"></div>
    </div>
  );
};
