/ src/App.jsx
import React, { useMemo } from 'react';
import { useSSE } from './hooks/useSSE';
import { TopNavBar } from './components/TopNavBar';
import { SideNavBar } from './components/SideNavBar';
import { KPICard } from './components/KPICard';
import { ConversionChart } from './components/ConversionChart';
import { ZoneHeatmap } from './components/ZoneHeatmap';
import { FunnelChart } from './components/FunnelChart';
import { AnomalyFeed } from './components/AnomalyFeed';

const App = () => {
  const { data, isConnected } = useSSE("STORE_BLR_002");

  const metrics = data?.metrics || { 
    unique_visitors: 1242, 
    conversion_rate: 0.248, 
    current_queue_depth: 4.2, 
    abandonment_rate: 0.081 
  };

  const funnel = data?.funnel || { 
    entry: 2142, 
    zone_visit: 1392, 
    billing_queue: 514, 
    purchase: 449, 
    dropoff_pcts: [35, 63, 13] 
  };

  const heatmap = data?.heatmap || [];
  const anomalies = data?.anomalies || [];

  const chartDataPoints = useMemo(() => [
    { time: '13:30', value: 24 },
    { time: '13:40', value: 28 },
    { time: '13:50', value: 26 },
    { time: '14:00', value: 31 },
    { time: '14:10', value: 29 },
    { time: '14:20', value: metrics.conversion_rate * 100 }
  ], [metrics.conversion_rate]);

  return (
  <div className="min-h-screen bg-[#0B0B1A] text-white">
    <TopNavBar />

    <div className="flex flex-1 overflow-hidden">
      <SideNavBar />

      <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
        {/* content */}
      </main>
    </div>

    <style
      dangerouslySetInnerHTML={{
        __html: `
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
          }
          .glass-nav {
            background: rgba(15, 10, 36, 0.6);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
        `
      }}
    />
  </div>
);
};

export default App;