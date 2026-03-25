import React from 'react';
import { PlusCircle, Smile, Send, Sparkles } from 'lucide-react';
import { Header } from '../components/Header';
import { ChatBubble } from '../components/ChatBubble';
import { MESSAGES } from '../constants';

interface ChatDetailProps {
  onBack: () => void;
}

export const ChatDetail: React.FC<ChatDetailProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header screen="chat" onBack={onBack} />
      
      <main className="flex-grow pt-24 pb-32 px-4 max-w-4xl mx-auto w-full space-y-8 overflow-y-auto no-scrollbar">
        <div className="flex justify-center">
          <span className="bg-surface-container-low text-on-surface-variant text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest">Today</span>
        </div>

        {MESSAGES.map(msg => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        <div className="flex justify-center py-2">
          <div className="bg-surface-container-high/40 backdrop-blur px-4 py-2 rounded-xl flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-tertiary" />
            <span className="text-[10px] text-tertiary font-bold tracking-tight">AI SUGGESTION: Ask about lightstick accessories</span>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full p-4 bg-background/80 backdrop-blur-2xl z-50">
        <div className="max-w-4xl mx-auto flex items-end gap-3 bg-surface-container-low rounded-xl p-2 border border-outline-variant/10 shadow-2xl">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
            <PlusCircle className="w-6 h-6" />
          </button>
          <div className="flex-grow relative flex items-center">
            <textarea 
              className="w-full bg-transparent border-none focus:ring-0 text-sm py-2 px-1 text-on-surface placeholder:text-on-surface-variant/50 resize-none max-h-32" 
              placeholder="Type your message..." 
              rows={1}
            ></textarea>
            <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors">
              <Smile className="w-6 h-6" />
            </button>
          </div>
          <button className="bg-primary text-on-primary p-3 rounded-full hover:scale-105 active:scale-90 transition-all shadow-[0_10px_20px_-5px_rgba(255,131,213,0.4)]">
            <Send className="w-6 h-6 fill-current" />
          </button>
        </div>
        <div className="h-4"></div>
      </footer>
    </div>
  );
};
