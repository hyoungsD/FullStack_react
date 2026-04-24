import React from 'react'

interface CountProps {
  step: number;
  onUpdate : (val: number) => void;
}

export default function StateCounterChild({step, onUpdate}: CountProps) {
  const handleClick = () => {
    onUpdate(step)
  }

  return (
    <button onClick={handleClick}>{step}</button>
  )
}
