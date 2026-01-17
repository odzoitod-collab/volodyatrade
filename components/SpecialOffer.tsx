import React from 'react';
import { Wallet, Gift, Star, Check, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#0a0f1d]">
      <div className="max-w-lg mx-auto space-y-10">
        <div className="space-y-3">
            <h2 className="text-4xl font-black text-white tracking-tighter">Как работаем?</h2>
            <p className="text-slate-500 font-bold text-lg">Выбирай свой вариант старта</p>
        </div>

        {/* Option 1: Minimal Deposit */}
        <div className="bg-slate-900/60 border border-white/5 rounded-[2.5rem] p-10 relative group overflow-hidden">
          <div className="flex items-center gap-5 mb-8">
            <div className="bg-blue-600/10 p-4 rounded-[1.5rem] text-blue-400">
              <Wallet size={32} />
            </div>
            <div>
                <h3 className="text-2xl font-black text-white tracking-tight">Сам по себе</h3>
                <p className="text-xs text-blue-400 font-black uppercase tracking-[0.2em]">Весь профит твой</p>
            </div>
          </div>
          <p className="text-slate-400 text-md mb-8 leading-relaxed">
            Если есть свои деньги — стартуй на TonTrader хоть с <span className="text-white font-bold">$10</span>. Закидывай, подключайся к моим сигналам по фьючерсам и забирай всё себе.
          </p>
          <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-white">$10+</span>
              <span className="text-slate-500 font-black text-sm uppercase tracking-widest">депозит</span>
          </div>
        </div>

        {/* Option 2: 50/50 Partnership */}
        <div className="bg-gradient-to-br from-blue-600/30 via-slate-900 to-slate-900 border-2 border-blue-500/20 rounded-[3rem] p-10 relative shadow-2xl shadow-blue-600/10">
          <div className="absolute -top-4 left-10 bg-blue-600 text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">
            ВИП ПАРТНЕРСТВО
          </div>
          
          <div className="flex items-center gap-5 mb-8 mt-4">
            <div className="bg-blue-600/20 p-4 rounded-[1.5rem] text-blue-400">
              <Gift size={32} />
            </div>
            <div>
                <h3 className="text-2xl font-black text-white tracking-tight">Партнерство 50/50</h3>
                <p className="text-xs text-blue-400 font-black uppercase tracking-[0.2em]">Риски на мне</p>
            </div>
          </div>
          
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Если ты реально хочешь делать деньги, но нет банка — <span className="text-white font-black italic underline decoration-blue-500 underline-offset-4">я могу сам пополнить тебе баланс</span> или выдать эксклюзивный промокод для старта.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 p-1.5 rounded-full"><Check size={16} className="text-green-400" /></div>
              <span className="text-md text-slate-300 font-bold">Я даю депо — ты торгуешь по моим точкам входа</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 p-1.5 rounded-full"><Check size={16} className="text-green-400" /></div>
              <span className="text-md text-slate-300 font-bold">Прибыль делим строго 50 на 50</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-green-500/20 p-1.5 rounded-full"><Check size={16} className="text-green-400" /></div>
              <span className="text-md text-slate-300 font-bold">Лично веду тебя до первого вывода</span>
            </div>
          </div>

          <Button 
            href="https://t.me/roush77i" 
            variant="primary" 
            className="w-full bg-white text-[#0a0f1d] hover:bg-slate-100 rounded-[2rem] h-16 shadow-2xl shadow-white/10"
          >
            <span className="flex items-center gap-2">
              Пиши "Хочу в команду" <ArrowUpRight size={20} />
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
};