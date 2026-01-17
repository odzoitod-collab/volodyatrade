import React from 'react';
import { Zap, Rocket, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-end pb-12 px-4 overflow-hidden bg-[#0a0f1d]">
      {/* Background Accents */}
      <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[30%] bg-indigo-600/10 rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-md mx-auto w-full space-y-6">
        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-3 py-1.5 rounded-xl w-fit border border-white/10 shadow-xl">
          <Zap className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black text-blue-100 uppercase tracking-[0.15em]">TonTrader VIP Club</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1] tracking-tighter">
            Твой путь <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              к  первому  лимону
            </span> <br/> на фьючерсах
          </h1>

          <p className="text-slate-400 text-base leading-relaxed font-medium max-w-[90%]">
            Привет! Я Владимир. Зарабатываю на TonTrader и даю только те сигналы, в которых уверен сам. Хватит смотреть, пора забирать своё.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-3 rounded-2xl border border-white/10">
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-bold text-white">Плечо до X20</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-3 rounded-2xl border border-white/10">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-xs font-bold text-white">Точные входы</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Button href="https://t.me/TonTraderAppBot?start=7339984413" fullWidth pulse className="h-14 text-lg rounded-2xl shadow-xl shadow-blue-600/20">
            <span className="flex items-center gap-2">
              Начать профит <ChevronRight size={18} />
            </span>
          </Button>
          <p className="text-[9px] text-center text-slate-500 font-bold uppercase tracking-[0.2em] opacity-60">
            @roush77 • Доступ ограничен
          </p>
        </div>
      </div>
    </div>
  );
};