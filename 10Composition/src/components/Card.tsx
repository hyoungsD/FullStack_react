
import { type ReactNode } from "react"

type CardProps = {
  children: ReactNode;
}

export default function Card({children}: CardProps) {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#f9f9f9'
  }

  return (
    <div style={cardStyle}>{children}</div>
  )
}

