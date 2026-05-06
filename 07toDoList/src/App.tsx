import { useRef, useReducer } from 'react'
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


// useReducer용 action type
type Action = 
  | {type: 'CREATE', newItem: Todo}
  | {type: 'UPDATE', targetId: number}
  | {type: 'DELETE', targetId: number}


// useReducer 사용한 추가, 수정, 삭제
function reducer(todos:Todo[], action:Action){
  switch (action.type){
    case 'CREATE': {
      return [action.newItem, ...todos]
    }
    case 'UPDATE': {
      return todos.map((todo) => 
          todo.id === action.targetId ? {...todo, isDone : !todo.isDone} : todo
          // id가 같으면 todo의 isDone만 반대로 넣음
        )
    }
    case 'DELETE': {
      return todos.filter((todo) => todo.id !== action.targetId)  // id가 같지 않은 것만 보내줌
    }
    default: return todos;
  }
} 

function App() {
  const [todos, dispatch] = useReducer(reducer, mockTodos)
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
    idRef.current += 1;
    dispatch({type: 'CREATE', newItem});
  }

  // 수정
  // id를 넘겨받아서 비교
  // todoList > todoItem에서 사용
  const onUpdate = (targetId: number) => {
    dispatch({type: 'UPDATE', targetId});
  }

  // 삭제
  // id를 넘겨받아서 비교
  // todoList > todoItem에서 사용
  const onDelete = (targetId: number) => {
    dispatch({type: 'DELETE', targetId});
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
