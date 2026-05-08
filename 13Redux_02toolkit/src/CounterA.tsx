import { useDispatch } from "react-redux"
import { increase } from "./store"

export default function CounterA() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increase())}><h1>+</h1></button>
    </>
  )
}
