import { useDispatch } from "react-redux"
import { increse } from "./actions"

export default function CounterA() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increse())}><h1>+</h1></button>
    </div>
  )
}
