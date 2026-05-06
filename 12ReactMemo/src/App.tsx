
import { useState } from "react"
import Child from "./components/Child"
import ChildWithMemo from "./components/ChildWithMemo"

// React.memo
// • 부모 컴포넌트가 리렌더되면 자식 컴포넌트까지 리렌더링됨
// • memo를 사용하면 props가 변경되지 않으면 리렌더링 하지 않음
// • HOC(Higher Order Component)의 일종

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <Child value={count} />
      <ChildWithMemo value={count}/>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App
