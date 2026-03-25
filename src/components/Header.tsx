import React from 'react';
import { LucideIcon, Bell, MessageSquare, ChevronLeft, Info, Video, X } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  screen: Screen;
  onBack?: () => void;
  onAction?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ screen, onBack, onAction }) => {
  if (screen === 'fandom') {
    return (
      <header className="fixed top-0 w-full z-50 glass-effect">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <div className="text-2xl font-black text-gradient font-headline">
            Backstage Pass
          </div>
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:scale-95 transition-transform">
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>
    );
  }

  if (screen === 'chat') {
    return (
      <header className="fixed top-0 w-full z-50 glass-effect shadow-[0_40px_40px_-15px_rgba(252,219,255,0.08)] flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="hover:scale-95 transition-transform duration-200 text-primary">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="relative">
            <img 
              alt="User Profile" 
              className="w-10 h-10 rounded-full border-2 border-secondary object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqNjKBQTH6Jp1OdAcx7lCqEsc1ZvVyE9QvYbUEqe7GG3UXLW-1VZf6b0tMVmLcPM-XvlC6e382s7nBpBlK4VuOvNx2aQER5xUFG3CwXb_ABTEE2eNqXFWIuOu9Yh8v_NzKMSxNKFJMdkvFCiqlbk0WXpVDr7h6zHUUH0O36xbKJTbYeP4h5qAdh_kyTV6FoeXfqHFtMqe5I0hSQwpJbaMwUSQlyXQflKeHKEMIMrt58RB0Q0NQl3JtG7Pw2xV9C7rS0ekLx7WJbleT" 
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary border-2 border-background rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-lg tracking-tight text-primary">Jimin-ssi Fan</span>
              <span className="bg-secondary-container text-on-secondary px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">ARMY</span>
            </div>
            <span className="text-[10px] text-secondary font-medium uppercase tracking-tighter">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:scale-95 transition-transform duration-200 text-on-background/60">
            <Video className="w-6 h-6" />
          </button>
          <button className="hover:scale-95 transition-transform duration-200 text-on-background/60">
            <Info className="w-6 h-6" />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-effect shadow-[0_40px_40px_-15px_rgba(252,219,255,0.08)]">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-secondary p-0.5 shadow-[0_0_15px_rgba(21,255,209,0.3)] overflow-hidden">
            <img 
              alt="User profile" 
              className="w-full h-full object-cover rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8l2uvYMclIJ31lNh6VLwxKp5rF_n_iwN07xx_kNzTpnkjKmITvOUv4qgkf6kOT-TXd-_i9Jrg0M7QDojDVaEhEHKbKQXZqSv1QzZj7iKoUpzUQTFRMh-khV7U7NjKWYgb27LjE-A9KBqmBbfMi0IRF3od7hs6n2uQzaaDUWlWMNowml07m3ugYkknt3eElXnR7hGmJwq-QP4fDZ8eWqpcvzsnb28i3V729rnAwaxHltaPqJn1mtUOJ9YqjF46xL3EKS_QP1LDygI5" 
            />
          </div>
          {screen === 'profile' && <span className="text-2xl font-black text-gradient font-headline">Backstage Pass</span>}
        </div>
        {screen !== 'profile' && <h1 className="text-2xl font-black text-gradient font-headline tracking-tight">Backstage Pass</h1>}
        <div className="flex items-center gap-4">
          {screen === 'profile' && (
            <button className="text-on-background/60 hover:scale-95 transition-transform duration-200">
              <MessageSquare className="w-6 h-6" />
            </button>
          )}
          <button className="text-primary hover:scale-95 transition-transform duration-200 active:opacity-80">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
