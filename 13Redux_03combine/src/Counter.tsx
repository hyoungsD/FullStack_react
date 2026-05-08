import { useDispatch, useSelector } from "react-redux"
import { increase, decrease } from "./counterslice"
import { changeName } from "./userslice";
import type { RootState, AppDispatch } from './store';

export default function CounterA() {
  const count = useSelector((state: RootState) => state.counter.value);
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(changeName('홍길동'))}>이름변경</button>
      <button onClick={() => dispatch(changeName('차은우'))}>이름변경</button>
    </>
  )
}
