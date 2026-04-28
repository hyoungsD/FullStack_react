import { useEffect, useState } from 'react'

export default function CleanUpTimer() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    console.log('타이머 시작');
    const id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    // 정리(cleanup) 함수 
    // : 이펙트가 끝날 때 실행되는 코드
    // : 이전에 만든 작업을 정리하는 곳 (타이머, 이벤트, 구독 등 해제)
    // 이 부분을 적지 않으면 Timer가 2개씩 쌓임
    // (화면에서는 컴포넌트가 없어졌는데 내부에서는 setInterval이 계속 실행됨)
    // 타이머, 이벤트 리스너, 구독 / 소켓 등
    return() => {
      console.log('타이머 정리');
      clearInterval(id);
    }
  }, [time]);

  return (
    <div>
      <h2>CleanUpTimer</h2>
      <p>{time}초</p>
    </div>
  )
}
