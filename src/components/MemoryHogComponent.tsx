import React, { useState, useEffect, useRef } from 'react';

const MemoryHogComponent = () => {
  const [dataSize, setDataSize] = useState(0);
  const memoryArrayRef = useRef([] as any[]);
  const intervalRef = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newChunk = new Array(1024 * 1024 * 10).fill('a_very_long_string_to_make_it_heavier_and_consume_more_memory_per_element_as_much_as_possible');
      memoryArrayRef.current.push(newChunk);
      setDataSize(prevSize => prevSize + newChunk.length * newChunk[0].length / (1024 * 1024));

      console.log(`Allocated ${memoryArrayRef.current.length * 10} MB so far.`);

      if (memoryArrayRef.current.length * 10 >= 600) {
        clearInterval(intervalRef.current);
        console.warn("Memory allocation stopped. You've likely allocated a significant amount of memory.");
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      memoryArrayRef.current = [];
      console.log("Component unmounted, attempting to clear memory.");
    };
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid red', margin: '20px' }}>
      <h1>Memory Hog Component</h1>
      <p>This component is intentionally trying to consume excessive memory.</p>
      <p>Watch your browser's task manager or developer tools for memory usage.</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        WARNING: This might crash your browser tab ("Oh Snap!"). Proceed with caution.
      </p>
      <p>Current simulated allocated memory: {dataSize.toFixed(2)} MB</p>
    </div>
  );
};

export default MemoryHogComponent;