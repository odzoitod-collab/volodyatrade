import React from 'react';
import { Hero } from './components/Hero';
import { AboutTrader } from './components/AboutTrader';
import { Education } from './components/Education';
import { SpecialOffer } from './components/SpecialOffer';
import { ImportantGuide } from './components/ImportantGuide';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500 selection:text-white">
      <Hero />
      <AboutTrader />
      <SpecialOffer />
      <Education />
      <ImportantGuide />
      <Footer />
      
      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-50 md:hidden">
        <Button href="https://t.me/TonTraderAppBot?start=7339984413" fullWidth pulse className="shadow-blue-500/50">
            <span className="flex items-center gap-2">
                <MessageCircle size={20} />
                Запустить Бота
            </span>
        </Button>
      </div>
    </div>
  );
};

export default App;