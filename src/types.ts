import { LucideIcon } from "lucide-react";

export interface Artist {
  id: string;
  name: string;
  fandom: string;
  image: string;
  color: string;
}

export interface Concert {
  id: string;
  title: string;
  artist: string;
  date: string;
  location: string;
  image: string;
  attendees: number;
  trending?: boolean;
}

export interface Post {
  id: string;
  user: string;
  avatar: string;
  time: string;
  location: string;
  content: string;
  comments: number;
  likes: number;
  isVip?: boolean;
  tag?: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  time: string;
  content: string;
  borderColor: string;
}

export interface Message {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
  image?: string;
}

export type Screen = 'fandom' | 'discovery' | 'community' | 'profile' | 'chat';
