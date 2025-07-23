import { useFixedTimer } from './useFixedTimer';

export function FixedCustomHook() {
  useFixedTimer();
  return <div style={{ border: '1px solid green', padding: '0.5rem' }}>Fixed Custom Hook Component</div>;
}
FixedCustomHook.displayName = "FixedCustomHook";
