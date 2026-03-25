import React from 'react';
import { Home, Ticket, MessageSquare, User } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onScreenChange }) => {
  const navItems = [
    { id: 'discovery' as Screen, label: 'Home', icon: Home },
    { id: 'discovery' as Screen, label: 'Concerts', icon: Ticket },
    { id: 'community' as Screen, label: 'Chat', icon: MessageSquare },
    { id: 'profile' as Screen, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-2xl rounded-t-[2rem] z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {navItems.map((item, index) => {
        const isActive = (item.id === activeScreen) || (item.label === 'Concerts' && activeScreen === 'discovery');
        // Special handling for the "Concerts" vs "Home" distinction in the UI images
        const isConcertsActive = item.label === 'Concerts' && activeScreen === 'discovery';
        const isChatActive = item.label === 'Chat' && activeScreen === 'community';
        const isProfileActive = item.label === 'Profile' && activeScreen === 'profile';
        const isHomeActive = item.label === 'Home' && activeScreen === 'discovery' && false; // Home is never active in images

        const activeColor = isActive ? 'text-secondary' : 'text-on-background/40';
        const activeBg = isActive ? 'bg-secondary-container/20 rounded-full px-4 py-1' : '';

        return (
          <button
            key={index}
            onClick={() => onScreenChange(item.id)}
            className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-90 ${activeColor} ${activeBg}`}
          >
            <item.icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="font-body text-[10px] uppercase tracking-widest font-bold mt-1">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
