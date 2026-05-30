// src/components/TopNavBar.jsx
import React from 'react';

export const TopNavBar = ({ isConnected, storeId }) => (
  <nav className="h-14 w-full glass-nav flex items-center justify-between px-6 z-50">
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="font-black text-white text-xs">AI</span>
        </div>
        <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Apex Intelligence
        </span>
      </div>
      
      <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
      
      <div className="flex gap-6">
        {['Overview', 'Live Ops', 'Traffic', 'Security'].map((link, i) => (
          <a key={link} href="#" className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? 'text-white border-b-2 border-indigo-500 pb-1' : 'text-white/40 hover:text-white/70 transition-colors'}`}>
            {link}
          </a>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${isConnected ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
         <div className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></div>
         <span className="text-[10px] font-black uppercase tracking-widest">{storeId}</span>
      </div>
      <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10">
        <span className="material-icons-outlined text-sm">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10">
        <span className="material-icons-outlined text-sm">settings</span>
      </button>
    </div>
  </nav>
);