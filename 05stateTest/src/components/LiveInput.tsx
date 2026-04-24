import React, { useState, type ChangeEvent } from 'react'

export default function LiveInput() {
  const [text, setText] = useState<string>('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <h2>실시간 입력 보기</h2>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder='내용을 입력하시오'
      />
      <p>입력한 내용: <strong>{text}</strong></p>
    </div>
  )
}



