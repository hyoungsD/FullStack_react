import useToggle from "./useToggle";

// Custom Hook 사용하기

export default function CustomHook() {
  const { value, toggle } = useToggle();

  return (
    <div>
      <h2>CustomHook</h2>
      <div>
        <p>{value ? 'ON' : 'OFF'}</p>
        <button onClick={toggle}>toggle</button>
      </div>
    </div>
  )
}
