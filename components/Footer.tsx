import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b14] py-12 px-4 text-center border-t border-slate-900">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="flex justify-center gap-6">
          <a href="https://t.me/roush77i" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Написать Владимиру</a>
          <a href="https://tontrade-web.vercel.app/" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Веб-сайт</a>
        </div>
        
        <p className="text-slate-600 text-[10px] leading-relaxed max-w-xs mx-auto uppercase tracking-tighter">
          Трейдинг — это всегда риск. Я не финансовый гуру, я просто делюсь тем, что делаю сам. Торгуй ответственно и не на последние деньги.
        </p>
        
        <div className="pt-4 border-t border-slate-900/50">
          <p className="text-slate-700 text-[11px] font-black tracking-widest uppercase">
            © 2025 TonTrader Elite Club • @roush77i
          </p>
        </div>
      </div>
    </footer>
  );
};