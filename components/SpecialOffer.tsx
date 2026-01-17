import React from 'react';
import { Wallet, Gift, Star, Check, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0f1d]">
      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-2">
            <h2 className="text-3xl font-black text-white tracking-tighter">Твой старт сегодня</h2>
            <p className="text-slate-500 font-bold text-base">Выбирай формат, пока есть места</p>
        </div>

        {/* Option 1: Minimal Deposit */}
        <div className="bg-slate-900/60 border border-white/5 rounded-[2rem] p-8 relative group overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600/10 p-3 rounded-2xl text-blue-400">
              <Wallet size={24} />
            </div>
            <div>
                <h3 className="text-xl font-black text-white tracking-tight">Самостоятельно</h3>
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.1em]">Доступ к сигналам</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Начни с малого: всего <span className="text-white font-bold">$10</span> и мои сигналы. Идеально, чтобы проверить стратегию и начать расти.
          </p>
          <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">$10+</span>
              <span className="text-slate-500 font-black text-xs uppercase tracking-widest">депозит</span>
          </div>
        </div>

        {/* Option 2: 50/50 Partnership */}
        <div className="bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-900 border-2 border-blue-500/10 rounded-[2.5rem] p-8 relative shadow-xl">
          <div className="absolute -top-3 left-8 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] shadow-lg">
            VIP ПРЕДЛОЖЕНИЕ
          </div>
          
          <div className="flex items-center gap-4 mb-6 mt-2">
            <div className="bg-blue-600/20 p-3 rounded-2xl text-blue-400">
              <Gift size={24} />
            </div>
            <div>
                <h3 className="text-xl font-black text-white tracking-tight">Партнерство 50/50</h3>
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.1em]">Личная работа</p>
            </div>
          </div>
          
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            Если ты готов серьезно работать, но нет банка — <span className="text-white font-black italic underline decoration-blue-500 underline-offset-4">я могу пополнить тебе баланс</span>. Мне нужны активные люди для масштабирования профита.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={12} className="text-green-400" /></div>
              <span className="text-xs text-slate-300 font-bold">Депозит за мой счет</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={12} className="text-green-400" /></div>
              <span className="text-xs text-slate-300 font-bold">Прибыль пополам (50/50)</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-green-500/20 p-1 rounded-full"><Check size={12} className="text-green-400" /></div>
              <span className="text-xs text-slate-300 font-bold">Осталось 2 места на сегодня</span>
            </div>
          </div>

          <Button 
            href="https://t.me/roush77" 
            variant="primary" 
            className="w-full bg-white text-[#0a0f1d] hover:bg-slate-100 rounded-2xl h-14 shadow-xl"
          >
            <span className="flex items-center gap-2">
              Занять место в команде <ArrowUpRight size={18} />
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
};