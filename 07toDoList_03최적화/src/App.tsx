import { useRef, useReducer, useCallback, useMemo } from 'react'
import { TodoStateContext, TodoDispatchContext } from './context/TodoContext'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'


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
  let result;
  switch (action.type){
    case 'CREATE': {
      result = [action.newItem, ...todos]
      break;
    }
    case 'UPDATE': {
      result = todos.map((todo) => 
          todo.id === action.targetId ? {...todo, isDone : !todo.isDone} : todo
          // id가 같으면 todo의 isDone만 반대로 넣음
        )
      break;
    }
    case 'DELETE': {
      result = todos.filter((todo) => todo.id !== action.targetId)  // id가 같지 않은 것만 보내줌
      break;
    }
    default: result = todos;
  }
  // localStorage에 저장
  // 객체의 배열을 json으로 바꾸어서 저장
  localStorage.setItem('todos', JSON.stringify(result));
  return result;
} 

function App() {
  const stored = localStorage.getItem('todos');
  const initTodos:Todo[] = stored ? JSON.parse(stored) : [];
  const initId = Number(localStorage.getItem('todoId') ?? 1);

  const [todos, dispatch] = useReducer(reducer, initTodos)
  const idRef = useRef(initId);  // 보여지는 값이 아니기 때문에 useRef 사용

  // 추가
  // todoEditor에서 사용
  const onCreate = useCallback((content: string) => {
    const newItem = {
      id: idRef.current,
      content,  // content: content (변수 상수가 같을 때 하나만 써도 됨)
      isDone: false,
      createDate: new Date().getTime(),
    }
    idRef.current += 1;
    localStorage.setItem('todoId', JSON.stringify(idRef.current));
    dispatch({type: 'CREATE', newItem});
  }, []);

  // 수정
  // id를 넘겨받아서 비교
  // todoList > todoItem에서 사용
  // useCallback 사용(onCreate했을 때 추가된 것만 업데이트)
  const onUpdate = useCallback((targetId: number) => {
    dispatch({type: 'UPDATE', targetId});
  }, []);

  // 삭제
  // id를 넘겨받아서 비교
  // todoList > todoItem에서 사용
  // useCallback 사용(onCreate했을 때 추가된 것만 업데이트)
  const onDelete = useCallback((targetId: number) => {
    dispatch({type: 'DELETE', targetId});
  }, []);


  // Context로 내려줄 함수 묶음을 메모이제이션한 객체
  // onCreate, onUpdate, onDelete를 하나의 객체로 묶고, 불필요하게 새 객체가 생성되지 않도록 useMemo로 캐싱하는 역할
  const dispatches = useMemo(
    // {onCreate, onUpdate, onDelete})
    () => ({onCreate, onUpdate, onDelete})
    , [onCreate, onUpdate, onDelete]
  );

  return (
    <div className='app'>
      <Header />
      <TodoStateContext.Provider value={{todos}}>
        <TodoDispatchContext.Provider value={dispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
        
    </div>
  )
}

export default App
