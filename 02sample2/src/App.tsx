// import './App.css'
import Hello from './component/Hello'
import Fruits from './component/Fruits'
import Welcome from './component/Welcome'
import SayHello from './component/SayHello'
import Library from './component/Library'
import EventBasic from './component/EventBasic'


function App() {

  return (
    <>
      <Hello />
      <Hello />
      <Fruits />
      <Welcome name='손흥민' />
      <Welcome name='BTS' />
      <SayHello myName='오이영' to='React' />
      <Library />
      <EventBasic type='date' />
      <EventBasic type='time' />
      <EventBasic type='all' />
    </>
  )
}

export default App
