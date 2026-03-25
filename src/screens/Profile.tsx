import React from 'react';
import { Edit, Share, Users, Verified, Ticket, Star } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { ReviewCard } from '../components/ReviewCard';
import { REVIEWS } from '../constants';
import { Screen } from '../types';

interface ProfileProps {
  onScreenChange: (screen: Screen) => void;
}

export const Profile: React.FC<ProfileProps> = ({ onScreenChange }) => {
  return (
    <div className="min-h-screen pb-32">
      <Header screen="profile" />
      
      <main className="pt-24 px-6 max-w-5xl mx-auto">
        <section className="relative mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-primary to-tertiary p-1.5 shadow-[0_0_50px_rgba(255,131,213,0.3)]">
                <img 
                  alt="User Avatar" 
                  className="w-full h-full object-cover rounded-full border-4 border-background" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-eViFzxnDMkrmZY-Qb8Y5JL8uYsdAlZvBS0cYHlNlQzpZlkTIA75qATN4JdT3RZvSqkMjfcqKH0ImBxE5vtv0mDE7CG0VbJUoaasC3eZOSg3IDcL2wJ8sbqJb-B0aMdGLK4YAE407t5khdGli5pQu0ANaA5gQlaazsfceFdr3Iw9EvRzXaHpdBkRSD7O6lX4w2z6Ve-54FNSovLa77bbzUTlgAqgh-SvZwLs7NJHt1qhXjFppnUWYXIFgA9JldNmDe46yK8ET3vB-" 
                />
              </div>
              <div className="absolute -bottom-2 right-4 bg-secondary text-on-secondary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-tighter shadow-lg">
                Bias: RM
              </div>
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-background">ARMY_Joonie94</h1>
                <p className="text-on-surface-variant text-lg mt-2 font-medium">Digital Nomad & Concert Enthusiast ✈️</p>
              </div>
              <p className="text-on-surface/80 max-w-xl leading-relaxed">
                Collecting memories one lightstick at a time. RM's lyricism is my daily oxygen. Always looking for concert buddies for the next world tour! 💜
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-95 transition-all active:opacity-80">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="bg-surface-bright/40 border border-outline/20 backdrop-blur-md text-on-surface px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-95 transition-all">
                  <Share className="w-4 h-4" />
                  Share Pass
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-6">
            <div className="bg-surface-container rounded-lg p-6 shadow-sm border-l-4 border-secondary">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                Fandoms Joined
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'ARMY', role: 'Elite Member', color: 'bg-[#5c0048]', textColor: 'text-primary', verified: true },
                  { name: 'Bunnies', role: 'Active Stan', color: 'bg-[#00483a]', textColor: 'text-secondary' },
                  { name: 'STAY', role: 'New Member', color: 'bg-[#290067]', textColor: 'text-tertiary' }
                ].map((fandom, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${fandom.color} flex items-center justify-center font-bold ${fandom.textColor}`}>{fandom.name.substring(0, 2).toUpperCase()}</div>
                      <div>
                        <p className="font-bold text-sm">{fandom.name}</p>
                        <p className="text-xs text-on-surface-variant">{fandom.role}</p>
                      </div>
                    </div>
                    {fandom.verified && <Verified className="w-5 h-5 text-secondary fill-current" />}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low rounded-lg p-6 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black text-primary font-headline">12</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Concerts</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-secondary font-headline">84</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Buddies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="bg-surface-container rounded-lg p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-primary" />
                  Attended Concerts
                </h3>
                <button className="text-primary text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Yet To Come', location: 'Seoul 2023', color: 'text-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8-QrTAv9ApSxhvP8AlEe7RwbfwTzbdto-_rr3RtK89N7ieAOlnTB2ThCuC2ZZwMvnrg5t7umA9ybHoX4WM2R57skWWt2MuseqZlNznvA31zIVf8Jv4E5xK1PAG29ZoS-9gNKJqmEI9bskJ5EvVpihqWbDxVEkegWrh-BqvOEwWTaTqE-Wj-v7eqBlXiU0Ba7beuufSz_O4YLWRIuAjGO0TgLCWLSid0a46rU41Ohn8Tnq8nK1r0kD9hRSx7UCB995dYAx03a8T4JF' },
                  { title: 'PTD On Stage', location: 'LA 2022', color: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXLBjjaJUwEULXPuqj7dUke7sj5Sfsd9Ut6Yw2-eLQOOGR9HznanlfW24VbszlF1E7zj966usISjdGUaJuShF4lXA4qOh6-liBol0CXVS5xE7XnGC68fEtwjAIJdu9CzGkcvcO9jCn1ET-SoqKKk0NIRl7i9nHLbd1QHJ2BH9SiMdy_B9LyoNemYCmmsU_hxq1SsLOZc43QAQj6xahjgGl2iNlOyqwM_FGzS70rFS8x2jR_gOjpH9T0IcqC7UvjEcg44qHKebM5ySH' },
                  { title: 'The Odd of Love', location: 'Tokyo 2023', color: 'text-tertiary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8t2D_YkduFGUgLAgaHpU9S__3ICA69KzV_W6XTCH5YWh20VPxwkt2urTIdEMSccn3fPEM3u7LgnvHYsFlVsYcJcMIgheRxuwXTElN7R08WQPo-M-GyecxTA0KEs_ZxZkDLiUdZGY_drtKVhjwvKvubp5GyQ_gwGHyU7-DT5TRQ3hIYow_TeZqh3XUPtIRnEXeLoWsLWTMZdq6rNY2-D3-yLgD6SjC33lzOZQ0VTre_0tlwgNwiAGqWfiSCd6DxqFEY9ueMGXBmUIv' }
                ].map((concert, i) => (
                  <div key={i} className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <img alt={concert.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" src={concert.img} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-80"></div>
                    <div className="absolute bottom-3 left-3">
                      <p className={`text-xs font-bold ${concert.color} uppercase tracking-tighter`}>{concert.location}</p>
                      <p className="text-sm font-bold">{concert.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container rounded-lg p-6">
              <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-tertiary" />
                Buddy Reviews
              </h3>
              <div className="space-y-4">
                {REVIEWS.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav activeScreen="profile" onScreenChange={onScreenChange} />
    </div>
  );
};
