import { useState } from 'react'

export default function StateForm() {
  // 폼으로 취급하는 값을 State로 선언
  const [form, setForm] = useState({name: '홍길동', age: 18})

  // 폼 요소의 변경 사항을 State에 반영
  const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,  
      // e.target.name을 기준으로 key로 사용
      // []는 “변수를 key로 쓰기 위한 문법”
    });
  }

  // [보내기] 버튼으로 로그에 메시지 출력하기
  const show = () => {
    console.log(`안녕하새요!! ${form.name} (${form.age}세) 님!!`);
  }

  console.log('rerendering...')

  return (
    <div>
      <h2>StateForm</h2>
      <form>
        <div>
          <label htmlFor="name">이름: </label>
          <input id='name' name="name" type="text" onChange={handleForm} value={form.name} />
        </div>
        <div>
          <label htmlFor="age">나이: </label>
          <input id='age' name="age" type="text" onChange={handleForm} value={form.age} />
        </div>
        <div>
          <button type='button' onClick={show}>보내기</button>
        </div>
        <p>안녕하세요, {form.name} ({form.age})세 님!</p>
      </form>
    </div>
  )
}
