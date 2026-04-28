
type GreetingProps = {
  isLogined : boolean;
}

function UserGreeting() {
  return <h1>다시 오셨군요!</h1>
}

function GuestGreeting() {
  return <h1>회원가입을 해주세요.</h1>
}

function Greeting({isLogined}: GreetingProps) {
  return isLogined ? <UserGreeting/> : <GuestGreeting />
}

export default Greeting;