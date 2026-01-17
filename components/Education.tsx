import React from 'react';
import { Target, Shield, BarChart2, TrendingUp } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0f1d]">
      <div className="max-w-md mx-auto space-y-10">
        
        <div className="space-y-3">
          <h2 className="text-3xl font-black text-white tracking-tighter">Почему фьючерсы?</h2>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">Кратчайший путь к быстрому кэшу</p>
          
          <div className="grid grid-cols-1 gap-3 mt-6">
            <div className="bg-slate-900/40 p-5 rounded-[2rem] border border-white/5 flex items-start gap-4">
              <div className="bg-blue-500/10 p-2.5 rounded-xl text-blue-400">
                <Target size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Точные сигналы</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Мои входы отработаны на сотнях сделок. Ты просто повторяешь и зарабатываешь.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-[2rem] border border-white/5 flex items-start gap-4">
              <div className="bg-purple-500/10 p-2.5 rounded-xl text-purple-400">
                <TrendingUp size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Плечо до X20</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Биржа дает тебе возможность торговать суммой в 20 раз больше твоего депо. Так $10 превращаются в профит $200.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
           <h2 className="text-2xl font-black text-white tracking-tight">Как мы не теряем</h2>
          
          <div className="bg-slate-900/40 rounded-[2rem] p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <BarChart2 className="text-blue-400" size={20} />
              <h3 className="text-lg font-black text-white">Диверсификация</h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Мы не "лудоманим" на всё сразу. Раскладываем депо по разным сделкам. Одна неудачная не убьет твой счет. Это математика, а не казино.
            </p>
          </div>

          <div className="bg-slate-900/40 rounded-[2rem] p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-green-400" size={20} />
              <h3 className="text-lg font-black text-white">Хеджирование</h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Если рынок идет против нас — мы страхуемся. Это позволяет сохранить твой депо в любой ситуации. Безопасность твоего капитала — мой приоритет.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};