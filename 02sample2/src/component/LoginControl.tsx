import { useState } from 'react'
import Greeting from './Greeting'

type ButtonProps = {
  onClick : () => void;
}

function LoginButton({onClick}: ButtonProps){
  return <button onClick={onClick}>로그인</button>
}

function LogoutButton({onClick}: ButtonProps){
  return <button onClick={onClick}>로그아웃</button>
}

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLoginClick = () => {
      setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // 하나의 함수로 만들어보기!
  // const handleLoginoutClick = () => {
  //   setIsLoggedIn(!isLoggedIn)
  // }

  return (
    <div>
      <Greeting isLogined={isLoggedIn} />
      {isLoggedIn ? (
          <LogoutButton onClick={handleLogoutClick} />
        ):(
          <LoginButton onClick={handleLoginClick}/>
        )
      }
    </div>
  )
}
