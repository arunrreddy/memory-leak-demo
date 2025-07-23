import { useLeakyTimer } from './useLeakyTimer';

export function LeakyCustomHook() {
  useLeakyTimer();
  return <div style={{ border: '1px solid red', padding: '0.5rem' }}>Leaky Custom Hook Component</div>;
}
LeakyCustomHook.displayName = "LeakyCustomHook";
