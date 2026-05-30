// src/components/KPICard.jsx
import React from 'react';

const colorMap = {
  indigo: 'from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 text-indigo-400',
  magenta: 'from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/30 text-fuchsia-400',
  amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-400',
  emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400'
};

const iconColorMap = {
  indigo: 'bg-indigo-500/20 text-indigo-400',
  magenta: 'bg-fuchsia-500/20 text-fuchsia-400',
  amber: 'bg-amber-500/20 text-amber-400',
  emerald: 'bg-emerald-500/20 text-emerald-400'
};

export const KPICard = ({ label, value, trend, subtext, icon, color = 'indigo' }) => (
  <div className={`flex-1 glass-card p-5 border border-white/5 flex flex-col justify-between relative overflow-hidden group`}>
    {/* Decorative background glow */}
    <div className={`absolute -right-4 -top-4 w-24 h-24 blur-[60px] opacity-20 rounded-full bg-${color}-500 transition-all group-hover:opacity-40`}></div>
    
    <div className="flex justify-between items-start">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{label}</span>
        <span className="text-3xl font-bold text-white tabular-nums tracking-tight">{value}</span>
      </div>
      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${iconColorMap[color]}`}>
        <span className="material-icons-outlined text-xl">{icon}</span>
      </div>
    </div>

    <div className="mt-4 flex items-center gap-2">
      {trend && (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${trend.includes('↑') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-fuchsia-500/20 text-fuchsia-400'}`}>
          {trend}
        </span>
      )}
      {subtext && <span className="text-[10px] font-medium text-white/30 uppercase tracking-wider">{subtext}</span>}
    </div>
  </div>
);