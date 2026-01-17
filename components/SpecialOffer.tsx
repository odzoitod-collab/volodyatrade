import React from 'react';
import { Wallet, Gift, Star, Check } from 'lucide-react';
import { Button } from './Button';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0f1d]">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="space-y-2">
            <h2 className="text-3xl font-black text-white">Как начнем работу?</h2>
            <p className="text-slate-500 font-medium">Выбирай, что тебе больше подходит</p>
        </div>

        {/* Option 1: Minimal Deposit */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-8 relative group overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/10 p-3 rounded-2xl text-blue-400">
              <Wallet size={28} />
            </div>
            <div>
                <h3 className="text-xl font-black text-white">Сам по себе</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Твой капитал</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Хочешь всё контролировать? На TonTrader можно залететь даже с <span className="text-white font-bold">$10</span>. Закидывай депо, открывай фьючерсы по моим сигналам и забирай всю прибыль.
          </p>
          <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">$10</span>
              <span className="text-slate-500 font-bold text-sm">вход</span>
          </div>
        </div>

        {/* Option 2: 50/50 Partnership */}
        <div className="bg-gradient-to-br from-blue-600/20 via-slate-900/60 to-slate-900/60 border-2 border-blue-500/30 rounded-[2rem] p-8 relative shadow-[0_20px_50px_rgba(37,99,235,0.15)]">
          <div className="absolute -top-3 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/40">
            Для тех, кто готов пахать
          </div>
          
          <div className="flex items-center gap-4 mb-6 mt-2">
            <div className="bg-blue-500/20 p-3 rounded-2xl text-blue-400">
              <Gift size={28} />
            </div>
            <div>
                <h3 className="text-xl font-black text-white">Партнерство 50/50</h3>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Мои деньги — твои руки</p>
            </div>
          </div>
          
          <p className="text-slate-300 text-md mb-6 leading-relaxed">
            Если ты реально хочешь заработать, но нет денег на депо — <span className="text-white font-bold italic underline decoration-blue-500">я сам могу пополнить тебе баланс</span> или выдать рабочий промокод.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
              <span className="text-sm text-slate-300 font-medium">Я даю депо — ты торгуешь строго по моим сигналам</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
              <span className="text-sm text-slate-300 font-medium">Чистую прибыль делим пополам (50/50)</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
              <span className="text-sm text-slate-300 font-medium">Моё личное сопровождение в ТГ</span>
            </div>
          </div>

          <Button 
            href="https://t.me/roush77i" 
            variant="primary" 
            className="w-full bg-white text-[#0a0f1d] hover:bg-slate-100 rounded-2xl h-14 shadow-none"
          >
            Пиши "Хочу в команду"
          </Button>
        </div>

      </div>
    </section>
  );
};