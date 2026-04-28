import { useEffect, useState } from 'react'

export default function ExUseEffect() {
  const [count, setCount] = useState<number>(0);

// useEffect(componentDidMount할 때 실행할 함수, 의존성 배열);
// useEffect(무슨 작업을 할지, 언제 실행할지);
// 의존성 배열(언제 이 함수를 다시 실행할지 조건을 정하는 곳) :
//  - [] (빈 배열) → 처음 한 번만 실행 (componentDidMount처럼)
//  - [값] → 그 값이 바뀔 때마다 실행
//  - 생략 → 렌더링될 때마다 실행
  useEffect(() => {
    document.title = `${count}번 클릭했습니다`;
  }, [count]);


  return (
    <div>
      <h2>ExUseEffect</h2>
      <p>{count}번 클릭했습니다.</p>
      <button onClick={() => {setCount((prev) => prev + 1)}}>클릭</button>
    </div>
  )
}


