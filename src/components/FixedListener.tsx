import { useEffect } from 'react';

export function FixedListener() {
  useEffect(() => {
    const tag = { name: '✅ FixedListenerTag' };
    window.__leakyTags = window.__leakyTags || [];
    window.__leakyTags.push(tag);

    const componentName = "✅ FixedListener";
    console.trace(`${componentName} mounted`);
    const handleClick = () => console.log(`${componentName} clicked`);

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      console.log(`${componentName} unmounted`);
    };
  }, []);

  return <div style={{ border: '2px dashed green', padding: '0.5rem' }}>Fixed Listener Component</div>;
}
FixedListener.displayName = "FixedListener";
