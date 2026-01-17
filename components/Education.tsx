import React from 'react';
import { Target, Shield, BarChart2, TrendingUp } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#0a0f1d]">
      <div className="max-w-lg mx-auto space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-white">Почему фьючерсы?</h2>
          <p className="text-slate-400 font-medium">Это самый быстрый способ сделать из $10 — $100.</p>
          
          <div className="grid grid-cols-1 gap-4 mt-6">
            <div className="bg-slate-900/40 p-6 rounded-[2rem] border border-slate-800 flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-2xl text-orange-400">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Точные сигналы</h3>
                <p className="text-sm text-slate-400">Я говорю, когда нажать кнопку "Купить" или "Продать". Тебе не надо гадать.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-6 rounded-[2rem] border border-slate-800 flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-2xl text-purple-400">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Плечи (Leverage)</h3>
                <p className="text-sm text-slate-400">Биржа дает тебе возможность торговать суммами больше, чем у тебя есть. Так прибыль растет в разы.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <h2 className="text-3xl font-black text-white tracking-tight">База за 1 минуту</h2>
          
          <div className="bg-slate-900/40 rounded-[2rem] p-8 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <BarChart2 className="text-blue-400" size={24} />
              <h3 className="text-xl font-black text-white">Диверсификация</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Это когда мы не ставим все деньги на одну сделку. Мы открываем несколько разных позиций по чуть-чуть. Если одна не зайдет — другие перекроют минус. Безопасно и по-умному.
            </p>
          </div>

          <div className="bg-slate-900/40 rounded-[2rem] p-8 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-green-400" size={24} />
              <h3 className="text-xl font-black text-white">Хеджирование</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Твоя страховка. Если мы видим, что рынок ведет себя странно, мы открываем сделку в обратную сторону. Это позволяет заморозить убыток или даже выйти в плюс, когда все остальные паникуют.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};