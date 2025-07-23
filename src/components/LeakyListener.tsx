import { useEffect } from 'react';

export function LeakyListener() {
  useEffect(() => {
    const tag = { name: '🔴 LeakyListenerTag' };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    const componentName = "🔴 LeakyListener";
    console.trace(`${componentName} mounted`);
    const handleClick = () => console.log(`${componentName} clicked`);

    window.addEventListener('click', handleClick);
  }, []);

  return <div style={{ border: '2px dashed red', padding: '0.5rem' }}>Leaky Listener Component</div>;
}
LeakyListener.displayName = "LeakyListener";
