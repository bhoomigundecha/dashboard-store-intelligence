// src/components/FunnelChart.jsx
import React from 'react';

export const FunnelChart = ({ funnel }) => {
  const { entry, zone_visit, billing_queue, purchase, dropoff_pcts } = funnel;
  
  const stages = [
    { label: 'Entry', value: entry, width: '100%', color: 'bg-indigo-500' },
    { label: 'Zone Visit', value: zone_visit, width: `${(zone_visit / entry) * 100}%`, color: 'bg-indigo-400' },
    { label: 'Billing Queue', value: billing_queue, width: `${(billing_queue / entry) * 100}%`, color: 'bg-indigo-300' },
    { label: 'Purchase', value: purchase, width: `${(purchase / entry) * 100}%`, color: 'bg-emerald-500' }
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Conversion Funnel — Hourly</h3>
      
      <div className="flex-1 flex flex-col justify-between py-2">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.label}>
            <div className="flex items-center gap-4">
              <span className="w-24 text-[10px] font-bold uppercase text-gray-500 tracking-tighter">{stage.label}</span>
              <div className="flex-1 h-8 bg-gray-800/50 rounded overflow-hidden relative">
                <div 
                  className={`h-full ${stage.color} transition-all duration-1000 ease-out flex items-center px-3`}
                  style={{ width: stage.width }}
                >
                  <span className="text-white text-xs font-bold tabular-nums">{stage.value}</span>
                </div>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className="pl-28 py-1 text-[10px] text-gray-500 italic flex items-center gap-1">
                <span className="text-[8px]">▼</span>
                <span>{dropoff_pcts[i]}% drop</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
