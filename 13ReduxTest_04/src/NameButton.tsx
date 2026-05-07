
import { useDispatch } from 'react-redux';
import { changeName } from "./userSlice"
import type { AppDispatch } from './store';

export default function NameButton() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>      
      <button onClick={() => dispatch(changeName('홍길동'))}>이름변경(홍길동)</button>
      <button onClick={() => dispatch(changeName('차은우'))}>이름변경(차은우)</button>
    </div>
  )
}
