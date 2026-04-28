
// useRef
// - DOM 접근 및 리렌더링 없는 데이터 저장
// - DOM 요소에 직접 접근할때 얻어진 참조값을 기억
// - useRef에 담긴 값은 변경되어도 컴포넌트를 리렌더링하지 않음



import { useRef } from 'react'

export default function ExUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);  // DOM 접근용
  const clickCountRef = useRef<number>(0);  // 표시할 필요 없는 값 저장용

  const handleClick = () => {
    inputRef.current?.focus();  // {current: 0xafdb} (객체의 주소값)
      // current : inputRef를 객체로 취급하기 때문에 객체의 속성이라고 생각하면 됨
      // current? : ? = optional, null일 가능성이 있기 때문에, null이 아닐 때만 실행
    clickCountRef.current += 1; // {current: 2}, 객체의 주소값은 변하지 않고, 주소값의 value가 바뀜
    console.log(`클릭 횟수: ${clickCountRef.current}`);
  };

  return (
    <div>
      <h2>ExUseRef</h2>
      <input ref={inputRef} type="text" placeholder='입력하세요' />
      <button onClick={handleClick}>포커스 및 카운트 증가</button>
    </div>
  )
}
