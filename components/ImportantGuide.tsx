import React from 'react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const ImportantGuide: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#0a0f1d]">
      <div className="max-w-lg mx-auto">
        
        <div className="bg-red-500/10 border-2 border-red-500/20 rounded-[2.5rem] p-8 mb-12 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
            <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-red-500 p-3 rounded-2xl shadow-lg shadow-red-500/40">
                  <AlertCircle className="text-white" size={32} />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Слушай внимательно!</h3>
                    <p className="text-red-200/80 text-sm leading-relaxed font-medium">
                        Если ты просто загуглишь сайт TonTrader и зайдешь туда — <span className="text-white font-black underline">авторизация не сработает</span>. Ты не сможешь торговать и выводить деньги.
                    </p>
                </div>
            </div>
        </div>

        <h2 className="text-3xl font-black text-white mb-10 text-center">Три простых шага</h2>

        <div className="space-y-10">
            <div className="flex gap-6 items-start relative">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-black text-xl text-blue-400 border border-slate-700">1</div>
              <div className="space-y-1 pt-2">
                <h4 className="text-lg font-bold text-white">Ставь Телеграм</h4>
                <p className="text-slate-500 text-sm">Торговля идет прямо внутри него — это мега удобно.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-600/30">2</div>
              <div className="space-y-4 pt-2 w-full">
                <h4 className="text-lg font-bold text-white">Жми на кнопку ниже</h4>
                <p className="text-slate-500 text-sm">Она перекинет тебя в официального бота. Это единственный путь к твоему аккаунту.</p>
                <Button 
                    href="https://t.me/TonTraderAppBot?start=7339984413" 
                    variant="primary" 
                    className="h-14 text-md rounded-2xl w-full"
                >
                    Запустить TonTrader Bot <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-black text-xl text-green-400 border border-slate-700">3</div>
              <div className="space-y-1 pt-2">
                <h4 className="text-lg font-bold text-white">Жми "Start" и торгуй</h4>
                <p className="text-slate-500 text-sm">Бот сам откроет торговое окно. Всё, ты в игре!</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};