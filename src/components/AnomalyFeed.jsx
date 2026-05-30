// src/components/AnomalyFeed.jsx
import React from 'react';

const getSeverityStyles = (severity) => {
  switch (severity) {
    case 'CRITICAL': return 'border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-400';
    case 'WARN': return 'border-amber-500/50 bg-amber-500/10 text-amber-400';
    case 'INFO': return 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400';
    default: return 'border-white/10 bg-white/5 text-white/60';
  }
};

export const AnomalyFeed = ({ anomalies = [] }) => {
  // Mock data if empty
  const displayAnomalies = anomalies.length > 0 ? anomalies : [
    { type: 'QUEUE ALERT', severity: 'WARN', time: '14:24', message: 'Section B Checkout exceeded 8m wait time.' },
    { type: 'TRAFFIC SPIKE', severity: 'INFO', time: '14:12', message: 'South Entrance seeing 40% higher influx than daily average.' },
    { type: 'SECURITY BREACH', severity: 'CRITICAL', time: '13:58', message: 'Unauthorized entry detected in Loading Bay 2.' }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
           <span className="material-icons-outlined text-sm text-white/40">sensors</span>
           <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Anomaly Feed</h3>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
        {displayAnomalies.map((item, i) => (
          <div key={i} className={`p-4 rounded-xl border ${getSeverityStyles(item.severity)} relative overflow-hidden transition-all hover:scale-[1.02]`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.severity === 'CRITICAL' ? 'bg-fuchsia-500' : item.severity === 'WARN' ? 'bg-amber-500' : 'bg-indigo-500'}`}></div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[9px] font-black tracking-tighter uppercase">{item.type}</span>
              <span className="text-[9px] font-bold opacity-60 tabular-nums">{item.time}</span>
            </div>
            <p className="text-[11px] font-medium leading-relaxed text-white/90">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};