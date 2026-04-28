import { useEffect, useState } from 'react'

export default function CleanUpEvent() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const handleClick = () => {
      setCount((c) => c + 1);
    }
    window.addEventListener('click', handleClick);

    // cleanup
    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <div>
      <h2>CleanUpEvent</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
