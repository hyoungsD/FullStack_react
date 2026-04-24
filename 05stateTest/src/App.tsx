import Counter from './components/Counter';
import SetCounter from './components/SetCounter';
import ClassCounter from './components/ClassCounter';
import LiveInput from './components/LiveInput';
import StateParent from './components/StateParent';
import StateCounterParent from './components/StateCounterParent';

import './App.css'

function App() {

  return (
    <>
      <Counter init={0} />
      <SetCounter init={1} />
      <ClassCounter init={0} />
      <LiveInput />
      <StateParent />
      <StateCounterParent />
    </>
  )
}

export default App
