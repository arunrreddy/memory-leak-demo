import { useEffect } from 'react';

export function useLeakyTimer() {
  useEffect(() => {
    const componentName = '🧪 useLeakyTimer';
    const tag = { name: `${componentName} Tag` };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    console.trace(`${componentName} mounted`);
    setInterval(() => console.log(`${componentName} tick`), 1000);
  }, []);
}
