import { useDispatch } from "react-redux"
import { decrease } from "./store"

export default function CounterB() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrease())}><h1>-</h1></button>
    </>
  )
}
