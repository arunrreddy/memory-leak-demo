import { useEffect } from 'react';

export function LeakyWebSocket() {
  useEffect(() => {
    const tag = { name: '🔴 LeakyWebSocketTag' };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    const componentName = "🔴 LeakyWebSocket";
    console.trace(`${componentName} mounted`);
    const socket = new WebSocket('wss://echo.websocket.events');
    socket.onmessage = (e) => console.log(`${componentName} message:`, e.data);
    socket.onopen = () => socket.send(`${componentName} ping`);
  }, []);

  return <div style={{ border: '2px dotted red', padding: '0.5rem' }}>Leaky WebSocket Component</div>;
}
LeakyWebSocket.displayName = "LeakyWebSocket";
