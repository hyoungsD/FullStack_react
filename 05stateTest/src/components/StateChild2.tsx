
import React from 'react'

interface Child2Props {
  value: string;
}

export default function StateChild2({value}: Child2Props) {
  return (
    <p>입력된 값: <strong>{value}</strong></p>
  )
}

