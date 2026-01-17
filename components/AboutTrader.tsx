import React from 'react';
import { Send, Sparkles, User, Flame } from 'lucide-react';

export const AboutTrader: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0f1d]">
      <div className="max-w-lg mx-auto bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-slate-800/50 relative overflow-hidden">
        
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-indigo-500/50 p-1 bg-slate-900 relative">
              <img 
                src="https://decenter.org/content/images/2025/02/----------.JPG" 
                alt="TonTrader Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-blue-500 to-indigo-500 p-2 rounded-full border-4 border-[#0a0f1d]">
              <User size={14} className="text-white" />
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white tracking-tight">Я твой наставник</h2>
            <p className="text-indigo-400 font-bold text-lg">Владимир (@roush77i)</p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col items-center p-3 bg-slate-800/30 rounded-2xl border border-slate-700/30">
              <Flame className="text-orange-400 mb-1" size={20} />
              <span className="text-white font-bold text-sm">Фьючерс мастер</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-slate-800/30 rounded-2xl border border-slate-700/30">
              <Sparkles className="text-yellow-400 mb-1" size={20} />
              <span className="text-white font-bold text-sm">Честный результат</span>
            </div>
          </div>

          <p className="text-slate-400 text-md leading-relaxed">
            Приятно познакомиться! Я не буду парить тебя заумными терминами. Я сам торгую на <span className="text-white font-bold">фьючерсах</span> каждый день и просто нахожу четкие точки входа. Трейдинг для меня — это способ жить в кайф и не зависеть от дяди. Давай делать кэш вместе!
          </p>
          
          <a 
            href="https://t.me/roush77i" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-3 text-white bg-gradient-to-r from-[#229ED9] to-[#34b7f1] px-8 py-4 rounded-2xl font-black transition-all hover:shadow-[0_0_20px_rgba(34,158,217,0.4)] active:scale-95"
          >
            <Send size={20} />
            <span>Написать Вове</span>
          </a>
        </div>
      </div>
    </section>
  );
};