import React from 'react';
import { Send, Sparkles, User, Flame, TrendingUp } from 'lucide-react';

export const AboutTrader: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#0a0f1d]">
      <div className="max-w-lg mx-auto bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl border border-white/5 relative overflow-hidden">
        
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-2 border-blue-500/30 p-1.5 bg-slate-800 relative shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://decenter.org/content/images/2025/02/----------.JPG" 
                alt="Vladimir TonTrader" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2.5 rounded-2xl border-4 border-[#0a0f1d] shadow-xl">
              <User size={18} className="text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white tracking-tighter">Владимир</h2>
            <p className="text-blue-400 font-black text-xl tracking-tight">@roush77i</p>
          </div>

          <div className="flex gap-3 w-full">
            <div className="flex-1 flex flex-col items-center p-4 bg-white/5 rounded-[2rem] border border-white/10">
              <Flame className="text-orange-500 mb-1" size={24} />
              <span className="text-white font-black text-sm uppercase tracking-tighter">Топ сигналы</span>
            </div>
            <div className="flex-1 flex flex-col items-center p-4 bg-white/5 rounded-[2rem] border border-white/10">
              <TrendingUp className="text-blue-400 mb-1" size={24} />
              <span className="text-white font-black text-sm uppercase tracking-tighter">90% винрейт</span>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed">
            Здорово, мужики! И дамы тоже. Я не буду грузить вас теорией на год. Я сам торгую на <span className="text-white font-bold">фьючерсах</span> каждый день и просто даю вам те же сигналы, по которым захожу сам. Моя цель — собрать мощную команду и делать кэш на дистанции.
          </p>
          
          <a 
            href="https://t.me/roush77i" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-3 text-white bg-white/10 hover:bg-white/20 px-10 py-5 rounded-[2rem] font-black transition-all border border-white/10 shadow-xl"
          >
            <Send size={22} className="text-blue-400" />
            <span>Связаться в ЛС</span>
          </a>
        </div>
      </div>
    </section>
  );
};