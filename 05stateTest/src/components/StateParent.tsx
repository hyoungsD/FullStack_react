
import React, { useState } from 'react'
import StateChild1 from './StateChild1'
import StateChild2 from './StateChild2'

export default function StateParent() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  }

  return (
    <div>
      <h2>State 올리기</h2>
      {/* 이제 Child1과 Child2는 정의된 타입에 맞는 Props를 전달받게 됩니다 */}
      <StateChild1 onInputChange={handleInputChange} />
      <StateChild2 value={inputValue} />
    </div>
  )
}

