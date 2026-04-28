import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('count 변경됨', count);
  }, [count]);  // 의존성 배열에 있는 속성이 바뀔 때마다 실행

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}


