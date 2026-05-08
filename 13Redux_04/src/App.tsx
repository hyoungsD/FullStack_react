import { Provider } from 'react-redux'
import { store } from './store'
import Name from './Name'
import Number from './Number'
import CounterButton from './CounterButton'
import NameButton from './NameButton'

import './App.css'

function App() {
  return (
    <>
    <Provider store={store}>
      <div className='box'>
        <Number />
        <CounterButton />
      </div>
      <div className='box'>
        <Name />
        <NameButton />
      </div>
    </Provider>
    </>
  )
}

export default App
