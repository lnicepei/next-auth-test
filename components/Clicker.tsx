'use client';

import { useCounterStore } from '@/store/counterStore';

export default function ButtonClicker() {
  const { increment, count } = useCounterStore((state) => state);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
