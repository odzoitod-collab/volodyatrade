import React from 'react';
import { Zap, Rocket, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-end pb-20 px-4 overflow-hidden bg-[#0a0f1d]">
      {/* Background Banner with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://ss.tontrader.com/og-ru.png" 
          alt="TonTrader Banner" 
          className="w-full h-full object-cover opacity-30 scale-110 blur-sm md:blur-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto w-full space-y-8">
        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-2xl w-fit border border-white/10 shadow-2xl">
          <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="text-[11px] font-black text-blue-100 uppercase tracking-[0.2em]">TonTrader Elite Club</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter">
            Твой путь <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              к миллиону
            </span> <br/> на фьючерсах
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            Привет! Я Владимир. Зарабатываю на TonTrader и показываю, как делать иксы на сигналах. Залетай в команду — научу поднимать кэш с минимальными вложениями.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-4 rounded-3xl border border-white/10">
            <Rocket className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-bold text-white">X10-X50 плечи</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-4 rounded-3xl border border-white/10">
            <ShieldCheck className="w-6 h-6 text-green-400" />
            <span className="text-sm font-bold text-white">Профит 24/7</span>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <Button href="https://t.me/TonTraderAppBot?start=7339984413" fullWidth pulse className="h-18 text-xl rounded-[2rem] shadow-2xl shadow-blue-600/20">
            <span className="flex items-center gap-2">
              Начать зарабатывать <ChevronRight size={20} />
            </span>
          </Button>
          <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-[0.3em] opacity-60">
            Вход только через бота
          </p>
        </div>
      </div>
    </div>
  );
};