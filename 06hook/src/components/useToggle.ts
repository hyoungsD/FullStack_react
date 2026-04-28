
// Custom Hook
// 여러 곳에서 쓰려고 기능을 따로 빼서 만든 함수(반복되는 코드를 묶어서 재사용하는 것)

import { useState } from "react"

export default function useToggle(initial: boolean = false) {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = () => {
    setValue((prev) => !prev);
  }

  return { value, toggle }
}
