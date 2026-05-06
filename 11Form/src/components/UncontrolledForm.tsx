import { useRef } from 'react'

export default function UncontrolledForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };

  return (
  <div>
    <h2>비제어 컴포넌트</h2>
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>전송</button>
    </div>
  </div>
  )
}
