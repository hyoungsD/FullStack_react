
// useCallback
// - 함수가 다시 생성되지 않도록 함수를 메모이제이션
// - 자식 컴포넌트로 전달될 때 불필요하게 재 생성되지 않도록 함

// useEffect : 실행 (side effect)
// useMemo : 값 기억 (계산 결과 캐싱)
// useCallback : 함수 기억 (함수 캐싱)

import { useCallback, useState } from 'react'

export default function () {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('버튼 클릭');
  }, [])

  return (
    <div>
      <h2>UseCallback</h2>
      <div>
        <button onClick={handleClick}>클릭</button>
        <button onClick={() => setCount(count + 1)}>카운트 증가 {count}</button>
      </div>
    </div>
  )
}

