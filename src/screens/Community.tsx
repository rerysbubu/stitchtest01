import React from 'react';
import { Plus, MessageSquare, Heart, Sparkles } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { PostCard } from '../components/PostCard';
import { POSTS } from '../constants';
import { Screen } from '../types';

interface CommunityProps {
  onScreenChange: (screen: Screen) => void;
}

export const Community: React.FC<CommunityProps> = ({ onScreenChange }) => {
  return (
    <div className="min-h-screen pb-32">
      <Header screen="community" />
      
      <main className="pt-24 px-4 max-w-2xl mx-auto space-y-8">
        <section className="relative overflow-hidden rounded-lg h-64 flex flex-col justify-end p-8 group cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJJrvFhzpvSQyA6OO3jG2cPH-k3O_iuwgYGiUcGUBtVIpqgg2SsKkDMkqt5bf8kQcRXISgBA9Ij_hKBO_isJjoOsCzAXTRrWIL0URSUP6rvE5mUSN0YueFkCyzKYTdYjIebe1Xu_Yc0k7eyN4atoqGnan7CN6zWaLq51PxchKbKLJGqvZsYNUixo-Tj84iY1_2R5lC0Cio0mBZzu-9W5DjHXZKQ6BKh5ZZ5hUX4ZuL0apawSg0C0tDK89m4uP5KsE0eIMsXtBcztWw')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="relative z-10 space-y-2">
            <h1 className="text-4xl font-black font-headline tracking-tighter leading-none">ARMY<br/>FINDER</h1>
            <p className="text-on-surface-variant font-medium max-w-[200px] leading-tight text-sm">Find your concert squad for the 2024 World Tour.</p>
          </div>
        </section>

        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold text-sm whitespace-nowrap active:scale-95 transition-all">All Tours</button>
          <button className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full font-bold text-sm whitespace-nowrap active:scale-95 transition-all">Los Angeles</button>
          <button className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full font-bold text-sm whitespace-nowrap active:scale-95 transition-all">Seoul</button>
          <button className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full font-bold text-sm whitespace-nowrap active:scale-95 transition-all">London</button>
        </div>

        <div className="space-y-6">
          {POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}

          <div className="relative bg-gradient-to-br from-tertiary/20 to-primary/20 rounded-lg p-1">
            <div className="bg-background rounded-[calc(1rem-4px)] p-6 flex flex-col items-center text-center space-y-4">
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em]">Trending Show</span>
              <h2 className="text-2xl font-black font-headline text-on-background">SEOUL FINALE</h2>
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-background object-cover" src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="User" />
                ))}
                <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-background flex items-center justify-center text-[8px] font-bold text-primary">+800</div>
              </div>
              <p className="text-on-surface-variant text-xs italic">"842 people looking for groups in Seoul"</p>
              <button className="w-full py-3 bg-secondary text-on-secondary rounded-full font-black text-xs uppercase tracking-widest active:scale-95 transition-transform">Join the waitlist</button>
            </div>
          </div>
        </div>
      </main>

      <button 
        onClick={() => onScreenChange('chat')}
        className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-primary to-tertiary text-on-primary rounded-full shadow-[0_15px_30px_rgba(255,131,213,0.4)] flex items-center justify-center z-50 active:scale-90 transition-transform"
      >
        <Plus className="w-8 h-8" />
      </button>

      <BottomNav activeScreen="community" onScreenChange={onScreenChange} />
    </div>
  );
};
