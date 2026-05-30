// src/components/ZoneHeatmap.jsx
import React from 'react';

const getZoneColor = (score) => {
  if (score <= 30) return 'bg-[#1e3a5f]'; // dark blue (cold)
  if (score <= 60) return 'bg-[#92400e]'; // brown-orange (medium)
  if (score <= 80) return 'bg-[#f97316]'; // orange (warm)
  return 'bg-[#ef4444]'; // red (hot)
};

export const ZoneHeatmap = ({ zones }) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Zone Heatmap — Traffic Intensity</h3>
        <span className="text-gray-500 text-[10px] font-bold uppercase">Total Dwell: 12.4m</span>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-3 gap-3 flex-1">
        {zones.map((zone) => (
          <div 
            key={zone.zone_id} 
            className={`rounded-xl p-4 transition-colors duration-1000 ease-in-out ${getZoneColor(zone.score)}`}
          >
            <span className="text-[10px] font-bold uppercase text-white/70 tracking-widest">{zone.zone_id}</span>
            <div className="mt-1">
              <div className="text-3xl font-bold text-white tabular-nums">{zone.score}</div>
              <div className="text-[10px] text-white/60 font-medium">avg dwell {(zone.avg_dwell_ms / 1000).toFixed(0)}s</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
