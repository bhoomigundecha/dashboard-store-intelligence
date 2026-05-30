// src/components/StatusBar.jsx
import React from 'react';

export const StatusBar = ({ storeId, liveCount, lastUpdate, feedStatus, isConnected }) => {
  const isConnectedFeed = feedStatus === 'CONNECTED' && isConnected;

  return (
    <div className="h-12 w-full bg-[#030712] border-b border-gray-800 flex items-center justify-between px-4 fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">AR</span>
        </div>
        <h1 className="text-white font-semibold text-sm tracking-tight uppercase">
          Apex Retail — Store Intelligence
        </h1>
      </div>

      <div className="flex items-center">
        <span className="bg-indigo-500/20 text-indigo-400 px-3 py-0.5 rounded-full text-xs font-mono font-bold border border-indigo-500/30">
          {storeId}
        </span>
      </div>

      <div className="flex items-center gap-6 text-xs font-medium">
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="uppercase tracking-widest">● LIVE</span>
        </div>

        <div className="text-gray-400 flex items-center gap-1">
          <span>Events:</span>
          <span className="text-gray-200 tabular-nums">{liveCount?.toLocaleString() || 0}</span>
          <span className="text-gray-500 text-[10px]">↑</span>
        </div>

        <div className="text-gray-400 flex items-center gap-1">
          <span>Last update:</span>
          <span className="text-gray-200 tabular-nums">{lastUpdate || '--:--:--'}</span>
        </div>

        <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
          isConnectedFeed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
        }`}>
          {isConnectedFeed ? 'CONNECTED' : 'STALE FEED'}
        </div>
      </div>
    </div>
  );
};
