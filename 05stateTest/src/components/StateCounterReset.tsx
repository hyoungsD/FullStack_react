import React, { type MouseEvent } from 'react'

interface ResetProps {
  onReset: () => void;
}

export default function StateCounterReset({onReset}: ResetProps) {
  const handleClickReset = (event: MouseEvent<HTMLButtonElement>) => onReset();

  return (
    <button onClick={onReset} >Reset하기</button>
  )
}
