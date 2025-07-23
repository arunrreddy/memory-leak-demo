import { useState } from 'react';
import { LeakyInterval } from './components/LeakyInterval';
import { FixedInterval } from './components/FixedInterval';
import { LeakyListener } from './components/LeakyListener';
import { FixedListener } from './components/FixedListener';
import { LeakyWebSocket } from './components/LeakyWebSocket';
import { FixedWebSocket } from './components/FixedWebSocket';
import { LeakyCustomHook } from './components/LeakyCustomHook';
import { FixedCustomHook } from './components/FixedCustomHook';
import MemoryHogComponent from './components/MemoryHogComponent';

function App() {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((s) => !s)} style={{ margin: '1rem' }}>
        {show ? 'Unmount' : 'Mount'}
      </button>
      <button onClick={() => setFixed((s) => !s)}>
        {fixed ? 'Show Leaky' : 'Show Fixed'}
      </button>
      {show && !fixed && (
        <>
          <p>Leaky version</p>
          <LeakyInterval />
          <LeakyListener />
          <LeakyWebSocket />
          <LeakyCustomHook />
          <MemoryHogComponent />
        </>
      )}
      {show && fixed && (
        <>
          <p>Fixed version</p>
          <FixedInterval />
          <FixedListener />
          <FixedWebSocket />
          <FixedCustomHook />

        </>
      )}
    </div>
  );
}

export default App;
