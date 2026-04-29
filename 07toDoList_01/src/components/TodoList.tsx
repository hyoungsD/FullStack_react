import {useState} from 'react';
import TodoItem from './TodoItem'
import './TodoList.css'
import {type Todo} from '../App'

interface TodoListProps {
  todos : Todo[];
  onUpdate: (targetId:number) => void;
  onDelete: (targetId:number) => void;
}

function TodoList({todos, onUpdate, onDelete}:TodoListProps) {
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


  return (
    <div className='todolist'>
      <h4>Todo List</h4>
      <input 
        type="text" 
        className='searchbar' 
        placeholder='검색어를 입력하세요' 
        onChange={onChangeSearch}
      />
      <div>
        {/* {todos.map((todo) => ( */}
        {getSearchResult().map((todo) => (  // 검색 결과만 보여줘야하기 때문에 getSearchResult의 배열로 
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default TodoList