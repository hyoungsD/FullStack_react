import { useState } from "react";


export default function ControlledForm() {

  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div>
      <h2>제어 컴포넌트</h2>
      <div>
        <input value={value} onChange={handleChange} />
        <button onClick={handleSubmit}>전송</button>
      </div>
    </div>
  )
}

