import { useState } from "react";

interface SetCounterProps{
  init: number;
}

export default function SetCounter ({init}: SetCounterProps) {
  const [count, setCount] = useState<number>(init);

  const handleClick = () => {
    setCount(count + 1);
    // 이전 상태값을 안전하게 참조하기 위해 함수형 업데이트를 사용하는 것이 권장됩니다.
    // setCount(count + 1); // 한번 더 적더라도 count값이 같은 값이기 때문에 계속 1씩 증가
    // setCount((prev) => prev + 1);  // 콜백함수를 사용하면 2씩 증가
  }

  return (
    <div>
      <h2>클릭 카운터(useState 사용)</h2>
      <p>현재 클릭 수 : {count}</p>
      <button onClick={handleClick}>클릭하세요</button>
    </div>
  )
}

