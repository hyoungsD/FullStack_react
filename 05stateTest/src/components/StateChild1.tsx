import React, { type ChangeEvent } from 'react';

interface Child1Props {
  onInputChange: (value: string) => void;
}


export default function StateChild1({ onInputChange }: Child1Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  }

  return (
    <>
      <input type='text' onChange={handleChange} />
    </>
  )
}


