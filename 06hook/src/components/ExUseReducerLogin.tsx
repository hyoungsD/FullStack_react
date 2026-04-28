
import React, { useReducer } from 'react'

type State = {
  email: string;
  password: string;
}
type Action = 
  | {type: 'CHANGE_EMAIL'; value: string} // 첫 줄의 '|'는 없어도 되지만 보기 편하게 붙여도 된다
  | {type: 'CHANGE_PASSWORD'; value: string}
  | {type: 'RESET'};


function reducer(state: State, action: Action): State{
  switch(action.type){
    case 'CHANGE_EMAIL':
      return {...state, email: action.value};
    case 'CHANGE_PASSWORD':
      return {...state, password: action.value};
    case 'RESET':
      return {email: '', password: ''}
    default: return state;
  }
}


export default function ExUseReducerLogin() {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: ''
  })

  return (
    <div>
      <h2>ExUseReducerLogin</h2>
      <div>
        <input 
          placeholder="email"
          value={state.email}
          onChange={(e) => dispatch({type: 'CHANGE_EMAIL', value: e.target.value})}
        />
        <input 
          placeholder="password"
          value={state.password}
          onChange={(e) => dispatch({type: 'CHANGE_PASSWORD', value: e.target.value})}
        />
        <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        <p>email: {state.email}</p>
        <p>password: {state.password}</p>
      </div>
    </div>
  )
}



