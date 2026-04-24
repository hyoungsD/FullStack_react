
interface CounterProps{
  init: number;
}

export default function Counter ({init}: CounterProps) {
  let count = init;
  const handleClick = () => {
    // 상태를 변경해야 React가 화면을 다시 그린다
    count += 1;
  }

  return (
    <div>
      <h2>클릭 카운터</h2>
      <p>현재 클릭 수 : {count}</p>
      <button onClick={handleClick}>클릭하세요</button>
    </div>
  )
}

