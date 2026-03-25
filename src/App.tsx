import React, { useState } from 'react';
import { FandomSelection } from './screens/FandomSelection';
import { Discovery } from './screens/Discovery';
import { Community } from './screens/Community';
import { Profile } from './screens/Profile';
import { ChatDetail } from './screens/ChatDetail';
import { Screen } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('fandom');
  const [prevScreen, setPrevScreen] = useState<Screen | null>(null);

  const navigateTo = (screen: Screen) => {
    setPrevScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'fandom':
        return <FandomSelection onContinue={() => navigateTo('discovery')} />;
      case 'discovery':
        return <Discovery onScreenChange={navigateTo} />;
      case 'community':
        return <Community onScreenChange={navigateTo} />;
      case 'profile':
        return <Profile onScreenChange={navigateTo} />;
      case 'chat':
        return <ChatDetail onBack={() => navigateTo(prevScreen || 'community')} />;
      default:
        return <FandomSelection onContinue={() => navigateTo('discovery')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
