
// useReducer
// - 복잡한 상태 업데이트 로직을 효율적이고 종합적으로 관리
// - 상태와 변경 로직을 분리해서 관리하는 훅
// - dispatch로 액션을 보내고 reducer가 새로운 state를 반환
// - 복잡한 상태나 조건이 많을 때 useState보다 유리


// 컴포넌트 내부의 복잡한 상태를 관리할 수 있게 만들어줌
// ** Redux: 전역 / 여러개의 컴포넌트의 상태를 관리할 수 있는 훅

import { useReducer } from 'react'

type Action = 'INC' | 'DEC';
// type Action = { type: 'INC' } | { type: 'DEC' }

// 상태를 바꿔주는 함수
function countReducer(current: number, action: Action): number{
  // current는 그대로 전달, action은 무엇인지에 따라서 다르게 전달
  // 반환값은 count로 전달
  if(action === 'INC'){
    return current + 1;
  }else if(action === 'DEC'){
    return current - 1;
  }
  return current;
}

// counter
export default function ExUseReducerCount() {
  const [count, dispatch] = useReducer(countReducer, 0)
  // countReducer : 위에 만들어 둔 함수
  // counterReducer가 dispatch로 전달 (dispatch는 정하기 나름이지만 일반적으로 dispatch로 적는다)
  // 0 : 초기값

  function increse(): void{
    dispatch('INC');
  }
  function decrease(): void{
    dispatch('DEC');
  }


  return (
    <div>
      <h2>ExUseReducerCount</h2>
      <div>
        <input type="button" value="-" onClick={decrease} />
        <input type="button" value="+" onClick={increse} />
        <span>{count}</span>
      </div>
    </div>
  )
}


