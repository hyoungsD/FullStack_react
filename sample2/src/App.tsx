// import './App.css'
import Hello from './component/Hello'
import Fruits from './component/Fruits'
import Welcome from './component/Welcome'
import SayHello from './component/SayHello'
import Library from './component/Library'

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
    </>
  )
}

export default App
