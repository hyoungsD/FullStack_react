
import { useDispatch } from 'react-redux';
import { increase, decrease } from "./counterSlice"

export default function CounterButton() {
  const dispatch = useDispatch();
  
  return (
    <div>      
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  )
}
