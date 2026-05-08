import { useSelector } from "react-redux"
import type { RootState } from './store';

export default function Name() {
  const name = useSelector((state: RootState) => state.user.name);

  return (
    <p>{name}</p>
  )
}
