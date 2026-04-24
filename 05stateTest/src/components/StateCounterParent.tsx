import React, { useState } from 'react';
import StateCounterChild from './StateCounterChild';
import StateCounterReset from './StateCounterReset';

export default function StateCounterParent() {
  const [count, setCount] = useState<number>(0);
  const update = (step: number) => {
    setCount((prev) => prev + step);
  }
  const reset = () => setCount(0);

  return (
    <div>
      <h2>State 끌어올리기</h2>
      <p>총 개수: {count}</p>
      <StateCounterChild step={1} onUpdate={update} />
      <StateCounterChild step={5} onUpdate={update} />
      <StateCounterChild step={-1} onUpdate={update} />
      <StateCounterReset onReset={reset} />
    </div>
  )
}
