import React from 'react';
import { Zap, Rocket, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-end pb-12 px-4 overflow-hidden bg-[#0a0f1d]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-lg mx-auto w-full space-y-8">
        <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full w-fit border border-blue-400/20">
          <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span className="text-[11px] font-bold text-blue-100 uppercase tracking-[0.1em]">Твой быстрый старт в 2025</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Разгоняем <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              фьючерсы
            </span> <br/> вместе
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Здорово! Я Владимир. Я давно на TonTrader и реально шарю, как делать иксы на фьючерсах. Залетай в мой клуб — научу делать деньги даже с минималки.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-slate-800/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700/50">
            <Rocket className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-bold">Сигналы 24/7</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700/50">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-sm font-bold">Без воды</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button href="https://t.me/TonTraderAppBot?start=7339984413" fullWidth pulse className="h-16 text-xl rounded-2xl">
            Ворваться в профит
          </Button>
          <p className="text-[10px] text-center text-slate-500 font-medium uppercase tracking-widest">
            *Официальная ссылка TonTrader Bot
          </p>
        </div>
      </div>
    </div>
  );
};