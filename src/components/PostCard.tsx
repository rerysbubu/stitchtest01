import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="bg-surface-container rounded-lg p-6 shadow-xl relative overflow-hidden">
      <div className="flex gap-4 items-start">
        <div className="relative flex-shrink-0">
          <img 
            className={`w-14 h-14 rounded-full object-cover ring-2 ${post.isVip ? 'ring-secondary' : 'ring-outline-variant'} ring-offset-4 ring-offset-surface-container`} 
            src={post.avatar} 
            alt={post.user}
          />
          {post.isVip && (
            <div className="absolute -bottom-1 -right-1 bg-tertiary text-on-tertiary p-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">VIP</div>
          )}
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-on-surface leading-none">{post.user}</h3>
              <span className="text-xs text-on-surface-variant font-medium">{post.time} • {post.location}</span>
            </div>
            {post.tag && (
              <div className="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">
                {post.tag}
              </div>
            )}
          </div>
          <p className="text-on-surface leading-relaxed text-sm">
            {post.content}
          </p>
          <div className="flex gap-4 pt-2">
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs font-bold">{post.comments} Comments</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-bold">{post.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
