import React from 'react';
import { Send, Sparkles, User, Flame, TrendingUp } from 'lucide-react';

export const AboutTrader: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0f1d]">
      <div className="max-w-md mx-auto bg-gradient-to-b from-slate-900/90 to-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl border border-white/5 relative overflow-hidden">
        
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 transition-opacity"></div>
            <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-2 border-blue-500/30 p-1 bg-slate-800 relative shadow-2xl transition-transform duration-500">
              <img 
                src="https://decenter.org/content/images/2025/02/----------.JPG" 
                alt="Vladimir TonTrader" 
                className="w-full h-full object-cover rounded-[1.8rem]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-xl border-2 border-[#0a0f1d] shadow-lg">
              <User size={14} className="text-white" />
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white tracking-tighter">Владимир</h2>
            <p className="text-blue-400 font-black text-lg tracking-tight">@roush77</p>
          </div>

          <div className="flex gap-2 w-full">
            <div className="flex-1 flex flex-col items-center p-3 bg-white/5 rounded-2xl border border-white/10">
              <Flame className="text-orange-500 mb-1" size={20} />
              <span className="text-white font-black text-[10px] uppercase tracking-tighter">Сигналы 24/7</span>
            </div>
            <div className="flex-1 flex flex-col items-center p-3 bg-white/5 rounded-2xl border border-white/10">
              <TrendingUp className="text-blue-400 mb-1" size={20} />
              <span className="text-white font-black text-[10px] uppercase tracking-tighter">Реальный кэш</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed px-2">
            Я не продаю курсы, я даю результат. В моем канале ты получаешь точки входа на <span className="text-white font-bold">фьючерсах</span>, которые кормят меня и мою команду каждый день. Хватит тратить время на демо-счета, пора делать реальный профит.
          </p>
          
          <a 
            href="https://t.me/roush77" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-2 text-white bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl font-black transition-all border border-white/10 shadow-lg text-sm"
          >
            <Send size={18} className="text-blue-400" />
            <span>Написать лично</span>
          </a>
        </div>
      </div>
    </section>
  );
};