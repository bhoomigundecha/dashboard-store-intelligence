// src/hooks/useSSE.js
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to connect to the Apex Store SSE stream.
 * @param {string} storeId - The store ID to monitor.
 * @returns {{ data: SSEPayload | null, error: any, isConnected: boolean }}
 */
export const useSSE = (storeId = "STORE_BLR_002") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const eventSourceRef = useRef(null);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const connect = () => {
      const url = `${apiUrl}/stores/${storeId}/stream`;
      console.log(`Connecting to SSE: ${url}`);
      
      const es = new EventSource(url);
      eventSourceRef.current = es;

      es.onopen = () => {
        setIsConnected(true);
        setError(null);
      };

      es.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          setData(payload);
        } catch (err) {
          console.error("Failed to parse SSE message:", err);
        }
      };

      es.onerror = (err) => {
        console.error("SSE connection error:", err);
        setIsConnected(false);
        setError(err);
        es.close();
        
        // Attempt reconnection after 5 seconds
        setTimeout(connect, 5000);
      };
    };

    connect();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, [storeId, apiUrl]);

  return { data, error, isConnected };
};
