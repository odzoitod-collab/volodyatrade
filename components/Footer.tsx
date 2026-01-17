import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b14] py-8 px-4 text-center border-t border-slate-900">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex justify-center gap-4">
          <a href="https://t.me/roush77" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Владимир в ТГ</a>
          <a href="https://tontrade-web.vercel.app/" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Сайт биржи</a>
        </div>
        
        <p className="text-slate-700 text-[9px] leading-relaxed max-w-xs mx-auto uppercase tracking-tighter italic">
          Торговля — это всегда риск. Я делюсь своим опытом и результатами. Не используй последние деньги.
        </p>
        
        <div className="pt-2 border-t border-slate-900/50">
          <p className="text-slate-800 text-[10px] font-black tracking-widest uppercase">
            © 2025 TonTrader VIP • @roush77
          </p>
        </div>
      </div>
    </footer>
  );
};