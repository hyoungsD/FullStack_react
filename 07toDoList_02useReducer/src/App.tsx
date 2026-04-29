import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const mockTodos = [
  {
    id: 0,
    isDone: false,
    content: 'Javascript 공부하기',
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'AI 공부하기',
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'React 공부하기',
    createDate: new Date().getTime(),
  },
]

export interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createDate: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const idRef = useRef(3);  // 보여지는 값이 아니기 때문에 useRef 사용

  // 추가
  // todoEditor에서 사용
  const onCreate = (content: string) => {
    const newItem = {
      id: idRef.current,
      content,  // content: content (변수 상수가 같을 때 하나만 써도 됨)
      isDone: false,
      createDate: new Date().getTime(),
    }
    setTodos([newItem, ...todos]);  // push로 넣으면 리렌더링이 인되니까 [*** , ...###]로 
    idRef.current += 1;
  }

  // 수정
  // id를 넘겨받아서 비교
  // todoList > todoItem에서 사용
  const onUpdate = (targetId: number) => {
    setTodos( // 수정해서 setTodos에 넣음
      todos.map((todo) => 
        todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo
        // id가 같으면 todo의 isDone만 반대로 넣음
      )
    )
  }

  // 삭제
  // id를 넘겨받아서 비교
  // todoList > todoItem에서 사용
  const onDelete = (targetId: number) => {
    setTodos(
      todos.filter((todo) => todo.id !== targetId)  // id가 같지 않은 것만 보내줌
    )
  }

  return (
    <div className='app'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
