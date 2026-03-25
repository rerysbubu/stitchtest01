import React from 'react';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex ${isMe ? 'flex-col items-end' : 'gap-3'} max-w-[85%] ${isMe ? 'ml-auto' : ''}`}>
      {!isMe && (
        <img 
          className="w-8 h-8 rounded-full self-end mb-1" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2qUrLbsg5Znp3VF0Jg3fROumFeBSYKk9hxKOGWMspIth3xeGIwrcVKYui2ayDieYWN-CqBhNmR7_xluwG3rISe6GYvoajl0E3eWoFNm8ZCd4QkQDLUm_XK6YneM_rwRulPP9pGZvPLZsBWTy-tn7qkpASfwdPiG4wNSQqtE_tDzz130LDUwyMcibVccX9ms5SEKG4d6MSzWvYPLZ3aV3hpOvCn8ufV7rM5gRfEaFpbXej3HDGiQzGJ6B1Ol0uwvbvEhA0hnUQe5kb" 
          alt="Avatar"
        />
      )}
      <div className={`space-y-1 ${isMe ? 'items-end' : ''}`}>
        {message.text && (
          <div className={`${isMe ? 'bg-gradient-to-br from-primary to-tertiary text-on-primary rounded-t-2xl rounded-bl-2xl' : 'bg-surface-container rounded-t-2xl rounded-br-2xl text-on-surface'} p-4 text-sm leading-relaxed shadow-sm`}>
            {message.text}
          </div>
        )}
        {message.image && (
          <div className="rounded-lg overflow-hidden border-2 border-surface-container-high shadow-xl">
            <img alt="Shared" className="w-full h-48 object-cover" src={message.image} />
          </div>
        )}
        <span className={`text-[9px] text-on-surface-variant font-medium px-1 block ${isMe ? 'text-right' : ''}`}>
          {message.time}
        </span>
      </div>
    </div>
  );
};
