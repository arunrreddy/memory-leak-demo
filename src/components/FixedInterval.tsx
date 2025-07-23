import { useEffect, useState } from 'react';

export function FixedInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tag = { name: '✅ FixedIntervalTag' };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    const componentName = "✅ FixedInterval";
    console.trace(`${componentName} mounted`);

    const id = setInterval(() => {
      console.log(`${componentName} tick`);
      setCount((c) => c + 1);
    }, 1000);
    
    return () => {
      clearInterval(id);
      console.log(`${componentName} unmounted`);
    };
  }, []);

  return <div style={{ border: '2px solid green', padding: '1rem' }}>Fixed Interval Count: {count}</div>;
}
FixedInterval.displayName = "FixedInterval";
