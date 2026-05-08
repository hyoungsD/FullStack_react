import { useSelector } from "react-redux"
import type { RootState } from './store';

export default function Number() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <p>{count}</p>
  )
}
