import { useEffect } from 'react';

export function FixedWebSocket() {
  useEffect(() => {
    const tag = { name: '✅ FixedWebSocketTag' };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    const componentName = "✅ FixedWebSocket";
    console.trace(`${componentName} mounted`);
    const socket = new WebSocket('wss://echo.websocket.events');
    socket.onmessage = (e) => console.log(`${componentName} message:`, e.data);
    socket.onopen = () => socket.send(`${componentName} ping`);

    return () => {
      socket.close();
      console.log(`${componentName} unmounted`);
    };
  }, []);

  return <div style={{ border: '2px dotted green', padding: '0.5rem' }}>Fixed WebSocket Component</div>;
}
FixedWebSocket.displayName = "FixedWebSocket";
