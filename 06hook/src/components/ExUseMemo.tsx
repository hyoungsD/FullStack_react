// useMemo:
// - 성능 최적화를 위해 사용
// - 값이 변경되지 않았다면 이전에 계산된 결과를 재사용하게 해줌

import { useMemo } from "react";

interface Props {
  num: number;
}

export default function ExUseMemo({num}: Props) {
  const expensiveCalc = (n: number) => {
    console.log('비싼 계산 실행중...');
    return num * 2;
  }

  const memorizedValue = useMemo(() => expensiveCalc(num), [num])

  return (
    <div>
      <h2>ExUseMemo</h2>
      <div>결과: {memorizedValue}</div>
    </div>
  )
}
