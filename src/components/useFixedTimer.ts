import { useEffect } from 'react';

export function useFixedTimer() {
  useEffect(() => {
    const componentName = '🧪 useFixedTimer';
    const tag = { name: `${componentName} Tag` };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    console.trace(`${componentName} mounted`);
    const id = setInterval(() => console.log(`${componentName} tick`), 1000);
    return () => clearInterval(id);
  }, []);
}
