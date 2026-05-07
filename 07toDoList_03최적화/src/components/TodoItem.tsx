import React, { useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import {type Todo} from '../App'
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({todo}: TodoItemProps) {
  console.log(`${todo.id} TodoItem 업데이트!!`);

  const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  // 체크박스 isDone 수정
  const onChangeCheckbox = () => {
    onUpdate(todo.id);
  }

  // 삭제
  const onClickDelete = () => {
    onDelete(todo.id);
  }

  return (
    <div className='todoitem'>
      <div className='checkbox_col'>
        <input 
          type="checkbox" 
          checked={todo.isDone} 
          onChange={onChangeCheckbox}
        />
      </div>
      <div className='title_col'>{todo.content}</div>
      <div className='date_col'>{new Date(todo.createDate).toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

export default React.memo(TodoItem)
// onUpdate, onDelete에 영향을 받으므로 App.tsx에서 useCallback 사용하기