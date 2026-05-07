import {useContext, useMemo, useState} from 'react';
import { TodoStateContext } from '../context/TodoContext';
import TodoItem from './TodoItem'
import './TodoList.css'



function TodoList() {
  const {todos} = useContext(TodoStateContext);

  const [search, setSearch] = useState<string>('');

  // 검색어 입력 onChange
  const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  // 검색어 filter
  const getSearchResult = () => {
    // search가 비어있으면 그대로 반환
    // search에 글자가 있으면 todo의 content에 'search'의 글자가 들어있는 것만 반환
    // 대소문자를 가리기 때문에 toLowerCase()를 이용하여 모두 소문자로 바꾼 후 필터링
    return search === '' ? todos : todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  }


  // Todo 갯수 확인 
  // todos가 바뀔때만 호출되어야하기 때문에 useMemo
  // useMemo가 없으면 검색어 입력할 때도 호출
  const analyzeTodo = useMemo(() => {
    console.log('-- analyzeTodo 호출 --');
    const totalCount = todos.length;  // 전체 건수
    const doneCount = todos.filter((todo) => todo.isDone).length; // 완료된 건수
    const notDoneCount = totalCount - doneCount;  // 미완료 건수
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;  // useMemo는 함수가 아니니까 analyzeTodo() 하면 안됨


  return (
    <div className='todolist'>
      <h4>Todo List</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할일: {doneCount}</div>
        <div>아직 완료하지 못한 할일: {notDoneCount}</div>
      </div>
      <input 
        type="text" 
        className='searchbar' 
        placeholder='검색어를 입력하세요' 
        onChange={onChangeSearch}
      />
      <div>
        {/* {todos.map((todo) => ( */}
        {getSearchResult().map((todo) => (  // 검색 결과만 보여줘야하기 때문에 getSearchResult의 배열로 
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList