import { useEffect, useState } from 'react';

export function LeakyInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tag = { name: '🔴 LeakyIntervalTag' };
    window.__leakyTags = window.__leakyTags ?? [];
    window.__leakyTags.push(tag);

    const componentName = "🔴 LeakyInterval";
    console.trace(`${componentName} mounted`);

    setInterval(() => {
      console.log(`${componentName} tick`);
      setCount(c => c + 1);
    }, 0);
  }, []);

  return <div style={{ border: '2px solid red', padding: '1rem' }}>Leaky Interval Count: {count}</div>;
}
LeakyInterval.displayName = "LeakyInterval";
