// src/components/ConversionChart.jsx
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const ConversionChart = ({ dataPoints }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    
    const grad1 = ctx.createLinearGradient(0, 0, 0, 400);
    grad1.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
    grad1.addColorStop(1, 'rgba(99, 102, 241, 0)');

    const grad2 = ctx.createLinearGradient(0, 0, 0, 400);
    grad2.addColorStop(0, 'rgba(232, 121, 249, 0.2)');
    grad2.addColorStop(1, 'rgba(232, 121, 249, 0)');

    const config = {
      type: 'line',
      data: {
        labels: dataPoints.map(d => d.time),
        datasets: [
          {
            label: 'Mobile Checkout',
            data: dataPoints.map(d => d.value),
            borderColor: '#f5d0fe', // light magenta
            borderWidth: 3,
            pointRadius: 0,
            fill: true,
            backgroundColor: grad2,
            tension: 0.5,
          },
          {
            label: 'POS Terminals',
            data: dataPoints.map(d => d.value + 5),
            borderColor: '#818cf8', // light indigo
            borderWidth: 3,
            pointRadius: 0,
            fill: true,
            backgroundColor: grad1,
            tension: 0.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 10, 36, 0.8)',
            backdropFilter: 'blur(10px)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 12,
            cornerRadius: 12,
            displayColors: true,
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'rgba(255,255,255,0.2)', font: { size: 10, weight: 'bold' } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
            ticks: { color: 'rgba(255,255,255,0.2)', font: { size: 10, weight: 'bold' } }
          }
        }
      }
    };

    if (chartInstance.current) chartInstance.current.destroy();
    chartInstance.current = new Chart(ctx, config);

    return () => chartInstance.current?.destroy();
  }, [dataPoints]);

  return (
    <div className="glass-card p-8 h-full flex flex-col relative overflow-hidden group">
      <div className="flex justify-between items-start mb-8 z-10">
        <div>
          <h3 className="text-white font-bold text-lg tracking-tight mb-1">Live Conversion Intelligence</h3>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Real-time performance across all touchpoints</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase text-white/40">Hourly</button>
           <button className="px-4 py-1.5 rounded-full bg-indigo-500 text-[10px] font-bold uppercase text-white shadow-lg shadow-indigo-500/20">Real-time</button>
        </div>
      </div>
      
      <div className="flex-1 min-h-0 z-10">
        <canvas ref={chartRef}></canvas>
      </div>

      <div className="mt-6 flex gap-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
          <span className="text-[10px] font-bold uppercase text-white/60 tracking-widest">Mobile Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <span className="text-[10px] font-bold uppercase text-white/60 tracking-widest">POS Terminals</span>
        </div>
        <span className="ml-auto text-[9px] font-bold uppercase text-white/20 tracking-widest">Last sync: 12 seconds ago</span>
      </div>
    </div>
  );
};